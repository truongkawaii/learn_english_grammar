#!/usr/bin/env node
// Parse all tuvung/list*.md files into a structured JSON corpus.
// Output: src/data/vocab/entries.json
//
// Source format per entry:
//
//   word (pos) /phonetic/
//    UK
//    US
//   Định nghĩa:
//   <VN definition>
//   =<EN definition>
//   Ví dụ:
//    <EN with [word]> (=Dịch: <VN translation>)
//    ...
//    <blank line>
//
// Notes:
//  - The word(s) wrapped in [brackets] inside examples are highlights → we strip the brackets.
//  - Some entries may have fewer than 3 examples; we keep what we parse.

import { readFile, writeFile, mkdir, readdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const VOCAB_DIR = join(ROOT, "tuvung");
const OUT_DIR = join(ROOT, "src/data/vocab");

const HEAD_RE =
  /^([A-Za-z][A-Za-z\s'\-,.]+?)\s+\(([a-z]+(?:\s+[a-z]+)?(?:\.|,\s*[a-z]+(?:\s+[a-z]+)?)*)\)\s*(\/[^\n/]+\/?)?/;

const stripBrackets = (s) => s.replace(/\[(.+?)\]/g, "$1");

const parseEntry = (block, sourceFile, sourceIndex) => {
  const lines = block.split("\n");
  let head = null;
  let viDef = "";
  let enDef = "";
  const examples = [];

  let mode = "head";
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (mode === "head") {
      const m = trimmed.match(HEAD_RE);
      if (m) {
        head = {
          word: m[1].trim(),
          pos: m[2].trim(),
          phonetic: (m[3] ?? "").replace(/^\/|\/$/g, "").trim(),
        };
        mode = "scan";
      }
      continue;
    }

    if (trimmed === "Định nghĩa:") {
      mode = "viDef";
      continue;
    }
    if (trimmed === "Ví dụ:") {
      mode = "examples";
      continue;
    }

    if (mode === "viDef" && trimmed && !trimmed.startsWith("=")) {
      viDef = trimmed;
      mode = "enDef";
      continue;
    }
    if (mode === "enDef" && trimmed.startsWith("=")) {
      enDef = trimmed.slice(1).trim();
      mode = "scan";
      continue;
    }

    if (mode === "examples" && trimmed) {
      // Pattern: "...EN sentence... (=Dịch: ...VN...)"
      const exMatch = trimmed.match(/^(.+?)\s*\(=Dịch:\s*(.+?)\)\s*$/);
      if (exMatch) {
        examples.push({
          en: stripBrackets(exMatch[1]).trim(),
          vi: stripBrackets(exMatch[2]).trim(),
        });
      }
    }
  }

  if (!head) return null;
  return {
    ...head,
    vi: viDef,
    en: enDef,
    examples,
    sourceFile,
    sourceIndex,
  };
};

const splitEntries = (content) => {
  // An entry begins on any line matching the headword regex.
  // Split content into per-entry blocks anchored at those lines.
  const lines = content.split("\n");
  const blocks = [];
  let cur = [];
  for (const line of lines) {
    if (HEAD_RE.test(line.trim())) {
      if (cur.length) blocks.push(cur.join("\n"));
      cur = [line];
    } else {
      cur.push(line);
    }
  }
  if (cur.length) blocks.push(cur.join("\n"));
  return blocks;
};

const main = async () => {
  await mkdir(OUT_DIR, { recursive: true });
  const files = (await readdir(VOCAB_DIR))
    .filter((f) => /^list\d+\.md$/.test(f))
    .sort((a, b) => parseInt(a.match(/\d+/)[0], 10) - parseInt(b.match(/\d+/)[0], 10));

  const entries = [];
  let nextId = 1;
  let skipped = 0;
  for (const file of files) {
    const content = await readFile(join(VOCAB_DIR, file), "utf8");
    const blocks = splitEntries(content);
    let okInFile = 0;
    blocks.forEach((block, i) => {
      const parsed = parseEntry(block, file, i);
      if (!parsed) {
        skipped++;
        return;
      }
      if (!parsed.vi || !parsed.en) {
        // Some entries may have missing fields — keep what we can but flag
        if (!parsed.vi && !parsed.en && parsed.examples.length === 0) {
          skipped++;
          return;
        }
      }
      const id = `v${String(nextId++).padStart(4, "0")}`;
      entries.push({ id, ...parsed });
      okInFile++;
    });
    console.log(`${file}: ${okInFile} entries`);
  }

  console.log(`\nTotal: ${entries.length} entries, ${skipped} skipped.`);

  // Sanity-check distribution
  const posDist = {};
  let withFullData = 0;
  let with3Examples = 0;
  for (const e of entries) {
    posDist[e.pos] = (posDist[e.pos] ?? 0) + 1;
    if (e.vi && e.en && e.examples.length >= 1) withFullData++;
    if (e.examples.length >= 3) with3Examples++;
  }
  console.log(`POS distribution:`, posDist);
  console.log(`With full data (vi+en+≥1 example): ${withFullData}`);
  console.log(`With ≥ 3 examples: ${with3Examples}`);

  const outFile = join(OUT_DIR, "entries.json");
  await writeFile(outFile, JSON.stringify(entries, null, 2));
  console.log(`\nWrote ${outFile}`);
};

main().catch((e) => {
  console.error("Fatal:", e);
  process.exit(1);
});
