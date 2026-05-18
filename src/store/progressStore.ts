import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { QuestionProgress, TopicProgress } from "@/types";
import { initialTopicProgress } from "@/lib/mastery";
import { nextSrsState } from "@/lib/srs";

interface ProgressStore {
  topicProgress: Record<string, TopicProgress>;
  questionProgress: Record<string, QuestionProgress>;

  ensureTopic: (topicId: string, unlocked: boolean) => void;
  markTheoryRead: (topicId: string) => void;
  unlockTopic: (topicId: string) => void;
  setBossCleared: (topicId: string, value: boolean) => void;

  recordAnswer: (input: {
    questionId: string;
    topicId: string;
    isCorrect: boolean;
    xpEarned: number;
  }) => void;

  reset: () => void;
}

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set) => ({
      topicProgress: {},
      questionProgress: {},

      ensureTopic: (topicId, unlocked) =>
        set((s) => {
          if (s.topicProgress[topicId]) return s;
          return {
            topicProgress: {
              ...s.topicProgress,
              [topicId]: initialTopicProgress(topicId, unlocked),
            },
          };
        }),
      markTheoryRead: (topicId) =>
        set((s) => {
          const existing = s.topicProgress[topicId] ?? initialTopicProgress(topicId, true);
          return {
            topicProgress: {
              ...s.topicProgress,
              [topicId]: { ...existing, theoryRead: true },
            },
          };
        }),
      unlockTopic: (topicId) =>
        set((s) => {
          const existing = s.topicProgress[topicId] ?? initialTopicProgress(topicId, false);
          return {
            topicProgress: {
              ...s.topicProgress,
              [topicId]: { ...existing, unlocked: true },
            },
          };
        }),
      setBossCleared: (topicId, value) =>
        set((s) => {
          const existing = s.topicProgress[topicId] ?? initialTopicProgress(topicId, true);
          return {
            topicProgress: {
              ...s.topicProgress,
              [topicId]: { ...existing, bossCleared: value },
            },
          };
        }),

      recordAnswer: ({ questionId, topicId, isCorrect, xpEarned }) =>
        set((s) => {
          const now = Date.now();
          const existingQ: QuestionProgress = s.questionProgress[questionId] ?? {
            questionId,
            topicId,
            timesSeen: 0,
            timesCorrect: 0,
            timesWrong: 0,
            srsBox: 0,
          };
          const updatedQ: QuestionProgress = {
            ...existingQ,
            timesSeen: existingQ.timesSeen + 1,
            timesCorrect: existingQ.timesCorrect + (isCorrect ? 1 : 0),
            timesWrong: existingQ.timesWrong + (isCorrect ? 0 : 1),
            lastAnsweredAt: now,
            lastCorrect: isCorrect,
            ...nextSrsState(existingQ, isCorrect, now),
          };
          const existingT =
            s.topicProgress[topicId] ?? initialTopicProgress(topicId, true);
          const nextSeen = existingT.questionsSeen + 1;
          const nextCorrect = existingT.questionsCorrect + (isCorrect ? 1 : 0);
          const acc = nextSeen > 0 ? nextCorrect / nextSeen : 0;
          let masteryTier: TopicProgress["mastery"] = 1;
          if (acc >= 0.9 && nextSeen >= 10) masteryTier = 4;
          else if (acc >= 0.7) masteryTier = 3;
          else if (acc >= 0.4) masteryTier = 2;
          else masteryTier = 1;

          const updatedT: TopicProgress = {
            ...existingT,
            xpEarned: existingT.xpEarned + xpEarned,
            questionsSeen: nextSeen,
            questionsCorrect: nextCorrect,
            mastery: masteryTier,
          };
          return {
            questionProgress: { ...s.questionProgress, [questionId]: updatedQ },
            topicProgress: { ...s.topicProgress, [topicId]: updatedT },
          };
        }),

      reset: () => set({ topicProgress: {}, questionProgress: {} }),
    }),
    { name: "grammar-quest:progress" },
  ),
);
