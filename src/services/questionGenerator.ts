// Generate TOEIC-style grammar questions using Gemini, grounded on a topic's theory.
// Used only by the admin tool at /admin/generate.

import type { Question, QuestionType } from "@/types";
import { generate, isGeminiEnabled } from "./gemini";

export interface GenerateInput {
  topicId: string;
  topicTitle: string;
  theoryMarkdown: string;
  types: QuestionType[];     // restrict to {"mcq", "fill", "wordOrder"} for v1
  count: number;
  difficultyHint?: 1 | 2 | 3;
  notes?: string;            // extra steering, optional
}

/**
 * Build the generation prompt. Kept verbose on purpose — strong examples
 * yield far more usable JSON than terse instructions.
 */
const buildPrompt = (input: GenerateInput): string => {
  const id = input.topicId;
  return `Bạn là chuyên gia luyện thi TOEIC tiếng Anh, người Việt. Dựa trên LÝ THUYẾT bên dưới, hãy sinh **${input.count} câu hỏi** luyện tập cho chủ đề "${input.topicTitle}" (id="${id}").

QUY TẮC TỔNG QUÁT:
- Câu hỏi (sentence, options, tiles, answer) bằng **TIẾNG ANH**.
- prompt, explanationVi, sentenceVi, vocabNotes[].vi, tags bằng **TIẾNG VIỆT** (trừ tags chuyên ngành kebab-case).
- Mỗi câu phải thực sự kiểm tra đúng kiến thức trong lý thuyết, KHÔNG được hỏi mẹo, KHÔNG đánh đố.
- Độ khó (difficulty): 1 = Part 5 cơ bản, 2 = Part 5 trung bình, 3 = Part 5 khó / Part 6.
- **BẮT BUỘC** mỗi câu có:
  - "sentenceVi": dịch CÂU HOÀN CHỈNH (đã ghép đáp án đúng vào ___) sang tiếng Việt tự nhiên.
  - "vocabNotes": mảng 3-7 từ vựng đáng chú ý trong câu, mỗi item gồm "word" (giữ nguyên dạng trong câu), "pos" (loại từ tiếng Việt: "động từ" / "danh từ" / "tính từ" / "trạng từ" / "giới từ" / "liên từ" / "đại từ" / "cụm từ" / "thành ngữ"), "vi" (nghĩa Việt 1-4 từ). Bỏ qua từ quá phổ thông (I, you, the, a, in, on, is, are, this, ...).
${input.difficultyHint ? `- Ưu tiên độ khó ${input.difficultyHint}.\n` : ""}- Tránh trùng lặp ngữ cảnh giữa các câu (đa dạng business / daily / academic).
- explanationVi: 1–2 câu, nêu RÕ tại sao đáp án đúng và (nếu hữu ích) tại sao đáp án khác sai.
${input.notes ? `- Lưu ý thêm: ${input.notes}\n` : ""}

LOẠI CÂU CHO PHÉP:
- "mcq": 4 options, đúng 1, options khác cùng họ từ loại / cùng họ giới từ để có tính phân biệt.
- "fill": 1 chỗ trống "___", chấp nhận thêm các dạng viết khác trong "acceptedAnswers".
- "wordOrder": cho 4–8 tiles (đã xáo trộn), câu hoàn chỉnh trong "answer".

CHỈ SINH CÁC LOẠI: ${input.types.map((t) => `"${t}"`).join(", ")}.

ĐỊNH DẠNG TRẢ VỀ: **CHỈ MỘT JSON ARRAY**, không markdown, không giải thích thêm. Schema mỗi loại:

[
  {
    "id": "${id}-genA",
    "topicId": "${id}",
    "type": "mcq",
    "difficulty": 2,
    "tags": ["preposition","time"],
    "prompt": "Chọn giới từ phù hợp:",
    "sentence": "The meeting starts ___ 9 AM.",
    "options": ["in","on","at","by"],
    "answerIndex": 2,
    "explanationVi": "Dùng **at** với giờ cụ thể. **in** dùng cho tháng/năm, **on** cho ngày.",
    "sentenceVi": "Cuộc họp bắt đầu vào lúc 9 giờ sáng.",
    "vocabNotes": [
      { "word": "meeting", "pos": "danh từ", "vi": "cuộc họp" },
      { "word": "starts", "pos": "động từ", "vi": "bắt đầu" }
    ]
  },
  {
    "id": "${id}-genB",
    "topicId": "${id}",
    "type": "fill",
    "difficulty": 2,
    "tags": ["preposition","interested-in"],
    "prompt": "Điền giới từ:",
    "sentence": "She is interested ___ photography.",
    "acceptedAnswers": ["in"],
    "explanationVi": "Cấu trúc cố định: **be interested in + N/Ving**.",
    "sentenceVi": "Cô ấy quan tâm tới nhiếp ảnh.",
    "vocabNotes": [
      { "word": "interested", "pos": "tính từ", "vi": "quan tâm" },
      { "word": "photography", "pos": "danh từ", "vi": "nhiếp ảnh" }
    ]
  },
  {
    "id": "${id}-genC",
    "topicId": "${id}",
    "type": "wordOrder",
    "difficulty": 2,
    "tags": ["preposition","depend-on"],
    "prompt": "Sắp xếp các từ thành câu:",
    "tiles": ["depends","It","weather","on","the"],
    "answer": "It depends on the weather",
    "explanationVi": "depend on + N — phụ thuộc vào.",
    "sentenceVi": "Việc đó phụ thuộc vào thời tiết.",
    "vocabNotes": [
      { "word": "depends on", "pos": "cụm từ", "vi": "phụ thuộc vào" },
      { "word": "weather", "pos": "danh từ", "vi": "thời tiết" }
    ]
  }
]

LƯU Ý ID: dùng tiền tố "${id}-gen" + chữ cái/số duy nhất cho mỗi câu (vd ${id}-genA, ${id}-genB, ${id}-gen01).

LÝ THUYẾT:
"""
${input.theoryMarkdown.slice(0, 12000)}
"""`;
};

