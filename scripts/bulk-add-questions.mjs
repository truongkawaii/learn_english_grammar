#!/usr/bin/env node
// Expand each topic's question bank up to TARGET questions by generating
// additional MCQ/fill/wordOrder items via Gemini, in batches of 10.
//
// Idempotent: re-running tops up to the same target; safe to interrupt and
// resume — only the deficit is processed.
//
// Usage:
//   node scripts/bulk-add-questions.mjs                  # all topics, target=50
//   node scripts/bulk-add-questions.mjs --target=100
//   node scripts/bulk-add-questions.mjs --topics=A1,B6
//   node scripts/bulk-add-questions.mjs --topics=A1 --target=50 --batch=10

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
const modelName = env.VITE_GEMINI_MODEL || "gemini-2.5-flash";
if (!apiKey) {
  console.error("ERROR: VITE_GEMINI_API_KEY missing in .env");
  process.exit(1);
}

// ---------- CLI args ----------
const args = process.argv.slice(2);
const getArg = (name, def) => {
  const a = args.find((x) => x.startsWith(`--${name}=`));
  return a ? a.slice(name.length + 3) : def;
};
const TARGET = Number(getArg("target", "50"));
const BATCH = Number(getArg("batch", "10"));
const TOPIC_FILTER_RAW = getArg("topics", null);
const TOPIC_FILTER = TOPIC_FILTER_RAW
  ? new Set(TOPIC_FILTER_RAW.split(",").map((s) => s.trim()))
  : null;

// ---------- Topic metadata ----------
const TOPICS = [
  { id: "A1", title: "Từ loại & cụm từ",                                     files: ["noi_dung_1.md"] },
  { id: "A2", title: "Mệnh đề & câu",                                        files: ["noi_dung_2.md"] },
  { id: "B1", title: "Danh từ — đếm được & không đếm được",                  files: ["noi_dung_3.md"] },
  { id: "B2", title: "Mạo từ, lượng từ, từ hạn định",                        files: ["noi_dung_4.md"] },
  { id: "B3", title: "Đại từ",                                              files: ["noi_dung_5.md"] },
  { id: "B4", title: "Tính từ",                                             files: ["noi_dung_6.md"] },
  { id: "B5", title: "Trạng từ",                                            files: ["noi_dung_16.md"] },
  { id: "B6", title: "Giới từ",                                             files: ["noi_dung_17.md"] },
  { id: "B7", title: "Liên từ",                                             files: ["noi_dung_18.md"] },
  { id: "C1", title: "Thì hiện tại (đơn / tiếp diễn / hoàn thành)",         files: ["noi_dung_7.md"] },
  { id: "C2", title: "HTHT TD + Quá khứ đơn / Quá khứ tiếp diễn + used to", files: ["noi_dung_8.md"] },
  { id: "C3", title: "Quá khứ hoàn thành + Tương lai đơn",                  files: ["noi_dung_9.md"] },
  { id: "C4", title: "Các thì tương lai (be going to / TD / HT / HT TD)",   files: ["noi_dung_10.md"] },
  { id: "D1", title: "Câu bị động",                                         files: ["noi_dung_11.md"] },
  { id: "D2", title: "V nguyên mẫu không 'to'",                             files: ["noi_dung_12.md", "noi_dung_15.md"] },
  { id: "D3", title: "To V (V + to V, V + O + to V, Ving vs to V)",         files: ["noi_dung_13.md"] },
  { id: "D4", title: "Phân từ & participle clause",                         files: ["noi_dung_14.md"] },
  { id: "E1", title: "Mệnh đề quan hệ",                                     files: ["noi_dung_19.md"] },
  { id: "E2", title: "Câu điều kiện",                                       files: ["noi_dung_20.md"] },
  { id: "E3", title: "Câu so sánh",                                         files: ["noi_dung_21.md"] },
];

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
        temperature: 0.9,
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

