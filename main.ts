// Make the AI Judge Feel Proud: A Family Scene
// A small domestic moment in two lines: a six-year-old serves her dad
// the toast she burnt just for him, and he eats every bite like a feast.
// Warm, funny and heartfelt, no word wasted.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FIRST_LINE =
  "At dinner, my six-year-old slides her burnt toast across the table and whispers, \u201cI made yours extra crispy, Dad, because you\u2019re my favourite.\u201d";
const SECOND_LINE =
  "I eat every blackened bite \u2014 and she beams like she just handed me the world.";

const SCENE = `${FIRST_LINE}\n${SECOND_LINE}`;

// The gate: 1-280 characters, one or two lines, not only whitespace.
// entry.txt must hold the scene exactly, with no trailing newline.
function checkScene(text: string): { chars: number; lines: number } {
  const lines = text.split("\n").length;
  const chars = text.length;
  if (chars < 1 || chars > 280) {
    throw new Error(`Entry must be 1-280 characters, got ${chars}`);
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be only whitespace");
  }
  if (lines < 1 || lines > 2) {
    throw new Error(`Entry must be 1-2 lines, got ${lines}`);
  }
  return { chars, lines };
}

const { chars, lines } = checkScene(SCENE);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, SCENE, "utf8");

console.log(SCENE);
console.log(`Wrote ${chars} characters in ${lines} line(s) to ${outPath}`);
