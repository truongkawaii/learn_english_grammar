import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface TranslationEntry {
  text: string;            // original (case preserved)
  vi: string;
  pos?: string;
  note?: string;
  hits: number;
  lastUsedAt: number;
}

interface TranslateCacheStore {
  cache: Record<string, TranslationEntry>;
  get: (text: string) => TranslationEntry | undefined;
  put: (entry: Omit<TranslationEntry, "hits" | "lastUsedAt">) => void;
  hit: (text: string) => void;
  size: () => number;
  reset: () => void;
}

/** Normalize for cache key. Translation is case-insensitive for lookup. */
export const normalizeKey = (text: string): string =>
  text.trim().toLowerCase().replace(/\s+/g, " ");

export const useTranslateCacheStore = create<TranslateCacheStore>()(
  persist(
    (set, get) => ({
      cache: {},
      get: (text) => get().cache[normalizeKey(text)],
      put: (entry) =>
        set((s) => {
          const key = normalizeKey(entry.text);
          const existing = s.cache[key];
          const merged: TranslationEntry = {
            text: entry.text,
            vi: entry.vi,
            pos: entry.pos ?? existing?.pos,
            note: entry.note ?? existing?.note,
            hits: (existing?.hits ?? 0) + 1,
            lastUsedAt: Date.now(),
          };
          return { cache: { ...s.cache, [key]: merged } };
        }),
      hit: (text) =>
        set((s) => {
          const key = normalizeKey(text);
          const e = s.cache[key];
          if (!e) return s;
          return {
            cache: {
              ...s.cache,
              [key]: { ...e, hits: e.hits + 1, lastUsedAt: Date.now() },
            },
          };
        }),
      size: () => Object.keys(get().cache).length,
      reset: () => set({ cache: {} }),
    }),
    { name: "grammar-quest:translation-cache" },
  ),
);
