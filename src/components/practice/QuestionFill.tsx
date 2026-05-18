import { useEffect, useRef } from "react";
import type { FillQuestion } from "@/types";
import { cn } from "@/lib/format";
import { renderInline } from "./renderInline";
import { SpeakerButton } from "./SpeakerButton";

interface Props {
  question: FillQuestion;
  value: string;
  setValue: (v: string) => void;
  locked: boolean;
  revealCorrect: boolean;
  isCorrect: boolean;
  onSubmit: () => void;
}

export const QuestionFill = ({
  question,
  value,
  setValue,
  locked,
  revealCorrect,
  isCorrect,
  onSubmit,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [question.id]);

  return (
    <div className="space-y-5">
      <p className="text-ink-500 dark:text-ink-400 text-sm">{question.prompt}</p>
      <div className="flex items-start gap-2">
        <p
          className="flex-1 text-xl md:text-2xl font-display leading-snug"
          data-translatable="true"
        >
          {renderInline(question.sentence)}
        </p>
        <SpeakerButton text={question.sentence} className="mt-1" />
      </div>
      <div className="space-y-2">
        <input
          ref={inputRef}
          value={value}
          disabled={locked}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !locked && value.trim()) onSubmit();
          }}
          placeholder="Gõ đáp án rồi nhấn Enter…"
          className={cn(
            "w-full px-4 py-3 rounded-xl border-2 outline-none text-lg font-medium transition-all",
            "bg-white dark:bg-ink-900",
            !revealCorrect && "border-ink-200 dark:border-ink-700 focus:border-quest-500 focus:shadow-glow-quest",
            revealCorrect && isCorrect && "border-correct bg-correct/10 text-correct shadow-glow-correct",
            revealCorrect && !isCorrect && "border-wrong bg-wrong/10 text-wrong shadow-glow-wrong",
          )}
        />
        {revealCorrect && !isCorrect && (
          <p className="text-sm text-ink-500">
            Đáp án đúng:{" "}
            <span className="font-bold text-correct">
              {question.acceptedAnswers[0]}
            </span>
            {question.acceptedAnswers.length > 1 && (
              <span className="text-ink-400 ml-2">
                (cũng chấp nhận: {question.acceptedAnswers.slice(1).join(", ")})
              </span>
            )}
          </p>
        )}
      </div>
    </div>
  );
};
