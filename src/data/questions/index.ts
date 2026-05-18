import type { Question } from "@/types";

// Auto-discover all <TopicId>.ts files in this folder.
// Drop a new file e.g. "C1.ts" exporting `questions: Question[]` and it
// registers automatically — no edits needed here.
type QuestionModule = { questions: Question[] };

const modules = import.meta.glob<QuestionModule>("./*.ts", { eager: true });

const REGISTRY: Record<string, Question[]> = {};
for (const [path, mod] of Object.entries(modules)) {
  const match = path.match(/\.\/([A-Z]\d+)\.ts$/);
  if (!match) continue;            // skip index.ts and any non-topic files
  if (!mod || !Array.isArray(mod.questions)) continue;
  REGISTRY[match[1]] = mod.questions;
}

export const getQuestionsByTopic = (topicId: string): Question[] =>
  REGISTRY[topicId] ?? [];

export const hasQuestionsForTopic = (topicId: string): boolean =>
  (REGISTRY[topicId]?.length ?? 0) > 0;

export const ALL_TOPIC_IDS_WITH_QUESTIONS = Object.keys(REGISTRY).sort();
