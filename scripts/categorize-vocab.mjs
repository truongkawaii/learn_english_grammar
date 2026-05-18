#!/usr/bin/env node
// Classify each vocab entry into 1 of 15 TOEIC themes via Gemini,
// in batches of ~80 words per call.
//
// Inputs:   src/data/vocab/entries.json
// Outputs:  src/data/vocab/themes.json
//
// Usage:    node scripts/categorize-vocab.mjs [--force]

import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const ENTRIES = join(ROOT, "src/data/vocab/entries.json");
const OUT = join(ROOT, "src/data/vocab/themes.json");

const envContent = await readFile(join(ROOT, ".env"), "utf8");
const env = Object.fromEntries(
  envContent
    .split("\n")
    .map((l) => l.match(/^([A-Z_][A-Z0-9_]*)\s*=\s*(.*?)\s*$/))
    .filter(Boolean)
    .map((m) => [m[1], m[2].replace(/^["']|["']$/g, "")]),
);
const apiKey = env.VITE_GEMINI_API_KEY;
const modelName = env.VITE_GEMINI_MODEL || "gemini-2.5-flash";
if (!apiKey) {
  console.error("ERROR: VITE_GEMINI_API_KEY missing in .env");
  process.exit(1);
}

const force = process.argv.includes("--force");

// ----- 15 TOEIC themes -----
export const THEMES = [
  { id: "business",       label: "Business & Management",   emoji: "🏢" },
  { id: "office",         label: "Office & Documents",      emoji: "📄" },
  { id: "communication",  label: "Communication",           emoji: "📣" },
  { id: "marketing",      label: "Marketing & Sales",       emoji: "📈" },
  { id: "finance",        label: "Finance & Banking",       emoji: "💰" },
  { id: "hr",             label: "HR & Personnel",          emoji: "👥" },
  { id: "travel",         label: "Travel & Transport",      emoji: "✈️" },
  { id: "hotel",          label: "Hotel & Accommodation",   emoji: "🏨" },
  { id: "restaurant",     label: "Restaurant & Dining",     emoji: "🍽️" },
  { id: "shopping",       label: "Shopping & Retail",       emoji: "🛍️" },
  { id: "health",         label: "Health & Medicine",       emoji: "🏥" },
  { id: "tech",           label: "Technology & IT",         emoji: "💻" },
  { id: "education",      label: "Education & Training",    emoji: "🎓" },
  { id: "manufacturing",  label: "Manufacturing & Industry", emoji: "🏭" },
  { id: "daily",          label: "Daily Life",              emoji: "🏠" },
];

const THEME_IDS = THEMES.map((t) => t.id);

const buildPrompt = (batch) => {
  const list = batch
    .map((e, i) => `${i + 1}. ${e.word} (${e.pos}) — ${e.vi}`)
    .join("\n");
  return `Bạn là chuyên gia TOEIC. Phân loại MỖI từ vựng dưới đây vào ĐÚNG 1 trong 15 chủ đề TOEIC sau, đồng thời đánh nhãn TẦN SUẤT xuất hiện trong TOEIC:

CHỦ ĐỀ:
${THEMES.map((t) => `- ${t.id}: ${t.label}`).join("\n")}

TẦN SUẤT:
- "high": từ rất phổ biến trong TOEIC Part 5/7
- "medium": gặp định kỳ
- "low": ít gặp / chuyên ngành hẹp

NGUYÊN TẮC:
- Nếu một từ có thể fit nhiều theme, chọn theme PHỔ BIẾN NHẤT khi từ này xuất hiện trong TOEIC.
- Tên người, tên riêng đặt vào "daily".
- Từ về cảm xúc / mô tả chung đặt vào "daily" (vd "happy", "important").
- Từ chuyên ngành y khoa → "health"; chuyên ngành tài chính → "finance"; v.v.

ĐỊNH DẠNG TRẢ VỀ: **CHỈ MỘT JSON ARRAY** đúng ${batch.length} items, theo đúng thứ tự, không markdown. Mỗi item:
{ "themeId": "business", "frequency": "high" }

Themes ID hợp lệ: ${THEME_IDS.map((id) => `"${id}"`).join(", ")}.
Frequency hợp lệ: "high" | "medium" | "low".

CÁC TỪ:
${list}`;
};

const extractJsonArray = (text) => {
  const cleaned = text.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/i, "");
  const start = cleaned.indexOf("[");
  if (start < 0) return null;
  let depth = 0;
  for (let i = start; i < cleaned.length; i++) {
    if (cleaned[i] === "[") depth++;
    else if (cleaned[i] === "]") {
      depth--;
      if (depth === 0) return cleaned.slice(start, i + 1);
    }
  }
  return null;
};

const isValidAssignment = (a) =>
  a &&
  typeof a === "object" &&
  THEME_IDS.includes(a.themeId) &&
  ["high", "medium", "low"].includes(a.frequency);

const callGemini = async (prompt) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 8192,
        responseMimeType: "application/json",
      },
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`HTTP ${res.status}: ${err.slice(0, 300)}`);
  }
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
};

