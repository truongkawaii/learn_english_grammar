import { useUserStore } from "@/store/userStore";
import { useAttemptsStore } from "@/store/attemptsStore";
import { useVocabSrsStore } from "@/store/vocabSrsStore";
import { todayKey } from "@/lib/format";
import type { Attempt } from "@/types";

export interface DailyQuestDef {
  id: string;
  title: string;
  description: string;
  icon: string;
  target: number;
  xpReward: number;
  /** Current progress towards target, must be 0..target. */
  measure: () => number;
}

const todayStart = (): number => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.getTime();
};

const todayAttempts = (): Attempt[] => {
  const start = todayStart();
  return useAttemptsStore.getState().attempts.filter((a) => a.timestamp >= start);
};

export const DAILY_QUESTS: DailyQuestDef[] = [
  {
    id: "daily-10-questions",
    title: "20 câu hôm nay",
    description: "Hoàn thành 20 câu bài tập trong hôm nay.",
    icon: "task_alt",
    target: 20,
    xpReward: 60,
    measure: () => Math.min(20, todayAttempts().length),
  },
  {
    id: "daily-7-correct",
    title: "14 câu đúng",
    description: "Đạt 14 câu đúng trong hôm nay.",
    icon: "check_circle",
    target: 14,
    xpReward: 80,
    measure: () => Math.min(14, todayAttempts().filter((a) => a.isCorrect).length),
  },
  {
    id: "daily-15-minutes",
    title: "Học 30 phút",
    description: "Tổng thời gian học hôm nay đạt 30 phút.",
    icon: "timer",
    target: 30 * 60, // seconds
    xpReward: 80,
    measure: () =>
      Math.min(
        30 * 60,
        useUserStore.getState().studySecondsByDate[todayKey()] ?? 0,
      ),
  },
  {
    id: "daily-20-vocab",
    title: "20 từ vựng hôm nay",
    description: "Ôn / học 20 từ vựng trong ngày.",
    icon: "menu_book",
    target: 20,
    xpReward: 50,
    measure: () => {
      const start = new Date();
      start.setHours(0, 0, 0, 0);
      const ms = start.getTime();
      const states = useVocabSrsStore.getState().byWord;
      let n = 0;
      for (const s of Object.values(states)) {
        if (s.lastReviewedAt >= ms) n++;
      }
      return Math.min(20, n);
    },
  },
];

export const DAILY_QUEST_TOTAL_XP = DAILY_QUESTS.reduce(
  (s, q) => s + q.xpReward,
  0,
);