/** Extract the first top-level JSON array from a string. */
const extractJsonArray = (text: string): string | null => {
  // Strip markdown fences if present
  const cleaned = text.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/i, "");
  // Find first '[' and matching ']'
  const start = cleaned.indexOf("[");
  if (start < 0) return null;
  let depth = 0;
  for (let i = start; i < cleaned.length; i++) {
    const c = cleaned[i];
    if (c === "[") depth++;
    else if (c === "]") {
      depth--;
      if (depth === 0) return cleaned.slice(start, i + 1);
    }
  }
  return null;
};

const isValidQuestion = (q: unknown): q is Question => {
  if (!q || typeof q !== "object") return false;
  const obj = q as Record<string, unknown>;
  if (typeof obj.id !== "string") return false;
  if (typeof obj.topicId !== "string") return false;
  if (typeof obj.prompt !== "string") return false;
  if (typeof obj.explanationVi !== "string") return false;
  if (![1, 2, 3].includes(obj.difficulty as number)) return false;
  if (!Array.isArray(obj.tags)) return false;
  switch (obj.type) {
    case "mcq":
      return (
        typeof obj.sentence === "string" &&
        Array.isArray(obj.options) &&
        (obj.options as unknown[]).length === 4 &&
        (obj.options as unknown[]).every((o) => typeof o === "string") &&
        typeof obj.answerIndex === "number" &&
        obj.answerIndex >= 0 &&
        (obj.answerIndex as number) < 4
      );
    case "fill":
      return (
        typeof obj.sentence === "string" &&
        Array.isArray(obj.acceptedAnswers) &&
        (obj.acceptedAnswers as unknown[]).length > 0 &&
        (obj.acceptedAnswers as unknown[]).every((a) => typeof a === "string")
      );
    case "wordOrder":
      return (
        Array.isArray(obj.tiles) &&
        (obj.tiles as unknown[]).length >= 3 &&
        (obj.tiles as unknown[]).every((t) => typeof t === "string") &&
        typeof obj.answer === "string"
      );
    default:
      return false;
  }
};

export interface GenerateResult {
  ok: true;
  questions: Question[];
  rejected: { index: number; reason: string }[];
}

export interface GenerateError {
  ok: false;
  error: string;
  raw?: string;
}

export const generateQuestions = async (
  input: GenerateInput,
): Promise<GenerateResult | GenerateError> => {
  if (!isGeminiEnabled()) {
    return { ok: false, error: "Gemini API key chưa cấu hình. Bổ sung VITE_GEMINI_API_KEY trong .env." };
  }
  let raw: string;
  try {
    raw = await generate({
      prompt: buildPrompt(input),
      temperature: 0.8,
      maxOutputTokens: 8192,
    });
  } catch (e) {
    return { ok: false, error: `Gọi Gemini thất bại: ${(e as Error).message}` };
  }
  const jsonStr = extractJsonArray(raw);
  if (!jsonStr) return { ok: false, error: "Không tìm thấy JSON array trong phản hồi.", raw };

  let parsed: unknown;
  try {
    parsed = JSON.parse(jsonStr);
  } catch (e) {
    return { ok: false, error: `JSON parse error: ${(e as Error).message}`, raw: jsonStr };
  }
  if (!Array.isArray(parsed)) {
    return { ok: false, error: "Phản hồi không phải array.", raw: jsonStr };
  }
  const questions: Question[] = [];
  const rejected: { index: number; reason: string }[] = [];
  parsed.forEach((q, i) => {
    if (isValidQuestion(q)) {
      questions.push(q);
    } else {
      rejected.push({ index: i, reason: "Sai schema (xem console.log)" });
      // eslint-disable-next-line no-console
      console.warn(`[questionGenerator] rejected #${i}`, q);
    }
  });

  return { ok: true, questions, rejected };
};

// ----------------------------------------------------------------------------
// Format approved questions back into a TS source file
// ----------------------------------------------------------------------------

export const serializeQuestionsAsTs = (
  topicId: string,
  questions: Question[],
): string => {
  const body = questions
    .map((q) => "  " + JSON.stringify(q, null, 2).split("\n").join("\n  "))
    .join(",\n");
  return `import type { Question } from "@/types";

// Topic ${topicId} — auto-generated draft (review before use).
export const questions: Question[] = [
${body}
];
`;
};
