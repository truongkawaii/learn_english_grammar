#!/usr/bin/env node
// Append new questions from a JSON file to an existing topic .ts file.
// Validates schema, dedupes by id, then rewrites the topic file.
//
// Usage:  node scripts/append-questions.mjs <topicId> <additionsJsonPath>

import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIR = join(ROOT, "src/data/questions");

const [topicId, additionsPath] = process.argv.slice(2);
if (!topicId || !additionsPath) {
  console.error("Usage: node scripts/append-questions.mjs <topicId> <additionsJsonPath>");
  process.exit(1);
}

const isValid = (q) => {
  if (!q || typeof q !== "object") return false;
  if (typeof q.id !== "string") return false;
  if (typeof q.topicId !== "string") return false;
  if (typeof q.prompt !== "string") return false;
  if (typeof q.explanationVi !== "string") return false;
  if (![1, 2, 3].includes(q.difficulty)) return false;
  if (!Array.isArray(q.tags)) return false;
  switch (q.type) {
    case "mcq":
      return (
        typeof q.sentence === "string" &&
        Array.isArray(q.options) && q.options.length === 4 &&
        q.options.every((o) => typeof o === "string") &&
        typeof q.answerIndex === "number" &&
        q.answerIndex >= 0 && q.answerIndex < 4
      );
    case "fill":
      return (
        typeof q.sentence === "string" &&
        Array.isArray(q.acceptedAnswers) &&
        q.acceptedAnswers.length > 0 &&
        q.acceptedAnswers.every((a) => typeof a === "string")
      );
    case "wordOrder":
      return (
        Array.isArray(q.tiles) && q.tiles.length >= 3 &&
        q.tiles.every((t) => typeof t === "string") &&
        typeof q.answer === "string"
      );
    default:
      return false;
  }
};

const serialize = (topic, questions) => {
  const items = questions
    .map((q) => "  " + JSON.stringify(q, null, 2).split("\n").join("\n  "))
    .join(",\n");
  return `import type { Question } from "@/types";

// Topic ${topic} — question bank. Mix of hand-curated + auto-generated.
export const questions: Question[] = [
${items}
];
`;
};

const topicPath = join(DIR, `${topicId}.ts`);
if (!existsSync(topicPath)) {
  console.error(`Topic file not found: ${topicPath}`);
  process.exit(1);
}
if (!existsSync(additionsPath)) {
  console.error(`Additions file not found: ${additionsPath}`);
  process.exit(1);
}

const src = await readFile(topicPath, "utf8");
const m = src.match(/Question\[\]\s*=\s*(\[[\s\S]*\])\s*;?\s*$/m);
if (!m) {
  console.error("Could not parse existing topic file");
  process.exit(1);
}
const existing = new Function("return " + m[1] + ";")();
const existingIds = new Set(existing.map((q) => q.id));

const additionsRaw = JSON.parse(await readFile(additionsPath, "utf8"));
if (!Array.isArray(additionsRaw)) {
  console.error("Additions must be a JSON array");
  process.exit(1);
}

let rejected = 0;
let duplicate = 0;
let wrongTopic = 0;
const accepted = [];
for (const q of additionsRaw) {
  if (!isValid(q)) {
    rejected++;
    console.warn(`  ! rejected (schema): ${q?.id ?? "<no id>"}`);
    continue;
  }
  if (q.topicId !== topicId) {
    wrongTopic++;
    console.warn(`  ! rejected (topicId mismatch): ${q.id}`);
    continue;
  }
  if (existingIds.has(q.id)) {
    duplicate++;
    console.warn(`  ! rejected (duplicate id): ${q.id}`);
    continue;
  }
  existingIds.add(q.id);
  accepted.push(q);
}

const merged = [...existing, ...accepted];
await writeFile(topicPath, serialize(topicId, merged));
console.log(
  `${topicId}: +${accepted.length} accepted, ${rejected} schema-rejected, ${duplicate} dup, ${wrongTopic} wrong-topic. Total ${merged.length}.`,
);
