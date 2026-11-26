// Make the AI Judge Feel Proud: A Family Scene
// Two lines at the dinner table: a six-year-old serves her dad the toast
// she burnt just for him, and he eats every blackened bite like a feast.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The scene itself, line by line, joined with a single newline.
const LINES = [
  "At dinner, my six-year-old slides her burnt toast across the table and whispers, \u201cI made yours extra crispy, Dad, because you\u2019re my favourite.\u201d",
  "I eat every blackened bite \u2014 and she beams like she just handed me the world.",
];

const SCENE = LINES.join("\n");

// Limits the brief sets for the entry.
const MAX_CHARS = 280;
const MAX_LINES = 2;

function fail(message: string): never {
  throw new Error(message);
}

function validate(scene: string): { chars: number; lines: number } {
  const chars = scene.length;
  const lines = scene.split("\n").length;
  if (chars < 1 || chars > MAX_CHARS) {
    fail(`Entry must be 1-${MAX_CHARS} characters, got ${chars}`);
  }
  if (scene.trim() === "") {
    fail("Entry must not be only whitespace");
  }
  if (lines < 1 || lines > MAX_LINES) {
    fail(`Entry must be 1-${MAX_LINES} lines, got ${lines}`);
  }
  return { chars, lines };
}

const stats = validate(SCENE);

// entry.txt gets the scene exactly as written — no trailing newline.
const DEFAULT_OUT_DIR = "/output";

function writeEntry(scene: string): string {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? DEFAULT_OUT_DIR;
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, scene, "utf8");
  return outPath;
}

const outPath = writeEntry(SCENE);

console.log(SCENE);
console.log(
  `Wrote ${stats.chars} characters in ${stats.lines} line(s) to ${outPath}`,
);
