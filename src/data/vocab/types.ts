// Vocab module types — shared between data loader, store, and UI.

export interface VocabExample {
  en: string;
  vi: string;
}

export interface VocabEntry {
  id: string;            // "v0001" .. "v1248"
  word: string;
  pos: string;           // raw POS from source: "n" / "v" / "adj" / "adv" / "pronoun" / ...
  phonetic: string;
  vi: string;            // VN definition
  en: string;            // EN definition
  examples: VocabExample[];
  sourceFile: string;
  sourceIndex: number;
}

export interface ThemeMeta {
  id: string;
  label: string;
  emoji: string;
}

export interface ThemeAssignment {
  themeId: string;
  frequency: "high" | "medium" | "low";
}

export interface ThemesFile {
  version: number;
  generatedAt: string;
  themes: ThemeMeta[];
  counts: Record<string, number>;
  assignments: Record<string, ThemeAssignment>;
}

// Optional per-word synonyms (Phase V5)
export interface VocabSynonyms {
  synonyms?: string[];
  antonyms?: string[];
  family?: string[];     // e.g. ["achieve", "achievement", "achievable"]
}

// Pretty POS label (English short → Vietnamese)
export const POS_LABEL: Record<string, string> = {
  n: "danh từ",
  v: "động từ",
  adj: "tính từ",
  adv: "trạng từ",
  pronoun: "đại từ",
  exclamation: "thán từ",
  preposition: "giới từ",
  conjunction: "liên từ",
};

export const prettyPos = (raw: string): string =>
  POS_LABEL[raw] ?? raw;