const buildPrompt = (id, title, theory, batchCount, idStart, existingSentences) => {
  const sampleExisting = existingSentences.slice(0, 30).map((s, i) => `  ${i + 1}. ${s}`).join("\n");
  const idHint = `${id}-bulk-${String(idStart).padStart(3, "0")}`;
  const idEnd = `${id}-bulk-${String(idStart + batchCount - 1).padStart(3, "0")}`;
  return `Bạn là chuyên gia luyện thi TOEIC tiếng Anh người Việt. Dựa trên LÝ THUYẾT bên dưới, hãy sinh ĐÚNG **${batchCount} câu hỏi MỚI** luyện tập cho chủ đề "${title}" (id="${id}").

QUY TẮC TỔNG QUÁT:
- Câu hỏi (sentence, options, tiles, answer) bằng **TIẾNG ANH**.
- prompt, explanationVi, sentenceVi, vocabNotes[].vi bằng **TIẾNG VIỆT**. tags bằng tiếng Anh kebab-case.
- Mỗi câu kiểm tra đúng kiến thức trong lý thuyết.
- Độ khó (difficulty): mix cả 3 mức (1 dễ, 2 vừa, 3 khó). Khoảng 40% mức 1, 40% mức 2, 20% mức 3.
- Đa dạng ngữ cảnh: business / daily / academic / travel / health / tech. Tránh trùng lặp ngữ cảnh.
- KHÔNG được giống/gần giống các câu ĐÃ TỒN TẠI (xem danh sách bên dưới). Đổi chủ ngữ, động từ, đối tượng, ngữ cảnh.
- explanationVi: 1-2 câu, nêu RÕ tại sao đáp án đúng.
- BẮT BUỘC: sentenceVi (dịch câu hoàn chỉnh sau khi điền **chính xác đáp án đúng** — không dịch như thể chọn đáp án khác). Vd nếu đáp án đúng là "much", sentenceVi phải dịch "nhiều", KHÔNG được dịch "ít" hay "vài".
- BẮT BUỘC: vocabNotes (3-7 từ đáng chú ý, format: {word, pos, vi}). POS dùng: "động từ"/"danh từ"/"tính từ"/"trạng từ"/"giới từ"/"liên từ"/"đại từ"/"cụm từ"/"thành ngữ".

LOẠI CÂU: **CHỈ SINH "mcq"** — không sinh "fill" hay "wordOrder".
- "mcq": câu có "___" với 4 options TIẾNG ANH, đúng 1, 3 options còn lại phải là DISTRACTOR HỢP LÝ (cùng họ từ loại / cùng họ giới từ / dễ nhầm về ngữ pháp), không phải đáp án vớ vẩn.

ĐỊNH DẠNG TRẢ VỀ: **CHỈ MỘT JSON ARRAY ${batchCount} items**, không markdown fence, không giải thích thêm. Tất cả items đều "type": "mcq".

ID quy ước: từ "${idHint}" đến "${idEnd}" theo thứ tự.

Ví dụ 1 item (LUÔN là mcq):
{
  "id": "${idHint}",
  "topicId": "${id}",
  "type": "mcq",
  "difficulty": 2,
  "tags": ["..."],
  "prompt": "Chọn đáp án phù hợp:",
  "sentence": "She ___ to school every day.",
  "options": ["go","goes","going","gone"],
  "answerIndex": 1,
  "explanationVi": "Chủ ngữ ngôi 3 số ít + thì hiện tại đơn → động từ thêm -s.",
  "sentenceVi": "Cô ấy đi học mỗi ngày.",
  "vocabNotes": [
    { "word": "goes", "pos": "động từ", "vi": "đi" },
    { "word": "every day", "pos": "cụm từ", "vi": "mỗi ngày" }
  ]
}

CÁC CÂU ĐÃ CÓ (TUYỆT ĐỐI KHÔNG SINH LẠI tương tự):
${sampleExisting || "(chưa có câu nào)"}

LÝ THUYẾT (đã chuẩn hoá):
"""
${theory.slice(0, 12000)}
"""`;
};

const serialize = (topicId, questions) => {
  const items = questions
    .map((q) => "  " + JSON.stringify(q, null, 2).split("\n").join("\n  "))
    .join(",\n");
  return `import type { Question } from "@/types";

// Topic ${topicId} — question bank. Mix of hand-curated + auto-generated.
// Re-expand with: node scripts/bulk-add-questions.mjs --topics=${topicId}
export const questions: Question[] = [
${items}
];
`;
};

// Parse existing TS file → array of question objects.
const loadExistingQuestions = async (topicId) => {
  const path = join(OUT_DIR, `${topicId}.ts`);
  if (!existsSync(path)) return [];
  const src = await readFile(path, "utf8");
  const m = src.match(/Question\[\]\s*=\s*(\[[\s\S]*\])\s*;?\s*$/m);
  if (!m) return [];
  try {
    // The literal is valid JS — Function lets us eval safely (we authored the file).
    return new Function("return " + m[1] + ";")();
  } catch (e) {
    console.warn(`  ! Could not parse existing ${topicId}.ts: ${e.message}`);
    return [];
  }
};

