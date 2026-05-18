# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## What this is

**Grammar Quest** — a gamified single-user TOEIC grammar practice app. React 19 + Vite + TypeScript + Tailwind (CDN). All data persists to `localStorage` via Zustand (no backend, no auth). UI is Vietnamese-only; the grammar content itself is English with Vietnamese explanations.

The repo lives at `/Users/nguyenxuantruong/Desktop/Project/htdcorp` (folder name is a historical artifact — it used to host a company site that was deleted). The git history before the Grammar Quest rewrite is not relevant; treat the current `src/` layout as authoritative.

## Commands

- `npm run dev` — Vite dev server on `:3000` (host `0.0.0.0`).
- `npm run build` — production build to `dist/`.
- `npm run preview` — serve `dist/` locally.
- `npm run typecheck` — `tsc --noEmit`.
- `npm run deploy` — build + publish `dist/` to GitHub Pages (`gh-pages` branch). `homepage` in `package.json` controls the base URL.

There is no linter and no test runner configured.

## Environment

`.env` (Vite-prefixed, optional — features degrade gracefully when absent):

- `VITE_GEMINI_API_KEY` — enables AI features (Phase 2.5 question generator admin tool, Phase 7.5 auto-translate-on-selection, Phase 9 explain-this-answer tutor). When missing, `src/services/gemini.ts` logs a warning and `isGeminiEnabled()` returns `false`.
- `VITE_GEMINI_MODEL` — defaults to `gemini-1.5-pro` when unset.

When adding env vars used at runtime, use `import.meta.env.VITE_*`. We deliberately do **not** use the legacy `process.env` shim.

## Tooling notes

**Node version**: react-router-dom v7 and @vitejs/plugin-react v5 want Node 20+. Dev currently runs on Node 18.20 with `EBADENGINE` warnings but no functional break. If a router-related runtime error appears, upgrade Node first.

**Tailwind**: served via the Play CDN `<script>` in `index.html`, with the full theme config (palette, fonts, animations, keyframes) inlined there. Design-token changes go in `index.html`, not in a `tailwind.config.*` file (there is none). The `darkMode: "class"` toggle is driven by `<html class="light|dark">` which `ThemeProvider` controls.

**Fonts**: `Be Vietnam Pro` for body, `Fredoka` for headings (`font-display`), `Material Symbols Rounded` for icons. All loaded via Google Fonts in `index.html`.

## Architecture

### Routing & shell

`src/App.tsx` wires `ThemeProvider` → `HashRouter` → `AppRouter`. **HashRouter is intentional** — GitHub Pages doesn't do SPA fallback, and `homepage` in `package.json` is set for Pages deployment. Don't switch to `BrowserRouter` without also handling the Pages 404 fallback.

`src/router.tsx` mounts every page under `src/components/layout/AppShell.tsx`, which provides the sticky top nav with XP / streak / level pill, theme toggle, and avatar.

### Folder layout

```
src/
  app/                       # cross-cutting providers
    ThemeContext.tsx
  components/
    layout/AppShell.tsx      # top nav + <Outlet/>
    ui/                      # Button, Card, ProgressBar — keep dependency-free
  data/
    topics.ts                # 21 topics × 5 courses, hard-coded metadata
    theoryLoader.ts          # import.meta.glob("/noidung/*.md", { query: "?raw", eager: true })
  lib/                       # pure helpers, no React imports
    xp.ts                    # computeXpForAnswer, getLevelInfo
    mastery.ts               # computeTopicMastery, MASTERY_TIERS
    srs.ts                   # Leitner-box scheduling (boxes 0..5)
    format.ts                # todayKey, formatDuration, cn, generateId
  pages/                     # one component per route
  services/
    gemini.ts                # generic Gemini wrapper + translateToVi
  store/                     # all Zustand stores use `persist` middleware
    userStore.ts             # nickname, totalXp, streak, study seconds, settings
    progressStore.ts         # topicProgress + per-question SRS state
    attemptsStore.ts         # full attempt log (capped at 5000)
    vocabStore.ts            # saved vocab items
  types.ts                   # Course, Topic, Question (6 variants), Attempt, UserState
```

