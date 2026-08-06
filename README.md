# OIF Homepage

Official website for OMU Innovation Frontier.

Site URL: https://oif-ai.com

## はじめての人へ / New contributors

開発に参加する人は **[`ONBOARDING.md`](./ONBOARDING.md)** から読んでください。環境構築から最初のPRを出すまでを、前提知識ゼロの状態から順に案内しています。

| ドキュメント | 内容 |
|---|---|
| [`ONBOARDING.md`](./ONBOARDING.md) | 環境構築 → 最初のPRまで。**まずここ** |
| [`docs/nextjs-guide.md`](./docs/nextjs-guide.md) | Next.js / React / TypeScript / Tailwind の初心者向け解説 |
| [`docs/codex-guide.md`](./docs/codex-guide.md) | Codex（AIエージェント）を使った開発の進め方 |
| [`docs/architecture.md`](./docs/architecture.md) | サイトの構成・データフロー・公開の仕組み |
| [`AGENTS.md`](./AGENTS.md) | 開発規約の正本。人もエージェントもこれに従う |

## What this repo is

This project is a static website built with Next.js App Router and exported as plain HTML/CSS/JS.

- No backend server
- No database
- No API routes
- No runtime content fetching
- Deployment target is static hosting

The relevant setting is [`output: "export"`](./next.config.js), which makes `next build` generate a static site.

## Why Next.js is still used

Next.js is being used here as a static site generator with:

- File-based routing
- Metadata management for SEO
- Shared layout/header/footer
- Optimized static asset handling
- Simple React components for a small amount of client-side interactivity

This means the site is static in deployment, even though the codebase uses React and Next.js during authoring/build time.

## Client-side interactivity

Most pages are static. A few components use client-side React for small UI behavior:

- [`components/layout/Header.tsx`](./components/layout/Header.tsx): mobile menu state
- [`app/faq/FAQClient.tsx`](./app/faq/FAQClient.tsx): accordion open/close state
- [`app/HomeClient.tsx`](./app/HomeClient.tsx): homepage rendering component

None of these introduce a backend.

## Project structure

```text
app/          Route pages, layout, metadata, sitemap, robots
components/   Shared UI and SEO components
lib/          Content data (events, news, projects, members, links) — the de facto CMS
content/      Blog posts in MDX
public/       Static images and icons
docs/         Project documentation
```

Content lives in `lib/*.ts` and `content/blog/*.mdx`. Adding an event or a post should not require touching `app/` or `components/`.

More detail: [`docs/architecture.md`](./docs/architecture.md)

## Development

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
```

The build outputs a static export suitable for static hosting.

There is intentionally no `npm start` script because production uses exported static files, not a Node server.

There are no test or lint scripts. A passing `npm run build` plus manual verification in the browser is the entire quality gate — treat both as mandatory before opening a PR.

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml), which runs `npm ci` and `npm run build` on Node 20 and publishes `out/` to GitHub Pages. There is no manual deploy step.

Never commit directly to `main`. Work on a branch and open a PR.

## Maintenance notes

- Prefer keeping the site static unless there is a clear product need for dynamic behavior.
- If a new dependency is added, document why.
- Avoid one-off helper scripts in the repo root unless they are reusable and documented.
