import { useEffect, useMemo, useState } from "react";
import type { WordOrderQuestion } from "@/types";
import { cn } from "@/lib/format";
import { playSfx } from "@/lib/sounds";
import { shuffle } from "@/lib/practice";
import { renderInline } from "./renderInline";
import { SpeakerButton } from "./SpeakerButton";

interface Tile {
  idx: number;
  text: string;
}

interface Props {
  question: WordOrderQuestion;
  arranged: string[];
  setArranged: (a: string[]) => void;
  locked: boolean;
  revealCorrect: boolean;
  isCorrect: boolean;
}

export const QuestionWordOrder = ({
  question,
  arranged,
  setArranged,
  locked,
  revealCorrect,
  isCorrect,
}: Props) => {
  // Stable shuffled tile pool keyed by question id; re-shuffle when q changes
  const initialTiles = useMemo<Tile[]>(
    () => shuffle(question.tiles.map((text, idx) => ({ idx, text }))),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [question.id],
  );
  const [pool, setPool] = useState<Tile[]>(initialTiles);
  const [chosen, setChosen] = useState<Tile[]>([]);

  // Reset internal state on question switch
  useEffect(() => {
    setPool(initialTiles);
    setChosen([]);
    setArranged([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question.id]);

  // Keep external "arranged" array in sync with chosen tiles
  useEffect(() => {
    setArranged(chosen.map((t) => t.text));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosen]);

  const moveToChosen = (tile: Tile) => {
    if (locked) return;
    playSfx("click");
    setPool((p) => p.filter((t) => t.idx !== tile.idx));
    setChosen((c) => [...c, tile]);
  };

  const moveBackToPool = (tile: Tile) => {
    if (locked) return;
    playSfx("click");
    setChosen((c) => c.filter((t) => t.idx !== tile.idx));
    setPool((p) => [...p, tile]);
  };

  const reset = () => {
    if (locked) return;
    playSfx("click");
    setPool(initialTiles);
    setChosen([]);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-start gap-2 justify-between">
        <p className="text-ink-500 dark:text-ink-400 text-sm flex-1">{question.prompt}</p>
        {revealCorrect && (
          <SpeakerButton text={question.answer} size="sm" title="Đọc đáp án" />
        )}
      </div>

      {/* Sentence build area */}
      <div
        className={cn(
          "min-h-[4rem] rounded-2xl border-2 border-dashed p-3 flex flex-wrap items-center gap-2 transition-all",
          !revealCorrect && "border-quest-400/50 bg-quest-50/30 dark:bg-quest-900/10",
          revealCorrect && isCorrect && "border-correct bg-correct/10",
          revealCorrect && !isCorrect && "border-wrong bg-wrong/10",
        )}
      >
        {chosen.length === 0 ? (
          <span className="text-ink-400 italic text-sm">
            Bấm các từ bên dưới để xếp thành câu →
          </span>
        ) : (
          chosen.map((tile) => (
            <button
              key={tile.idx}
              onClick={() => moveBackToPool(tile)}
              disabled={locked}
              className={cn(
                "px-3 py-1.5 rounded-lg font-medium transition-all border-2",
                !locked && "hover:scale-105",
                revealCorrect && isCorrect
                  ? "bg-correct/15 border-correct text-correct"
                  : revealCorrect
                  ? "bg-wrong/15 border-wrong text-wrong"
                  : "bg-white dark:bg-ink-900 border-quest-500 text-quest-700 dark:text-quest-200 shadow-sm",
              )}
            >
              {tile.text}
            </button>
          ))
        )}
      </div>

      {/* Tile pool */}
      <div className="min-h-[3rem] flex flex-wrap gap-2">
        {pool.map((tile) => (
          <button
            key={tile.idx}
            onClick={() => moveToChosen(tile)}
            disabled={locked}
            className="px-3 py-1.5 rounded-lg font-medium border-2 border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 hover:border-quest-400 hover:bg-quest-50 dark:hover:bg-quest-900/30 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
          >
            {tile.text}
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={reset}
          disabled={locked || chosen.length === 0}
          className="text-sm text-ink-500 hover:text-quest-500 disabled:opacity-50 inline-flex items-center gap-1"
        >
          <span className="material-symbols-rounded text-[1.1em]">refresh</span>
          Làm lại
        </button>
        {revealCorrect && !isCorrect && (
          <p className="text-sm text-ink-500">
            Đáp án:{" "}
            <span className="font-bold text-correct">
              {renderInline(question.answer)}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};
