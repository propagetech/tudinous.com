# Design System — Material Design 3 (light, "corporate-cryo")

Implemented as CSS custom properties in `v2/css/styles.css`. This file documents the tokens and the
reasoning so they can be tuned consistently. Reference: https://m3.material.io/

## 1. Colour (M3 tonal roles, light scheme)

Primary derived from the brand's cool blue (`#7D94F9`) but darkened/saturated to a confident
"cryo-blue" that clears WCAG AA on white. Brand red (`#D91505`) is kept as a **tertiary accent**,
used sparingly (never for body text).

| Token | Value | On-token | Use |
|---|---|---|---|
| `--primary` | `#00629E` | `#FFFFFF` | Primary actions, links, key icons |
| `--primary-container` | `#CFE5FF` | `#001D34` | Tinted blocks, hovered cards |
| `--secondary` | `#51606F` | `#FFFFFF` | Secondary text/icons, chips |
| `--secondary-container` | `#D5E4F7` | `#0D1D2A` | Subtle fills |
| `--tertiary` | `#9C4146` | `#FFFFFF` | Sparing warm accent (brand-red lineage) |
| `--tertiary-container` | `#FFDAD8` | `#410008` | Highlight pills |
| `--error` | `#BA1A1A` | `#FFFFFF` | Validation / errors |
| `--background` / `--surface` | `#FBFCFF` | `#1A1C1E` | Page + card base |
| `--surface-variant` | `#DEE3EB` | `#42474E` | Dividers, muted surfaces |
| `--surface-container` | `#EFF1F5` | — | Section banding |
| `--surface-container-high` | `#E7E9EE` | — | Raised cards |
| `--outline` | `#72777F` | — | Borders |
| `--outline-variant` | `#C2C7CF` | — | Hairlines |
| `--scrim` | `#000000` | — | Hero overlays (with opacity) |

**Contrast checks (text on white `#FBFCFF`):** `--primary #00629E` ≈ 5.6:1 ✓ · `--on-surface
#1A1C1E` ≈ 15:1 ✓ · secondary text `#42474E` ≈ 9:1 ✓. White text on `--primary` ≈ 5.6:1 ✓.
Hero text always sits on a dark scrim overlay (≥ 0.55 alpha) → ≥ 4.5:1.

A **dark-mode** block is provided via `@media (prefers-color-scheme: dark)` (re-mapped tonal roles)
so the site respects the user's OS setting — not required by the brief but cheap and inclusive.

## 2. Type

Two Google fonts, M3-style scale:

- **Display / headline:** `'Roboto Serif'` (variable) — editorial, echoes the old Playfair elegance.
- **Body / UI / labels:** `'Roboto Flex'` (variable) — M3's reference family.
- Fallback stack: `system-ui, -apple-system, Segoe UI, sans-serif`.

| Role | Size (clamp) | Weight | Line-height |
|---|---|---|---|
| Display large | `clamp(2.5rem, 5vw, 3.5rem)` | 700 serif | 1.1 |
| Headline (h2) | `clamp(1.75rem, 3vw, 2.25rem)` | 700 serif | 1.15 |
| Title (h3) | `clamp(1.25rem, 2vw, 1.5rem)` | 600 serif | 1.2 |
| Body large | `1.125rem` | 400 | 1.6 |
| Body | `1rem` | 400 | 1.65 |
| Label / button | `0.875rem`–`1rem` | 600, +0.02em tracking | 1 |
| Overline / eyebrow | `0.8125rem` uppercase, +0.1em | 700 | 1 |

Base `font-size:100%` (16px). Body copy never below 16px on content. `rem` units throughout so user
zoom/`prefers` settings scale everything.

## 3. Spacing — 4dp grid

`--space-1:4px · -2:8px · -3:12px · -4:16px · -5:24px · -6:32px · -7:48px · -8:64px · -9:96px`.
Section vertical rhythm: `clamp(48px, 8vw, 96px)` top/bottom. Content max-width `--content-max:
1200px`; prose max-width `72ch`.

