# Agriturismo Fratelli Oddone — Next.js

Marketing site for **Agriturismo Fratelli Oddone** (Bardineto, Val Bormida), ported from
the static HTML/CSS/JS prototype to a **Next.js 14 App Router** project (JavaScript, no TypeScript).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build && npm run start   # production
```

Requires Node 18.17+.

## Routes

| URL           | File                              | Content source                    |
|---------------|-----------------------------------|-----------------------------------|
| `/`           | `src/app/page.js`                 | Presentazione-Agriturismo.docx    |
| `/alloggi`    | `src/app/alloggi/page.js`         | Presentazione-Alloggi.docx        |
| `/ristorante` | `src/app/ristorante/page.js`      | Presentazione-Ristorante.docx     |
| `/bike-tour`  | `src/app/bike-tour/page.js`       | Presentazione-MTB.docx            |
| `/attivita`   | `src/app/attivita/page.js`        | Attività.docx                     |
| `/contatti`   | `src/app/contatti/page.js`        | real contact info + Google Map    |
| `/offers`     | `src/app/offers/page.js`          | empty state (nessuna offerta)     |

The `.docx` originals are in `docs/` for reference.

## Architecture

- **`src/app/layout.js`** — root layout. Loads Google Fonts, imports `globals.css`, and renders
  the shared chrome: `<Nav>`, the page `{children}`, `<Footer>`, and `<RevealController>`.
- **Server components** (default): every page and the static components (`Footer`, `Hero`,
  `Accommodations`, `PageHero`, `Contact`).
- **Client components** (`"use client"`): `Nav` (sticky-on-scroll, mobile drawer, active-link via
  `usePathname`), `RevealController` (scroll-reveal `IntersectionObserver`), `Lightbox` (click-to-zoom
  gallery), `MenuModal` (in-page PDF viewer on the restaurant page).

This replaces the prototype's `src/lib/render.js` client-side component loader — components are now
real React imports, and the per-page inline `<script>` blocks (nav state, lightbox, PDF modal) are
now the client components above.

## Styling

Plain global CSS, imported once via `src/app/globals.css`:

```
src/styles/tokens.css        design tokens (:root CSS variables — colors, fonts, layout)
src/styles/base.css          reset + base
src/styles/typography.css    .eyebrow / .section-title / .lede / .body-text …
src/styles/buttons.css       .btn / .text-link
src/styles/placeholders.css  striped .ph image placeholders
src/styles/reveal.css        .reveal scroll animation
src/styles/components.css    Nav / Hero / Footer / Accommodations / PageHero / Contact
src/styles/pages.css         per-page styles, each block namespaced under a route class
```

> **Why the route namespacing:** in the prototype each page was a separate HTML document, so several
> pages reused the same class names (`.pres-intro`, `.pres-row`, `.pres-num`) with *different* rules.
> In a single app those would collide, so each page's styles are scoped under a wrapper class
> (`.route-home`, `.route-alloggi`, `.route-ristorante`, `.route-biketour`, `.route-attivita`,
> `.route-offers`, `.route-contatti`) and every page renders inside `<div className="route-…">`.
> Shared primitives (`.btn`, `.eyebrow`, `.container`, `.section`, `.lede`) stay global.

If you prefer Tailwind or CSS Modules, `tokens.css` maps 1:1 to a theme and each `pages.css` block is
already isolated per route.

## Images

All photography and the menu PDF live in `public/`:

- `public/images/*` — home collage, room/food/trail photos.
- `public/menu-del-mese.pdf` — “Menù del mese”, opened in the in-page viewer on `/ristorante`.

Images currently use plain `<img>` tags (faithful to the prototype). To adopt `next/image`, swap the
`<img>` elements and give them `width`/`height` or a `fill` parent — the CSS already handles
`object-fit`. ESLint `no-img-element` warnings are suppressed inline where `<img>` is used.

## Known TODO (carried over from the prototype)

- `/attivita` and `/bike-tour` still use striped `.ph` **placeholders** for their section imagery —
  drop real photos into `public/images/` and replace the `<div className="ph">…</div>` blocks with
  `<img>` tags (see the room/food sections for the pattern).
- Footer social links, "Privacy/Cookie/Termini", and the "Richiedi disponibilità" buttons are `#`
  placeholders.
- The booking CTAs are static — wire them to your booking flow / form.
