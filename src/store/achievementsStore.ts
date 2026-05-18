import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ACHIEVEMENTS, type AchievementContext } from "@/lib/achievements";

interface UnlockedRecord {
  unlockedAt: number;
}

interface AchievementsStore {
  unlocked: Record<string, UnlockedRecord>;
  /** Returns the list of newly unlocked achievement IDs. */
  checkAndUnlock: (ctx: AchievementContext) => string[];
  reset: () => void;
}

export const useAchievementsStore = create<AchievementsStore>()(
  persist(
    (set, get) => ({
      unlocked: {},
      checkAndUnlock: (ctx) => {
        const already = get().unlocked;
        const newly: string[] = [];
        for (const ach of ACHIEVEMENTS) {
          if (already[ach.id]) continue;
          try {
            if (ach.check(ctx)) newly.push(ach.id);
          } catch (e) {
            // never let a buggy predicate kill the flow
            // eslint-disable-next-line no-console
            console.warn(`[achievements] check failed for ${ach.id}`, e);
          }
        }
        if (newly.length > 0) {
          const now = Date.now();
          const patch: Record<string, UnlockedRecord> = {};
          for (const id of newly) patch[id] = { unlockedAt: now };
          set({ unlocked: { ...already, ...patch } });
        }
        return newly;
      },
      reset: () => set({ unlocked: {} }),
    }),
    { name: "grammar-quest:achievements" },
  ),
);
