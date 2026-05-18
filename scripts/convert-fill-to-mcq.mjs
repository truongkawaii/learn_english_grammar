#!/usr/bin/env node
// Convert all existing "fill" questions across src/data/questions/*.ts into
// "mcq" questions by asking Gemini to produce 3 plausible distractors.
//
// Idempotent: only converts items where type === "fill".
//
// Usage:
//   node scripts/convert-fill-to-mcq.mjs                # all topics
//   node scripts/convert-fill-to-mcq.mjs --topics=A1,B6 # subset
//   node scripts/convert-fill-to-mcq.mjs --batch=8      # batch size

import { readFile, writeFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIR = join(ROOT, "src/data/questions");

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

const args = process.argv.slice(2);
const getArg = (n, d) => {
  const a = args.find((x) => x.startsWith(`--${n}=`));
  return a ? a.slice(n.length + 3) : d;
};
const BATCH = Number(getArg("batch", "8"));
const TOPIC_FILTER_RAW = getArg("topics", null);
const TOPIC_FILTER = TOPIC_FILTER_RAW
  ? new Set(TOPIC_FILTER_RAW.split(",").map((s) => s.trim()))
  : null;

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
        temperature: 0.7,
        maxOutputTokens: 4096,
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

const buildPrompt = (batch) => {
  const items = batch
    .map(
      (b, i) =>
        `${i + 1}. id="${b.id}"\n   sentence: ${b.sentence}\n   correct: ${b.correct}`,
    )
    .join("\n\n");
  return `Bạn là chuyên gia ngữ pháp TOEIC. Với MỖI item dưới đây (câu fill-in có ô trống "___" + đáp án đúng), hãy tạo **3 phương án nhiễu (distractor)** TIẾNG ANH hợp lý cho dạng MCQ.

NGUYÊN TẮC distractor:
- CÙNG họ từ loại với đáp án đúng (nếu đúng là động từ → distractor cũng động từ; nếu là giới từ → distractor cũng giới từ; v.v).
- KHÔNG được trùng đáp án đúng, không gần đồng nghĩa.
- ĐỦ hợp lý để học viên TOEIC dễ nhầm, KHÔNG vớ vẩn (vd "happy" đi với đáp án "go" — không liên quan).
- Ngắn gọn, KHÔNG có dấu câu thừa.

ĐỊNH DẠNG TRẢ VỀ: **CHỈ MỘT JSON ARRAY** đúng ${batch.length} items theo đúng thứ tự, không markdown fence.

Mỗi item:
{ "id": "<id>", "distractors": ["...", "...", "..."] }

CÁC ITEM:
${items}`;
};

const isValidConv = (c, expectedId) =>
  c &&
  typeof c === "object" &&
  c.id === expectedId &&
  Array.isArray(c.distractors) &&
  c.distractors.length === 3 &&
  c.distractors.every((d) => typeof d === "string" && d.trim().length > 0);

const loadQuestions = async (filePath) => {
  const src = await readFile(filePath, "utf8");
  const m = src.match(/Question\[\]\s*=\s*(\[[\s\S]*\])\s*;?\s*$/m);
  if (!m) return null;
  return { src, list: new Function("return " + m[1] + ";")() };
};

const serialize = (questions) => {
  const items = questions
    .map((q) => "  " + JSON.stringify(q, null, 2).split("\n").join("\n  "))
    .join(",\n");
  return `import type { Question } from "@/types";

// Topic ${questions[0]?.topicId ?? "?"} — question bank. Mix of hand-curated + auto-generated.
export const questions: Question[] = [
${items}
];
`;
};

const shuffleArr = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const main = async () => {
  const files = (await readdir(DIR)).filter((f) => /^[A-E]\d+\.ts$/.test(f));
  console.log(`Scanning ${files.length} topic files. Batch=${BATCH}. Model=${modelName}.\n`);

  let totalConverted = 0;
  let totalFailed = 0;

  for (const f of files) {
    const topicId = f.replace(".ts", "");
    if (TOPIC_FILTER && !TOPIC_FILTER.has(topicId)) continue;
    const path = join(DIR, f);
    const loaded = await loadQuestions(path);
    if (!loaded) continue;
    const fills = loaded.list.filter((q) => q.type === "fill");
    if (fills.length === 0) {
      console.log(`SKIP ${topicId} (no fill questions)`);
      continue;
    }

    console.log(`\n=== ${topicId}: ${fills.length} fill → mcq ===`);

    const distractorMap = new Map(); // id → distractors[]

    for (let i = 0; i < fills.length; i += BATCH) {
      const batch = fills.slice(i, i + BATCH).map((q) => ({
        id: q.id,
        sentence: q.sentence,
        correct: q.acceptedAnswers[0],
      }));
      process.stdout.write(`  BATCH ${i + 1}-${i + batch.length}/${fills.length}... `);
      const t0 = Date.now();
      try {
        let parsed = null;
        for (let attempt = 1; attempt <= 2; attempt++) {
          try {
            const raw = await callGemini(buildPrompt(batch));
            const jsonStr = extractJsonArray(raw);
            if (!jsonStr) throw new Error("no JSON array");
            const arr = JSON.parse(jsonStr);
            if (!Array.isArray(arr)) throw new Error("not array");
            parsed = arr;
            break;
          } catch (e) {
            if (attempt === 2) throw e;
            process.stdout.write(`retry... `);
          }
        }
        let okCount = 0;
        for (const item of batch) {
          const conv = parsed.find((p) => p?.id === item.id);
          if (isValidConv(conv, item.id)) {
            distractorMap.set(item.id, conv.distractors);
            okCount++;
          }
        }
        const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
        console.log(`✓ ${okCount}/${batch.length} · ${elapsed}s`);
      } catch (e) {
        console.log(`✗ ${e.message.slice(0, 150)}`);
        totalFailed += batch.length;
      }
      await new Promise((r) => setTimeout(r, 300));
    }

    // Apply conversions to file
    let converted = 0;
    const newList = loaded.list.map((q) => {
      if (q.type !== "fill") return q;
      const distractors = distractorMap.get(q.id);
      if (!distractors) return q; // leave as fill if conversion failed
      const correct = q.acceptedAnswers[0];
      const allOpts = [correct, ...distractors];
      // Shuffle and find new answer index
      const shuffled = shuffleArr(allOpts);
      const answerIndex = shuffled.indexOf(correct);
      converted++;
      const { acceptedAnswers, ...rest } = q;
      void acceptedAnswers;
      return {
        ...rest,
        type: "mcq",
        options: shuffled,
        answerIndex,
      };
    });

    if (converted > 0) {
      await writeFile(path, serialize(newList));
      console.log(`  ${topicId} written: ${converted} converted, ${fills.length - converted} unchanged`);
      totalConverted += converted;
    } else {
      console.log(`  ${topicId} no conversions (all failed?)`);
    }
  }

  console.log(`\n=== DONE: ${totalConverted} converted, ${totalFailed} failed ===`);
};

main().catch((e) => {
  console.error("Fatal:", e);
  process.exit(1);
});
