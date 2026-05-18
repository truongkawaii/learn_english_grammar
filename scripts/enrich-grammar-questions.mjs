#!/usr/bin/env node
// Add `sentenceVi` + `vocabNotes` to every question in src/data/questions/<TopicId>.ts.
// One Gemini call per topic file (batches all questions in that file).
//
// Usage:  node scripts/enrich-grammar-questions.mjs [--force] [topicId,topicId,...]

import { readFile, writeFile, readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const QDIR = join(ROOT, "src/data/questions");

const envContent = await readFile(join(ROOT, ".env"), "utf8");
const env = Object.fromEntries(
  envContent
    .split("\n")
    .map((l) => l.match(/^([A-Z_][A-Z0-9_]*)\s*=\s*(.*?)\s*$/))
    .filter(Boolean)
    .map((m) => [m[1], m[2].replace(/^["']|["']$/g, "")]),
);
const apiKey = env.VITE_GEMINI_API_KEY;
const modelName = env.VITE_GEMINI_MODEL || "gemini-1.5-pro";
if (!apiKey) {
  console.error("ERROR: VITE_GEMINI_API_KEY missing in .env");
  process.exit(1);
}

const args = process.argv.slice(2);
const force = args.includes("--force");
const filterArg = args.find((a) => !a.startsWith("--"));
const TOPIC_FILTER = filterArg ? new Set(filterArg.split(",").map((s) => s.trim())) : null;

// ----------------------------------------------------------------------------
// File I/O — parse TS via `new Function`, rewrite as JSON-formatted TS
// ----------------------------------------------------------------------------

const parseQuestions = (content) => {
  // Match "Question[] = [ ... ];" allowing whitespace
  const m = content.match(/Question\[\]\s*=\s*(\[[\s\S]*?\])\s*;\s*$/m);
  if (!m) throw new Error("cannot locate questions array");
  // Both JSON and TS object-literal syntax are valid JS expressions.
  // We control the file content, so `new Function` is safe.
  // eslint-disable-next-line no-new-func
  return new Function(`return ${m[1]};`)();
};

const serialize = (topicId, questions) => {
  const body = questions
    .map((q) => "  " + JSON.stringify(q, null, 2).split("\n").join("\n  "))
    .join(",\n");
  return `import type { Question } from "@/types";

// Topic ${topicId} — questions (auto-enriched with sentenceVi + vocabNotes).
// Re-enrich with: node scripts/enrich-grammar-questions.mjs ${topicId} --force
export const questions: Question[] = [
${body}
];
`;
};

// ----------------------------------------------------------------------------
// Completed English sentence (answer plugged in)
// ----------------------------------------------------------------------------

const buildCompletedSentence = (q) => {
  if (q.type === "mcq") {
    return q.sentence.replace(/_+/g, q.options?.[q.answerIndex] ?? "");
  }
  if (q.type === "fill") {
    return q.sentence.replace(/_+/g, q.acceptedAnswers?.[0] ?? "");
  }
  if (q.type === "wordOrder") {
    return q.answer ?? "";
  }
  return q.sentence ?? q.prompt ?? "";
};

// ----------------------------------------------------------------------------
// Prompt builder + Gemini call
// ----------------------------------------------------------------------------

const buildPrompt = (topicId, items) => {
  const lines = items
    .map(
      (q, i) =>
        `${i + 1}. [${q.type}] ${buildCompletedSentence(q)}`,
    )
    .join("\n");
  return `Bạn là trợ giảng TOEIC tiếng Anh người Việt. Cho danh sách ${items.length} câu hỏi tiếng Anh từ chủ đề ngữ pháp "${topicId}" dưới đây. Với MỖI câu, hãy bổ sung 2 thông tin:

1. "sentenceVi": dịch sang tiếng Việt câu hoàn chỉnh, TỰ NHIÊN, ngắn gọn, đúng nghĩa.
2. "vocabNotes": mảng các từ vựng đáng chú ý trong câu mà người học TOEIC trình độ trung cấp cần để ý / có thể chưa biết (**3–7 từ mỗi câu**). Mỗi item:
   - "word": dạng từ ĐÚNG NHƯ TRONG CÂU (vd "reviews", "is interested in", "weather"). Có thể là từ đơn hoặc cụm từ ngắn.
   - "pos": loại từ tiếng Việt, dùng đúng 1 trong các nhãn: **"động từ"**, **"danh từ"**, **"tính từ"**, **"trạng từ"**, **"giới từ"**, **"liên từ"**, **"đại từ"**, **"cụm từ"** (collocation/cụm động từ/cụm giới từ), **"thành ngữ"**.
   - "vi": nghĩa tiếng Việt 1–4 từ.

QUY TẮC:
- BỎ QUA từ quá phổ thông: a, an, the, I, you, he, she, it, we, they, this, that, these, those, is, are, was, were, am, be, in, on, at, to, of, and, or, but, my, your, his, her.
- KHÔNG lặp lại 1 từ trong cùng 1 câu.
- Nếu là cụm động từ (vd "depends on", "look forward to"), gộp thành 1 entry với pos="cụm từ".
- Đáp ứng đúng SỐ LƯỢNG: trả về đúng ${items.length} items.

ĐỊNH DẠNG TRẢ VỀ: **CHỈ MỘT JSON ARRAY**, không markdown fence, theo đúng thứ tự câu trên.

Mỗi item:
{
  "sentenceVi": "...",
  "vocabNotes": [
    { "word": "...", "pos": "...", "vi": "..." },
    ...
  ]
}

CÁC CÂU (đã hoàn chỉnh, đã điền đáp án):

${lines}`;
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

const callGemini = async (prompt) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.4,
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

const isValidEnrichment = (e) =>
  e &&
  typeof e === "object" &&
  typeof e.sentenceVi === "string" &&
  e.sentenceVi.trim().length > 0 &&
  Array.isArray(e.vocabNotes) &&
  e.vocabNotes.length > 0 &&
  e.vocabNotes.every(
    (n) =>
      n &&
      typeof n.word === "string" &&
      typeof n.pos === "string" &&
      typeof n.vi === "string",
  );

// ----------------------------------------------------------------------------
// Main
// ----------------------------------------------------------------------------

const main = async () => {
  const files = (await readdir(QDIR))
    .filter((f) => /^[A-Z]\d+\.ts$/.test(f))
    .sort();
  const targets = files.filter(
    (f) => !TOPIC_FILTER || TOPIC_FILTER.has(f.replace(/\.ts$/, "")),
  );

  let okCount = 0;
  let failCount = 0;
  let totalEnriched = 0;
  console.log(`Target: ${targets.length} file(s). Force=${force}. Model=${modelName}.\n`);

  for (const filename of targets) {
    const topicId = filename.replace(/\.ts$/, "");
    const filePath = join(QDIR, filename);
    const content = await readFile(filePath, "utf8");
    let questions;
    try {
      questions = parseQuestions(content);
    } catch (e) {
      console.log(`✗ ${topicId}: parse error — ${e.message}`);
      failCount++;
      continue;
    }

    const needsEnrich = questions
      .map((q, idx) => ({ q, idx }))
      .filter(({ q }) => force || !q.sentenceVi || !q.vocabNotes || q.vocabNotes.length === 0);

    if (needsEnrich.length === 0) {
      console.log(`SKIP ${topicId} (already enriched, pass --force to redo)`);
      continue;
    }

    process.stdout.write(`ENRICH ${topicId.padEnd(3)} ${needsEnrich.length}/${questions.length} câu... `);
    const t0 = Date.now();

    const CHUNK = 10; // chunk large batches to keep response size manageable
    try {
      const items = needsEnrich.map(({ q }) => q);
      const allEnrichments = [];

      for (let start = 0; start < items.length; start += CHUNK) {
        const chunk = items.slice(start, start + CHUNK);
        const prompt = buildPrompt(topicId, chunk);
        let arr = null;
        for (let attempt = 1; attempt <= 2; attempt++) {
          try {
            const raw = await callGemini(prompt);
            const jsonStr = extractJsonArray(raw);
            if (!jsonStr) throw new Error("no JSON array in response");
            arr = JSON.parse(jsonStr);
            if (!Array.isArray(arr)) throw new Error("not array");
            if (arr.length !== chunk.length) {
              throw new Error(`expected ${chunk.length} items, got ${arr.length}`);
            }
            if (!arr.every(isValidEnrichment)) throw new Error("schema invalid");
            break;
          } catch (e) {
            arr = null;
            if (attempt === 2) throw e;
            process.stdout.write(`retry... `);
          }
        }
        allEnrichments.push(...arr);
        if (items.length > CHUNK) {
          await new Promise((r) => setTimeout(r, 250)); // brief gap between chunks
        }
      }

      // Merge enrichments into the original questions array
      needsEnrich.forEach(({ idx }, i) => {
        questions[idx] = {
          ...questions[idx],
          sentenceVi: allEnrichments[i].sentenceVi.trim(),
          vocabNotes: allEnrichments[i].vocabNotes.map((n) => ({
            word: String(n.word).trim(),
            pos: String(n.pos).trim(),
            vi: String(n.vi).trim(),
          })),
        };
      });

      await writeFile(filePath, serialize(topicId, questions));
      const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
      console.log(`✓ ${needsEnrich.length} enriched · ${elapsed}s`);
      okCount++;
      totalEnriched += needsEnrich.length;
    } catch (e) {
      console.log(`✗ ${e.message}`);
      failCount++;
    }
    await new Promise((r) => setTimeout(r, 400));
  }

  console.log(`\nDONE: ${okCount} topic ok / ${failCount} failed · ${totalEnriched} câu được enrich.`);
};

main().catch((e) => {
  console.error("Fatal:", e);
  process.exit(1);
});
