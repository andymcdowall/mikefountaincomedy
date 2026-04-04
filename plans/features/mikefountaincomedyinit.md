# Mike Fountain Comedy — Initial Website

## Overview

A single-page React application for comedian Mike Fountain. Includes a hero/bio section, configurable tour dates with ticket links, a YouTube video embed grid, and a contact form. Built with Vite + React + TypeScript.

**Design language:** Near-black background, electric red accent (#E8200A), neon blue secondary (#00B4FF), cream text (#F5F0E8). Bebas Neue for headings, Inter for body. Subtle grain texture, high-contrast graphic feel inspired by Mike's promo materials.

**Mobile-first:** All components are designed for mobile viewports first, with styles progressively enhanced for tablet (≥768px) and desktop (≥1100px) via `min-width` media queries. Touch targets ≥44px, tap-friendly buttons, no hover-only interactions.

## Tickets

### Ticket 01 — Project scaffold, routing, design system, Header/Footer
**Branch:** ticket/mikefountaincomedyinit/01
**Depends on:** (none)
**Can run in parallel with:** (none — all other tickets depend on this)

**Scope:**
- Vite + React + TypeScript project init (`npm create vite`)
- React Router v6 with routes: `/`, `/tour`, `/videos`, `/contact`
- Google Fonts: Bebas Neue (headings) + Inter (body)
- CSS custom properties design tokens: colors, spacing, typography scale, breakpoints (`--bp-md: 768px`, `--bp-lg: 1100px`)
- Global CSS reset and base styles written mobile-first (`min-width` media queries only)
- `Header` component: sticky nav with links and mobile hamburger menu
- `Footer` component: copyright + social link placeholders

**Acceptance criteria:**
- `npm run dev` serves the app with no errors
- All four routes render without crashing
- Header is sticky; hamburger opens/closes nav on mobile (≤768px)
- Design tokens defined as CSS custom properties in `src/styles/tokens.css`
- All media queries use `min-width` (mobile-first); no `max-width` queries

---

### Ticket 02 — Hero section + Bio page
**Branch:** ticket/mikefountaincomedyinit/02
**Depends on:** 01
**Can run in parallel with:** 03, 04, 05

**Scope:**
- `HeroSection` component: full-width dark section, large "MIKE FOUNTAIN" heading in Bebas Neue, tagline, CTA button linking to `/tour`
- Subtle grain texture overlay on hero
- `BioPage` (route `/`) below hero: headshot placeholder + 2–3 paragraph bio text blocks

**Acceptance criteria:**
- Hero heading renders in Bebas Neue, starts at 48px on mobile, scales up to ≥72px on desktop
- CTA button uses electric red accent, links to Tour page, and has a ≥44px touch target
- Bio section is readable with appropriate whitespace on mobile and desktop
- Layout is single-column on mobile; optional two-column (photo + text) on desktop

---

### Ticket 03 — Tour Dates page
**Branch:** ticket/mikefountaincomedyinit/03
**Depends on:** 01
**Can run in parallel with:** 02, 04, 05

**Scope:**
- `src/config/shows.ts`: typed config array `Show[]` with fields: `date`, `venue`, `city`, `state`, `ticketUrl`, `soldOut?`
- 3–5 placeholder show entries
- `TourPage` (route `/tour`): renders chronological list of shows
- Each show row: formatted date | venue + city | "Get Tickets" button (external link) or "Sold Out" badge

**Acceptance criteria:**
- Adding/removing entries from `shows.ts` automatically updates the page
- "Get Tickets" opens `ticketUrl` in a new tab
- Sold-out shows display a "Sold Out" badge instead of a button
- Empty state message when no shows are listed
- On mobile, each show is a stacked card (not a table row); table layout only on desktop

---

### Ticket 04 — Videos page
**Branch:** ticket/mikefountaincomedyinit/04
**Depends on:** 01
**Can run in parallel with:** 02, 03, 05

**Scope:**
- `src/config/videos.ts`: typed config array `Video[]` with fields: `youtubeId`, `title`, `description?`
- 2–4 placeholder entries
- `VideosPage` (route `/videos`): responsive grid of YouTube embeds
- Each embed: 16:9 iframe with title caption below

**Acceptance criteria:**
- Adding a YouTube ID to `videos.ts` automatically renders it on the page
- Grid is 1-column on mobile, 2-column on desktop
- iframes are responsive and maintain 16:9 aspect ratio
- Videos load lazily (`loading="lazy"` on iframes)

---

### Ticket 05 — Contact form
**Branch:** ticket/mikefountaincomedyinit/05
**Depends on:** 01
**Can run in parallel with:** 02, 03, 04

**Scope:**
- `ContactPage` (route `/contact`): form with fields: Name, Email, Inquiry Type (select: Fan Mail / Booking / Media), Message
- Client-side validation: required fields, valid email format
- Formspree integration: `action` attribute on form pointing to placeholder Formspree endpoint (user will swap in their own ID)
- Success and error states after submission
- Note in the UI distinguishing fan contact from booking agent contact

**Acceptance criteria:**
- Form displays inline validation errors on submit with empty/invalid fields
- Successful submission shows a confirmation message
- Formspree endpoint is a clearly marked `TODO` constant in the component
- Form is accessible: labels associated with inputs, keyboard navigable
- All inputs are full-width on mobile with ≥44px touch targets; comfortable padding on small screens
