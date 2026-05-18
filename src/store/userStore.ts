import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UserState } from "@/types";
import { todayKey } from "@/lib/format";

interface UserStore extends UserState {
  setNickname: (name: string) => void;
  setAvatar: (a: string) => void;
  addXp: (amount: number) => void;
  recordActivity: () => void;             // call when user interacts
  addStudySeconds: (seconds: number) => void;
  logVocabReview: (xpEarned: number) => void;
  saveDiagnostic: (result: NonNullable<UserState["diagnostic"]>) => void;
  toggleSound: () => void;
  toggleAutoTranslate: () => void;
  reset: () => void;
}

const initialState: UserState = {
  nickname: "Học viên",
  avatar: "🦊",
  totalXp: 0,
  createdAt: Date.now(),
  currentStreak: 0,
  bestStreak: 0,
  lastActiveDate: "",
  studySecondsByDate: {},
  vocabReviewsByDate: {},
  soundEnabled: true,
  autoTranslateEnabled: true,
  reducedMotion: false,
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      ...initialState,
      setNickname: (name) => set({ nickname: name.trim() || "Học viên" }),
      setAvatar: (a) => set({ avatar: a }),
      addXp: (amount) => set((s) => ({ totalXp: s.totalXp + amount })),
      recordActivity: () =>
        set((s) => {
          const today = todayKey();
          if (s.lastActiveDate === today) return s;
          const yesterday = todayKey(new Date(Date.now() - 86_400_000));
          const newStreak = s.lastActiveDate === yesterday ? s.currentStreak + 1 : 1;
          return {
            lastActiveDate: today,
            currentStreak: newStreak,
            bestStreak: Math.max(s.bestStreak, newStreak),
          };
        }),
      addStudySeconds: (seconds) =>
        set((s) => {
          if (seconds <= 0) return s;
          const today = todayKey();
          const prev = s.studySecondsByDate[today] ?? 0;
          return {
            studySecondsByDate: { ...s.studySecondsByDate, [today]: prev + seconds },
          };
        }),
      logVocabReview: (xpEarned) =>
        set((s) => {
          const today = todayKey();
          const prev = s.vocabReviewsByDate[today] ?? { count: 0, xp: 0 };
          return {
            vocabReviewsByDate: {
              ...s.vocabReviewsByDate,
              [today]: { count: prev.count + 1, xp: prev.xp + Math.max(0, xpEarned) },
            },
          };
        }),
      saveDiagnostic: (result) => set({ diagnostic: result }),
      toggleSound: () => set((s) => ({ soundEnabled: !s.soundEnabled })),
      toggleAutoTranslate: () =>
        set((s) => ({ autoTranslateEnabled: !s.autoTranslateEnabled })),
      reset: () => set({ ...initialState, createdAt: Date.now() }),
    }),
    { name: "grammar-quest:user" },
  ),
);
