// Real-Life Patch Notes: The Comedy Changelog
// Writes one one-line patch note (<=160 chars) to <OUTPUT_DIR>/entry.txt.
// Node stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "v3.0.2: fixed a bug where the brain auto-played your most embarrassing moment from 2011 every night at 3 a.m.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
try {
  chmodSync(outPath, 0o644);
} catch {
  // Permissions are best-effort; the file content is what matters.
}
