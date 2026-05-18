import type { SrsChoice, VocabSrsState } from "@/lib/vocab/srs";
import { previewIntervals } from "@/lib/vocab/srs";
import { cn } from "@/lib/format";
import { playSfx } from "@/lib/sounds";

interface Props {
  state: VocabSrsState;
  onChoose: (choice: SrsChoice) => void;
  disabled?: boolean;
}

const META: Record<
  SrsChoice,
  { label: string; emoji: string; color: string; sfx: "wrong" | "click" | "correct" | "select" }
> = {
  again: { label: "Sai / quên", emoji: "🟥", color: "border-wrong text-wrong hover:bg-wrong/10",         sfx: "wrong"   },
  hard:  { label: "Khó",        emoji: "🟧", color: "border-streak text-streak hover:bg-streak/10",      sfx: "click"   },
  good:  { label: "Vừa",        emoji: "🟩", color: "border-correct text-correct hover:bg-correct/10",   sfx: "correct" },
  easy:  { label: "Dễ",         emoji: "🟦", color: "border-quest-500 text-quest-500 hover:bg-quest-50 dark:hover:bg-quest-900/30", sfx: "select" },
};

const ORDER: SrsChoice[] = ["again", "hard", "good", "easy"];

export const AnswerBar = ({ state, onChoose, disabled }: Props) => {
  const intervals = previewIntervals(state);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
      {ORDER.map((c, i) => {
        const meta = META[c];
        return (
          <button
            key={c}
            onClick={() => {
              if (disabled) return;
              playSfx(meta.sfx);
              onChoose(c);
            }}
            disabled={disabled}
            className={cn(
              "px-3 py-2.5 rounded-xl border-2 bg-white dark:bg-ink-900 transition-all flex flex-col items-center gap-0.5 disabled:opacity-50",
              meta.color,
            )}
          >
            <div className="font-display font-bold text-sm flex items-center gap-1">
              <span>{meta.emoji}</span>
              <span>{meta.label}</span>
            </div>
            <div className="text-xs text-ink-500 tabular-nums">
              ⏱ {intervals[c]}
            </div>
            <kbd className="text-[10px] text-ink-400">{i + 1}</kbd>
          </button>
        );
      })}
    </div>
  );
};
