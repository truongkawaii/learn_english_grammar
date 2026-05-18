import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { Question, Attempt } from "@/types";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { useUserStore } from "@/store/userStore";
import { useProgressStore } from "@/store/progressStore";
import { useAttemptsStore } from "@/store/attemptsStore";
import { useAchievementsStore } from "@/store/achievementsStore";
import { applyStreakBonus, computeXpForAnswer, getLevelInfo, streakMultiplier } from "@/lib/xp";
import { checkMcq, checkFill, checkWordOrder } from "@/lib/practice";
import { playSfx } from "@/lib/sounds";
import { cn, formatDuration, generateId } from "@/lib/format";
import { QuestionMCQ } from "./QuestionMCQ";
import { QuestionFill } from "./QuestionFill";
import { QuestionWordOrder } from "./QuestionWordOrder";
import { XpPopup } from "./XpPopup";
import { SessionSummary } from "./SessionSummary";
import { SpeakerButton } from "./SpeakerButton";
import { AiTutorPanel } from "./AiTutorPanel";
import { AchievementToast } from "@/components/gamification/AchievementToast";
import { LevelUpModal } from "@/components/gamification/LevelUpModal";

// ----------------------------------------------------------------------------
// Mode config
// ----------------------------------------------------------------------------

export interface SessionResult {
  question: Question;
  userAnswer: string;        // canonical string form
  userAnswerDisplay: string; // human-readable form (e.g. MCQ option text)
  isCorrect: boolean;
  durationMs: number;
  viewedAnswer: boolean;
  xpEarned: number;
}

export interface SessionStats {
  topicTitle: string;
  totalQuestions: number;
  correct: number;
  xpEarned: number;
  bestCombo: number;
  durationSec: number;
  results: SessionResult[];
  restart: () => void;
}

export interface RunnerMode {
  /** Free-form id used for telemetry & summary headline. */
  id: "practice" | "boss" | "mock" | "daily" | "mistakes";
  allowViewAnswer: boolean;
  allowRetryQuestion: boolean;
  /** When false, hide explanation banner and next-button label during the session. */
  revealAfterEachSubmit: boolean;
  /** Force the session to end after this many seconds (Mock TOEIC). */
  timeLimitSec?: number;
  /** Override default <SessionSummary> with a custom screen. */
  renderSummary?: (stats: SessionStats) => ReactNode;
  /** Banner shown above the question card. */
  introBanner?: ReactNode;
}

export const DEFAULT_MODE: RunnerMode = {
  id: "practice",
  allowViewAnswer: true,
  allowRetryQuestion: true,
  revealAfterEachSubmit: true,
};

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------

interface Props {
  topicId: string;
  topicTitle: string;
  questions: Question[];
  mode?: RunnerMode;
}

interface AnswerState {
  mcqSelected: number | null;
  fillValue: string;
  wordArranged: string[];
}

const blankAnswer = (): AnswerState => ({
  mcqSelected: null,
  fillValue: "",
  wordArranged: [],
});

interface QuestionSnapshot {
  answer: AnswerState;
  locked: boolean;
  isCorrect: boolean;
  viewedAnswer: boolean;
}

type QuestionStatus = "unseen" | "correct" | "wrong" | "viewed";

const snapshotStatus = (snap: QuestionSnapshot | undefined): QuestionStatus => {
  if (!snap) return "unseen";
  if (snap.viewedAnswer) return "viewed";
  if (snap.locked && snap.isCorrect) return "correct";
  if (snap.locked) return "wrong";
  return "unseen";
};

