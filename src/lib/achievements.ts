import type { Attempt, QuestionType } from "@/types";
import { useUserStore } from "@/store/userStore";
import { useProgressStore } from "@/store/progressStore";
import { useAttemptsStore } from "@/store/attemptsStore";
import { useVocabSrsStore } from "@/store/vocabSrsStore";

// ----------------------------------------------------------------------------
// Achievement definitions
// ----------------------------------------------------------------------------

export interface AchievementContext {
  attempt: Attempt;             // the attempt that was just recorded
  sessionCombo: number;
  sessionBestCombo: number;
  sessionDoneCount?: number;    // questions answered in this session (for SessionSummary-time checks)
  sessionAccuracy?: number;     // 0..1 (for SessionSummary-time checks)
}

export type AchievementCategory =
  | "progress"
  | "skill"
  | "streak"
  | "topic"
  | "time"
  | "fun"
  | "vocab";

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;                 // material symbol name
  category: AchievementCategory;
  xpReward: number;
  /** Return true if user just unlocked this. */
  check: (ctx: AchievementContext) => boolean;
}

// Helpers that pull live state from stores
const totalAttempts = () => useAttemptsStore.getState().attempts.length;
const correctAttempts = () =>
  useAttemptsStore.getState().attempts.filter((a) => a.isCorrect).length;
const correctByType = (t: QuestionType) =>
  useAttemptsStore.getState().attempts.filter((a) => a.isCorrect && a.type === t).length;
const masteredCount = () =>
  Object.values(useProgressStore.getState().topicProgress).filter((p) => p.mastery === 4).length;

