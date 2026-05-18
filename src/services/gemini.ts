// Generic Gemini wrapper for Grammar Quest.
// Used by: (1) question generation admin tool (Phase 2.5)
//          (2) auto-translate when user highlights text (Phase 7.5)
//          (3) explain-this-answer tutor (Phase 9 stretch)

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const modelName = import.meta.env.VITE_GEMINI_MODEL || "gemini-1.5-pro";

if (!apiKey) {
  console.warn("⚠️ VITE_GEMINI_API_KEY is not set — AI features will be disabled.");
}

const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

export const isGeminiEnabled = () => genAI !== null;

export interface GenerateOptions {
  prompt: string;
  systemInstruction?: string;
  temperature?: number;
  maxOutputTokens?: number;
}

export const generate = async ({
  prompt,
  systemInstruction,
  temperature = 0.7,
  maxOutputTokens = 4096,
}: GenerateOptions): Promise<string> => {
  if (!genAI) throw new Error("Gemini API key not configured");
  const model = genAI.getGenerativeModel({
    model: modelName,
    systemInstruction,
  });
  const result = await model.generateContent({
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig: { temperature, maxOutputTokens },
  });
  return result.response.text();
};

// ----------------------------------------------------------------------------
// Translate (Phase 7.5)
// ----------------------------------------------------------------------------

export interface TranslateResult {
  vi: string;
  pos?: string;
  note?: string;
}

export const translateToVi = async (text: string): Promise<TranslateResult> => {
  const trimmed = text.trim();
  if (!trimmed) return { vi: "" };
  const out = await generate({
    prompt: `Dịch sang tiếng Việt và trả về JSON đúng format này, không thêm gì khác:
{
  "vi": "nghĩa tiếng Việt ngắn gọn",
  "pos": "loại từ nếu là 1 từ đơn (n./v./adj./adv./prep./conj./..) hoặc null",
  "note": "ghi chú ngắn 1 dòng nếu là idiom hoặc cụm đặc biệt, hoặc null"
}

Đầu vào: "${trimmed.replace(/"/g, '\\"')}"`,
    temperature: 0.2,
    maxOutputTokens: 256,
  });

  try {
    const jsonMatch = out.match(/\{[\s\S]*\}/);
    if (!jsonMatch) return { vi: out.trim() };
    const parsed = JSON.parse(jsonMatch[0]);
    return {
      vi: parsed.vi ?? "",
      pos: parsed.pos ?? undefined,
      note: parsed.note ?? undefined,
    };
  } catch {
    return { vi: out.trim() };
  }
};

// ----------------------------------------------------------------------------
// AI tutor: explain why an answer is correct (Phase 9)
// ----------------------------------------------------------------------------

export interface ExplainRequest {
  fullSentence: string;          // Complete English sentence with correct answer
  correctAnswer: string;         // The correct fill / option / arrangement
  userAnswer?: string;           // What the user picked, if wrong
  topicTitle?: string;           // E.g. "Câu bị động"
  existingExplanationVi?: string; // The short explanation already shown
}

export const explainAnswer = async (req: ExplainRequest): Promise<string> => {
  const userPart = req.userAnswer && req.userAnswer !== req.correctAnswer
    ? `User trả lời: "${req.userAnswer}" (sai).`
    : "User trả lời ĐÚNG.";
  const topicPart = req.topicTitle ? `Chủ đề: "${req.topicTitle}".` : "";
  const existingPart = req.existingExplanationVi
    ? `\nGiải thích NGẮN đã có: "${req.existingExplanationVi}"\nNhiệm vụ của em: giải thích SÂU HƠN, không lặp lại y nguyên giải thích ngắn này.`
    : "";

  const prompt = `Bạn là gia sư tiếng Anh thân thiện cho học viên Việt luyện TOEIC.

CÂU: "${req.fullSentence}"
ĐÁP ÁN ĐÚNG: "${req.correctAnswer}"
${userPart}
${topicPart}${existingPart}

Hãy giải thích bằng TIẾNG VIỆT, ngắn gọn 3–5 đoạn ngắn, văn nói tự nhiên thân thiện:
1. Ý chính: vì sao đáp án đúng (quy tắc ngữ pháp cốt lõi).
2. Phân tích cấu trúc câu: chỉ ra subject / verb / phrase quan trọng.
3. Nếu user trả lời sai, nói rõ lỗi của họ là gì, dễ nhầm chỗ nào.
4. Mẹo nhỏ ghi nhớ (catchy, ngắn).
5. 1 ví dụ tương tự (1 câu tiếng Anh + nghĩa tiếng Việt).

KHÔNG dùng heading markdown, KHÔNG đánh số list — viết tự nhiên, mỗi đoạn cách nhau dòng trống.`;

  return generate({
    prompt,
    temperature: 0.6,
    maxOutputTokens: 1024,
  });
};
