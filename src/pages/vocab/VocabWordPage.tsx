import { useMemo } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  ENTRIES_BY_ID,
  THEMES_BY_ID,
  getThemeOfWord,
  getSynonyms,
} from "@/data/vocab/loader";
import { prettyPos } from "@/data/vocab/types";
import { useVocabSrsStore } from "@/store/vocabSrsStore";
import { statusEmoji, statusLabel, formatDueDelta } from "@/lib/vocab/srs";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { cn } from "@/lib/format";

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

export const VocabWordPage = () => {
  const { wordId = "" } = useParams();
  const navigate = useNavigate();
  const entry = ENTRIES_BY_ID[wordId];
  const themeId = getThemeOfWord(wordId);
  const theme = THEMES_BY_ID[themeId];
  const getState = useVocabSrsStore((s) => s.getState);
  const byWord = useVocabSrsStore((s) => s.byWord);
  const state = useMemo(() => {
    void byWord;
    return getState(wordId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordId, byWord]);

  if (!entry) {
    return (
      <div className="text-center py-12">
        <p className="text-ink-500">Không tìm thấy từ.</p>
        <Link to="/vocab" className="text-quest-500 underline mt-2 inline-block">
          ← Về Vocab Hub
        </Link>
      </div>
    );
  }

  const accuracy = state.reps > 0 ? state.totalCorrect / state.reps : 0;
  const dueInMs = state.status === "new" ? 0 : state.dueAt - Date.now();
  const syn = getSynonyms(wordId);
  const hasSyn = !!(syn && (syn.synonyms?.length || syn.antonyms?.length || syn.family?.length));

  return (
    <div className="max-w-2xl mx-auto space-y-5" data-translatable="true">
      <div>
        <Link to={`/vocab/theme/${themeId}`} className="text-sm text-ink-500 hover:text-quest-500">
          ← {theme?.emoji} {theme?.label}
        </Link>
      </div>

      <Card glow>
        <div className="p-6 space-y-3">
          <div className="flex items-baseline gap-2 flex-wrap">
            <h1 className="font-display font-extrabold text-4xl text-quest-600 dark:text-quest-200">
              {entry.word}
            </h1>
            <span className="text-base italic text-ink-500">{prettyPos(entry.pos)}</span>
            {entry.phonetic && (
              <span className="text-sm font-mono text-ink-400">/{entry.phonetic}/</span>
            )}
            <button
              onClick={() => speak(entry.word)}
              className="ml-auto p-2 rounded-lg hover:bg-ink-100 dark:hover:bg-ink-800 text-quest-500"
              aria-label="Phát âm"
            >
              <span className="material-symbols-rounded text-2xl">volume_up</span>
            </button>
          </div>
          <div className="text-lg text-ink-700 dark:text-ink-200">{entry.vi}</div>
          <div className="text-sm text-ink-500 italic">{entry.en}</div>

          <Button
            onClick={() => navigate(`/vocab/study/word/${entry.id}`)}
            icon="play_arrow"
          >
            Học từ này ngay
          </Button>
        </div>
      </Card>

      {entry.examples.length > 0 && (
        <Card>
          <div className="p-5 space-y-3">
            <h2 className="font-display font-bold text-lg">Ví dụ</h2>
            <ul className="space-y-3">
              {entry.examples.map((ex, i) => (
                <li key={i} className="text-sm flex items-start gap-2">
                  <button
                    onClick={() => speak(ex.en)}
                    className="p-1 rounded hover:bg-ink-100 dark:hover:bg-ink-800 text-quest-500 shrink-0 mt-0.5"
                    aria-label="Phát âm"
                  >
                    <span className="material-symbols-rounded text-[1.1em]">volume_up</span>
                  </button>
                  <div className="flex-1">
                    <div className="text-ink-700 dark:text-ink-200">{ex.en}</div>
                    <div className="text-xs text-ink-500 italic mt-0.5">{ex.vi}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      )}

      {hasSyn && (
        <Card>
          <div className="p-5 space-y-3">
            <h2 className="font-display font-bold text-lg">Liên quan</h2>
            {syn!.synonyms && syn!.synonyms.length > 0 && (
              <WordChipRow label="Đồng nghĩa" items={syn!.synonyms} tone="quest" onSpeak={speak} />
            )}
            {syn!.antonyms && syn!.antonyms.length > 0 && (
              <WordChipRow label="Trái nghĩa" items={syn!.antonyms} tone="wrong" onSpeak={speak} />
            )}
            {syn!.family && syn!.family.length > 0 && (
              <WordChipRow label="Cùng họ" items={syn!.family} tone="ink" onSpeak={speak} />
            )}
          </div>
        </Card>
      )}

      <Card>
        <div className="p-5 space-y-3">
          <h2 className="font-display font-bold text-lg">Tiến độ học</h2>
          <div className="flex items-center gap-3">
            <span className="text-3xl">{statusEmoji(state.status)}</span>
            <div>
              <div className="font-display font-bold">{statusLabel(state.status)}</div>
              <div className="text-xs text-ink-500">
                {state.reps > 0 ? (
                  <>
                    {state.reps} lần ôn · {Math.round(accuracy * 100)}% đúng ·{" "}
                    EF {state.ease.toFixed(2)}
                  </>
                ) : (
                  "Chưa học lần nào"
                )}
              </div>
            </div>
            {state.status !== "new" && (
              <div className="ml-auto text-right">
                <div className="text-xs text-ink-500">Ôn lại sau</div>
                <div
                  className={cn(
                    "font-display font-bold text-lg tabular-nums",
                    dueInMs <= 0 ? "text-streak" : "text-quest-500",
                  )}
                >
                  {dueInMs <= 0 ? "🔥 ngay" : formatDueDelta(dueInMs)}
                </div>
              </div>
            )}
          </div>
          {state.reps > 0 && (
            <>
              <ProgressBar value={accuracy} size="sm" color="correct" />
              <div className="grid grid-cols-3 gap-2 text-xs">
                <Field label="Đúng"    value={state.totalCorrect} />
                <Field label="Sai"     value={state.totalWrong} />
                <Field label="Lapses"  value={state.lapses} />
              </div>
            </>
          )}
        </div>
      </Card>
    </div>
  );
};

const Field = ({ label, value }: { label: string; value: number }) => (
  <div className="px-2 py-1.5 rounded-lg bg-ink-100 dark:bg-ink-800">
    <div className="text-ink-500">{label}</div>
    <div className="font-display font-bold">{value}</div>
  </div>
);

const WordChipRow = ({
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
    <div className="flex items-start gap-3 flex-wrap">
      <span className="text-xs font-semibold uppercase tracking-wider text-ink-400 mt-1.5 shrink-0 w-20">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5 flex-1">
        {items.map((w) => (
          <button
            key={w}
            onClick={() => onSpeak(w)}
            className={cn(
              "px-2.5 py-1 rounded-lg text-sm font-medium hover:opacity-80 transition flex items-center gap-1",
              toneClass,
            )}
            title={`Phát âm "${w}"`}
          >
            <span className="material-symbols-rounded text-[0.9em]">volume_up</span>
            {w}
          </button>
        ))}
      </div>
    </div>
  );
};
