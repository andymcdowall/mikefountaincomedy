# Style Themes

## Overview

Introduce two complete visual themes for the Mike Fountain Comedy site, selectable at runtime via a floating action button. A React `ThemeContext` drives a `data-theme` attribute on `<html>`, with `localStorage` persistence. Once the client picks a theme the FAB is removed and the chosen theme becomes the permanent default.

**Theme A — "Friendly":** Navy + warm orange, cream background, Big Shoulders Display headings. Approachable, Midwestern, daytime energy.

**Theme B — "Nightclub":** Deep black, electric cyan + hot-pink neon accents, Bebas Neue headings. Club poster, electric, nighttime energy.

---

## Tickets

### Ticket 00 — Scaffolding & Roadmap

**Branch:** `ticket/style-themes/0`
**Depends on:** (none)
**Can run in parallel with:** (none)

**Scope:**
- Write this roadmap file to `plans/features/style-themes.md`
- Copy `docs/stylereport.md` into the repo at `docs/stylereport.md`
- Create `src/styles/themes/navy-orange.css` — skeleton: `[data-theme="navy-orange"] { }` block listing every token name with `/* TODO */` values
- Create `src/styles/themes/nightclub.css` — skeleton: `[data-theme="nightclub"] { }` block, same structure
- Update `src/styles/tokens.css` — strip all color and font-family tokens from `:root`; keep spacing, layout, transitions; add `--color-accent-glow: transparent` as base fallback
- Update `src/styles/global.css` — add Big Shoulders Display + Poppins to Google Fonts `@import`; add `@import` for both theme files after tokens
- Update `index.html` — add `data-theme="nightclub"` on `<html>` element (prevents flash of unstyled content on default load)
- Create `src/context/ThemeContext.tsx` — full implementation: `Theme` union type (`"navy-orange" | "nightclub"`), `ThemeContextValue` interface, `ThemeProvider` component (reads `localStorage` key `mfc-theme`, writes on change, sets `document.documentElement.dataset.theme`), `useTheme` hook
- Update `src/main.tsx` — wrap `<App />` with `<ThemeProvider>`

**Acceptance criteria:**
- Both theme CSS files exist and import correctly (no console errors)
- Toggling `data-theme` on `<html>` in DevTools switches which token block is active
- `ThemeContext` exports `useTheme` and `ThemeProvider`
- Page loads with `data-theme="nightclub"` by default, no FOUC
- `localStorage` key `mfc-theme` is read on init and written on change

---

### Ticket 01 — Navy & Orange Theme

**Branch:** `ticket/style-themes/01`
**Depends on:** Ticket 00
**Can run in parallel with:** Ticket 02, Ticket 03

**Scope:**
- Fill all token values in `src/styles/themes/navy-orange.css`:
  - `--color-bg: #FFF9F4`
  - `--color-bg-surface: #F2E9DE`
  - `--color-text-primary: #1A1A2E`
  - `--color-text-muted: #666666`
  - `--color-accent: #E8621A`
  - `--color-accent-hover: #C9521A`
  - `--color-accent-secondary: #002F6D`
  - `--color-border: #DDD5C8`
  - `--font-heading: 'Big Shoulders Display', sans-serif`
  - `--font-body: 'Poppins', sans-serif`
  - `--border-radius: 8px`
  - `--color-accent-glow: transparent`
- Audit `src/components/Header/Header.css` — replace any hardcoded dark colors with tokens; ensure nav links and borders are readable on light background
- Audit `src/components/Footer/Footer.css` — same; ensure contrast on cream background
- Audit `src/components/HeroSection/HeroSection.css` — ensure hero text is dark (`--color-text-primary`) on cream bg; CTA button uses `--color-accent` (orange) with rounded `--border-radius`
- Audit `src/pages/HomePage.css` — replace hardcoded colors with tokens
- Audit `src/pages/TourPage.css` — show rows use `--color-bg-surface` for card backgrounds
- Audit `src/pages/VideosPage.css` — replace hardcoded colors
- Audit `src/pages/ContactPage.css` — form fields use `--color-bg-surface` and `--color-border`

