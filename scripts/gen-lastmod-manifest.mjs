// Generates lastmod-manifest.json — a committed map of app/**/page.tsx -> last commit date.
//
// WHY THIS FILE EXISTS (measured 2026-08-29, not assumed).
// app/sitemap.ts already derives lastmod from `git log` at request time, and the logic is
// correct: run locally, the map holds 321 files and resolves 155 of 155 static sitemap URLs.
// In production it resolves ZERO. The live sitemap was measured on 2026-08-29: of 155 static
// URLs, 131 carried the identical value 2026-08-29T08:58:07.997Z — the exact millisecond of the
// request — and the only 24 static URLs with a real date were hardcoded editorial strings, not
// git dates. So the whole static half of the sitemap tells Google "everything changed just now,
// on every fetch", which is the one lastmod signal Google is documented to stop trusting.
//
// The cause is the build environment, not the logic: sitemap.ts shells out to `git log`, and the
// deploy build has no usable git history to read. sitemap.ts's own catch block predicted exactly
// this ("git unavailable (e.g. a shallow CI clone)"). Moving the git read to commit time, where
// history demonstrably exists, is what this script does.
//
// FAIL-SOFT BY DESIGN. If git is missing or returns nothing, this script warns and exits 0
// WITHOUT touching the existing manifest. A deploy must never fail because history was thin, and
// a thin run must never overwrite a good manifest with an empty one.
//
//   node scripts/gen-lastmod-manifest.mjs

import { execSync } from 'node:child_process'
import { writeFileSync, existsSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(ROOT, 'lastmod-manifest.json')

// A SHALLOW clone must never feed this map, and the reason is measured, not theoretical.
// The oldest commit in a shallow clone has no parent, so git cannot diff it against anything
// and reports it as having ADDED the entire tree. Proven on this repo 2026-08-29: in a
// `git clone --depth 10`, the boundary commit 3f6fcf2 claims to touch 200 app/ page.tsx files.
// It really touched 2. Trusting that log attributes almost every page on the site to one
// unrelated commit date — which is exactly what shipped in b5aacf7 and put 109 sitemap URLs
// on 2026-08-25, the date of a five-file commit.
//
// Vercel clones at depth 10 by default, so this is the normal case on the deploy build, not
// an edge. Unknown state is treated as shallow: an unreadable answer is not permission to trust.
function isShallowClone() {
  try {
    return execSync('git rev-parse --is-shallow-repository', {
      cwd: ROOT, encoding: 'utf-8',
    }).trim() !== 'false'
  } catch {
    return true
  }
}

function readGit() {
  if (isShallowClone()) {
    throw new Error('shallow clone — its boundary commit reports the whole tree as changed')
  }
  const raw = execSync('git log --pretty=format:%cI --name-only -- app/', {
    cwd: ROOT,
    encoding: 'utf-8',
    maxBuffer: 32 * 1024 * 1024,
  })
  const map = {}
  let current = null
  for (const line of raw.split('\n')) {
    const trimmed = line.trim()
    if (/^\d{4}-\d{2}-\d{2}T/.test(trimmed)) {
      current = trimmed
    } else if (trimmed && current) {
      // git always prints forward slashes; normalise anyway so a Windows checkout matches.
      const normalized = trimmed.replace(/\\/g, '/')
      // git log is newest-first, so the first sighting of a path is its latest commit.
      if (!(normalized in map)) map[normalized] = current
    }
  }
  return map
}

let map
try {
  map = readGit()
} catch (err) {
  console.warn('[lastmod] git unavailable, keeping the committed manifest as-is:', err.message)
  process.exit(0)
}

if (Object.keys(map).length === 0) {
  console.warn('[lastmod] git returned no history, keeping the committed manifest as-is')
  process.exit(0)
}

// Counting the previous entries is a LOG NICETY, so it must never be able to fail the build.
// This runs as `prebuild`: an uncaught throw here exits non-zero and npm aborts `next build`
// before Next.js is even reached. A manifest that was hand-edited into invalid JSON would
// otherwise take the whole deploy down for a console message nobody reads.
let previous = 'unknown'
try {
  if (existsSync(OUT)) previous = Object.keys(JSON.parse(readFileSync(OUT, 'utf-8'))).length
  else previous = 0
} catch {
  previous = 'unreadable'
}

try {
  writeFileSync(OUT, JSON.stringify(map, null, 1) + '\n', 'utf-8')
} catch (err) {
  // A read-only or unwritable build filesystem is not a reason to fail the deploy — the
  // committed manifest is already in the tree and app/sitemap.ts imports it directly.
  console.warn('[lastmod] could not write the manifest, the committed one still applies:', err.message)
  process.exit(0)
}

console.log(`[lastmod] wrote ${Object.keys(map).length} paths to lastmod-manifest.json (was ${previous})`)
