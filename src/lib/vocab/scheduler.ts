import type { VocabSrsState } from "@/lib/vocab/srs";
import { useVocabSrsStore } from "@/store/vocabSrsStore";
import { shuffle } from "@/lib/practice";

/** A word eligible for a session, with its current SRS context. */
export interface SchedulableWord {
  wordId: string;
  state: VocabSrsState | null;          // null → never seen ("new")
  isNew: boolean;
  isDue: boolean;
}

export interface ScheduleOptions {
  /** Restrict to a single theme; if absent, draw from all words. */
  themeWordIds?: string[];
  /** Total target session size; defaults to 20. */
  total?: number;
  /** Max new (never-seen) words in the session; defaults to 5. */
  newQuota?: number;
}

/**
 * Build a session of due-review + new words for the user.
 *
 *  - Due reviews are always included (sorted by oldest dueAt first), capped at total.
 *  - New words fill remaining slots up to newQuota.
 *  - Order is interleaved: review, review, new, review, ...
 */
export const buildSession = (
  allWordIds: string[],
  opts: ScheduleOptions = {},
  now: number = Date.now(),
): SchedulableWord[] => {
  const total = opts.total ?? 20;
  const newQuota = opts.newQuota ?? 5;
  const pool = opts.themeWordIds ?? allWordIds;

  const states = useVocabSrsStore.getState().byWord;

  const due: SchedulableWord[] = [];
  const fresh: SchedulableWord[] = [];

  for (const id of pool) {
    const state = states[id] ?? null;
    if (!state || state.status === "new") {
      fresh.push({ wordId: id, state: null, isNew: true, isDue: false });
    } else if (state.dueAt <= now) {
      due.push({ wordId: id, state, isNew: false, isDue: true });
    }
  }

  due.sort((a, b) => (a.state!.dueAt - b.state!.dueAt));
  // Slight randomisation among the "due" with same dueAt is fine because of stable sort.

  const reviewCap = Math.max(0, total - Math.min(newQuota, fresh.length));
  const pickedReviews = due.slice(0, reviewCap);
  const pickedNew = shuffle(fresh).slice(0, total - pickedReviews.length);

  // Interleave reviews and new: 3 reviews, 1 new, repeat
  const out: SchedulableWord[] = [];
  let ri = 0;
  let ni = 0;
  while (ri < pickedReviews.length || ni < pickedNew.length) {
    for (let i = 0; i < 3 && ri < pickedReviews.length; i++) out.push(pickedReviews[ri++]);
    if (ni < pickedNew.length) out.push(pickedNew[ni++]);
  }
  return out;
};

/** Count of words due NOW across a pool. */
export const countDue = (
  wordIds: string[],
  now: number = Date.now(),
): number => {
  const states = useVocabSrsStore.getState().byWord;
  let n = 0;
  for (const id of wordIds) {
    const s = states[id];
    if (s && s.status !== "new" && s.dueAt <= now) n++;
  }
  return n;
};

/** Count of words that have never been touched. */
export const countNew = (wordIds: string[]): number => {
  const states = useVocabSrsStore.getState().byWord;
  let n = 0;
  for (const id of wordIds) {
    const s = states[id];
    if (!s || s.status === "new") n++;
  }
  return n;
};

/** Stats summary for a pool (e.g. all words, or a single theme). */
export interface PoolStats {
  total: number;
  new: number;
  learning: number;
  review: number;
  mastered: number;
  due: number;
  /** Strict % mastered (💎 only / total). */
  pctMastered: number;
  /** Weighted progress: learning 0.33 + review 0.66 + mastered 1.0. */
  pctProgress: number;
  /** Touched (not new) count, for "X / total đã học" labels. */
  touched: number;
}

export const computePoolStats = (
  wordIds: string[],
  now: number = Date.now(),
): PoolStats => {
  const states = useVocabSrsStore.getState().byWord;
  const stats: PoolStats = {
    total: wordIds.length,
    new: 0,
    learning: 0,
    review: 0,
    mastered: 0,
    due: 0,
    pctMastered: 0,
    pctProgress: 0,
    touched: 0,
  };
  for (const id of wordIds) {
    const s = states[id];
    if (!s || s.status === "new") {
      stats.new++;
      continue;
    }
    if (s.status === "learning") stats.learning++;
    else if (s.status === "review") stats.review++;
    else if (s.status === "mastered") stats.mastered++;
    if (s.dueAt <= now) stats.due++;
  }
  stats.touched = stats.learning + stats.review + stats.mastered;
  if (stats.total > 0) {
    stats.pctMastered = stats.mastered / stats.total;
    stats.pctProgress =
      (stats.learning * 0.33 + stats.review * 0.66 + stats.mastered * 1.0) / stats.total;
  }
  return stats;
};
