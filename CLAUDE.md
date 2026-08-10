# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server on http://localhost:3000
npm run build    # production build
npm start        # serve production build
npm run lint     # eslint (flat config, eslint-config-next core-web-vitals + typescript)
```

There is no test setup in this repo — no test runner, no test files.

## What this is

A marketing/brochure site for "Gas Flow Solutions", an industrial gas metering and flow-control
business. Next.js 16 App Router + React 19 + Tailwind v4 + framer-motion. Static presentational
site: no database, no API routes, no auth, no server actions, no CMS. All page content (product
lists, testimonials, stats, service copy) is hardcoded as local arrays inside the page components.

## Architecture

- `src/app/` — App Router pages: `/`, `/about`, `/products`, `/services`, `/contact`. Each is a
  single self-contained `page.tsx` that declares its own content data at the top of the component.
- `src/app/layout.tsx` — the only real shell. Sets the `brand-bg`/`brand-ink` base and wraps every
  page in `Navbar` / `<main className="pt-24 pb-12">` / `WhatsAppCTA` / `Footer`. Page-level top
  padding is therefore additive — pages that add their own `pt-*` stack on top of the layout's.
- `src/components/layout/` — `Navbar` (scroll-aware, mobile menu, active-link via `usePathname`),
  `ProductsMenu` (desktop Products dropdown with right-hand flyout), `Footer`.
- `src/data/productMenu.ts` — the single source of truth for the Products nav taxonomy, consumed by
  both the desktop dropdown and the mobile accordion. It also exports `categoryHref`/`productHref`;
  those two helpers are the only place that knows product URLs, so pointing the menu at real detail
  routes later is a two-line change.
- `src/components/ui/` — presentational pieces shared or embedded by pages. `Section` is the
  standard wrapper: it supplies the scroll-in animation, vertical rhythm (`py-20 md:py-32`) and
  the `container mx-auto px-6 max-w-7xl` gutter. Use it rather than re-rolling section markup.
  `ProductCard`, `AnimatedPipelineBg`, and `InteractiveFlowSimulation` are themed but not currently
  rendered by any page.
- Path alias `@/*` → `src/*`.

Almost every component is `"use client"` — framer-motion is used pervasively for entrance and
hover animation, so components pull the client boundary with them. `Footer` is the one server
component. Don't add `"use client"` reflexively; only where hooks or motion are actually used.

## Styling

Tailwind v4, configured entirely in `src/app/globals.css` via `@theme inline` — there is no
`tailwind.config.js`. The site is **light-only**: no `dark:` variants, no `.dark` class on `<html>`,
no theme toggle. Semantic brand tokens defined there become utilities:

| Token | Value | Use |
| --- | --- | --- |
| `brand-bg` | `#f8fafc` | Page background |
| `brand-surface` | `#ffffff` | Cards, panels |
| `brand-surface-alt` | `#f1f5f9` | Alternating sections, footer |
| `brand-border` | `#e2e8f0` | Hairlines, dividers |
| `brand-ink` | `#0f172a` | Headings |
| `brand-muted` | `#475569` | Body copy |
| `brand-subtle` | `#64748b` | Captions, meta |
| `brand-navy` | `#1b508d` | Sole accent (matches the GFS logo wordmark) |
| `brand-navy-dark` | `#153e6e` | Hover / pressed |
| `brand-navy-soft` | `#eaf2fb` | Tinted fills, icon chips |
| `brand-navy-light` | `#2f6fae` | Gradient partner only |

Hand-written utility classes in the same file: `.glass` (frosted white panel), `.glass-navy`
(navy-tinted), `.hover-glow` (navy lift shadow).

Navy is the only accent — there is deliberately no secondary color. Depth comes from borders
and soft shadows (`shadow-sm`, `hover:shadow-lg`), not glows. Sections alternate `brand-bg` and
`brand-surface-alt` for rhythm. Never use raw `gray-*`/`slate-*` or hex literals for theme colors;
reach for the `brand-*` tokens so a future palette change stays a one-file edit.

Because the page is light, imagery needs the inverse treatment from the old dark theme: images sit
at reduced opacity under a **white**-to-transparent gradient (`from-white`, `from-brand-bg`) with
dark `brand-ink` text on top, not the other way round.

## Images

All imagery is remote-hosted, mostly hotlinked from `www.kimpexflow.com` (banners, product photos)
plus `images.unsplash.com`. Both hostnames are allowlisted in `next.config.ts` `images.remotePatterns`
— adding an image from a new host requires adding it there or `next/image` will throw at runtime.

## Scraping scripts (root, not part of the app)

`fetch-html.js`, `fetch-images.js`, `fetch-products.js`, `kimpex_images.js` are one-off Node
scripts (`node fetch-products.js`) that regex-scrape kimpexflow.com for product names and image
URLs. Their outputs (`kimpex_products.html`, `kimpex_images*.txt`, `products*.json`) are scratch
artifacts; `products.json` is empty and nothing in `src/` imports any of them. Product data in
the app was transcribed by hand from these into `src/app/products/page.tsx`.

## Known placeholders

Values that look real but are not: the WhatsApp number in `WhatsAppCTA` (`wa.me/1234567890`),
footer social links (`href="#"`), `engineering@gasflow.com`, and the contact form, which fakes
success with a `setTimeout` and never sends anything.
