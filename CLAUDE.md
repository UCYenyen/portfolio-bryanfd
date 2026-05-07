# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `pnpm run dev` — Next.js dev server with Turbopack
- `pnpm run build` — production build (Turbopack, `output: "standalone"` for Docker)
- `pnpm start` — run the built app
- `pnpm run lint` — ESLint (via `eslint-config-next`)

Deployment is via Docker (`Dockerfile`, `docker-compose.yml`) published to GHCR; CI/CD lives in `.github/`.

## Architecture

Next.js 15 App Router + React 19 + Tailwind v4 portfolio site.

- **Routing** (`src/app/`): top-level pages are `page.tsx`, `projects/page.tsx`, `services/page.tsx`, plus dynamic `projects/[slug]/page.tsx`. `layout.tsx` wraps everything; `loading.tsx` and `not-found.tsx` are route-level fallbacks.
- **Components** (`src/components/`) are organized by role, not by feature:
  - `layout/` — site chrome (NavigationBar, Footer, LetsTalk)
  - `pages/<route>/` — section components composed by a specific route (e.g. `pages/home/HeroSection.tsx`)
  - `common/` — reusable section building blocks shared across routes (Project, Services, StackingCards, LogoLoop, LiquidEther)
  - `ui/` — shadcn-style primitives (configured via `components.json`, style "new-york", base color neutral, lucide icons)
- **Content as data** (`src/types/*.md.ts`): `projects.md.ts` and `service.md.ts` export typed arrays that drive the projects/services pages and the `[slug]` dynamic route. When adding a project or service, edit these files — they are the source of truth, not MDX.
- **Path aliases** (see `components.json` / `tsconfig.json`): `@/components`, `@/lib`, `@/lib/utils` (cn helper), `@/components/ui`, `@/hooks`.
- **Animation/3D stack**: GSAP (+ `@gsap/react`) for scroll/section animations, `three` for 3D effects (LiquidEther, SplashCursor). These are client components — keep them under `"use client"` and avoid importing from Server Components.
- **shadcn registry**: `@react-bits` registry is configured in `components.json` for pulling reactbits.dev components.
