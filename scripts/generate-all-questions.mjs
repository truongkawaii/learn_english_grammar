#!/usr/bin/env node
// Bulk-generate question banks for every topic missing from src/data/questions/.
// Reads VITE_GEMINI_API_KEY from .env, calls Gemini REST API, validates schema,
// writes each accepted batch to src/data/questions/<TopicId>.ts.
//
// Usage:  node scripts/generate-all-questions.mjs [--force] [topicId,topicId,...]

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const NOIDUNG = join(ROOT, "noidung");
const OUT_DIR = join(ROOT, "src/data/questions");

// ---------- Load .env ----------
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

// ---------- CLI args ----------
const args = process.argv.slice(2);
const force = args.includes("--force");
const topicFilter = args.find((a) => !a.startsWith("--"));
const TOPIC_FILTER = topicFilter ? new Set(topicFilter.split(",").map((s) => s.trim())) : null;

// ---------- Topic metadata ----------
const TOPICS = [
  { id: "A2", title: "Mệnh đề & câu",                                       files: ["noi_dung_2.md"] },
  { id: "B1", title: "Danh từ — đếm được & không đếm được",                  files: ["noi_dung_3.md"] },
  { id: "B2", title: "Mạo từ, lượng từ, từ hạn định",                        files: ["noi_dung_4.md"] },
  { id: "B3", title: "Đại từ",                                              files: ["noi_dung_5.md"] },
  { id: "B4", title: "Tính từ",                                             files: ["noi_dung_6.md"] },
  { id: "B5", title: "Trạng từ",                                            files: ["noi_dung_16.md"] },
  { id: "B7", title: "Liên từ",                                             files: ["noi_dung_18.md"] },
  { id: "C1", title: "Thì hiện tại (đơn / tiếp diễn / hoàn thành)",         files: ["noi_dung_7.md"] },
  { id: "C2", title: "HTHT TD + Quá khứ đơn / Quá khứ tiếp diễn + used to", files: ["noi_dung_8.md"] },
  { id: "C3", title: "Quá khứ hoàn thành + Tương lai đơn",                  files: ["noi_dung_9.md"] },
  { id: "C4", title: "Các thì tương lai (be going to / TD / HT / HT TD)",    files: ["noi_dung_10.md"] },
  { id: "D1", title: "Câu bị động",                                         files: ["noi_dung_11.md"] },
  { id: "D2", title: "V nguyên mẫu không 'to'",                             files: ["noi_dung_12.md", "noi_dung_15.md"] },
  { id: "D3", title: "To V (V + to V, V + O + to V, Ving vs to V)",         files: ["noi_dung_13.md"] },
  { id: "D4", title: "Phân từ & participle clause",                          files: ["noi_dung_14.md"] },
  { id: "E1", title: "Mệnh đề quan hệ",                                     files: ["noi_dung_19.md"] },
  { id: "E2", title: "Câu điều kiện (loại 0/1/2/3, hỗn hợp, đảo ngữ, wish)", files: ["noi_dung_20.md"] },
  { id: "E3", title: "Câu so sánh",                                         files: ["noi_dung_21.md"] },
];

// ---------- Prompt builder ----------
const QUESTION_COUNT = 10;

