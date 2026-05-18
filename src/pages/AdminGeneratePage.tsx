import { useMemo, useState } from "react";
import type { Question, QuestionType } from "@/types";
import { TOPICS, getTopicById } from "@/data/topics";
import { getTheoryCombined } from "@/data/theoryLoader";
import { getQuestionsByTopic } from "@/data/questions";
import {
  generateQuestions,
  serializeQuestionsAsTs,
} from "@/services/questionGenerator";
import { isGeminiEnabled } from "@/services/gemini";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { renderInline } from "@/components/practice/renderInline";
import { cn } from "@/lib/format";

const TYPE_LABEL: Record<QuestionType, string> = {
  mcq: "Trắc nghiệm",
  fill: "Điền từ",
  wordOrder: "Xếp câu",
  transform: "Chuyển dạng",
  errorSpot: "Tìm lỗi",
  cloze: "Đoạn văn",
};

// v1 supports only the 3 implemented types
const SUPPORTED_TYPES: QuestionType[] = ["mcq", "fill", "wordOrder"];

interface CandidateState {
  question: Question;
  status: "pending" | "approved" | "rejected";
}

export const AdminGeneratePage = () => {
  const [topicId, setTopicId] = useState(TOPICS[0]?.id ?? "");
  const [count, setCount] = useState(8);
  const [difficulty, setDifficulty] = useState<1 | 2 | 3 | 0>(0); // 0 = mix
  const [selectedTypes, setSelectedTypes] = useState<QuestionType[]>(["mcq", "fill", "wordOrder"]);
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [candidates, setCandidates] = useState<CandidateState[]>([]);

  const topic = useMemo(() => getTopicById(topicId), [topicId]);
  const existingCount = useMemo(() => getQuestionsByTopic(topicId).length, [topicId]);

  const approvedQuestions = useMemo(
    () => candidates.filter((c) => c.status === "approved").map((c) => c.question),
    [candidates],
  );

  const toggleType = (t: QuestionType) => {
    setSelectedTypes((cur) =>
      cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t],
    );
  };

  const generate = async () => {
    if (!topic) return;
    setLoading(true);
    setError(null);
    setCandidates([]);
    const theory = getTheoryCombined(topic.theoryFiles);
    const res = await generateQuestions({
      topicId: topic.id,
      topicTitle: topic.title,
      theoryMarkdown: theory,
      types: selectedTypes,
      count,
      difficultyHint: difficulty === 0 ? undefined : difficulty,
      notes: notes.trim() || undefined,
    });
    setLoading(false);
    if (!res.ok) {
      setError(res.error);
      return;
    }
    setCandidates(res.questions.map((q) => ({ question: q, status: "pending" })));
    if (res.rejected.length > 0) {
      setError(`Gemini trả về ${res.rejected.length} câu sai schema (đã loại). Xem console để biết chi tiết.`);
    }
  };

  const setStatus = (idx: number, status: CandidateState["status"]) =>
    setCandidates((cur) => cur.map((c, i) => (i === idx ? { ...c, status } : c)));

  const exportCombined = useMemo(() => {
    if (!topic) return "";
    const existing = getQuestionsByTopic(topic.id);
    return serializeQuestionsAsTs(topic.id, [...existing, ...approvedQuestions]);
  }, [topic, approvedQuestions]);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(exportCombined)
      .then(() => alert("Đã copy. Paste vào src/data/questions/" + topicId + ".ts"));
  };

  const downloadFile = () => {
    const blob = new Blob([exportCombined], { type: "text/typescript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${topicId}.ts`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display font-bold text-3xl">
          ⚙️ Admin · Sinh câu hỏi bằng Gemini
        </h1>
        <p className="text-ink-500 mt-1">
          Chỉ dùng nội bộ — không có trong nav. Review từng câu trước khi commit vào{" "}
          <code className="text-quest-500">src/data/questions/</code>.
        </p>
        {!isGeminiEnabled() && (
          <div className="mt-3 p-3 rounded-lg bg-wrong/10 text-wrong text-sm">
            ⚠️ <code>VITE_GEMINI_API_KEY</code> chưa cấu hình trong <code>.env</code>. Hãy bổ sung rồi restart dev server.
          </div>
        )}
      </div>

      {/* Form */}
      <Card>
        <div className="p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-ink-500">Chủ đề</label>
              <select
                value={topicId}
                onChange={(e) => setTopicId(e.target.value)}
                className="mt-1 w-full px-3 py-2 rounded-lg bg-ink-100 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 outline-none focus:border-quest-500"
              >
                {TOPICS.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.id} · {t.title}
                  </option>
                ))}
              </select>
              <div className="text-xs text-ink-400 mt-1">
                Hiện có {existingCount} câu sẵn cho chủ đề này.
              </div>
            </div>
            <div>
              <label className="text-sm text-ink-500">Số câu</label>
              <input
                type="number"
                min={1}
                max={20}
                value={count}
                onChange={(e) => setCount(Number(e.target.value) || 8)}
                className="mt-1 w-full px-3 py-2 rounded-lg bg-ink-100 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 outline-none focus:border-quest-500"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-ink-500">Độ khó</label>
            <div className="mt-1 flex gap-2">
              {[
                { v: 0, label: "Mix" },
                { v: 1, label: "1 · Dễ" },
                { v: 2, label: "2 · Vừa" },
                { v: 3, label: "3 · Khó" },
              ].map((opt) => (
                <button
                  key={opt.v}
                  onClick={() => setDifficulty(opt.v as 0 | 1 | 2 | 3)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-sm font-medium border",
                    difficulty === opt.v
                      ? "bg-quest-500 border-quest-500 text-white"
                      : "border-ink-200 dark:border-ink-700 hover:border-quest-400",
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm text-ink-500">Dạng bài</label>
            <div className="mt-1 flex flex-wrap gap-2">
              {SUPPORTED_TYPES.map((t) => (
                <button
                  key={t}
                  onClick={() => toggleType(t)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-sm font-medium border",
                    selectedTypes.includes(t)
                      ? "bg-quest-500 border-quest-500 text-white"
                      : "border-ink-200 dark:border-ink-700 hover:border-quest-400",
                  )}
                >
                  {TYPE_LABEL[t]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm text-ink-500">Ghi chú riêng (tuỳ chọn)</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={2}
              placeholder="VD: tập trung vào phân biệt in/on/at, dùng ngữ cảnh business…"
              className="mt-1 w-full px-3 py-2 rounded-lg bg-ink-100 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 outline-none focus:border-quest-500"
            />
          </div>

          <div className="flex justify-end">
            <Button
              icon="auto_awesome"
              onClick={generate}
              disabled={loading || !topic || selectedTypes.length === 0 || !isGeminiEnabled()}
            >
              {loading ? "Đang sinh…" : `Sinh ${count} câu`}
            </Button>
          </div>
        </div>
      </Card>

      {error && (
        <Card>
          <div className="p-4 text-wrong text-sm">⚠️ {error}</div>
        </Card>
      )}

      {/* Candidates */}
      {candidates.length > 0 && (
        <>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h2 className="font-display font-bold text-xl">
              Kết quả: {candidates.length} câu ·{" "}
              <span className="text-correct">
                {candidates.filter((c) => c.status === "approved").length} đã duyệt
              </span>{" "}
              ·{" "}
              <span className="text-wrong">
                {candidates.filter((c) => c.status === "rejected").length} từ chối
              </span>
            </h2>
            <div className="flex gap-2">
              <Button
                variant="success"
                icon="content_copy"
                onClick={copyToClipboard}
                disabled={approvedQuestions.length === 0}
              >
                Copy TS ({approvedQuestions.length + existingCount} câu)
              </Button>
              <Button
                variant="secondary"
                icon="download"
                onClick={downloadFile}
                disabled={approvedQuestions.length === 0}
              >
                Tải {topicId}.ts
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            {candidates.map((c, idx) => (
              <CandidateCard
                key={idx}
                index={idx}
                state={c}
                onApprove={() => setStatus(idx, "approved")}
                onReject={() => setStatus(idx, "rejected")}
                onReset={() => setStatus(idx, "pending")}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// ----------------------------------------------------------------------------
// Candidate preview card
// ----------------------------------------------------------------------------

interface CardProps {
  index: number;
  state: CandidateState;
  onApprove: () => void;
  onReject: () => void;
  onReset: () => void;
}

const CandidateCard = ({ index, state, onApprove, onReject, onReset }: CardProps) => {
  const q = state.question;
  return (
    <Card
      className={cn(
        "transition-all",
        state.status === "approved" && "ring-2 ring-correct",
        state.status === "rejected" && "ring-2 ring-wrong opacity-50",
      )}
    >
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2 py-0.5 rounded bg-quest-100 dark:bg-quest-900/40 text-quest-600 dark:text-quest-300 font-semibold">
            #{index + 1}
          </span>
          <span className="px-2 py-0.5 rounded bg-ink-100 dark:bg-ink-800 text-ink-500">
            {q.type}
          </span>
          <span className="px-2 py-0.5 rounded bg-ink-100 dark:bg-ink-800 text-ink-500">
            d{q.difficulty}
          </span>
          {q.tags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded bg-ink-100 dark:bg-ink-800 text-ink-500"
            >
              {t}
            </span>
          ))}
          <span className="ml-auto text-ink-400 font-mono">{q.id}</span>
        </div>

        <div className="text-sm text-ink-500">{q.prompt}</div>

        {q.type === "mcq" && (
          <>
            <p className="text-base font-medium">{renderInline(q.sentence)}</p>
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              {q.options.map((opt, i) => (
                <div
                  key={i}
                  className={cn(
                    "px-3 py-1.5 rounded-lg border",
                    i === q.answerIndex
                      ? "border-correct bg-correct/10 text-correct font-medium"
                      : "border-ink-200 dark:border-ink-700",
                  )}
                >
                  <span className="font-bold mr-2">{String.fromCharCode(65 + i)}.</span>
                  {opt}
                </div>
              ))}
            </div>
          </>
        )}

        {q.type === "fill" && (
          <>
            <p className="text-base font-medium">{renderInline(q.sentence)}</p>
            <div className="text-sm text-ink-500">
              Đáp án:{" "}
              <span className="text-correct font-medium">
                {q.acceptedAnswers.join(" / ")}
              </span>
            </div>
          </>
        )}

        {q.type === "wordOrder" && (
          <>
            <div className="flex flex-wrap gap-2">
              {q.tiles.map((t, i) => (
                <span
                  key={i}
                  className="px-2 py-1 rounded-lg bg-ink-100 dark:bg-ink-800 text-sm font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="text-sm text-ink-500">
              Đáp án:{" "}
              <span className="text-correct font-medium">{q.answer}</span>
            </div>
          </>
        )}

        <div className="text-sm text-ink-500 italic pt-2 border-t border-ink-200 dark:border-ink-800">
          {renderInline(q.explanationVi)}
        </div>

        <div className="flex gap-2 pt-1">
          {state.status === "pending" && (
            <>
              <Button variant="success" size="sm" icon="check_circle" onClick={onApprove}>
                Duyệt
              </Button>
              <Button variant="danger" size="sm" icon="close" onClick={onReject}>
                Từ chối
              </Button>
            </>
          )}
          {state.status !== "pending" && (
            <Button variant="ghost" size="sm" icon="undo" onClick={onReset}>
              {state.status === "approved" ? "Đã duyệt — bỏ duyệt" : "Đã từ chối — bỏ từ chối"}
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
