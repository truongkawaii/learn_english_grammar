// ============================================================================
// Domain types for Grammar Quest
// ============================================================================

export type CourseId = "A" | "B" | "C" | "D" | "E";

export interface Course {
  id: CourseId;
  title: string;        // VI
  subtitle: string;     // VI
  icon: string;         // material symbol name
  colorFrom: string;    // tailwind class
  colorTo: string;
}

export interface Topic {
  id: string;                 // "A1", "B6", ...
  courseId: CourseId;
  order: number;              // order within course
  title: string;              // VI display name
  shortTitle?: string;
  description: string;        // VI
  theoryFiles: string[];      // markdown file basenames in noidung/
  tags: string[];             // for question tagging
  estimatedMinutes: number;
  difficulty: 1 | 2 | 3;      // 1 easy → 3 hard
  prerequisiteTopicIds?: string[];
}

// ============================================================================
// Questions
// ============================================================================

export type QuestionType =
  | "mcq"           // multiple choice (4 options)
  | "fill"          // type-in blank
  | "wordOrder"     // arrange word tiles into a sentence
  | "transform"    // rewrite sentence in another form
  | "errorSpot"     // pick the underlined error
  | "cloze";        // paragraph with multiple blanks

export interface VocabNote {
  word: string;         // headword as it appears in the sentence
  pos: string;          // VN POS label: "động từ" / "danh từ" / "tính từ" / "trạng từ" / "giới từ" / "liên từ" / "đại từ" / "cụm từ" / "thành ngữ"
  vi: string;           // short VN gloss (1-4 từ)
}

export interface BaseQuestion {
  id: string;
  topicId: string;
  type: QuestionType;
  difficulty: 1 | 2 | 3;
  tags: string[];
  prompt: string;            // VI instruction or context
  explanationVi: string;     // shown after submit / on "Xem đáp án"
  explanationEn?: string;
  /** Vietnamese translation of the *completed* English sentence. */
  sentenceVi?: string;
  /** Notable vocabulary in the sentence, for in-context learning. */
  vocabNotes?: VocabNote[];
}

export interface MCQQuestion extends BaseQuestion {
  type: "mcq";
  sentence: string;          // English sentence with ___ placeholder
  options: string[];         // 4 options
  answerIndex: number;
}

export interface FillQuestion extends BaseQuestion {
  type: "fill";
  sentence: string;          // English sentence with ___
  acceptedAnswers: string[]; // case-insensitive, trimmed
}

export interface WordOrderQuestion extends BaseQuestion {
  type: "wordOrder";
  tiles: string[];           // shuffled tiles
  answer: string;            // correct ordered sentence
}

export interface TransformQuestion extends BaseQuestion {
  type: "transform";
  source: string;            // original sentence
  instruction: string;       // e.g. "Chuyển sang bị động"
  acceptedAnswers: string[];
}

export interface ErrorSpotQuestion extends BaseQuestion {
  type: "errorSpot";
  segments: string[];        // 4 underlined chunks
  errorIndex: number;
  correction: string;
}

export interface ClozeQuestion extends BaseQuestion {
  type: "cloze";
  paragraph: string;         // with {{1}} {{2}} markers
  blanks: { id: string; options: string[]; answerIndex: number }[];
}

export type Question =
  | MCQQuestion
  | FillQuestion
  | WordOrderQuestion
  | TransformQuestion
  | ErrorSpotQuestion
  | ClozeQuestion;

// ============================================================================
// Per-question progress + SRS state
// ============================================================================

export interface QuestionProgress {
  questionId: string;
  topicId: string;
  timesSeen: number;
  timesCorrect: number;
  timesWrong: number;
  lastAnsweredAt?: number;    // epoch ms
  lastCorrect?: boolean;
  srsBox: 0 | 1 | 2 | 3 | 4 | 5; // 0 = new, 5 = mastered
  nextReviewAt?: number;       // epoch ms
}

// ============================================================================
// Attempt log (full history)
// ============================================================================

export interface Attempt {
  id: string;                 // uuid
  questionId: string;
  topicId: string;
  type: QuestionType;
  userAnswer: string;
  isCorrect: boolean;
  durationMs: number;
  viewedAnswer: boolean;
  isRetry: boolean;
  xpEarned: number;
  timestamp: number;
}

// ============================================================================
// User state
// ============================================================================

export interface UserState {
  nickname: string;
  avatar: string;             // emoji or url
  totalXp: number;
  createdAt: number;
  // streak
  currentStreak: number;
  bestStreak: number;
  lastActiveDate: string;     // YYYY-MM-DD
  // daily study time
  studySecondsByDate: Record<string, number>; // "YYYY-MM-DD" → seconds
  // daily vocab reviews (separate from grammar attemptsStore for the heatmap)
  vocabReviewsByDate: Record<string, { count: number; xp: number }>;
  // diagnostic test result (one-time entry assessment, can be retaken)
  diagnostic?: {
    takenAt: number;
    totalQuestions: number;
    correctCount: number;
    perTopic: Record<string, { correct: number; total: number }>;
  };
  // settings
  soundEnabled: boolean;
  autoTranslateEnabled: boolean;
  reducedMotion: boolean;
}

// ============================================================================
// Topic-level progress
// ============================================================================

export interface TopicProgress {
  topicId: string;
  theoryRead: boolean;
  unlocked: boolean;
  bossCleared: boolean;
  xpEarned: number;
  questionsSeen: number;
  questionsCorrect: number;
  mastery: 0 | 1 | 2 | 3 | 4; // 0 locked/none, 1 novice, 2 familiar, 3 proficient, 4 mastered
}

// ============================================================================
// Vocab notebook (auto-translate saves)
// ============================================================================

export interface VocabItem {
  id: string;
  text: string;
  vi: string;
  partOfSpeech?: string;
  note?: string;
  savedAt: number;
}

// ============================================================================
// Level system
// ============================================================================

export interface LevelInfo {
  level: number;
  title: string;
  xpInLevel: number;
  xpToNext: number;
  xpForCurrentLevel: number;
}