const buildPrompt = (id, title, theory) => `Bạn là chuyên gia luyện thi TOEIC tiếng Anh người Việt. Dựa trên LÝ THUYẾT bên dưới, hãy sinh ĐÚNG **${QUESTION_COUNT} câu hỏi** luyện tập cho chủ đề "${title}" (id="${id}").

QUY TẮC TỔNG QUÁT:
- Câu hỏi (sentence, options, tiles, answer) bằng **TIẾNG ANH**.
- prompt, explanationVi, sentenceVi, vocabNotes[].vi bằng **TIẾNG VIỆT**. tags bằng tiếng Anh kebab-case.
- Mỗi câu phải kiểm tra đúng kiến thức trong lý thuyết, KHÔNG hỏi mẹo, KHÔNG đánh đố.
- Độ khó (difficulty): 1=Part 5 cơ bản, 2=Part 5 trung bình, 3=Part 5 khó / Part 6. Mix cả 3 mức.
- Đa dạng ngữ cảnh (business / daily / academic). Tránh trùng lặp giữa các câu.
- explanationVi: 1–2 câu, nêu RÕ tại sao đáp án đúng và (nếu hữu ích) tại sao đáp án khác sai.
- **BẮT BUỘC** thêm:
  - "sentenceVi": dịch CÂU HOÀN CHỈNH (đã ghép đáp án đúng vào ___) sang tiếng Việt tự nhiên.
  - "vocabNotes": 3-7 từ vựng đáng chú ý trong câu. Mỗi item {"word", "pos", "vi"}. POS dùng nhãn: "động từ" / "danh từ" / "tính từ" / "trạng từ" / "giới từ" / "liên từ" / "đại từ" / "cụm từ" / "thành ngữ". Bỏ qua từ quá phổ thông (I, you, the, a, in, on, is, are, this, ...).

LOẠI CÂU CHO PHÉP (mix cả 3):
- "mcq": 4 options TIẾNG ANH, đúng 1, options khác cùng họ từ loại / cùng họ giới từ để có tính phân biệt cao.
- "fill": câu có "___", chấp nhận nhiều biến thể đúng trong acceptedAnswers (vd ["in", "In"]).
- "wordOrder": tiles là mảng 5–8 từ đơn ĐÃ XÁO TRỘN, câu đúng đầy đủ trong "answer".

ĐỊNH DẠNG TRẢ VỀ: **CHỈ MỘT JSON ARRAY**, không markdown fence, không giải thích thêm.

Schema theo từng loại:

[
  {
    "id": "${id}-gen01",
    "topicId": "${id}",
    "type": "mcq",
    "difficulty": 2,
    "tags": ["..."],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "She ___ to school every day.",
    "options": ["go","goes","going","gone"],
    "answerIndex": 1,
    "explanationVi": "...",
    "sentenceVi": "Cô ấy đi học mỗi ngày.",
    "vocabNotes": [
      { "word": "goes", "pos": "động từ", "vi": "đi" },
      { "word": "every day", "pos": "cụm từ", "vi": "mỗi ngày" }
    ]
  },
  {
    "id": "${id}-gen02",
    "topicId": "${id}",
    "type": "fill",
    "difficulty": 2,
    "tags": ["..."],
    "prompt": "Điền từ thích hợp:",
    "sentence": "He is interested ___ photography.",
    "acceptedAnswers": ["in"],
    "explanationVi": "...",
    "sentenceVi": "Anh ấy quan tâm tới nhiếp ảnh.",
    "vocabNotes": [
      { "word": "interested", "pos": "tính từ", "vi": "quan tâm" },
      { "word": "photography", "pos": "danh từ", "vi": "nhiếp ảnh" }
    ]
  },
  {
    "id": "${id}-gen03",
    "topicId": "${id}",
    "type": "wordOrder",
    "difficulty": 2,
    "tags": ["..."],
    "prompt": "Sắp xếp các từ thành câu:",
    "tiles": ["depends","It","weather","on","the"],
    "answer": "It depends on the weather",
    "explanationVi": "...",
    "sentenceVi": "Việc đó phụ thuộc vào thời tiết.",
    "vocabNotes": [
      { "word": "depends on", "pos": "cụm từ", "vi": "phụ thuộc vào" },
      { "word": "weather", "pos": "danh từ", "vi": "thời tiết" }
    ]
  }
]

ID: dùng tiền tố "${id}-gen" + 2 chữ số (${id}-gen01..${id}-gen${String(QUESTION_COUNT).padStart(2, "0")}).

LÝ THUYẾT (đã được chuẩn hoá):
"""
${theory.slice(0, 14000)}
"""`;

// ---------- Helpers ----------
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