export const QuestionRunner = ({
  topicId,
  topicTitle,
  questions,
  mode = DEFAULT_MODE,
}: Props) => {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<AnswerState>(blankAnswer());
  const [locked, setLocked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [viewedAnswer, setViewedAnswer] = useState(false);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalXp, setTotalXp] = useState(0);
  const [xpPopup, setXpPopup] = useState<{ amount: number; key: number }>({ amount: 0, key: 0 });
  const [phase, setPhase] = useState<"running" | "done">("running");
  const [levelUpFor, setLevelUpFor] = useState<number | null>(null);
  const [newAchievements, setNewAchievements] = useState<string[]>([]);
  const [timeLeftSec, setTimeLeftSec] = useState<number | null>(
    mode.timeLimitSec ?? null,
  );
  const [snapshots, setSnapshots] = useState<Record<number, QuestionSnapshot>>({});

  const sessionStart = useRef<number>(Date.now());
  const questionStart = useRef<number>(Date.now());
  const seenIdsRef = useRef<Set<string>>(new Set());
  const resultsRef = useRef<SessionResult[]>([]);

  const addXp = useUserStore((s) => s.addXp);
  const recordActivity = useUserStore((s) => s.recordActivity);
  const recordAnswer = useProgressStore((s) => s.recordAnswer);
  const addAttempt = useAttemptsStore((s) => s.add);
  const checkAchievements = useAchievementsStore((s) => s.checkAndUnlock);

  const current = questions[index];

  // -- Mock TOEIC countdown timer ----------------------------------------------
  useEffect(() => {
    if (!mode.timeLimitSec) return;
    const tickRef = setInterval(() => {
      setTimeLeftSec((prev) => {
        if (prev === null) return null;
        if (prev <= 1) {
          clearInterval(tickRef);
          setPhase("done");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(tickRef);
  }, [mode.timeLimitSec]);

  const checkAnswer = useCallback((): boolean => {
    if (!current) return false;
    if (current.type === "mcq") return checkMcq(current, answer.mcqSelected);
    if (current.type === "fill") return checkFill(current, answer.fillValue);
    if (current.type === "wordOrder") return checkWordOrder(current, answer.wordArranged);
    return false;
  }, [current, answer]);

  const canSubmit = useMemo(() => {
    if (!current || locked) return false;
    if (current.type === "mcq") return answer.mcqSelected !== null;
    if (current.type === "fill") return answer.fillValue.trim().length > 0;
    if (current.type === "wordOrder") return answer.wordArranged.length > 0;
    return false;
  }, [current, answer, locked]);

  const handleSubmit = useCallback(() => {
    if (!current || !canSubmit) return;
    const correct = checkAnswer();
    const isFirstTry = !seenIdsRef.current.has(current.id);
    seenIdsRef.current.add(current.id);

    const rawXp = computeXpForAnswer({
      difficulty: current.difficulty,
      isCorrect: correct,
      isFirstTry,
      viewedAnswer,
      isRetry: !isFirstTry,
      combo: correct ? combo : 0,
    });

    recordActivity();
    const currentStreak = useUserStore.getState().currentStreak;
    const xp = applyStreakBonus(rawXp, currentStreak);

    const prevXp = useUserStore.getState().totalXp;
    const prevLevel = getLevelInfo(prevXp).level;

    addXp(xp);
    recordAnswer({
      questionId: current.id,
      topicId: current.topicId,
      isCorrect: correct,
      xpEarned: xp,
    });

    const now = Date.now();
    const userAnswerCanonical =
      current.type === "mcq"
        ? String(answer.mcqSelected)
        : current.type === "fill"
        ? answer.fillValue
        : answer.wordArranged.join(" ");
    const userAnswerDisplay =
      current.type === "mcq"
        ? answer.mcqSelected !== null
          ? current.options[answer.mcqSelected]
          : ""
        : userAnswerCanonical;

    const durationMs = now - questionStart.current;
    const attemptRecord: Attempt = {
      id: generateId(),
      questionId: current.id,
      topicId: current.topicId,
      type: current.type,
      userAnswer: userAnswerCanonical,
      isCorrect: correct,
      durationMs,
      viewedAnswer,
      isRetry: !isFirstTry,
      xpEarned: xp,
      timestamp: now,
    };
    addAttempt(attemptRecord);

    resultsRef.current.push({
      question: current,
      userAnswer: userAnswerCanonical,
      userAnswerDisplay,
      isCorrect: correct,
      durationMs,
      viewedAnswer,
      xpEarned: xp,
    });

    const nextLevel = getLevelInfo(prevXp + xp).level;
    setLocked(true);
    setIsCorrect(correct);
    setSnapshots((prev) => ({
      ...prev,
      [index]: {
        answer: { ...answer },
        locked: true,
        isCorrect: correct,
        viewedAnswer,
      },
    }));

    const nextTotalCorrect = totalCorrect + (correct ? 1 : 0);
    setTotalCorrect(nextTotalCorrect);
    setTotalXp((n) => n + xp);
    setXpPopup({ amount: xp, key: Date.now() });

    let nextCombo = combo;
    let nextBestCombo = bestCombo;
    if (correct) {
      nextCombo = combo + 1;
      nextBestCombo = Math.max(bestCombo, nextCombo);
      setCombo(nextCombo);
      setBestCombo(nextBestCombo);
      playSfx("correct");
    } else {
      nextCombo = 0;
      setCombo(0);
      playSfx("wrong");
    }

    const sessionDoneCount = index + 1;
    const sessionAccuracy = sessionDoneCount > 0 ? nextTotalCorrect / sessionDoneCount : 0;
    const newly = checkAchievements({
      attempt: attemptRecord,
      sessionCombo: nextCombo,
      sessionBestCombo: nextBestCombo,
      sessionDoneCount,
      sessionAccuracy,
    });
    if (newly.length > 0) {
      setNewAchievements(newly);
      setTimeout(() => playSfx("levelUp"), correct ? 400 : 250);
    }

    if (nextLevel > prevLevel) {
      setLevelUpFor(nextLevel);
      setTimeout(() => playSfx("levelUp"), 700);
    }

    // Mock TOEIC: auto-advance (no banner, no waiting)
    if (!mode.revealAfterEachSubmit) {
      setTimeout(() => {
        if (index >= questions.length - 1) {
          setPhase("done");
        } else {
          setIndex((i) => i + 1);
          setAnswer(blankAnswer());
          setLocked(false);
          setIsCorrect(false);
          setViewedAnswer(false);
          questionStart.current = Date.now();
        }
      }, 250);
    }
  }, [
    current,
    canSubmit,
    checkAnswer,
    viewedAnswer,
    combo,
    bestCombo,
    totalCorrect,
    index,
    addXp,
    recordActivity,
    recordAnswer,
    addAttempt,
    checkAchievements,
    answer,
    mode.revealAfterEachSubmit,
    questions.length,
  ]);

  const handleNext = useCallback(() => {
    if (index >= questions.length - 1) {
      setPhase("done");
      return;
    }
    const nextIdx = index + 1;
    setIndex(nextIdx);
    const snap = snapshots[nextIdx];
    if (snap) {
      setAnswer(snap.answer);
      setLocked(snap.locked);
      setIsCorrect(snap.isCorrect);
      setViewedAnswer(snap.viewedAnswer);
    } else {
      setAnswer(blankAnswer());
      setLocked(false);
      setIsCorrect(false);
      setViewedAnswer(false);
    }
    questionStart.current = Date.now();
  }, [index, questions.length, snapshots]);

  const handleJumpTo = useCallback(
    (newIdx: number) => {
      if (newIdx === index || newIdx < 0 || newIdx >= questions.length) return;
      setIndex(newIdx);
      const snap = snapshots[newIdx];
      if (snap) {
        setAnswer(snap.answer);
        setLocked(snap.locked);
        setIsCorrect(snap.isCorrect);
        setViewedAnswer(snap.viewedAnswer);
      } else {
        setAnswer(blankAnswer());
        setLocked(false);
        setIsCorrect(false);
        setViewedAnswer(false);
      }
      questionStart.current = Date.now();
      playSfx("click");
    },
    [index, questions.length, snapshots],
  );

  const handleRetry = useCallback(() => {
    setAnswer(blankAnswer());
    setLocked(false);
    setIsCorrect(false);
    setViewedAnswer(false);
    setSnapshots((prev) => {
      const next = { ...prev };
      delete next[index];
      return next;
    });
    questionStart.current = Date.now();
    playSfx("click");
  }, [index]);

  const handleViewAnswer = useCallback(() => {
    if (!current || locked) return;
    setViewedAnswer(true);
    let newAnswer = answer;
    if (current.type === "mcq") {
      newAnswer = { ...answer, mcqSelected: current.answerIndex };
    } else if (current.type === "fill") {
      newAnswer = { ...answer, fillValue: current.acceptedAnswers[0] };
    } else if (current.type === "wordOrder") {
      newAnswer = { ...answer, wordArranged: current.answer.split(" ") };
    }
    setAnswer(newAnswer);
    setSnapshots((prev) => ({
      ...prev,
      [index]: {
        answer: newAnswer,
        locked: false,
        isCorrect: false,
        viewedAnswer: true,
      },
    }));
    playSfx("click");
  }, [current, locked, answer, index]);

  const restartSession = useCallback(() => {
    setIndex(0);
    setAnswer(blankAnswer());
    setLocked(false);
    setIsCorrect(false);
    setViewedAnswer(false);
    setCombo(0);
    setBestCombo(0);
    setTotalCorrect(0);
    setTotalXp(0);
    setSnapshots({});
    setPhase("running");
    setTimeLeftSec(mode.timeLimitSec ?? null);
    sessionStart.current = Date.now();
    questionStart.current = Date.now();
    seenIdsRef.current = new Set();
    resultsRef.current = [];
    playSfx("click");
  }, [mode.timeLimitSec]);

  // -- Summary screen ---------------------------------------------------------
  if (phase === "done") {
    const stats: SessionStats = {
      topicTitle,
      totalQuestions: questions.length,
      correct: totalCorrect,
      xpEarned: totalXp,
      bestCombo,
      durationSec: Math.round((Date.now() - sessionStart.current) / 1000),
      results: resultsRef.current,
      restart: restartSession,
    };
    if (mode.renderSummary) return <>{mode.renderSummary(stats)}</>;
    return (
      <SessionSummary
        topicTitle={topicTitle}
        totalQuestions={questions.length}
        correct={totalCorrect}
        xpEarned={totalXp}
        bestCombo={bestCombo}
        durationSec={stats.durationSec}
        onRetry={restartSession}
        practiceUrl={`/practice/${topicId}`}
      />
    );
  }

  if (!current) return null;

  const streakActive = streakMultiplier(useUserStore.getState().currentStreak) > 1;

  return (
    <>
      <XpPopup amount={xpPopup.amount} triggerKey={xpPopup.key} />
      <AchievementToast newlyUnlocked={newAchievements} />
      <LevelUpModal
        open={levelUpFor !== null}
        level={levelUpFor ?? 0}
        onClose={() => setLevelUpFor(null)}
      />

      {mode.introBanner && <div className="mb-4">{mode.introBanner}</div>}

      {/* Top bar: progress + combo + timer */}
      <div className="mb-6 space-y-2">
        <div className="flex items-center justify-between text-sm flex-wrap gap-2">
          <span className="text-ink-500">
            Câu <span className="font-bold text-ink-800 dark:text-ink-100">{index + 1}</span> /{" "}
            {questions.length}
          </span>
          <div className="flex items-center gap-3 flex-wrap">
            {timeLeftSec !== null && (
              <span
                className={cn(
                  "inline-flex items-center gap-1 font-bold tabular-nums",
                  timeLeftSec <= 30
                    ? "text-wrong animate-pulse"
                    : timeLeftSec <= 120
                    ? "text-streak"
                    : "text-ink-600 dark:text-ink-200",
                )}
              >
                <span className="material-symbols-rounded">timer</span>
                {formatDuration(timeLeftSec)}
              </span>
            )}
            {combo >= 2 && (
              <span className="inline-flex items-center gap-1 text-streak font-bold animate-pop-in">
                <span className="material-symbols-rounded">local_fire_department</span>
                Combo x{combo}
              </span>
            )}
            {streakActive && (
              <span
                className="inline-flex items-center gap-1 text-streak font-semibold text-xs"
                title="Streak bonus đang được áp dụng cho XP"
              >
                <span className="material-symbols-rounded text-[1.1em]">
                  local_fire_department
                </span>
                +{Math.round((streakMultiplier(useUserStore.getState().currentStreak) - 1) * 100)}%
              </span>
            )}
            <span className="text-ink-500">
              Đúng:{" "}
              <span className="font-bold text-correct">{totalCorrect}</span> ·
              XP: <span className="font-bold text-xp">+{totalXp}</span>
            </span>
          </div>
        </div>
        <ProgressBar value={(index + (locked ? 1 : 0)) / questions.length} color="quest" />
      </div>

      <Card>
        <div className={cn("p-6", locked && !isCorrect && mode.revealAfterEachSubmit && "animate-shake")}>
          {current.type === "mcq" && (
            <QuestionMCQ
              question={current}
              selected={answer.mcqSelected}
              setSelected={(v) => setAnswer((a) => ({ ...a, mcqSelected: v }))}
              locked={locked}
              revealCorrect={locked && mode.revealAfterEachSubmit}
            />
          )}
          {current.type === "fill" && (
            <QuestionFill
              question={current}
              value={answer.fillValue}
              setValue={(v) => setAnswer((a) => ({ ...a, fillValue: v }))}
              locked={locked}
              revealCorrect={locked && mode.revealAfterEachSubmit}
              isCorrect={isCorrect}
              onSubmit={handleSubmit}
            />
          )}
          {current.type === "wordOrder" && (
            <QuestionWordOrder
              question={current}
              arranged={answer.wordArranged}
              setArranged={(a) => setAnswer((prev) => ({ ...prev, wordArranged: a }))}
              locked={locked}
              revealCorrect={locked && mode.revealAfterEachSubmit}
              isCorrect={isCorrect}
            />
          )}

          {/* Result banner — only when mode wants reveal-after-submit */}
          {locked && mode.revealAfterEachSubmit && (
            <div
              className={cn(
                "mt-5 p-4 rounded-xl border-2 animate-fade-in-up",
                isCorrect
                  ? "border-correct bg-correct/10"
                  : "border-wrong bg-wrong/10",
              )}
              data-translatable="true"
            >
              <div className="flex gap-3">
                <span className={cn("material-symbols-rounded text-3xl", isCorrect ? "text-correct" : "text-wrong")}>
                  {isCorrect ? "verified" : "info"}
                </span>
                <div className="flex-1 text-ink-900 dark:text-ink-100">
                  <div
                    className={cn(
                      "font-display font-bold",
                      isCorrect ? "text-correct" : "text-wrong",
                    )}
                  >
                    {isCorrect ? "Chính xác!" : viewedAnswer ? "Đã xem đáp án" : "Chưa đúng"}
                  </div>
                  <div className="text-sm mt-1 leading-relaxed">
                    {current.explanationVi}
                  </div>
                </div>
              </div>

              {(() => {
                const fullEn = buildFullSentence(current);
                if (!current.sentenceVi && !fullEn) return null;
                return (
                  <div className="mt-3 pt-3 border-t border-ink-200/60 dark:border-ink-700/60">
                    <div className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400 mb-1 flex items-center gap-1">
                      <span className="material-symbols-rounded text-[1.1em]">translate</span>
                      Nghĩa của câu
                      {fullEn && (
                        <SpeakerButton text={fullEn} size="sm" title="Đọc câu hoàn chỉnh" className="ml-auto" />
                      )}
                    </div>
                    {fullEn && (
                      <div className="text-sm text-ink-700 dark:text-ink-200">{fullEn}</div>
                    )}
                    {current.sentenceVi && (
                      <div className="text-sm text-ink-600 dark:text-ink-300 italic mt-0.5">
                        {current.sentenceVi}
                      </div>
                    )}
                  </div>
                );
              })()}

              {current.vocabNotes && current.vocabNotes.length > 0 && (
                <div className="mt-3 pt-3 border-t border-ink-200/60 dark:border-ink-700/60">
                  <div className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400 mb-2 flex items-center gap-1">
                    <span className="material-symbols-rounded text-[1.1em]">menu_book</span>
                    Từ vựng trong câu
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
                    {current.vocabNotes.map((v, i) => (
                      <li key={i} className="flex items-baseline gap-2">
                        <span className="font-semibold text-quest-600 dark:text-quest-300">
                          {v.word}
                        </span>
                        <span className="text-xs italic text-ink-400 shrink-0">
                          ({v.pos})
                        </span>
                        <span className="text-ink-600 dark:text-ink-300">
                          {v.vi}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(() => {
                const fullEn = buildFullSentence(current);
                const userDisplay =
                  current.type === "mcq"
                    ? (answer.mcqSelected !== null ? current.options[answer.mcqSelected] : undefined)
                    : current.type === "fill"
                    ? answer.fillValue
                    : answer.wordArranged.join(" ");
                const correctText =
                  current.type === "mcq"
                    ? current.options[current.answerIndex]
                    : current.type === "fill"
                    ? current.acceptedAnswers[0]
                    : current.type === "wordOrder"
                    ? current.answer
                    : "";
                if (!fullEn || !correctText) return null;
                return (
                  <AiTutorPanel
                    request={{
                      fullSentence: fullEn,
                      correctAnswer: correctText,
                      userAnswer: !isCorrect ? userDisplay : undefined,
                      topicTitle,
                      existingExplanationVi: current.explanationVi,
                    }}
                  />
                );
              })()}
            </div>
          )}
        </div>
      </Card>

      {/* Action bar */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex gap-2">
          {!locked && !viewedAnswer && mode.allowViewAnswer && (
            <Button variant="ghost" icon="visibility" onClick={handleViewAnswer}>
              Xem đáp án (-XP)
            </Button>
          )}
          {locked && !isCorrect && mode.allowRetryQuestion && (
            <Button variant="secondary" icon="refresh" onClick={handleRetry}>
              Làm lại câu này
            </Button>
          )}
        </div>
        <div className="flex gap-2 ml-auto">
          {!locked ? (
            <Button onClick={handleSubmit} disabled={!canSubmit} icon="check_circle">
              {mode.revealAfterEachSubmit ? "Kiểm tra" : "Tiếp"}
            </Button>
          ) : (
            mode.revealAfterEachSubmit && (
              <Button onClick={handleNext} icon="arrow_forward">
                {index >= questions.length - 1 ? "Xem kết quả" : "Câu tiếp"}
              </Button>
            )
          )}
        </div>
      </div>

      {mode.revealAfterEachSubmit && questions.length > 1 && (
        <QuestionGrid
          questions={questions}
          currentIndex={index}
          snapshots={snapshots}
          onJump={handleJumpTo}
        />
      )}
    </>
  );
};

// ---------------------------------------------------------------------------
// QuestionGrid — jump-to-question buttons at the bottom of the runner
// ---------------------------------------------------------------------------

const QuestionGrid = ({
  questions,
  currentIndex,
  snapshots,
  onJump,
}: {
  questions: Question[];
  currentIndex: number;
  snapshots: Record<number, QuestionSnapshot>;
  onJump: (i: number) => void;
}) => {
  const total = questions.length;
  let correctCount = 0;
  let wrongCount = 0;
  let viewedCount = 0;
  for (const k of Object.keys(snapshots)) {
    const st = snapshotStatus(snapshots[Number(k)]);
    if (st === "correct") correctCount++;
    else if (st === "wrong") wrongCount++;
    else if (st === "viewed") viewedCount++;
  }
  const doneCount = correctCount + wrongCount + viewedCount;
  return (
    <div className="mt-6 rounded-2xl border border-ink-200 dark:border-ink-800 bg-white/40 dark:bg-ink-900/40 p-4">
      <div className="flex items-center justify-between flex-wrap gap-2 mb-3 text-xs">
        <div className="font-display font-bold text-sm">Danh sách câu</div>
        <div className="flex items-center gap-2 text-ink-500 flex-wrap">
          <Legend color="bg-correct" label={`Đúng ${correctCount}`} />
          <Legend color="bg-wrong" label={`Sai ${wrongCount}`} />
          {viewedCount > 0 && <Legend color="bg-streak" label={`Xem ${viewedCount}`} />}
          <Legend color="bg-ink-300 dark:bg-ink-700" label={`Chưa ${total - doneCount}`} />
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 justify-center">
        {questions.map((q, i) => {
          const status = snapshotStatus(snapshots[i]);
          const isCurrent = i === currentIndex;
          return (
            <button
              key={`${q.id}-${i}`}
              onClick={() => onJump(i)}
              title={`Câu ${i + 1}${
                status === "correct"
                  ? " · Đúng"
                  : status === "wrong"
                  ? " · Sai"
                  : status === "viewed"
                  ? " · Đã xem đáp án"
                  : " · Chưa làm"
              }`}
              className={cn(
                "w-9 h-9 rounded-lg text-xs font-bold transition-all border-2 tabular-nums",
                isCurrent && "ring-2 ring-quest-500 ring-offset-1 dark:ring-offset-ink-900 scale-110",
                status === "correct" && "bg-correct/15 text-correct border-correct hover:bg-correct/25",
                status === "wrong" && "bg-wrong/15 text-wrong border-wrong hover:bg-wrong/25",
                status === "viewed" && "bg-streak/15 text-streak border-streak hover:bg-streak/25",
                status === "unseen" &&
                  "bg-ink-100 dark:bg-ink-800 text-ink-500 border-transparent hover:bg-ink-200 dark:hover:bg-ink-700",
              )}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const Legend = ({ color, label }: { color: string; label: string }) => (
  <span className="inline-flex items-center gap-1">
    <span className={cn("w-3 h-3 rounded", color)} />
    {label}
  </span>
);

/** Returns the full English sentence with the correct answer substituted in. */
const buildFullSentence = (q: Question): string | null => {
  if (q.type === "mcq") {
    return q.sentence.replace(/_{2,}/g, q.options[q.answerIndex] ?? "___").trim();
  }
  if (q.type === "fill") {
    return q.sentence.replace(/_{2,}/g, q.acceptedAnswers[0] ?? "___").trim();
  }
  if (q.type === "wordOrder") {
    return q.answer;
  }
  return null;
};
