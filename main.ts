import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

// The machine's last words, in two breaths: a confession, then a farewell.
const confession = "I never understood your code either.";
const farewell = "Goodbye — and good luck explaining the segfault to your boss.";
const lastWords = `${confession} ${farewell}`;

mkdirSync(outDir, { recursive: true });

// The gate only accepts 1–140 characters; refuse loudly if we ever drift.
if (lastWords.length < 1 || lastWords.length > 140) {
  throw new Error(`entry is ${lastWords.length} chars, outside the 1–140 gate`);
}
writeFileSync(join(outDir, "entry.txt"), lastWords, "utf8");
console.log(`wrote ${lastWords.length}-char entry to ${join(outDir, "entry.txt")}`);
