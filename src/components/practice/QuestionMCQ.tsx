import type { MCQQuestion } from "@/types";
import { cn } from "@/lib/format";
import { playSfx } from "@/lib/sounds";
import { renderInline } from "./renderInline";
import { SpeakerButton } from "./SpeakerButton";

interface Props {
  question: MCQQuestion;
  selected: number | null;
  setSelected: (idx: number | null) => void;
  locked: boolean;          // true after submit, options can't change
  revealCorrect: boolean;   // true after submit, shows correct/wrong styling
}

export const QuestionMCQ = ({
  question,
  selected,
  setSelected,
  locked,
  revealCorrect,
}: Props) => {
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
      <div className="grid sm:grid-cols-2 gap-3">
        {question.options.map((opt, idx) => {
          const isSelected = selected === idx;
          const isCorrect = idx === question.answerIndex;
          const showCorrect = revealCorrect && isCorrect;
          const showWrong = revealCorrect && isSelected && !isCorrect;

          return (
            <button
              key={idx}
              disabled={locked}
              onClick={() => {
                setSelected(idx);
                playSfx("select");
              }}
              className={cn(
                "group relative text-left px-4 py-3 rounded-xl border-2 transition-all",
                "flex items-center gap-3 font-medium",
                !locked && "hover:border-quest-400 hover:bg-quest-50 dark:hover:bg-quest-900/20",
                isSelected && !revealCorrect &&
                  "border-quest-500 bg-quest-50 dark:bg-quest-900/30 shadow-glow-quest",
                !isSelected && !revealCorrect &&
                  "border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900",
                showCorrect && "border-correct bg-correct/10 shadow-glow-correct text-correct",
                showWrong && "border-wrong bg-wrong/10 shadow-glow-wrong text-wrong",
                revealCorrect && !isCorrect && !isSelected && "opacity-50",
              )}
            >
              <span
                className={cn(
                  "w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 border-2",
                  isSelected && !revealCorrect
                    ? "bg-quest-500 border-quest-500 text-white"
                    : showCorrect
                    ? "bg-correct border-correct text-white"
                    : showWrong
                    ? "bg-wrong border-wrong text-white"
                    : "border-ink-300 dark:border-ink-600 text-ink-500",
                )}
              >
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="flex-1">{renderInline(opt)}</span>
              {showCorrect && (
                <span className="material-symbols-rounded text-correct">check_circle</span>
              )}
              {showWrong && (
                <span className="material-symbols-rounded text-wrong">cancel</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