## 4. Shape (corner radius)

`--radius-xs:4px · -sm:8px · -md:12px · -lg:16px · -xl:28px · -full:999px`.
Cards `--radius-lg`; buttons `--radius-full` (M3 pill); hero/feature panels `--radius-xl`.

## 5. Elevation (M3 levels → box-shadow)

- `--elev-0`: none
- `--elev-1`: `0 1px 2px rgba(0,0,0,.30), 0 1px 3px 1px rgba(0,0,0,.15)`
- `--elev-2`: `0 1px 2px rgba(0,0,0,.30), 0 2px 6px 2px rgba(0,0,0,.15)`
- `--elev-3`: `0 4px 8px 3px rgba(0,0,0,.15), 0 1px 3px rgba(0,0,0,.30)`

Cards rest at elev-1, lift to elev-3 on hover/focus (transform + shadow), respecting reduced-motion.

## 6. Components (built in CSS, no JS framework)

- **Top app bar** — sticky, surface background, blur on scroll; logo + nav + CTA; mobile drawer.
- **Buttons** — `.btn` (filled primary), `.btn--tonal` (primary-container), `.btn--outlined`,
  `.btn--text`. Min height 48px, pill shape, icon support, visible focus ring.
- **Cards** — `.card` (outlined/elevated), used for capabilities, products, services, partners.
- **Chips** — `.chip` for the Economic/Reliable/Fit pills and industry tags.
- **Hero** — `.hero` full-bleed background image + scrim + constrained content.
- **Stat band / strip** — `.strip` tinted section.
- **Step list** — numbered `.steps` for the value chain.
- **Icon** — `.material-symbols-rounded` spans; decorative icons get `aria-hidden`.
- **Section** — `.section` wrapper with consistent vertical rhythm + `.container`.
- **CTA band** — `.cta-band` primary-container panel.

## 7. Motion

Durations `--motion-short:150ms · -medium:250ms · -long:400ms`; M3 standard easing
`cubic-bezier(.2,0,0,1)`. Scroll-reveal (fade/translate) via IntersectionObserver. **All** motion is
wrapped in `@media (prefers-reduced-motion: reduce)` → transitions/animations disabled.

## 7a. Theming — light / dark (manual toggle + OS default)

- Light is the default `:root`. Dark values live once as `--dk-*` custom properties and are mapped
  onto the live tokens by **two** triggers: `html[data-theme="dark"]` (explicit user choice) and an
  `@media (prefers-color-scheme: dark) :root:not([data-theme="light"])` fallback (OS default when the
  user hasn't chosen). Choosing light sets `html[data-theme="light"]`, which keeps the light tokens
  and opts out of the media query.
- A header **theme toggle** (icon button, Material Symbols `dark_mode`/`light_mode`) flips the theme,
  saves it to `localStorage`, updates `aria-pressed` + `aria-label` + `<meta name=theme-color>`.
- **No flash:** a tiny inline `<head>` script applies a saved choice before first paint; if there is
  no saved choice it does nothing and the `@media` rule handles the OS preference. `main.js` also
  listens for live OS changes when no explicit choice is set.

## 7b. Header / navigation layout

- Logo pinned left (`margin-right:auto`); nav + theme toggle + CTA grouped right. The nav is forced
  to a single line (`flex-wrap:nowrap`, `white-space:nowrap`) so labels never wrap.
- Because the 7 long labels + wide logo + CTA only fit comfortably ≥ 1200px, the inline nav shows at
  **≥ 1200px**; below that it collapses to an accessible slide-down **drawer** (hamburger
  `aria-expanded`, Esc/outside-click close). The theme toggle stays visible in the bar at all sizes.

## 8. Icons & fonts loading

- Material Symbols Rounded + Roboto Serif + Roboto Flex via a single Google Fonts `<link>` with
  `preconnect`. `display=swap` to avoid invisible text.
- Material Symbols loaded with the variable-axes URL (`opsz,wght,FILL,GRAD`).
