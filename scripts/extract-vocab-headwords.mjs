#!/usr/bin/env node
// Parse all tuvung/list*.md files and emit a flat list of headwords + POS.

import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const ROOT = "/Users/nguyenxuantruong/Desktop/Project/htdcorp";
const DIR = join(ROOT, "tuvung");

const files = (await readdir(DIR))
  .filter((f) => /^list\d+\.md$/.test(f))
  .sort((a, b) => {
    const na = parseInt(a.match(/\d+/)[0], 10);
    const nb = parseInt(b.match(/\d+/)[0], 10);
    return na - nb;
  });

// Pattern: `word (pos) /phonetic/`
// or:      `phrasal verb (v) /phon/`
// We accept multi-word headwords too. Strip trailing space and ZWJ etc.
const HEAD_RE = /^([A-Za-z][A-Za-z\s'\-,.]+?)\s+\(([a-z]+(?:\s+[a-z]+)?(?:\.|,\s+[a-z]+(?:\s+[a-z]+)?)*?)\)\s*\/[^/]*\//;

let total = 0;
const byFile = {};
for (const f of files) {
  const content = await readFile(join(DIR, f), "utf8");
  const words = [];
  for (const line of content.split("\n")) {
    const m = line.match(HEAD_RE);
    if (m) {
      words.push({ word: m[1].trim(), pos: m[2].trim() });
    }
  }
  byFile[f] = words;
  total += words.length;
  console.error(`${f}: ${words.length} words`);
}

console.error(`Total: ${total} words across ${files.length} files`);

// Emit JSON to stdout
console.log(JSON.stringify(byFile, null, 0));
