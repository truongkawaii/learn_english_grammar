import { useState } from "react";
import { explainAnswer, isGeminiEnabled, type ExplainRequest } from "@/services/gemini";
import { cn } from "@/lib/format";
import { playSfx } from "@/lib/sounds";

interface Props {
  request: ExplainRequest;
}

/**
 * Inline AI tutor: a collapsed button that, on click, calls Gemini and
 * streams the response into an expandable card below the answer banner.
 */
export const AiTutorPanel = ({ request }: Props) => {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [explanation, setExplanation] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  if (!isGeminiEnabled()) return null;

  const ask = async () => {
    if (status === "loading") return;
    setStatus("loading");
    setErrorMsg("");
    playSfx("click");
    try {
      const out = await explainAnswer(request);
      setExplanation(out.trim());
      setStatus("done");
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : String(e));
      setStatus("error");
    }
  };

  if (status === "idle") {
    return (
      <button
        onClick={ask}
        className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-quest-600 dark:text-quest-300 hover:underline"
      >
        <span className="material-symbols-rounded text-[1.1em]">psychology</span>
        Tại sao đáp án này đúng? (AI giải thích sâu)
      </button>
    );
  }

  return (
    <div
      className={cn(
        "mt-3 rounded-xl border-2 p-4 bg-quest-50/50 dark:bg-quest-900/20 border-quest-200 dark:border-quest-800 animate-fade-in-up",
      )}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="material-symbols-rounded text-quest-500">psychology</span>
        <div className="font-display font-bold text-sm">Gia sư AI</div>
        {status === "loading" && (
          <span className="text-xs text-ink-500 italic ml-auto inline-flex items-center gap-1">
            <span className="material-symbols-rounded text-[1em] animate-spin">progress_activity</span>
            Đang suy nghĩ…
          </span>
        )}
        {status === "done" && (
          <button
            onClick={ask}
            className="ml-auto text-xs text-ink-500 hover:text-quest-500 inline-flex items-center gap-0.5"
            title="Hỏi lại — có thể nhận được giải thích khác"
          >
            <span className="material-symbols-rounded text-[1em]">refresh</span>
            Hỏi lại
          </button>
        )}
      </div>
      {status === "loading" && (
        <div className="space-y-2">
          <div className="h-3 rounded bg-ink-200 dark:bg-ink-800 animate-pulse" />
          <div className="h-3 rounded bg-ink-200 dark:bg-ink-800 animate-pulse w-5/6" />
          <div className="h-3 rounded bg-ink-200 dark:bg-ink-800 animate-pulse w-3/4" />
        </div>
      )}
      {status === "done" && (
        <div className="text-sm text-ink-700 dark:text-ink-200 leading-relaxed whitespace-pre-wrap">
          {explanation}
        </div>
      )}
      {status === "error" && (
        <div className="text-sm text-wrong">
          ✗ Lỗi gọi AI: {errorMsg || "không rõ"} —{" "}
          <button onClick={ask} className="underline">
            thử lại
          </button>
        </div>
      )}
    </div>
  );
};