const isValidQuestion = (q) => {
  if (!q || typeof q !== "object") return false;
  if (typeof q.id !== "string") return false;
  if (typeof q.topicId !== "string") return false;
  if (typeof q.prompt !== "string") return false;
  if (typeof q.explanationVi !== "string") return false;
  if (![1, 2, 3].includes(q.difficulty)) return false;
  if (!Array.isArray(q.tags)) return false;
  switch (q.type) {
    case "mcq":
      return (
        typeof q.sentence === "string" &&
        Array.isArray(q.options) && q.options.length === 4 &&
        q.options.every((o) => typeof o === "string") &&
        typeof q.answerIndex === "number" &&
        q.answerIndex >= 0 && q.answerIndex < 4
      );
    case "fill":
      return (
        typeof q.sentence === "string" &&
        Array.isArray(q.acceptedAnswers) &&
        q.acceptedAnswers.length > 0 &&
        q.acceptedAnswers.every((a) => typeof a === "string")
      );
    case "wordOrder":
      return (
        Array.isArray(q.tiles) && q.tiles.length >= 3 &&
        q.tiles.every((t) => typeof t === "string") &&
        typeof q.answer === "string"
      );
    default:
      return false;
  }
};

const callGemini = async (prompt) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.8,
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

const serialize = (topicId, questions) => {
  const items = questions
    .map((q) => "  " + JSON.stringify(q, null, 2).split("\n").join("\n  "))
    .join(",\n");
  return `import type { Question } from "@/types";

// Topic ${topicId} — auto-generated by scripts/generate-all-questions.mjs.
// Review before relying on. Re-generate with: node scripts/generate-all-questions.mjs ${topicId} --force
export const questions: Question[] = [
${items}
];
`;
};

// ---------- Main ----------
const main = async () => {
  await mkdir(OUT_DIR, { recursive: true });
  const targets = TOPICS.filter((t) => !TOPIC_FILTER || TOPIC_FILTER.has(t.id));
  let okCount = 0;
  let failCount = 0;
  let totalQuestions = 0;
  console.log(`Target: ${targets.length} topic${targets.length !== 1 ? "s" : ""}. Force=${force}. Model=${modelName}.\n`);

  for (const topic of targets) {
    const outPath = join(OUT_DIR, `${topic.id}.ts`);
    if (existsSync(outPath) && !force) {
      console.log(`SKIP ${topic.id} (exists; pass --force to overwrite)`);
      continue;
    }
    const t0 = Date.now();
    process.stdout.write(`GEN  ${topic.id.padEnd(3)} ${topic.title}... `);
    try {
      const theory = (
        await Promise.all(topic.files.map((f) => readFile(join(NOIDUNG, f), "utf8")))
      ).join("\n\n---\n\n");
      const prompt = buildPrompt(topic.id, topic.title, theory);

      let parsed = null;
      let raw = "";
      for (let attempt = 1; attempt <= 2; attempt++) {
        try {
          raw = await callGemini(prompt);
          const jsonStr = extractJsonArray(raw);
          if (!jsonStr) throw new Error("no JSON array in response");
          const arr = JSON.parse(jsonStr);
          if (!Array.isArray(arr)) throw new Error("response is not an array");
          parsed = arr;
          break;
        } catch (e) {
          if (attempt === 2) throw e;
          process.stdout.write(`retry... `);
        }
      }
      const valid = parsed.filter(isValidQuestion);
      const rejected = parsed.length - valid.length;
      if (valid.length === 0) throw new Error(`all ${parsed.length} questions rejected by schema`);
      await writeFile(outPath, serialize(topic.id, valid));
      const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
      console.log(`✓ ${valid.length} câu (${rejected} rejected) · ${elapsed}s`);
      totalQuestions += valid.length;
      okCount++;
    } catch (e) {
      console.log(`✗ ${e.message}`);
      failCount++;
    }
    await new Promise((r) => setTimeout(r, 500));
  }

  console.log(`\nDONE: ${okCount}/${targets.length} topics, ${totalQuestions} total questions. ${failCount} failed.`);
};

main().catch((e) => {
  console.error("Fatal:", e);
  process.exit(1);
});
