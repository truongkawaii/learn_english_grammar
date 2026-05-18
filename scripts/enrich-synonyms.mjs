#!/usr/bin/env node
// Enrich each vocab entry with synonyms/antonyms/word-family via Gemini,
// in batches of ~50 words per call.
//
// Inputs:   src/data/vocab/entries.json
// Outputs:  src/data/vocab/synonyms.json
//
// Usage:    node scripts/enrich-synonyms.mjs [--force] [--skip-existing]

import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const ENTRIES = join(ROOT, "src/data/vocab/entries.json");
const OUT = join(ROOT, "src/data/vocab/synonyms.json");

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
const BATCH = 50;

const buildPrompt = (batch) => {
  const list = batch
    .map((e, i) => `${i + 1}. ${e.word} (${e.pos}) — ${e.vi}`)
    .join("\n");
  return `Bạn là chuyên gia từ vựng TOEIC. Với MỖI từ dưới đây, cung cấp:
- "synonyms": 2–4 từ ĐỒNG NGHĨA phổ biến trong tiếng Anh hiện đại (cùng word-form/POS với từ gốc).
- "antonyms": 0–2 từ TRÁI NGHĨA (để [] nếu không có).
- "family": 2–4 từ cùng họ (word family), ví dụ "achieve" → ["achievement", "achievable", "achiever"]. Chỉ liệt kê biến thể có thật, đa dạng POS.

NGUYÊN TẮC:
- Mọi từ trong synonyms/antonyms/family phải là TIẾNG ANH thật, viết thường, không có dấu câu.
- Synonyms phải dùng được THAY THẾ trong câu TOEIC. Tránh đồng nghĩa quá lệ thuộc ngữ cảnh.
- Nếu từ gốc là phrasal verb hoặc thành ngữ → vẫn cố tìm 1-2 synonyms phổ biến.

ĐỊNH DẠNG TRẢ VỀ: **CHỈ MỘT JSON ARRAY** đúng ${batch.length} items, theo đúng thứ tự, không markdown. Mỗi item:
{ "synonyms": ["..."], "antonyms": ["..."], "family": ["..."] }

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

const sanitizeList = (v) => {
  if (!Array.isArray(v)) return [];
  return v
    .filter((x) => typeof x === "string")
    .map((x) => x.trim().toLowerCase())
    .filter((x) => x.length > 0 && /^[a-z][a-z\s'-]*$/i.test(x));
};

const isValidItem = (a) =>
  a && typeof a === "object" &&
  (Array.isArray(a.synonyms) || Array.isArray(a.antonyms) || Array.isArray(a.family));

const callGemini = async (prompt) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.3,
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
  console.log(`Total entries: ${entries.length}. Model: ${modelName}. Batch: ${BATCH}.`);

  let existing = {};
  if (existsSync(OUT)) {
    try {
      const data = JSON.parse(await readFile(OUT, "utf8"));
      if (data?.entries) existing = data.entries;
    } catch {
      /* ignore */
    }
  }
  const skipFlag = process.argv.includes("--skip-existing") || (existsSync(OUT) && !force);
  if (skipFlag) {
    console.log(`Resume mode: ${Object.keys(existing).length} already enriched, processing missing only.`);
  }

  const out = { ...existing };
  let okCount = 0;
  let failCount = 0;

  const toProcess = skipFlag
    ? entries.filter((e) => !existing[e.id])
    : entries;
  if (skipFlag && toProcess.length === 0) {
    console.log("Nothing to do.");
    return;
  }
  if (skipFlag) console.log(`Processing ${toProcess.length} remaining entries.`);

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
          const valid = parsed.map((a, j) => {
            if (!isValidItem(a)) {
              console.warn(`  invalid item ${j}: ${JSON.stringify(a)} → empty fallback`);
              return { synonyms: [], antonyms: [], family: [] };
            }
            return {
              synonyms: sanitizeList(a.synonyms),
              antonyms: sanitizeList(a.antonyms),
              family: sanitizeList(a.family),
            };
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
        out[e.id] = arr[j];
      });
      const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
      console.log(`✓ ${elapsed}s`);
      okCount++;
    } catch (e) {
      console.log(`✗ ${e.message}`);
      failCount++;
    }
    await new Promise((r) => setTimeout(r, 300));
  }

  const output = {
    version: 1,
    generatedAt: new Date().toISOString(),
    total: Object.keys(out).length,
    entries: out,
  };
  await writeFile(OUT, JSON.stringify(output, null, 2));
  console.log(`\nWrote ${OUT}.`);
  console.log(`Batches: ${okCount} ok / ${failCount} failed.`);
  console.log(`Enriched: ${Object.keys(out).length}/${entries.length}.`);
};

main().catch((e) => {
  console.error("Fatal:", e);
  process.exit(1);
});
