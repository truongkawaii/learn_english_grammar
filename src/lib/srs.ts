import type { QuestionProgress } from "@/types";

// ----------------------------------------------------------------------------
// Lightweight Leitner-box spaced repetition.
//
// Box → interval (days):  0=new, 1=1d, 2=3d, 3=7d, 4=14d, 5=30d
// Correct: advance one box (cap 5)
// Wrong:   drop back to box 1
// ----------------------------------------------------------------------------

const DAY_MS = 24 * 60 * 60 * 1000;

const INTERVAL_DAYS: Record<QuestionProgress["srsBox"], number> = {
  0: 0,
  1: 1,
  2: 3,
  3: 7,
  4: 14,
  5: 30,
};

export const nextSrsState = (
  current: QuestionProgress,
  isCorrect: boolean,
  now: number = Date.now(),
): Pick<QuestionProgress, "srsBox" | "nextReviewAt"> => {
  const nextBox: QuestionProgress["srsBox"] = isCorrect
    ? ((Math.min(current.srsBox + 1, 5) as QuestionProgress["srsBox"]))
    : 1;
  const intervalDays = INTERVAL_DAYS[nextBox];
  return {
    srsBox: nextBox,
    nextReviewAt: now + intervalDays * DAY_MS,
  };
};

export const isDueForReview = (
  progress: QuestionProgress,
  now: number = Date.now(),
): boolean => {
  if (progress.srsBox === 0) return false;
  if (!progress.nextReviewAt) return true;
  return progress.nextReviewAt <= now;
};

export const getDueQuestionIds = (
  progresses: QuestionProgress[],
  now: number = Date.now(),
): string[] =>
  progresses.filter((p) => isDueForReview(p, now)).map((p) => p.questionId);