export const ACHIEVEMENTS: Achievement[] = [
  // -- Progress milestones
  {
    id: "first-blood",
    title: "Cú đánh đầu tiên",
    description: "Trả lời đúng câu đầu tiên.",
    icon: "looks_one",
    category: "progress",
    xpReward: 10,
    check: (ctx) => ctx.attempt.isCorrect && correctAttempts() === 1,
  },
  {
    id: "century",
    title: "Trăm phát một trúng",
    description: "Đạt 100 câu đúng.",
    icon: "filter_9_plus",
    category: "progress",
    xpReward: 50,
    check: () => correctAttempts() >= 100,
  },
  {
    id: "thousand",
    title: "Nghìn câu chiến",
    description: "Đạt 1000 câu đã làm.",
    icon: "rocket_launch",
    category: "progress",
    xpReward: 250,
    check: () => totalAttempts() >= 1000,
  },

  // -- Skill / accuracy
  {
    id: "combo-5",
    title: "Liên hoàn cước",
    description: "Đúng 5 câu liên tiếp trong 1 phiên.",
    icon: "local_fire_department",
    category: "skill",
    xpReward: 20,
    check: (ctx) => ctx.sessionCombo >= 5,
  },
  {
    id: "combo-10",
    title: "Hoàn hảo x10",
    description: "Đúng 10 câu liên tiếp trong 1 phiên.",
    icon: "bolt",
    category: "skill",
    xpReward: 50,
    check: (ctx) => ctx.sessionCombo >= 10,
  },
  {
    id: "perfect-session",
    title: "Trận đấu hoàn hảo",
    description: "Hoàn thành 1 phiên với 100% accuracy.",
    icon: "verified",
    category: "skill",
    xpReward: 80,
    check: (ctx) =>
      (ctx.sessionAccuracy ?? 0) >= 0.999 && (ctx.sessionDoneCount ?? 0) >= 5,
  },
  {
    id: "speed-demon",
    title: "Tốc thủ",
    description: "Trả lời đúng trong dưới 5 giây.",
    icon: "speed",
    category: "skill",
    xpReward: 20,
    check: (ctx) => ctx.attempt.isCorrect && ctx.attempt.durationMs < 5000,
  },

  // -- Question-type mastery
  {
    id: "mcq-50",
    title: "Bậc thầy trắc nghiệm",
    description: "50 câu MCQ đúng.",
    icon: "rule",
    category: "skill",
    xpReward: 40,
    check: () => correctByType("mcq") >= 50,
  },
  {
    id: "fill-30",
    title: "Cao thủ điền từ",
    description: "30 câu điền đúng.",
    icon: "edit_note",
    category: "skill",
    xpReward: 40,
    check: () => correctByType("fill") >= 30,
  },
  {
    id: "wordorder-20",
    title: "Phù thuỷ sắp câu",
    description: "20 câu xếp từ đúng.",
    icon: "view_week",
    category: "skill",
    xpReward: 40,
    check: () => correctByType("wordOrder") >= 20,
  },

  // -- Topic mastery
  {
    id: "first-mastery",
    title: "Đỉnh đầu tiên",
    description: "Đạt Mastered (💎) cho 1 chủ đề.",
    icon: "diamond",
    category: "topic",
    xpReward: 100,
    check: () => masteredCount() >= 1,
  },
  {
    id: "five-mastery",
    title: "Pentakill",
    description: "Mastered 5 chủ đề.",
    icon: "grade",
    category: "topic",
    xpReward: 300,
    check: () => masteredCount() >= 5,
  },
  {
    id: "all-mastery",
    title: "Bậc thầy ngữ pháp",
    description: "Mastered cả 21 chủ đề.",
    icon: "military_tech",
    category: "topic",
    xpReward: 1000,
    check: () => masteredCount() >= 21,
  },

  // -- Streak
  {
    id: "streak-3",
    title: "3 ngày liền tay",
    description: "Streak 3 ngày liên tiếp.",
    icon: "local_fire_department",
    category: "streak",
    xpReward: 30,
    check: () => useUserStore.getState().currentStreak >= 3,
  },
  {
    id: "streak-7",
    title: "Tuần lễ vàng",
    description: "Streak 7 ngày liên tiếp.",
    icon: "calendar_month",
    category: "streak",
    xpReward: 100,
    check: () => useUserStore.getState().currentStreak >= 7,
  },
  {
    id: "streak-30",
    title: "Bất khả chiến bại",
    description: "Streak 30 ngày liên tiếp.",
    icon: "shield",
    category: "streak",
    xpReward: 500,
    check: () => useUserStore.getState().currentStreak >= 30,
  },

  // -- Time-of-day fun
  {
    id: "early-bird",
    title: "Chim sớm bắt sâu",
    description: "Làm bài trước 7h sáng.",
    icon: "wb_sunny",
    category: "fun",
    xpReward: 15,
    check: (ctx) => new Date(ctx.attempt.timestamp).getHours() < 7,
  },
  {
    id: "night-owl",
    title: "Cú đêm",
    description: "Làm bài sau 22h.",
    icon: "bedtime",
    category: "fun",
    xpReward: 15,
    check: (ctx) => new Date(ctx.attempt.timestamp).getHours() >= 22,
  },

  // -- Time invested
  {
    id: "hour-1",
    title: "60 phút đầu tiên",
    description: "Học tổng cộng 1 giờ.",
    icon: "schedule",
    category: "time",
    xpReward: 50,
    check: () => {
      const total = Object.values(useUserStore.getState().studySecondsByDate).reduce(
        (s, v) => s + v,
        0,
      );
      return total >= 3600;
    },
  },
  {
    id: "hour-10",
    title: "Học giả",
    description: "Học tổng cộng 10 giờ.",
    icon: "auto_stories",
    category: "time",
    xpReward: 200,
    check: () => {
      const total = Object.values(useUserStore.getState().studySecondsByDate).reduce(
        (s, v) => s + v,
        0,
      );
      return total >= 36000;
    },
  },

  // -- Vocab module
  {
    id: "vocab-first-word",
    title: "Bước đầu từ vựng",
    description: "Trả lời từ vựng đầu tiên.",
    icon: "menu_book",
    category: "vocab",
    xpReward: 10,
    check: () => Object.keys(useVocabSrsStore.getState().byWord).length >= 1,
  },
  {
    id: "vocab-50-touched",
    title: "Khám phá 50 từ",
    description: "Đã đụng tới 50 từ vựng khác nhau.",
    icon: "explore",
    category: "vocab",
    xpReward: 30,
    check: () => Object.keys(useVocabSrsStore.getState().byWord).length >= 50,
  },
  {
    id: "vocab-mastered-10",
    title: "Bậc thầy từ vựng I",
    description: "Master 💎 10 từ vựng.",
    icon: "diamond",
    category: "vocab",
    xpReward: 80,
    check: () =>
      Object.values(useVocabSrsStore.getState().byWord).filter(
        (s) => s.status === "mastered",
      ).length >= 10,
  },
  {
    id: "vocab-mastered-100",
    title: "Bậc thầy từ vựng II",
    description: "Master 💎 100 từ vựng.",
    icon: "workspace_premium",
    category: "vocab",
    xpReward: 300,
    check: () =>
      Object.values(useVocabSrsStore.getState().byWord).filter(
        (s) => s.status === "mastered",
      ).length >= 100,
  },
  {
    id: "vocab-mastered-500",
    title: "Polyglot",
    description: "Master 💎 500 từ vựng.",
    icon: "military_tech",
    category: "vocab",
    xpReward: 1000,
    check: () =>
      Object.values(useVocabSrsStore.getState().byWord).filter(
        (s) => s.status === "mastered",
      ).length >= 500,
  },
  {
    id: "vocab-daily-goal",
    title: "20 từ một ngày",
    description: "Hoàn thành mục tiêu 20 từ trong 1 ngày.",
    icon: "celebration",
    category: "vocab",
    xpReward: 60,
    check: () => {
      const start = new Date();
      start.setHours(0, 0, 0, 0);
      const ms = start.getTime();
      const states = useVocabSrsStore.getState().byWord;
      let n = 0;
      for (const s of Object.values(states)) {
        if (s.lastReviewedAt >= ms) n++;
      }
      return n >= 20;
    },
  },
];

export const ACHIEVEMENTS_BY_ID: Record<string, Achievement> = Object.fromEntries(
  ACHIEVEMENTS.map((a) => [a.id, a]),
);

export const ACHIEVEMENT_CATEGORY_LABEL: Record<AchievementCategory, string> = {
  progress: "Tiến độ",
  skill: "Kỹ năng",
  streak: "Streak",
  topic: "Chủ đề",
  time: "Thời gian",
  fun: "Vui vui",
  vocab: "Từ vựng",
};
