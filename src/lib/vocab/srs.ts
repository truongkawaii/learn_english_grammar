// SM-2 lite spaced-repetition algorithm for the vocab module.
// Inspired by Anki — has 2-phase lifecycle:
//   1. "learning"  → short steps (1m, 3h, 6h) until graduated to 1d
//   2. "review"    → exponential intervals driven by ease factor
//
// User picks 1 of 4 choices each rep: again / hard / good / easy.

export type SrsChoice = "again" | "hard" | "good" | "easy";

export type SrsStatus = "new" | "learning" | "review" | "mastered";

export interface VocabSrsState {
  wordId: string;
  status: SrsStatus;
  learningStep: 0 | 1 | 2;      // only meaningful while status="learning"
  ease: number;                  // 1.3..3.0, default 2.5
  intervalDays: number;          // current review interval; 0 while learning
  dueAt: number;                 // epoch ms when next due
  reps: number;                  // total reps recorded
  lapses: number;                // times moved back to learning from review
  lastReviewedAt: number;        // 0 if never reviewed
  totalCorrect: number;
  totalWrong: number;
}

export const MINUTE_MS = 60 * 1000;
export const HOUR_MS = 60 * MINUTE_MS;
export const DAY_MS = 24 * HOUR_MS;

export const DEFAULT_EASE = 2.5;
export const MIN_EASE = 1.3;
export const MAX_EASE = 3.0;
export const MASTERED_DAYS = 21;

// Learning-phase delays. 3 steps; "good" on the last step graduates to 1d review.
const LEARNING_STEPS_MS = [1 * MINUTE_MS, 3 * HOUR_MS, 6 * HOUR_MS];
const RELEARNING_DELAY_MS = 5 * MINUTE_MS;

// Graduation intervals (when leaving learning → review)
const GRADUATE_GOOD_DAYS = 1;
const GRADUATE_EASY_DAYS = 3;

// Clamp ease
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

/** Create fresh state for a never-seen word. */
export const newSrsState = (wordId: string): VocabSrsState => ({
  wordId,
  status: "new",
  learningStep: 0,
  ease: DEFAULT_EASE,
  intervalDays: 0,
  dueAt: 0,
  reps: 0,
  lapses: 0,
  lastReviewedAt: 0,
  totalCorrect: 0,
  totalWrong: 0,
});

const mark = (s: VocabSrsState, isCorrect: boolean, now: number): VocabSrsState => ({
  ...s,
  reps: s.reps + 1,
  lastReviewedAt: now,
  totalCorrect: s.totalCorrect + (isCorrect ? 1 : 0),
  totalWrong: s.totalWrong + (isCorrect ? 0 : 1),
});

/** Apply a user choice. Returns new state — pure, no side effects. */
export const applyAnswer = (
  state: VocabSrsState,
  choice: SrsChoice,
  now: number = Date.now(),
): VocabSrsState => {
  // Coming from "new" → treat as learning step 0 first interaction
  const s: VocabSrsState =
    state.status === "new" ? { ...state, status: "learning", learningStep: 0 } : state;

  // ----- Learning phase -----
  if (s.status === "learning") {
    if (choice === "again") {
      return mark(
        { ...s, status: "learning", learningStep: 0, intervalDays: 0, dueAt: now + LEARNING_STEPS_MS[0] },
        false,
        now,
      );
    }
    if (choice === "hard") {
      // stay at same step but a touch longer
      return mark(
        {
          ...s,
          dueAt: now + Math.max(LEARNING_STEPS_MS[s.learningStep] ?? LEARNING_STEPS_MS[0], RELEARNING_DELAY_MS),
        },
        true,
        now,
      );
    }
    if (choice === "good") {
      const nextStep = (s.learningStep + 1) as 0 | 1 | 2;
      if (nextStep >= LEARNING_STEPS_MS.length) {
        // Graduate
        return mark(
          {
            ...s,
            status: "review",
            learningStep: 0,
            intervalDays: GRADUATE_GOOD_DAYS,
            dueAt: now + GRADUATE_GOOD_DAYS * DAY_MS,
          },
          true,
          now,
        );
      }
      return mark(
        {
          ...s,
          learningStep: nextStep,
          intervalDays: 0,
          dueAt: now + LEARNING_STEPS_MS[nextStep],
        },
        true,
        now,
      );
    }
    // easy
    return mark(
      {
        ...s,
        status: "review",
        learningStep: 0,
        intervalDays: GRADUATE_EASY_DAYS,
        dueAt: now + GRADUATE_EASY_DAYS * DAY_MS,
      },
      true,
      now,
    );
  }

  // ----- Review phase -----
  if (s.status === "review" || s.status === "mastered") {
    if (choice === "again") {
      const ease = clamp(s.ease - 0.2, MIN_EASE, MAX_EASE);
      return mark(
        {
          ...s,
          status: "learning",
          learningStep: 0,
          ease,
          intervalDays: 0,
          dueAt: now + RELEARNING_DELAY_MS,
          lapses: s.lapses + 1,
        },
        false,
        now,
      );
    }
    let nextIntervalDays: number;
    let nextEase = s.ease;
    if (choice === "hard") {
      nextIntervalDays = Math.max(1, Math.round(s.intervalDays * 1.2));
      nextEase = clamp(s.ease - 0.15, MIN_EASE, MAX_EASE);
    } else if (choice === "good") {
      nextIntervalDays = Math.max(1, Math.round(s.intervalDays * s.ease));
    } else {
      nextIntervalDays = Math.max(1, Math.round(s.intervalDays * s.ease * 1.3));
      nextEase = clamp(s.ease + 0.15, MIN_EASE, MAX_EASE);
    }
    const nextStatus: SrsStatus = nextIntervalDays >= MASTERED_DAYS ? "mastered" : "review";
    return mark(
      {
        ...s,
        status: nextStatus,
        ease: nextEase,
        intervalDays: nextIntervalDays,
        dueAt: now + nextIntervalDays * DAY_MS,
      },
      true,
      now,
    );
  }

  return s; // unreachable
};

// ----------------------------------------------------------------------------
// Display helpers
// ----------------------------------------------------------------------------

/**
 * Preview the next due delay for each of the 4 choices,
 * without mutating state. Used by the AnswerBar to show "1m / 10m / 1d / 3d".
 */
export const previewIntervals = (
  state: VocabSrsState,
  now: number = Date.now(),
): Record<SrsChoice, string> => {
  const labels: Record<SrsChoice, string> = { again: "", hard: "", good: "", easy: "" };
  for (const choice of ["again", "hard", "good", "easy"] as SrsChoice[]) {
    const next = applyAnswer(state, choice, now);
    labels[choice] = formatDueDelta(next.dueAt - now);
  }
  return labels;
};

export const formatDueDelta = (ms: number): string => {
  if (ms <= 0) return "now";
  if (ms < HOUR_MS) {
    const m = Math.max(1, Math.round(ms / MINUTE_MS));
    return `${m}m`;
  }
  if (ms < DAY_MS) {
    const h = Math.round(ms / HOUR_MS);
    return `${h}h`;
  }
  const d = Math.round(ms / DAY_MS);
  return `${d}d`;
};

export const statusLabel = (s: SrsStatus): string => {
  switch (s) {
    case "new":       return "Chưa học";
    case "learning":  return "Đang học";
    case "review":    return "Ôn tập";
    case "mastered":  return "Đã thuộc";
  }
};

export const statusEmoji = (s: SrsStatus): string => {
  switch (s) {
    case "new":       return "🆕";
    case "learning":  return "🌱";
    case "review":    return "🔁";
    case "mastered":  return "💎";
  }
};
