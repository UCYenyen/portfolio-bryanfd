# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `pnpm run dev` — Next.js dev server with Turbopack
- `pnpm run build` — production build (Turbopack, `output: "standalone"` for Docker)
- `pnpm start` — run the built app
- `pnpm run lint` — ESLint (via `eslint-config-next`)

There is no test setup in this repo.

## Deployment

Not Vercel. CI/CD is `.github/workflows/deploy.yml`: on push to `main` it builds the `Dockerfile`, pushes `ghcr.io/ucyenyen/portfolio-bryan:latest` to GHCR, then SSHes into a VPS and runs `docker compose pull && docker compose up -d` (`docker-compose.yml`). `next.config.ts` sets `output: "standalone"` specifically so the Docker image stays small.

## Architecture

Next.js 15 App Router + React 19 + Tailwind v4 portfolio site.

- **Routing** (`src/app/`): top-level pages are `page.tsx`, `projects/page.tsx`, `services/page.tsx`, plus dynamic `projects/[slug]/page.tsx`. `layout.tsx` wraps every route with global chrome (NavigationBar, Footer, SplashCursor, LetsTalk); `loading.tsx` and `not-found.tsx` are route-level fallbacks.
- **Components** (`src/components/`) are organized by role, not by feature:
  - `layout/` — site chrome (NavigationBar, Footer, LetsTalk)
  - `pages/<route>/` — section components composed by a specific route (e.g. `pages/home/HeroSection.tsx`)
  - `common/` — reusable section building blocks shared across routes (Project, Services, StackingCards, LogoLoop, LiquidEther)
  - `ui/` — shadcn-style primitives (configured via `components.json`, style "new-york", base color neutral, lucide icons)
- **Path aliases** (see `components.json` / `tsconfig.json`): `@/*` → `src/*`, plus `@/components`, `@/lib`, `@/lib/utils` (cn helper), `@/components/ui`, `@/hooks`.
- **shadcn registry**: `@react-bits` registry is configured in `components.json` for pulling reactbits.dev components.
- **Animation/3D stack**: GSAP (+ `@gsap/react`) for scroll/section animations, `framer-motion` for component motion, `three` for 3D/WebGL effects (LiquidEther, SplashCursor). These are client components — keep them under `"use client"` and don't import them from Server Components.

## Content as data

`src/types/projects.md.ts` is the single source of truth for projects — it exports a typed `projects` array that drives both `projects/page.tsx` and the `[slug]` dynamic route. Despite the `.md.ts` suffix these are plain TypeScript modules, not MDX. `service.md.ts` only exports the shared `ServiceComponentProps` interface (the services copy itself lives inline in the `pages/services/` section components).

When adding a project, two conventions in `[slug]/page.tsx` matter:

- `href` is the URL slug — `generateStaticParams` maps each project's `href` to a static route, so it must be unique and URL-safe.
- The live-site URL is embedded inline in `description` as `Checkout the website -> https://…`. The detail page regex-extracts that URL for the "VISIT LIVE SITE" button and strips the sentence from the displayed copy. Keep that exact phrasing or the extraction breaks.

## Styling & fonts

- **Tailwind v4**, configured entirely in `src/app/globals.css` via `@theme inline` (no `tailwind.config`). Dark UI by default: `--background: #111111`.
- **Brand color tokens** are defined in `:root` and exposed as Tailwind utilities: `--green (#CAF291)`, `--pink (#FFB3DB)`, `--gray (#262626)` → use as `bg-green`, `text-pink`, `bg-gray`, etc.
- **Fonts**: the design uses a custom **Futura** family loaded via `@font-face` in `globals.css` from `/public/fonts/*` (Regular/Bold/Black/Light/Medium/Heavy/Book/Condensed). These map to utilities like `font-futura-condensed`, `font-futura-medium`, etc. — used heavily across components. Note `layout.tsx` separately loads Geist via `next/font`, but the visible typography is Futura; reach for `font-futura-*` classes, not the Geist defaults.
