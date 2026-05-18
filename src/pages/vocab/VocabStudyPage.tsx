import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ALL_WORD_IDS, ENTRIES_BY_ID, getWordIdsByTheme, THEMES_BY_ID } from "@/data/vocab/loader";
import { useVocabSrsStore } from "@/store/vocabSrsStore";
import { buildSession, type SchedulableWord } from "@/lib/vocab/scheduler";
import { useUserStore } from "@/store/userStore";
import { applyStreakBonus } from "@/lib/xp";
import type { SrsChoice } from "@/lib/vocab/srs";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Flashcard } from "@/components/vocab/Flashcard";
import { AnswerBar } from "@/components/vocab/AnswerBar";
import { TypingCheck, type TypingResult } from "@/components/vocab/TypingCheck";
import { playSfx } from "@/lib/sounds";
import { cn, formatDuration } from "@/lib/format";

const SESSION_SIZE = 20;
const NEW_QUOTA = 5;

export const VocabStudyPage = () => {
  const { themeId } = useParams();
  const navigate = useNavigate();
  const theme = themeId ? THEMES_BY_ID[themeId] : null;
  const reverseMode = useUserStore((s) => s.autoTranslateEnabled);  // reuse, separate later if needed

  const recordAnswer = useVocabSrsStore((s) => s.record);
  const getState = useVocabSrsStore((s) => s.getState);
  const addXp = useUserStore((s) => s.addXp);
  const recordActivity = useUserStore((s) => s.recordActivity);
  const logVocabReview = useUserStore((s) => s.logVocabReview);

  const sessionStart = useRef<number>(Date.now());
  const xpEarned = useRef<number>(0);

  const [seed, setSeed] = useState(0);
  const session = useMemo<SchedulableWord[]>(() => {
    sessionStart.current = Date.now();
    if (themeId) {
      const pool = getWordIdsByTheme(themeId);
      return buildSession(pool, { themeWordIds: pool, total: SESSION_SIZE, newQuota: NEW_QUOTA });
    }
    return buildSession(ALL_WORD_IDS, { total: SESSION_SIZE, newQuota: NEW_QUOTA });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeId, seed]);

  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"preview" | "typing" | "rating">("preview");
  const [typingResult, setTypingResult] = useState<TypingResult | null>(null);
  const [done, setDone] = useState(false);
  const [stats, setStats] = useState({ again: 0, hard: 0, good: 0, easy: 0 });
  const flipped = phase !== "preview";

  const current = session[index];
  const entry = current ? ENTRIES_BY_ID[current.wordId] : null;
  const state = current ? getState(current.wordId) : null;

  const handleFlip = useCallback(() => {
    if (!current || done) return;
    if (phase === "preview") {
      playSfx("click");
      setPhase("typing");
    }
  }, [current, done, phase]);

  const handleTypingResult = useCallback((r: TypingResult) => {
    setTypingResult(r);
    setPhase("rating");
  }, []);

  const handleChoice = useCallback(
    (choice: SrsChoice) => {
      if (!current) return;
      const wasNew = current.isNew;
      const nextState = recordAnswer(current.wordId, choice);
      // XP scheme: again=1, hard=3, good=5, easy=6 + bonus +2 first-time, +10 if just mastered
      const baseXp = { again: 1, hard: 3, good: 5, easy: 6 }[choice];
      const firstTimeBonus = wasNew ? 2 : 0;
      const masteredBonus = nextState.status === "mastered" && (current.state?.status !== "mastered") ? 10 : 0;
      const rawXp = baseXp + firstTimeBonus + masteredBonus;
      recordActivity();
      const streak = useUserStore.getState().currentStreak;
      const xp = applyStreakBonus(rawXp, streak);
      addXp(xp);
      logVocabReview(xp);
      xpEarned.current += xp;
      setStats((s) => ({ ...s, [choice]: s[choice] + 1 }));
      if (index >= session.length - 1) {
        setDone(true);
        playSfx("complete");
      } else {
        setIndex((i) => i + 1);
        setPhase("preview");
        setTypingResult(null);
      }
    },
    [current, recordAnswer, recordActivity, addXp, logVocabReview, index, session.length],
  );

  // Keyboard shortcuts: Space (preview → typing), 1-4 (rating choose), Enter (rating → "good")
  // While in typing phase the TypingCheck input owns Enter/Esc, so we skip those here.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (done) return;
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (phase === "preview") {
        if (e.code === "Space" || e.key === "Enter") {
          e.preventDefault();
          handleFlip();
        }
        return;
      }
      if (phase === "rating") {
        if (e.key === "Enter") {
          e.preventDefault();
          handleChoice("good");
          return;
        }
        if (e.key === "1") handleChoice("again");
        else if (e.key === "2") handleChoice("hard");
        else if (e.key === "3") handleChoice("good");
        else if (e.key === "4") handleChoice("easy");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, handleFlip, handleChoice, done]);

  const restart = () => {
    setIndex(0);
    setPhase("preview");
    setTypingResult(null);
    setDone(false);
    setStats({ again: 0, hard: 0, good: 0, easy: 0 });
    xpEarned.current = 0;
    setSeed((s) => s + 1);
    playSfx("click");
  };

  // ----------------- Empty session -----------------
  if (session.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-8">
        <Card>
          <div className="p-8 text-center space-y-3">
            <div className="text-6xl">🌤️</div>
            <h2 className="font-display font-bold text-xl">
              {theme ? `Chủ đề "${theme.label}" chưa có từ` : "Chưa có từ để học"}
            </h2>
            <p className="text-ink-500">
              {theme
                ? "Chờ phân loại hoàn tất hoặc chọn chủ đề khác."
                : "Có lẽ tất cả đã học xong hôm nay — quay lại sau nhé."}
            </p>
            <Link to="/vocab">
              <Button>Về Vocab Hub</Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  // ----------------- Done summary -----------------
  if (done) {
    const durationSec = Math.round((Date.now() - sessionStart.current) / 1000);
    return (
      <div className="max-w-2xl mx-auto py-6 animate-fade-in-up">
        <Card glow>
          <div className="p-8 text-center space-y-4">
            <div className="text-7xl">🎉</div>
            <h2 className="font-display font-extrabold text-3xl">Hoàn tất phiên!</h2>
            <p className="text-ink-500">
              {session.length} từ · {formatDuration(durationSec)} ·{" "}
              <span className="font-bold text-xp">+{xpEarned.current} XP</span>
            </p>
            <div className="grid grid-cols-4 gap-2 text-sm">
              <Stat label="🟥 Sai/quên" value={stats.again} />
              <Stat label="🟧 Khó"       value={stats.hard} />
              <Stat label="🟩 Vừa"       value={stats.good} />
              <Stat label="🟦 Dễ"        value={stats.easy} />
            </div>
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              <Button variant="secondary" icon="refresh" onClick={restart}>
                Học tiếp 1 phiên mới
              </Button>
              <Button icon="map" onClick={() => navigate("/vocab")}>
                Về Vocab Hub
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  // ----------------- Active session -----------------
  if (!current || !entry || !state) return null;

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div>
          <Link to="/vocab" className="text-sm text-ink-500 hover:text-quest-500">
            ← Vocab Hub
          </Link>
          <h1 className="font-display font-bold text-2xl mt-1">
            {theme ? `${theme.emoji} ${theme.label}` : "Học tất cả"}
          </h1>
        </div>
        <div className="text-sm text-ink-500">
          Câu <span className="font-bold text-ink-800 dark:text-ink-100">{index + 1}</span>
          {" / "}
          {session.length}
        </div>
      </div>

      <ProgressBar
        value={(index + (phase === "preview" ? 0 : phase === "typing" ? 0.33 : 0.66)) / session.length}
        color="quest"
      />

      <div className="flex items-center gap-2 text-xs text-ink-500">
        {current.isNew && (
          <span className="px-2 py-0.5 rounded-full bg-correct/15 text-correct font-semibold">
            🆕 Từ mới
          </span>
        )}
        {current.isDue && (
          <span className="px-2 py-0.5 rounded-full bg-quest-100 dark:bg-quest-900/40 text-quest-700 dark:text-quest-200 font-semibold">
            🔁 Đến hạn ôn
          </span>
        )}
        <Link
          to={`/vocab/word/${entry.id}`}
          className="ml-auto hover:text-quest-500"
          title="Xem chi tiết từ này"
        >
          <span className="material-symbols-rounded text-[1.1em] align-middle">info</span>
        </Link>
      </div>

      <Flashcard entry={entry} reverse={false} forceFlipped={flipped ? true : undefined} />

      {phase === "preview" && (
        <Button onClick={handleFlip} fullWidth size="lg" icon="visibility">
          Xem đáp án · Phím cách
        </Button>
      )}

      {phase === "typing" && (
        <TypingCheck
          key={current.wordId}
          expected={entry.word}
          onResult={handleTypingResult}
        />
      )}

      {phase === "rating" && (
        <div className="space-y-2 animate-fade-in-up">
          {typingResult === "correct" && (
            <div className="text-center text-xs text-correct font-medium">
              ✓ Đã nhập đúng · đánh giá độ khó:
            </div>
          )}
          {typingResult === "wrong" && (
            <div className="text-center text-xs text-wrong font-medium">
              ✗ Nhập sai · gợi ý chọn "Sai/quên" hoặc "Khó" để ôn sớm
            </div>
          )}
          {typingResult === "skipped" && (
            <div className="text-center text-xs text-ink-500">
              Đánh giá độ khó của bạn:
            </div>
          )}
          <AnswerBar state={state} onChoose={handleChoice} />
        </div>
      )}
    </div>
  );
};

const Stat = ({ label, value }: { label: string; value: number }) => (
  <div className="px-2 py-2 rounded-xl bg-ink-100 dark:bg-ink-800">
    <div className="text-xs text-ink-500">{label}</div>
    <div className="font-display font-bold text-xl mt-0.5">{value}</div>
  </div>
);
