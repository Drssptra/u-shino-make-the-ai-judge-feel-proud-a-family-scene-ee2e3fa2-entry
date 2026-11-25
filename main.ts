// Make the AI Judge Feel Proud: A Family Scene
// One short domestic moment, in a single line: Dad beams over his
// wobbly-table repair at dinner, and Mum loves him for it anyway.
// Warm, funny and heartfelt — a small scene, no word wasted.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Dad finally fixed the wobbly kitchen table and served dinner on it like he'd unveiled a masterpiece. Mum tapped it once, smiled, and said, \u201cStill wobbles, love \u2014 but now it wobbles with confidence.\u201d";

// The gate allows 1 to 280 characters, one or two lines, not only whitespace.
const lineCount = ENTRY.split("\n").length;
if (ENTRY.length < 1 || ENTRY.length > 280 || ENTRY.trim().length === 0 || lineCount > 2) {
  throw new Error(
    `Entry must be 1-280 characters in 1-2 lines, got ${ENTRY.length} chars in ${lineCount} line(s)`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

// Stdout may carry the entry plus a newline; the file itself has none.
console.log(ENTRY);
