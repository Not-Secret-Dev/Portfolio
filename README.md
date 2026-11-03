# Aayan Mumtaz — Portfolio

A single-page, bold/typographic portfolio built from the résumé in `CV_Aayan_Mumtaz.pdf`.

- **Stack:** React 19 + TypeScript + Vite + Tailwind CSS v4
- **Motion:** Framer Motion scroll reveals, marquee tickers, horizontal project gallery
- **3D:** Three.js via React Three Fiber — lazy-loaded, desktop-only drag-orbit sculpture with a reduced-motion/fallback path
- **Theme:** strict grayscale palette (`#FFFFFF`, `#F0F0F0`, `#B0B0B0`, `#707070`, `#333333`), light + dark toggle
- **Type:** JetBrains Mono Variable (latin subset, self-hosted, no network font fetch)
- **Contact:** validated mailto form — no backend or API keys required

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production bundle
npm run preview   # serve the production build
```

## Structure

```
src/
  App.tsx               page composition
  theme.tsx             light/dark provider (localStorage: am-theme)
  index.css             design tokens, Tailwind theme, marquee/gallery/blueprint CSS
  data/content.ts       ALL copy and links — edit here
  components/
    Nav.tsx             sticky header, scroll-spy, mobile menu
    ScrollRuler.tsx     draggable 0–100 ruler scrollbar with hover magnifier lens (xl+ right rail)
    Hero.tsx            name, CTAs, stack marquee
    Scene.tsx           R3F sculpture (desktop-only lazy chunk, WebGL fallback, pauses offscreen)
    About.tsx           bio, portrait, stats
    Experience.tsx      roles + bullets
    Projects.tsx        draggable horizontal gallery, keyboard + arrow controls
    Skills.tsx          grouped toolkit
    Background.tsx      education, languages, principles, CV download
    Contact.tsx         contact rows + working mailto form with validation
    Footer.tsx          marquee wordmark, links
public/
  Aayan_Mumtaz_CV.pdf   linked from every "Download CV" button
  images/portrait.png   portrait extracted from the CV
```

## Layout

- The hero fills the viewport (`100svh`).
- From `xl` (1280px) up, every section below it is a full-height panel: `min-height: calc(100svh - 5rem)`, matching the 80px sticky header. Vertical padding is intentionally tight and content is distributed with flex, so no partial section shows between boundaries.
- Below `xl`, panels return to natural document flow for readability on tablets and phones.

## Before shipping

1. **Form:** `Contact.tsx` opens the visitor's mail app with a prefilled message (no backend, no data leaves the page until they hit send). To switch to a server-backed inbox, replace the `window.location.href = href` handoff with a `fetch` POST to Formspree, Web3Forms, or your own API.
2. **Project links:** project cards point at the GitHub profile because per-repo URLs weren't in the CV. Add a `repo` field per project in `data/content.ts` and wire it in `Projects.tsx`.
3. **Portfolio URL:** the resume lists `ayaan-dev-portfolio.netlify.app`; that link is kept as "Current site" until this rebuild replaces it.
4. **Deploy:** static SPA — Netlify/Vercel/GitHub Pages all work. No env vars required.

## Quality checks

```bash
npm run check   # tsc + oxlint + production build
```

- No backend: the contact form validates and composes a mailto message.
- 3D is skipped on touch pointers and pauses when the hero is offscreen; a visual fallback covers WebGL or chunk failures.

## Notes

- The native scrollbar is hidden; the draggable ruler is the scroll indicator (xl+), with a hover magnifier lens and keyboard support.
- `prefers-reduced-motion` disables marquees, 3D auto-rotation, and smooth scrolling.
- Touch devices get the 3D scene without drag orbit so vertical scrolling stays native.
- Palette and typography live in `src/index.css` (`:root` / `.dark` token blocks).
