# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

brain-blog is a personal knowledge vault at **tchez.dev**, built with Docusaurus 3.9.1 + React 19. It has two content pillars: **Blog** (articles/tutorials) and **Notes** (structured documentation organized as Foundations, Journeys, and Projects). The site is bilingual (English default, Portuguese secondary).

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
- `@docusaurus/plugin-content-docs` (id: "notes") — structured notes at `/notes/`
- `@docusaurus/plugin-ideal-image` — responsive image optimization
- `@docusaurus/plugin-client-redirects` — legacy URL redirects
- `@docusaurus/theme-mermaid` — diagram rendering in MDX

**Key config:** `docusaurus.config.ts` controls everything: i18n locales, navbar, footer, plugins, blog settings, redirects, and theme customization.

**Sidebars:** Both `sidebars.ts` and `sidebars-notes.ts` use Docusaurus autogeneration — ordering is controlled by `sidebar_position` in frontmatter and `_category_.json` files.

## Content Conventions

### Blog posts (`blog/YYYY/MM/`)
- Filename: `DD-slug.md`
- Required frontmatter: `title`, `description`, `authors` (references `blog/authors.yml`), `tags`, `image`, `keywords`
- Use `<!-- truncate -->` for excerpt separator
- Images use `import Image from "@theme/IdealImage"` for optimization

### Notes (`notes/`)
- Hierarchical structure with `_category_.json` for section metadata
- Use `sidebar_position` in frontmatter to control ordering
- Category JSON format: `{"label": "...", "position": N, "link": {"type": "generated-index", "title": "..."}}`

### Internationalization
- English content lives in `blog/` and `notes/` directly
- Portuguese translations go in `i18n/pt/docusaurus-plugin-content-blog/` and `i18n/pt/docusaurus-plugin-content-docs-notes/current/`
- Theme string translations: `i18n/pt/code.json`

## Custom Components

- **`src/components/Badge.js`** — role badges for SpeakUp Community docs (marketing, activities, logistics, leadership, volunteer)
- **`src/components/ResponsiveImage.js`** — wrapper around `@theme/IdealImage` with alignment (`justify`) and optional link (`href`) props

## Deployment

GitHub Pages with custom domain (`tchez.dev`). Static files in `static/` include `CNAME`, `robots.txt`, and `.nojekyll`. No CI/CD pipeline — deployment is manual via `npm run deploy`.
