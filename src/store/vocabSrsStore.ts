import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  applyAnswer,
  newSrsState,
  type SrsChoice,
  type SrsStatus,
  type VocabSrsState,
} from "@/lib/vocab/srs";

interface VocabSrsStore {
  byWord: Record<string, VocabSrsState>;
  /** Apply a choice for a word. Lazy-initialises state if first time. */
  record: (wordId: string, choice: SrsChoice, now?: number) => VocabSrsState;
  /** Read state for a word; returns "new" placeholder if untouched. */
  getState: (wordId: string) => VocabSrsState;
  /** All states with the given status. */
  getByStatus: (status: SrsStatus) => VocabSrsState[];
  /** Wipe progress. */
  reset: () => void;
}

export const useVocabSrsStore = create<VocabSrsStore>()(
  persist(
    (set, get) => ({
      byWord: {},
      record: (wordId, choice, now = Date.now()) => {
        const prev = get().byWord[wordId] ?? newSrsState(wordId);
        const next = applyAnswer(prev, choice, now);
        set((s) => ({ byWord: { ...s.byWord, [wordId]: next } }));
        return next;
      },
      getState: (wordId) => get().byWord[wordId] ?? newSrsState(wordId),
      getByStatus: (status) =>
        Object.values(get().byWord).filter((s) => s.status === status),
      reset: () => set({ byWord: {} }),
    }),
    { name: "grammar-quest:vocab-srs" },
  ),
);
