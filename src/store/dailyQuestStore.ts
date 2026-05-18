import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DAILY_QUESTS } from "@/lib/dailyQuests";
import { todayKey } from "@/lib/format";

interface DailyQuestStore {
  /** YYYY-MM-DD this state applies to. */
  date: string;
  /** Quest IDs that have been completed *and rewarded* today. */
  rewarded: Record<string, true>;

  /** Resync if a new day. Call before reading state. */
  ensureToday: () => void;
  /** Mark a quest as rewarded; return true if newly marked. */
  markRewarded: (questId: string) => boolean;
  reset: () => void;
}

export const useDailyQuestStore = create<DailyQuestStore>()(
  persist(
    (set, get) => ({
      date: todayKey(),
      rewarded: {},
      ensureToday: () => {
        const today = todayKey();
        if (get().date !== today) {
          set({ date: today, rewarded: {} });
        }
      },
      markRewarded: (questId) => {
        get().ensureToday();
        if (get().rewarded[questId]) return false;
        if (!DAILY_QUESTS.find((q) => q.id === questId)) return false;
        set((s) => ({ rewarded: { ...s.rewarded, [questId]: true } }));
        return true;
      },
      reset: () => set({ date: todayKey(), rewarded: {} }),
    }),
    { name: "grammar-quest:daily-quests" },
  ),
);
