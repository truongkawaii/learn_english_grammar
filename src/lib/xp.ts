import type { LevelInfo } from "@/types";

// ----------------------------------------------------------------------------
// XP awarding
// ----------------------------------------------------------------------------

const BASE_XP_BY_DIFFICULTY: Record<1 | 2 | 3, number> = {
  1: 10,
  2: 15,
  3: 25,
};

export interface XpAwardInput {
  difficulty: 1 | 2 | 3;
  isCorrect: boolean;
  isFirstTry: boolean;     // first time seeing this question
  viewedAnswer: boolean;
  isRetry: boolean;        // re-attempting a previously-wrong question
  combo: number;           // current correct-streak in session
}

export const computeXpForAnswer = (input: XpAwardInput): number => {
  const base = BASE_XP_BY_DIFFICULTY[input.difficulty];
  if (!input.isCorrect) return 2; // small consolation XP
  if (input.viewedAnswer) return Math.round(base * 0.3);

  let xp = base;
  if (input.isFirstTry) xp += 5;
  if (input.isRetry) xp = Math.round(base * 0.6);

  // combo multiplier, capped
  const comboBonus = Math.min(input.combo, 10);
  xp += comboBonus;

  return xp;
};

// ----------------------------------------------------------------------------
// Streak XP multiplier — reward consistency
// ----------------------------------------------------------------------------
export const streakMultiplier = (streak: number): number => {
  if (streak >= 30) return 1.3;
  if (streak >= 7) return 1.2;
  if (streak >= 3) return 1.1;
  return 1.0;
};

export const applyStreakBonus = (rawXp: number, streak: number): number =>
  Math.round(rawXp * streakMultiplier(streak));

// ----------------------------------------------------------------------------
// Predicted TOEIC Part 5 band from accuracy (200..495 scale)
// ----------------------------------------------------------------------------
export const predictToeicPart5Band = (accuracy: number): number =>
  Math.round(200 + Math.max(0, Math.min(1, accuracy)) * 295);

// ----------------------------------------------------------------------------
// Level curve: level = floor(sqrt(totalXp / 50))
// xp needed for level L = 50 * L^2
// ----------------------------------------------------------------------------

const LEVEL_TITLES = [
  "Newcomer",
  "Beginner",
  "Apprentice",
  "Scholar",
  "Grammarian",
  "Linguist",
  "Polyglot",
  "TOEIC Hunter",
  "TOEIC Master",
  "Grammar Sage",
];

export const xpToLevel = (totalXp: number): number =>
  Math.max(0, Math.floor(Math.sqrt(Math.max(totalXp, 0) / 50)));

export const xpForLevel = (level: number): number => 50 * level * level;

export const levelTitle = (level: number): string => {
  if (level >= LEVEL_TITLES.length) return LEVEL_TITLES[LEVEL_TITLES.length - 1];
  return LEVEL_TITLES[Math.max(0, level)];
};

export const getLevelInfo = (totalXp: number): LevelInfo => {
  const level = xpToLevel(totalXp);
  const xpForCurrentLevel = xpForLevel(level);
  const xpForNext = xpForLevel(level + 1);
  return {
    level,
    title: levelTitle(level),
    xpInLevel: totalXp - xpForCurrentLevel,
    xpToNext: xpForNext - xpForCurrentLevel,
    xpForCurrentLevel,
  };
};
