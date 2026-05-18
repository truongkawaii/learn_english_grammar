import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { VocabItem } from "@/types";

interface VocabStore {
  items: VocabItem[];
  add: (item: VocabItem) => void;
  remove: (id: string) => void;
  reset: () => void;
}

export const useVocabStore = create<VocabStore>()(
  persist(
    (set) => ({
      items: [],
      add: (item) =>
        set((s) => {
          if (s.items.some((i) => i.text.toLowerCase() === item.text.toLowerCase())) {
            return s;
          }
          return { items: [item, ...s.items] };
        }),
      remove: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
      reset: () => set({ items: [] }),
    }),
    { name: "grammar-quest:vocab" },
  ),
);