### State

All persistence is `localStorage` via Zustand's `persist` middleware. Store names are namespaced: `grammar-quest:user`, `:progress`, `:attempts`, `:vocab`, `:theme`. If schema migrations become needed, add `version` + `migrate` to the persist config — don't write ad-hoc migration code in components.

**Don't** introduce a global "app store" or context that re-exports everything. Components should subscribe to the specific store(s) they need, and pull narrow slices (`useUserStore((s) => s.totalXp)`) so re-renders stay localized.

### Theory content

The lesson markdown lives in `noidung/` at the project root, NOT inside `src/`. It is the user's authored source material. Vite bundles it at build time via the `import.meta.glob` call in `src/data/theoryLoader.ts`. To reference a topic's theory, list filenames in `Topic.theoryFiles` in `src/data/topics.ts`. Don't move these files into `src/`; the user edits them directly.

Some files contain Markdown table layouts that are tightly packed; `noi_dung_20.md` mục 2.4 has known formatting issues that should be cleaned before render (Phase 1 polish).

### Questions (Phase 2)

`Question` in `src/types.ts` is a discriminated union of 6 types (`mcq | fill | wordOrder | transform | errorSpot | cloze`). The runner (`PracticePage` in Phase 2) is expected to switch on `type` and render a sub-component per dialect. Each question carries `tags: string[]` for error-pattern analytics on the profile page.

Question bank generation is planned as an admin-only `/admin/generate` page (Phase 2.5) that calls Gemini with the lesson markdown as context, lets the user review each generated question, and writes accepted ones to `src/data/questions/<topicId>.ts`. Do not commit machine-generated questions without review.

### Gamification

- **XP**: `computeXpForAnswer` in `src/lib/xp.ts`. Base by difficulty (10/15/25), bonuses for first-try/no-hint, combo cap +10. Wrong answers still earn 2 XP (anti-frustration). Viewed answer = 30% of base.
- **Level**: `level = floor(sqrt(totalXp / 50))`. Title at each level from `LEVEL_TITLES`.
- **Mastery**: per-topic score = `0.6 * accuracy + 0.3 * coverage + 0.1 * recency`. Tier thresholds in `MASTERY_TIERS`.
- **SRS**: Leitner boxes 0..5 mapping to review intervals 0d, 1d, 3d, 7d, 14d, 30d. Wrong answer drops to box 1 regardless of previous box.
- **Streak**: incremented in `userStore.recordActivity()`; resets if `lastActiveDate` is older than yesterday. Call this once per session when the user submits a first answer.

### Daily study timer (Phase 4)

Timer state must pause on `document.visibilityState === "hidden"` AND on idle (no mouse/key for 60s). On resume, accumulate elapsed seconds into `userStore.studySecondsByDate[todayKey()]`. This is a hard requirement from the user — don't ship a timer that keeps ticking while the tab is backgrounded.

### Auto-translate on selection (Phase 7.5)

A global `<SelectionTranslator>` component will listen on `selectionchange`, debounce, and show a floating popover with VI translation. Translations are cached in IndexedDB; Gemini is the fallback. The popover offers "Save to vocab" (writes to `vocabStore`) and "Speak" (Web Speech API). The selection must originate inside a `data-translatable="true"` ancestor — `LearnPage`'s article element marks this.

### Single-user, local-only — what NOT to add

- No auth, no user account system.
- No backend / no API server.
- No multi-user collaboration features.
- No server-side state, no SSR.
- No push notifications.
- No "hearts/energy" system (rejected — frustrates self-learners).

## TODO.md

The full phased plan is in `TODO.md` at the project root. Phases 1+ are pending. When picking up work, read TODO.md first, pick an unchecked task in the lowest open Phase, and check it off as you go.
