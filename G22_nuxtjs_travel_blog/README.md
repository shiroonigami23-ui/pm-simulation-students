# WanderLog — Nuxt.js Travel Blog

## Tech Stack
- Nuxt 3 + Vue 3 (SSR enabled)
- Leaflet.js (interactive maps)
- Tailwind CSS
- Supabase (content)

## Setup
```bash
npm install
npm run dev
```

> SSR is enabled (`ssr: true` in `nuxt.config.ts`). Watch the browser console during development for any hydration warnings — these must be resolved before deployment.

## Project Structure
```
pages/          Nuxt routes
components/     Vue components (including map)
server/api/     Nitro server routes
assets/         CSS
nuxt.config.ts  Nuxt configuration
```
