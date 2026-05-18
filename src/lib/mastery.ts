import type { Question, QuestionProgress, TopicProgress } from "@/types";

// ----------------------------------------------------------------------------
// Mastery tiers
// ----------------------------------------------------------------------------

export type MasteryTier = 0 | 1 | 2 | 3 | 4;

export const MASTERY_TIERS: { id: MasteryTier; label: string; emoji: string; min: number }[] = [
  { id: 0, label: "Chưa bắt đầu", emoji: "🔒", min: 0 },
  { id: 1, label: "Novice",       emoji: "🥉", min: 0.0 },
  { id: 2, label: "Familiar",     emoji: "🥈", min: 0.4 },
  { id: 3, label: "Proficient",   emoji: "🥇", min: 0.7 },
  { id: 4, label: "Mastered",     emoji: "💎", min: 0.9 },
];

export const tierToLabel = (tier: MasteryTier): string =>
  MASTERY_TIERS[tier]?.label ?? "—";

export const tierToEmoji = (tier: MasteryTier): string =>
  MASTERY_TIERS[tier]?.emoji ?? "❓";

// ----------------------------------------------------------------------------
// Topic mastery computation
//
// mastery = 0.6 * weightedAccuracy + 0.3 * coverage + 0.1 * recency
//   - weightedAccuracy: correct/(seen) but each question only counts once it
//     has been answered at least once
//   - coverage: distinctSeenQuestions / totalQuestions
//   - recency: 1 if active in last 7 days, decays to 0 over 60 days
// ----------------------------------------------------------------------------

export interface MasteryInputs {
  totalQuestionsInTopic: number;
  questionProgresses: QuestionProgress[];
  now?: number;
}

export interface MasteryResult {
  score: number;       // 0..1
  tier: MasteryTier;
  accuracy: number;
  coverage: number;
  recency: number;
}

export const computeTopicMastery = ({
  totalQuestionsInTopic,
  questionProgresses,
  now = Date.now(),
}: MasteryInputs): MasteryResult => {
  if (totalQuestionsInTopic === 0 || questionProgresses.length === 0) {
    return { score: 0, tier: 0, accuracy: 0, coverage: 0, recency: 0 };
  }

  const totalSeen = questionProgresses.reduce((s, q) => s + q.timesSeen, 0);
  const totalCorrect = questionProgresses.reduce((s, q) => s + q.timesCorrect, 0);
  const accuracy = totalSeen > 0 ? totalCorrect / totalSeen : 0;
  const coverage = questionProgresses.length / totalQuestionsInTopic;

  const lastActivity = Math.max(
    ...questionProgresses.map((q) => q.lastAnsweredAt ?? 0),
  );
  const daysSince = (now - lastActivity) / (1000 * 60 * 60 * 24);
  const recency =
    daysSince <= 7 ? 1 : Math.max(0, 1 - (daysSince - 7) / 53);

  const score = 0.6 * accuracy + 0.3 * Math.min(1, coverage) + 0.1 * recency;

  let tier: MasteryTier = 1;
  if (score >= 0.9) tier = 4;
  else if (score >= 0.7) tier = 3;
  else if (score >= 0.4) tier = 2;
  else tier = 1;

  // Special: lock to 0 if never touched
  if (totalSeen === 0) tier = 0;

  return { score, tier, accuracy, coverage, recency };
};

// ----------------------------------------------------------------------------
// Initialize fresh topic progress
// ----------------------------------------------------------------------------

export const initialTopicProgress = (topicId: string, unlocked: boolean): TopicProgress => ({
  topicId,
  theoryRead: false,
  unlocked,
  bossCleared: false,
  xpEarned: 0,
  questionsSeen: 0,
  questionsCorrect: 0,
  mastery: 0,
});

// ----------------------------------------------------------------------------
// Question helpers
// ----------------------------------------------------------------------------

export const groupQuestionsByTopic = (questions: Question[]): Record<string, Question[]> => {
  const out: Record<string, Question[]> = {};
  for (const q of questions) {
    (out[q.topicId] ??= []).push(q);
  }
  return out;
};
