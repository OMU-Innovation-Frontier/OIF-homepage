# OIF Homepage

Official website for OMU Innovation Frontier.

Site URL: https://oif-ai.com

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
public/       Static images and icons
docs/         Project documentation
```

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

## Maintenance notes

- Prefer keeping the site static unless there is a clear product need for dynamic behavior.
- If a new dependency is added, document why.
- Avoid one-off helper scripts in the repo root unless they are reusable and documented.
