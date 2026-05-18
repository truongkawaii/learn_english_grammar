import type { Question } from "@/types";
import { useProgressStore } from "@/store/progressStore";
import { ALL_TOPIC_IDS_WITH_QUESTIONS, getQuestionsByTopic } from "@/data/questions";
import { isDueForReview } from "@/lib/srs";
import { shuffle } from "@/lib/practice";

const allQuestions = (): Question[] =>
  ALL_TOPIC_IDS_WITH_QUESTIONS.flatMap((id) => getQuestionsByTopic(id));

const allQuestionsMap = (): Record<string, Question> => {
  const m: Record<string, Question> = {};
  for (const q of allQuestions()) m[q.id] = q;
  return m;
};

export const getMistakeQuestions = (): Question[] => {
  const progresses = useProgressStore.getState().questionProgress;
  const map = allQuestionsMap();
  return Object.values(progresses)
    .filter((p) => p.timesWrong > 0)
    .sort((a, b) => (b.lastAnsweredAt ?? 0) - (a.lastAnsweredAt ?? 0))
    .map((p) => map[p.questionId])
    .filter((q): q is Question => !!q);
};

export const getSrsDueQuestions = (now: number = Date.now()): Question[] => {
  const progresses = useProgressStore.getState().questionProgress;
  const map = allQuestionsMap();
  return Object.values(progresses)
    .filter((p) => isDueForReview(p, now))
    .sort((a, b) => (a.nextReviewAt ?? 0) - (b.nextReviewAt ?? 0))
    .map((p) => map[p.questionId])
    .filter((q): q is Question => !!q);
};

/** Random sample across topics the user has touched. */
export const getDailyQuizQuestions = (count: number): Question[] => {
  const topicProgress = useProgressStore.getState().topicProgress;
  const seenTopics = new Set(
    Object.entries(topicProgress)
      .filter(([, p]) => p.questionsSeen > 0 || p.theoryRead)
      .map(([id]) => id),
  );
  let pool = ALL_TOPIC_IDS_WITH_QUESTIONS
    .filter((id) => seenTopics.has(id))
    .flatMap((id) => getQuestionsByTopic(id));
  if (pool.length < count) pool = allQuestions();
  return shuffle(pool).slice(0, count);
};

/** Mock TOEIC Part 5 simulator — MCQ only. */
export const getMockToeicQuestions = (count = 40): Question[] => {
  const mcq = allQuestions().filter((q) => q.type === "mcq");
  return shuffle(mcq).slice(0, count);
};

/**
 * Diagnostic test: pick ~N questions spread evenly across topics + difficulty.
 * Mixes easy/medium/hard from each topic so the result reflects breadth.
 */
export const getDiagnosticQuestions = (count = 25): Question[] => {
  const byTopic = new Map<string, Question[]>();
  for (const id of ALL_TOPIC_IDS_WITH_QUESTIONS) {
    const pool = getQuestionsByTopic(id);
    if (pool.length > 0) byTopic.set(id, pool);
  }
  if (byTopic.size === 0) return [];
  const topicIds = Array.from(byTopic.keys());
  const perTopic = Math.max(1, Math.floor(count / topicIds.length));
  const picked: Question[] = [];
  for (const id of topicIds) {
    const pool = byTopic.get(id)!;
    const mcqFirst = pool.filter((q) => q.type === "mcq");
    const source = mcqFirst.length >= perTopic ? mcqFirst : pool;
    picked.push(...shuffle(source).slice(0, perTopic));
  }
  // Top up if under-count, or trim if over.
  if (picked.length < count) {
    const remaining = shuffle(allQuestions().filter((q) => !picked.includes(q)));
    picked.push(...remaining.slice(0, count - picked.length));
  }
  return shuffle(picked).slice(0, count);
};

/** Boss fight pool for a topic — prefer harder difficulty if enough exist. */
export const getBossQuestions = (topicId: string, count = 12): Question[] => {
  const pool = getQuestionsByTopic(topicId);
  if (pool.length === 0) return [];
  const hard = pool.filter((q) => q.difficulty >= 2);
  const source = hard.length >= count ? hard : pool;
  return shuffle(source).slice(0, Math.min(count, source.length));
};

export const lookupQuestion = (id: string): Question | undefined => {
  const map = allQuestionsMap();
  return map[id];
};

export const countDueToday = (): number => getSrsDueQuestions().length;

/** Sorted, distinct list of all tags used in the question bank, with counts. */
export const getAllTagsWithCounts = (): { tag: string; count: number }[] => {
  const counts = new Map<string, number>();
  for (const q of allQuestions()) {
    for (const t of q.tags ?? []) {
      counts.set(t, (counts.get(t) ?? 0) + 1);
    }
  }
  return Array.from(counts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
};

export interface CustomDrillOptions {
  /** Tags to include — questions must match ALL or ANY depending on mode. */
  tags: string[];
  /** When "all", question must have every selected tag. "any" = matches any. */
  matchMode: "any" | "all";
  /** Difficulties to keep; empty = all. */
  difficulties: (1 | 2 | 3)[];
  /** Question types to keep; empty = all. */
  types?: ("mcq" | "fill" | "wordOrder")[];
  /** Max questions in the drill. */
  count: number;
}

export const getCustomDrillQuestions = (opts: CustomDrillOptions): Question[] => {
  const tagSet = new Set(opts.tags);
  const diffSet = new Set(opts.difficulties);
  const typeSet = opts.types?.length ? new Set(opts.types) : null;
  const pool = allQuestions().filter((q) => {
    if (tagSet.size > 0) {
      const qTags = q.tags ?? [];
      if (opts.matchMode === "all") {
        for (const t of tagSet) if (!qTags.includes(t)) return false;
      } else {
        if (!qTags.some((t) => tagSet.has(t))) return false;
      }
    }
    if (diffSet.size > 0 && !diffSet.has(q.difficulty)) return false;
    if (typeSet && !typeSet.has(q.type as "mcq" | "fill" | "wordOrder")) return false;
    return true;
  });
  return shuffle(pool).slice(0, opts.count);
};
