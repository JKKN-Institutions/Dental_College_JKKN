// ESLint 9 flat config.
//
// Two things were broken before this file existed:
//   1. `next lint` was removed in Next.js 16, so `npm run lint` failed with
//      "Invalid project directory provided, no such directory: lint".
//   2. ESLint 9 defaults to flat config and ignores .eslintrc.json, so running
//      eslint directly failed with "couldn't find an eslint.config.(js|mjs|cjs)".
//
// eslint-config-next 16 ships flat-config objects, so it is imported directly
// (FlatCompat chokes on it with "Converting circular structure to JSON").
//
// The rule set is deliberately identical to the old .eslintrc.json, which
// extended ONLY "next/core-web-vitals" — this change fixes the tooling, it does
// not tighten or loosen linting.
import coreWebVitals from 'eslint-config-next/core-web-vitals'

export default [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },
  ...(Array.isArray(coreWebVitals) ? coreWebVitals : [coreWebVitals]),
]
