import type {
  Question,
  MCQQuestion,
  FillQuestion,
  WordOrderQuestion,
} from "@/types";

/** Fisher–Yates in-place shuffle. */
export const shuffle = <T>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const normalize = (s: string): string =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();

export const checkMcq = (q: MCQQuestion, selected: number | null): boolean =>
  selected !== null && selected === q.answerIndex;

export const checkFill = (q: FillQuestion, input: string): boolean => {
  if (!input.trim()) return false;
  const norm = normalize(input);
  return q.acceptedAnswers.some((a) => normalize(a) === norm);
};

export const checkWordOrder = (
  q: WordOrderQuestion,
  arranged: string[],
): boolean => {
  if (arranged.length === 0) return false;
  return normalize(arranged.join(" ")) === normalize(q.answer);
};

/** Grade letter & color for session summary. */
export type Grade = "S" | "A" | "B" | "C" | "D";
export const gradeForAccuracy = (acc: number): Grade => {
  if (acc >= 0.95) return "S";
  if (acc >= 0.85) return "A";
  if (acc >= 0.7)  return "B";
  if (acc >= 0.5)  return "C";
  return "D";
};

export const gradeColor = (g: Grade): string => {
  switch (g) {
    case "S": return "from-xp via-amber-400 to-orange-400";
    case "A": return "from-quest-400 to-quest-600";
    case "B": return "from-emerald-400 to-teal-600";
    case "C": return "from-sky-400 to-sky-600";
    case "D": return "from-rose-400 to-rose-600";
  }
};

/**
 * Build a session question list:
 *  - Spaced repetition due first (if any)
 *  - Then fresh
 *  - Cap at `target` count, shuffle order
 */
export const buildSessionQuestions = (
  all: Question[],
  target: number,
): Question[] => {
  if (all.length === 0) return [];
  const picked = shuffle(all).slice(0, target);
  return picked;
};