const main = async () => {
  const entries = JSON.parse(await readFile(ENTRIES, "utf8"));
  console.log(`Total entries: ${entries.length}. Model: ${modelName}.`);

  // Load existing assignments to support resume after rate-limit failures.
  let existing = {};
  if (existsSync(OUT)) {
    try {
      const data = JSON.parse(await readFile(OUT, "utf8"));
      if (data?.assignments) existing = data.assignments;
    } catch {
      /* ignore */
    }
  }
  const skipFlag = process.argv.includes("--skip-existing") || (existsSync(OUT) && !force);
  if (skipFlag) {
    console.log(`Resume mode: ${Object.keys(existing).length} already assigned, will only process missing.`);
  }

  const BATCH = 80;
  const assignments = { ...existing };
  let okCount = 0;
  let failCount = 0;
  // Filter to entries that still need categorization (when resuming).
  // Entries marked with autoFallback are considered NOT properly categorized.
  const toProcess = skipFlag
    ? entries.filter((e) => !existing[e.id] || existing[e.id].autoFallback)
    : entries;
  if (skipFlag && toProcess.length === 0) {
    console.log("Nothing to do.");
    return;
  }
  if (skipFlag) {
    console.log(`Processing ${toProcess.length} remaining entries.`);
  }

  for (let i = 0; i < toProcess.length; i += BATCH) {
    const batch = toProcess.slice(i, i + BATCH);
    process.stdout.write(`BATCH ${i + 1}-${i + batch.length}... `);
    const t0 = Date.now();
    try {
      let arr = null;
      for (let attempt = 1; attempt <= 2; attempt++) {
        try {
          const raw = await callGemini(buildPrompt(batch));
          const jsonStr = extractJsonArray(raw);
          if (!jsonStr) throw new Error("no JSON array");
          const parsed = JSON.parse(jsonStr);
          if (!Array.isArray(parsed)) throw new Error("not array");
          if (parsed.length !== batch.length) {
            throw new Error(`expected ${batch.length} items, got ${parsed.length}`);
          }
          // Coerce invalid items into "daily"/"medium" to avoid retry storms
          const valid = parsed.map((a, j) => {
            if (isValidAssignment(a)) return a;
            console.warn(`  invalid item ${j}: ${JSON.stringify(a)} → falling back to daily/medium`);
            return { themeId: "daily", frequency: "medium" };
          });
          arr = valid;
          break;
        } catch (e) {
          arr = null;
          if (attempt === 2) throw e;
          process.stdout.write(`retry... `);
        }
      }
      batch.forEach((e, j) => {
        assignments[e.id] = arr[j];
      });
      const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
      console.log(`✓ ${elapsed}s`);
      okCount++;
    } catch (e) {
      console.log(`✗ ${e.message}`);
      failCount++;
      // Do NOT fallback — leaving missing assignments lets resume mode retry them.
    }
    await new Promise((r) => setTimeout(r, 300));
  }

  // Build counts per theme
  const counts = {};
  for (const id of THEME_IDS) counts[id] = 0;
  for (const a of Object.values(assignments)) counts[a.themeId]++;

  const output = {
    version: 1,
    generatedAt: new Date().toISOString(),
    themes: THEMES,
    counts,
    assignments,
  };
  await writeFile(OUT, JSON.stringify(output, null, 2));
  console.log(`\nWrote ${OUT}.`);
  console.log(`Batches: ${okCount} ok / ${failCount} failed.`);
  console.log(`Theme distribution:`, counts);
};

main().catch((e) => {
  console.error("Fatal:", e);
  process.exit(1);
});
