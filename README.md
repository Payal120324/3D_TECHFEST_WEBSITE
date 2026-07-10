# TechFest 2026 — 3D Interactive Website

A production-ready, single-page site built with **React, Vite, Three.js (via React Three Fiber + Drei), GSAP, Framer Motion, and Tailwind CSS**.

## Stack

- **Vite** — dev server / build
- **React 18**
- **@react-three/fiber** + **@react-three/drei** + **three** — the 3D "AI Core" hero scene
- **GSAP + ScrollTrigger** — scroll-triggered section reveals
- **Framer Motion** — micro-interactions (button hover, card lift, staggered hero entrance)
- **Tailwind CSS** — design tokens and layout

## Run it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  main.jsx           entry point
  App.jsx             top-level layout, mounts all sections
  index.css           Tailwind directives + global effects (grid, noise, scanline)
  data.js              all site copy/content in one place — edit this to change text
  components/
    Navbar.jsx
    Hero.jsx           hero copy + CTAs, wraps Hero3D
    Hero3D.jsx          the Three.js "AI Core" scene (R3F)
    About.jsx           stats with animated counters
    Events.jsx           6 arena cards, cursor-tracked glow + 3D tilt
    Timeline.jsx          energy-path event timeline
    Speakers.jsx           holographic speaker cards
    Registration.jsx        live countdown + CTA panel
    Footer.jsx
    CursorGlow.jsx           ambient cursor-follow light
    Reveal.jsx                shared GSAP ScrollTrigger reveal wrapper
```

## Customizing

- **Copy & content** — edit `src/data.js` (events, timeline, speakers, stats) and the text inside `Hero.jsx`, `About.jsx`.
- **Event date** — change `EVENT_DATE` in `src/data.js` to your real festival date; the countdown on the Registration section reads from it.
- **Colors / type** — edit the token list in `tailwind.config.js` (`cyan`, `violet`, `amber`, `navy`, fonts).
- **3D scene** — `Hero3D.jsx` is self-contained; tweak ring radii, particle count, rotation speed, or camera scroll-dolly there.

## Notes

This was generated in an offline sandbox without npm registry access, so dependencies were **not** installed or build-verified here — install locally with `npm install` as the first step. All source files were hand-written and syntax-checked for balanced brackets/JSX structure, but give it a first `npm run dev` pass and open an issue for yourself if anything needs a version bump.