**Acceptance criteria:**
- Setting `data-theme="navy-orange"` on `<html>` renders the full site in warm navy/orange palette
- No text is invisible (light-on-light or dark-on-dark)
- All interactive states (hover, focus) use `--color-accent` or `--color-accent-hover`
- No hardcoded hex/rgb color values remain in any component or page CSS file

---

### Ticket 02 — Nightclub Neon Theme

**Branch:** `ticket/style-themes/02`
**Depends on:** Ticket 00
**Can run in parallel with:** Ticket 01, Ticket 03

**Scope:**
- Fill all token values in `src/styles/themes/nightclub.css`:
  - `--color-bg: #080810`
  - `--color-bg-surface: #0E0E1A`
  - `--color-text-primary: #F0EEFF`
  - `--color-text-muted: #8888AA`
  - `--color-accent: #00E5FF` (electric cyan)
  - `--color-accent-hover: #00BFDE`
  - `--color-accent-secondary: #FF2D78` (hot pink; replaces current red)
  - `--color-border: #1A1A3A`
  - `--font-heading: 'Bebas Neue', sans-serif`
  - `--font-body: 'Inter', sans-serif`
  - `--border-radius: 2px`
  - `--color-accent-glow: rgba(0, 229, 255, 0.35)`
- `src/components/Header/Header.css` — add `box-shadow: 0 0 12px var(--color-accent-glow)` on active/hover nav link
- `src/components/HeroSection/HeroSection.css` — add `text-shadow: 0 0 30px var(--color-accent-glow)` on hero headline; add `box-shadow: 0 0 20px var(--color-accent-glow)` on CTA button `:hover`
- `src/pages/TourPage.css` — add neon left-border (`border-left: 2px solid var(--color-accent)`) and glow on show row `:hover`
- `src/pages/VideosPage.css` — add `box-shadow: 0 0 16px var(--color-accent-glow)` on video card `:hover`

**Acceptance criteria:**
- Setting `data-theme="nightclub"` renders the full site in dark neon palette
- Neon glow effects are visible on interactive elements in nightclub mode
- Glow effects are absent (fallback `transparent`) when running in navy-orange mode
- Site looks identical to pre-feature state when nightclub theme is active (existing dark aesthetic preserved and enhanced)

---

### Ticket 03 — ThemeSwitcher FAB

**Branch:** `ticket/style-themes/03`
**Depends on:** Ticket 00
**Can run in parallel with:** Ticket 01, Ticket 02

**Scope:**
- Create `src/components/ThemeSwitcher/ThemeSwitcher.tsx`:
  - Calls `useTheme()` for `theme` and `setTheme`
  - Renders a fixed-position pill/capsule button bottom-right
  - Contains two mini color swatches: navy+orange circle and dark+cyan circle
  - Active theme swatch has a white ring indicator
  - Clicking the inactive swatch switches theme
  - Accessible: `aria-label="Switch to [theme name] theme"`
- Create `src/components/ThemeSwitcher/ThemeSwitcher.css`:
  - `position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 9999`
  - Pill/capsule shape with subtle drop shadow
  - `transition: box-shadow var(--transition-base)` on hover
  - Swatch circles ~20px diameter, 4px gap between them
- Update `src/App.tsx` — add `<ThemeSwitcher />` as last child inside the root `<div>`

**Acceptance criteria:**
- FAB is visible in bottom-right corner on all pages
- Clicking a swatch immediately switches the site theme
- Active swatch has a visual ring indicator
- Theme persists on page reload (localStorage)
- FAB does not obscure any page content at common viewport sizes (1280px, 375px)
- FAB is present in both themes and adapts its own colors via CSS tokens
