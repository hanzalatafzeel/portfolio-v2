# Hanzala Tafzeel — Portfolio

A dark, neon-accented developer portfolio built with [Next.js](https://nextjs.org) (App Router, TypeScript), [Tailwind CSS v4](https://tailwindcss.com), [Framer Motion](https://www.framer.com/motion/), and [lucide-react](https://lucide.dev).

## Features

- **Hero** — gradient name, rotating typewriter roles, glow CTAs, social links
- **About** — terminal window, animated stat counters, quick facts
- **Skills** — categorized stack cards + infinite tech marquee
- **Experience** — glowing vertical timeline with tech chips
- **Projects** — hover-lift cards with covers, tech tags, and links
- **Education & Achievements** — gradient-border cards
- **Contact** — neon CTA panel with mailto/socials
- Chrome: scroll-progress bar, active-section nav pill, glass navbar, mobile drawer menu, gradient scrollbar, reduced-motion safety

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint
```

## Project structure

```
src/
  app/            layout (fonts, metadata) + page composition, globals.css, icon.svg
  components/     section components + chrome (Navbar, BackdropFX, Typewriter, ...)
  lib/data.ts     all resume content — edit here to update the site
```

All content — profile, skills, experience, projects, education, achievements — lives in `src/lib/data.ts`; edit that single file to keep the site current.

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com) — zero config. Static export is also supported:

```bash
# next.config.ts → output: "export" (uses plain <img>, no server features)
npm run build
```