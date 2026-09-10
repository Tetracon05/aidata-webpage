# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

The public website for İST-AIDATA (İstiklal Bilim ve Teknoloji Üniversitesi Yapay Zeka ve Veri Bilimi Öğrenci Topluluğu — a university AI/data science student community). All copy is in Turkish. No backend, database, or auth — it's a fully static content site (Next.js App Router, all routes prerender) deployed on Vercel, auto-deploying on push to `main`.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint (eslint-config-next core-web-vitals + typescript)
```

There is no test suite/runner configured in this repo.

## Content architecture (the most important thing to understand here)

All editable real-world content lives in `src/lib/data/*.ts`, deliberately kept separate from components/pages so a non-developer board member could edit it:

- `site.ts` — community name, taglines, contact info, social links, "what we do" list, vision text, milestones
- `events.ts` — past/upcoming events (`EventItem[]`: slug, dates, location, summary/body, `images[]`, tags, `status: "past" | "upcoming"`)
- `board.ts` — advisor, board, and audit-board members
- `projects.ts` — ongoing projects (TÜBİTAK, TEKNOFEST, etc.)

Pages under `src/app/*/page.tsx` import from these data files and render them; they contain no hardcoded club content themselves. When asked to update club info (a new event, a board roster change, a new project), edit the relevant `src/lib/data/*.ts` file rather than the page component. See [README.md](README.md) for the full non-developer-facing editing workflow (adding events, photo format requirements, the favicon-bump step when the logo changes).

Event/project photos live in `public/images/<slug>/`; the brand logo is `public/brand/logo.png` (also reused as the favicon — see `FAVICON_VERSION` note below).

## Architecture notes

- **Path alias:** `@/*` → `src/*`.
- **Favicon is not the Next.js `app/icon.png` convention.** That route is served with a URL hash that doesn't change when the file's content changes, so browsers' favicon cache can never be busted through it (confirmed empirically). Instead `src/app/layout.tsx` sets `metadata.icons` to a plain static path `/brand/logo.png?v=${FAVICON_VERSION}`. **Whenever the logo file is replaced, bump `FAVICON_VERSION` in `layout.tsx`** or browsers will keep showing the stale tab icon.
- **Design tokens** (navy/gold/sky color scales, radius) are defined in `src/app/globals.css` as CSS variables and exposed to Tailwind v4 via `@theme inline`. Colors were sampled from the actual club logo, not a generic palette — reuse the existing `navy-*`/`gold-*`/`sky-*` scale rather than introducing new colors.
- **Animation system:** `src/lib/motion.ts` holds shared Motion (`motion/react`, the Framer Motion successor package) variants/easings. Reusable animation primitives live in `src/components/motion/`:
  - `Reveal` — scroll-triggered fade+rise for a single element/section
  - `StaggerGrid` — cascades a grid's children in on scroll (wraps each child in a `motion.div`, so don't pass `<li>` children under a semantic list parent)
  - `CountUp` — animates a numeric/string stat
  - `Pressable` — spring scale on hover/tap, for wrapping a link/button without turning the whole page into a Client Component
  - `TiltCard` + `TiltGlow` — 3D mouse-tilt card effect, built on the `useTilt` hook (`src/lib/use-tilt.ts`); larger named cards (`EventCard`, `ProjectCard`, `BoardCard`) call `useTilt` directly instead of wrapping in `TiltCard`
  
  Everything respects `prefers-reduced-motion` via `useReducedMotion()` — preserve that when adding new animated components.
- **Navbar is `position: fixed`** (floating pill style, hides on scroll-down/shows on scroll-up), so it's out of document flow. Every page's top section needs extra top padding (e.g. `pt-32`/`pt-36`) to clear it — copy the pattern from an existing page rather than using a plain `pt-20`.
- **lucide-react has no brand icons** in the installed version (no Instagram/X/etc.). Custom inline SVGs for those live in `src/components/icons/`.
- **Privacy:** source club documents (from Google Drive) contain personal ID numbers, phone numbers, and addresses for board/founding members — none of that goes on the public site. Board members are shown as name + role + department only, with initials-avatars (no individual headshots exist). Only the club's shared email/Instagram/X account are used for public contact info.
