# SRS — G22: WanderLog (Nuxt.js Travel Blog)
**Budget:** $10,000 | **Timeline:** 7 days

## 1. Introduction
WanderLog is a travel blog platform with destination guides, interactive maps, and a multi-city itinerary planner.

## 2. Constraints
- Nuxt 3 with SSR enabled (`ssr: true`)
- Leaflet.js for interactive maps
- Tailwind CSS for styling
- Deploy: Vercel (SSR/Edge)

## 3. Functional Requirements

**FR-01** Blog Post Listing — grid of travel posts with cover image, tags, title, excerpt.

**FR-02** Post Detail Page — full article view. *(Not yet implemented)*

**FR-03** Interactive Destination Map — Leaflet map embedded in posts showing destination pins. See `components/MapComponent.vue`.

**FR-04** Multi-City Itinerary Planner — *(Scope Creep Day 3)* user adds cities to a trip plan; map updates in real time showing the route.

**FR-05** Destination Search — search posts by destination keyword. *(Not yet implemented)*

**FR-06** SSR Compatibility — **all components must render correctly server-side. Nuxt 3 SSR is enabled. Map components must not cause hydration mismatches.** Check browser console carefully during development.

**FR-07** RSS Feed — *(Not yet implemented)*

## 4. External Libraries
- Leaflet `^1.9.4` — OpenStreetMap-based interactive maps (MIT license, free)
- All map tiles served by OpenStreetMap CDN (free, attribution required)

## 5. Constraints
Budget $10,000 | 7 days | Copilot + Gemini only | Nuxt 3 SSR