// Compute next bulk index by scanning existing bulk-NNN IDs.
const nextBulkIndex = (existing, topicId) => {
  const re = new RegExp(`^${topicId}-bulk-(\\d+)$`);
  let max = 0;
  for (const q of existing) {
    const m = q.id?.match(re);
    if (m) max = Math.max(max, Number(m[1]));
  }
  return max + 1;
};

// ---------- Main ----------
const main = async () => {
  await mkdir(OUT_DIR, { recursive: true });
  const targets = TOPICS.filter((t) => !TOPIC_FILTER || TOPIC_FILTER.has(t.id));
  console.log(
    `Target=${TARGET}/topic. Batch=${BATCH}. Topics: ${targets.length}. Model=${modelName}.\n`,
  );

  let grandAdded = 0;
  let topicFailed = 0;

  for (const topic of targets) {
    const existing = await loadExistingQuestions(topic.id);
    const have = existing.length;
    const needed = Math.max(0, TARGET - have);

    if (needed === 0) {
      console.log(`SKIP ${topic.id} (already ${have} ≥ ${TARGET})`);
      continue;
    }

    console.log(`\n=== ${topic.id} ${topic.title} — have ${have}, need +${needed} ===`);

    let theory;
    try {
      theory = (
        await Promise.all(topic.files.map((f) => readFile(join(NOIDUNG, f), "utf8")))
      ).join("\n\n---\n\n");
    } catch (e) {
      console.log(`  ✗ cannot read theory: ${e.message}`);
      topicFailed++;
      continue;
    }

    let pool = [...existing];
    let nextIdx = nextBulkIndex(existing, topic.id);
    let added = 0;
    let consecutiveFails = 0;

    while (added < needed) {
      const thisBatch = Math.min(BATCH, needed - added);
      process.stdout.write(
        `  BATCH ${added + 1}-${added + thisBatch}/${needed} (ids ${topic.id}-bulk-${String(nextIdx).padStart(3, "0")}+)... `,
      );
      const t0 = Date.now();
      try {
        const existingSentences = pool
          .map((q) => q.sentence ?? q.answer ?? null)
          .filter(Boolean);
        const prompt = buildPrompt(
          topic.id,
          topic.title,
          theory,
          thisBatch,
          nextIdx,
          existingSentences,
        );
        let parsed = null;
        for (let attempt = 1; attempt <= 2; attempt++) {
          try {
            const raw = await callGemini(prompt);
            const jsonStr = extractJsonArray(raw);
            if (!jsonStr) throw new Error("no JSON array in response");
            const arr = JSON.parse(jsonStr);
            if (!Array.isArray(arr)) throw new Error("not an array");
            parsed = arr;
            break;
          } catch (e) {
            if (attempt === 2) throw e;
            process.stdout.write(`retry... `);
          }
        }
        const valid = parsed.filter(isValidQuestion).map((q, i) => ({
          ...q,
          // Force canonical IDs to avoid AI typos
          id: `${topic.id}-bulk-${String(nextIdx + i).padStart(3, "0")}`,
          topicId: topic.id,
        }));
        const rejected = parsed.length - valid.length;
        if (valid.length === 0) {
          consecutiveFails++;
          console.log(`✗ all ${parsed.length} rejected`);
          if (consecutiveFails >= 2) {
            console.log(`  ! 2 consecutive failures — moving on`);
            break;
          }
          continue;
        }
        consecutiveFails = 0;
        pool.push(...valid);
        // Persist after every successful batch (resume-safe).
        await writeFile(
          join(OUT_DIR, `${topic.id}.ts`),
          serialize(topic.id, pool),
        );
        added += valid.length;
        nextIdx += valid.length;
        const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
        console.log(`✓ +${valid.length}${rejected ? ` (${rejected} rejected)` : ""} · ${elapsed}s · total ${pool.length}`);
      } catch (e) {
        consecutiveFails++;
        console.log(`✗ ${e.message.slice(0, 150)}`);
        if (consecutiveFails >= 2) {
          console.log(`  ! 2 consecutive failures — stopping this topic`);
          break;
        }
      }
      await new Promise((r) => setTimeout(r, 400));
    }

    grandAdded += added;
    console.log(`  ${topic.id} done: +${added} câu, total ${pool.length}`);
  }

  console.log(`\n=== DONE: +${grandAdded} câu mới, ${topicFailed} topic lỗi ===`);
};

main().catch((e) => {
  console.error("Fatal:", e);
  process.exit(1);
});
