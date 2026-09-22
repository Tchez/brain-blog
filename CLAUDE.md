# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

brain-blog is a personal blog at **blog.tchez.dev**, built with Docusaurus 3.9.1 + React 19. The site is bilingual (English default, Portuguese secondary).

The blog owns the site root (`routeBasePath: "/"`, since 2026-09-22) — there is no separate custom homepage. What used to be `src/pages/index.tsx` (hero + featured projects) moved to the `Portfolio` project, which now owns the `tchez.dev` apex domain.

## Commands

- `npm run start` — dev server (English)
- `npm run start -- --locale pt` — dev server (Portuguese)
- `npm run build` — production build
- `npm run serve` — serve production build locally
- `npm run typecheck` — TypeScript validation
- `npm run write-translations` — generate i18n translation files

## Architecture

**Content-driven static site** using Docusaurus plugins:
- `@docusaurus/preset-classic` — blog + theme
- `@docusaurus/plugin-ideal-image` — responsive image optimization
- `@docusaurus/plugin-client-redirects` — legacy URL redirects
- `@docusaurus/theme-mermaid` — diagram rendering in MDX

**Key config:** `docusaurus.config.ts` controls everything: i18n locales, navbar, footer, plugins, blog settings, redirects, and theme customization.


## Content Conventions

### Blog posts (`blog/YYYY/MM/`)
- Filename: `DD-slug.md`
- Required frontmatter: `title`, `description`, `authors` (references `blog/authors.yml`), `tags`, `image`, `keywords`
- Use `<!-- truncate -->` for excerpt separator
- Images use `import Image from "@theme/IdealImage"` for optimization

### Internationalization
- English content lives in `blog/` directly
- Portuguese translations go in `i18n/pt/docusaurus-plugin-content-blog/`
- Theme string translations: `i18n/pt/code.json`

## Deployment

GitHub Pages with custom domain `blog.tchez.dev`, deployed by `.github/workflows/deploy.yml`:

- Push/merge to `main` → typecheck + build + deploy (Pages source must be set to **GitHub Actions** in the repo settings).
- Pull request to `main` → typecheck + build only, no deploy. `onBrokenLinks: "throw"` makes a broken internal link fail the PR check.
- Day-to-day work happens on `develop`; `main` is what's live.

Don't use `npm run deploy`: it pushes to the `gh-pages` branch, which Pages no longer serves from. With the Actions source, the custom domain comes from the repo's Pages settings — `static/CNAME` is kept only as a record and is ignored by GitHub. When a post's slug changes, add a redirect in `plugin-client-redirects` (see the existing `/blog/<slug>` entries).
