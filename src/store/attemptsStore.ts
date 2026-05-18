import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Attempt } from "@/types";

interface AttemptsStore {
  attempts: Attempt[];
  add: (attempt: Attempt) => void;
  reset: () => void;
}

// Cap stored attempts to keep localStorage from bloating.
const MAX_ATTEMPTS = 5000;

export const useAttemptsStore = create<AttemptsStore>()(
  persist(
    (set) => ({
      attempts: [],
      add: (attempt) =>
        set((s) => {
          const next = [attempt, ...s.attempts];
          if (next.length > MAX_ATTEMPTS) next.length = MAX_ATTEMPTS;
          return { attempts: next };
        }),
      reset: () => set({ attempts: [] }),
    }),
    { name: "grammar-quest:attempts" },
  ),
);
