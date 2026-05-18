import { useState } from "react";
import type { VocabEntry } from "@/data/vocab/types";
import { prettyPos } from "@/data/vocab/types";
import { getSynonyms } from "@/data/vocab/loader";
import { cn } from "@/lib/format";
import { playSfx } from "@/lib/sounds";

interface Props {
  entry: VocabEntry;
  /** Reverse mode: show VN first, anh đoán từ EN. */
  reverse?: boolean;
  /** Force-flip externally (e.g. typing/MCQ already revealed answer). */
  forceFlipped?: boolean;
}

const speak = (text: string) => {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  try {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 0.95;
    window.speechSynthesis.speak(utter);
  } catch {
    /* noop */
  }
};

export const Flashcard = ({ entry, reverse, forceFlipped }: Props) => {
  const [flipped, setFlipped] = useState(false);
  const isFlipped = forceFlipped ?? flipped;

  const toggle = () => {
    if (forceFlipped !== undefined) return;
    if (!isFlipped) {
      playSfx("click");
      // Auto-play pronunciation when revealing the English side
      if (reverse) speak(entry.word);
    }
    setFlipped((f) => !f);
  };

  return (
    <div
      className="rounded-2xl border-2 border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 shadow-card p-6 min-h-[280px] cursor-pointer select-none"
      onClick={toggle}
      data-translatable="true"
    >
      {!isFlipped ? (
        <FrontSide entry={entry} reverse={reverse} onSpeak={speak} />
      ) : (
        <BackSide entry={entry} reverse={reverse} onSpeak={speak} />
      )}
      {forceFlipped === undefined && (
        <div className="mt-4 pt-3 border-t border-ink-200 dark:border-ink-800 text-center text-xs text-ink-400">
          {isFlipped ? "Bấm để lật lại" : "Bấm thẻ để xem đáp án · Phím cách"}
        </div>
      )}
    </div>
  );
};

// ----------------------------------------------------------------------------

const FrontSide = ({
  entry, reverse, onSpeak,
}: { entry: VocabEntry; reverse?: boolean; onSpeak: (s: string) => void }) => {
  if (reverse) {
    // VN → user recalls EN
    return (
      <div className="flex flex-col items-center justify-center min-h-[200px] gap-2 text-center">
        <div className="text-xs uppercase tracking-widest text-ink-400">Tiếng Việt</div>
        <div className="font-display font-extrabold text-4xl text-quest-600 dark:text-quest-200">
          {entry.vi}
        </div>
        <div className="text-xs text-ink-400 italic mt-1">{prettyPos(entry.pos)}</div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] gap-2 text-center">
      <div className="text-xs uppercase tracking-widest text-ink-400">English</div>
      <div className="font-display font-extrabold text-4xl text-quest-600 dark:text-quest-200">
        {entry.word}
      </div>
      <div className="flex items-center gap-2 text-ink-500">
        <span className="text-sm italic">{prettyPos(entry.pos)}</span>
        {entry.phonetic && (
          <span className="text-sm font-mono">/{entry.phonetic}/</span>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSpeak(entry.word);
          }}
          className="p-1.5 rounded-lg hover:bg-ink-100 dark:hover:bg-ink-800 text-quest-500"
          aria-label="Phát âm"
        >
          <span className="material-symbols-rounded">volume_up</span>
        </button>
      </div>
    </div>
  );
};

const BackSide = ({
  entry, reverse, onSpeak,
}: { entry: VocabEntry; reverse?: boolean; onSpeak: (s: string) => void }) => {
  const syn = getSynonyms(entry.id);
  return (
    <div className="space-y-3">
      <div className="flex items-baseline gap-2 flex-wrap">
        <div className="font-display font-extrabold text-2xl text-quest-600 dark:text-quest-200">
          {entry.word}
        </div>
        <span className="text-sm italic text-ink-500">{prettyPos(entry.pos)}</span>
        {entry.phonetic && (
          <span className="text-xs font-mono text-ink-400">/{entry.phonetic}/</span>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSpeak(entry.word);
          }}
          className="ml-auto p-1.5 rounded-lg hover:bg-ink-100 dark:hover:bg-ink-800 text-quest-500"
          aria-label="Phát âm"
        >
          <span className="material-symbols-rounded">volume_up</span>
        </button>
      </div>

      {!reverse && (
        <div className="text-base text-ink-700 dark:text-ink-200">{entry.vi}</div>
      )}
      {entry.en && (
        <div className="text-sm text-ink-500 italic">{entry.en}</div>
      )}

      {entry.examples.length > 0 && (
        <div className="pt-2 border-t border-ink-200 dark:border-ink-800 space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-ink-400">
            Ví dụ
          </div>
          {entry.examples.slice(0, 3).map((ex, i) => (
            <ExampleRow key={i} ex={ex} onSpeak={onSpeak} />
          ))}
        </div>
      )}

      {syn && (syn.synonyms?.length || syn.antonyms?.length || syn.family?.length) ? (
        <div className="pt-2 border-t border-ink-200 dark:border-ink-800 space-y-1.5">
          {syn.synonyms && syn.synonyms.length > 0 && (
            <ChipRow label="Đồng nghĩa" items={syn.synonyms} tone="quest" onSpeak={onSpeak} />
          )}
          {syn.antonyms && syn.antonyms.length > 0 && (
            <ChipRow label="Trái nghĩa" items={syn.antonyms} tone="wrong" onSpeak={onSpeak} />
          )}
          {syn.family && syn.family.length > 0 && (
            <ChipRow label="Cùng họ" items={syn.family} tone="ink" onSpeak={onSpeak} />
          )}
        </div>
      ) : null}
    </div>
  );
};

const ChipRow = ({
  label, items, tone, onSpeak,
}: {
  label: string;
  items: string[];
  tone: "quest" | "wrong" | "ink";
  onSpeak: (s: string) => void;
}) => {
  const toneClass = {
    quest: "bg-quest-100 text-quest-700 dark:bg-quest-900/40 dark:text-quest-200",
    wrong: "bg-wrong/10 text-wrong",
    ink: "bg-ink-100 text-ink-700 dark:bg-ink-800 dark:text-ink-200",
  }[tone];
  return (
    <div className="flex items-start gap-2 flex-wrap">
      <span className="text-xs font-semibold uppercase tracking-wider text-ink-400 mt-1 shrink-0">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {items.map((w) => (
          <button
            key={w}
            onClick={(e) => {
              e.stopPropagation();
              onSpeak(w);
            }}
            className={cn(
              "px-2 py-0.5 rounded text-xs font-medium hover:opacity-80 transition",
              toneClass,
            )}
            title={`Phát âm "${w}"`}
          >
            {w}
          </button>
        ))}
      </div>
    </div>
  );
};

const ExampleRow = ({
  ex, onSpeak,
}: { ex: { en: string; vi: string }; onSpeak: (s: string) => void }) => (
  <div className={cn("text-sm flex items-start gap-2")}>
    <button
      onClick={(e) => {
        e.stopPropagation();
        onSpeak(ex.en);
      }}
      className="p-1 rounded hover:bg-ink-100 dark:hover:bg-ink-800 text-quest-500 shrink-0 mt-0.5"
      aria-label="Phát âm câu ví dụ"
    >
      <span className="material-symbols-rounded text-[1em]">volume_up</span>
    </button>
    <div className="flex-1">
      <div className="text-ink-700 dark:text-ink-200">{ex.en}</div>
      <div className="text-xs text-ink-500 italic">{ex.vi}</div>
    </div>
  </div>
);
