import entriesData from "./entries.json";
import themesData from "./themes.json";
import synonymsData from "./synonyms.json";
import type {
  ThemeAssignment,
  ThemeMeta,
  ThemesFile,
  VocabEntry,
  VocabSynonyms,
} from "./types";

const entries = entriesData as VocabEntry[];
const themesFile = themesData as ThemesFile;
const synonymsFile = synonymsData as {
  version: number;
  generatedAt: string;
  total: number;
  entries: Record<string, VocabSynonyms>;
};

export const ALL_ENTRIES: VocabEntry[] = entries;
export const ENTRIES_BY_ID: Record<string, VocabEntry> = Object.fromEntries(
  entries.map((e) => [e.id, e]),
);

export const THEMES: ThemeMeta[] = themesFile.themes;
export const THEMES_BY_ID: Record<string, ThemeMeta> = Object.fromEntries(
  themesFile.themes.map((t) => [t.id, t]),
);

const assignments = themesFile.assignments as Record<string, ThemeAssignment>;

export const getEntry = (id: string): VocabEntry | undefined =>
  ENTRIES_BY_ID[id];

export const getAssignment = (wordId: string): ThemeAssignment | undefined =>
  assignments[wordId];

export const getThemeOfWord = (wordId: string): string => {
  const a = assignments[wordId];
  return a?.themeId ?? "daily";
};

// Pre-compute theme → wordIds for O(1) reads in UI
const _byTheme: Record<string, string[]> = {};
for (const t of themesFile.themes) _byTheme[t.id] = [];
const _uncategorized: string[] = [];
for (const e of entries) {
  const themeId = assignments[e.id]?.themeId;
  if (themeId && _byTheme[themeId]) _byTheme[themeId].push(e.id);
  else _uncategorized.push(e.id);
}

export const getWordIdsByTheme = (themeId: string): string[] =>
  _byTheme[themeId] ?? [];

export const UNCATEGORIZED_WORD_IDS: string[] = _uncategorized;

export const ALL_WORD_IDS: string[] = entries.map((e) => e.id);

/** True when categorize-vocab has not run yet (themes.json is the stub). */
export const isCategorized = (): boolean =>
  Object.keys(assignments).length > 0;

// ---------------------------------------------------------------------------
// Phase V5 — synonyms / antonyms / word-family
// ---------------------------------------------------------------------------

const _synonyms = synonymsFile.entries;

export const getSynonyms = (wordId: string): VocabSynonyms | undefined =>
  _synonyms[wordId];

export const hasSynonyms = (wordId: string): boolean => {
  const s = _synonyms[wordId];
  if (!s) return false;
  return (s.synonyms?.length ?? 0) + (s.antonyms?.length ?? 0) + (s.family?.length ?? 0) > 0;
};
