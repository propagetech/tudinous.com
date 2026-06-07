# Tudinous Kryos — Website Redesign: Overview & Decisions

> **Purpose of this folder:** Every significant decision behind the new website lives here as a
> Markdown file so future maintainers understand *why* the site is built the way it is. Read the
> files in numeric order.

| File | What it covers |
|------|----------------|
| `00-overview.md` | Goals, constraints, the headline decisions (this file) |
| `01-content-audit.md` | Every piece of content extracted from the old site, verbatim |
| `02-competitor-research.md` | Competitor / peer analysis that shaped the IA |
| `03-information-architecture.md` | Sitemap, navigation, per-page section lists |
| `04-design-system.md` | Material Design 3 tokens — colour, type, spacing, components |
| `05-accessibility.md` | WCAG 2.1 AA + ARIA + screen-reader plan |
| `06-seo-schema.md` | SEO, metadata, and schema.org / JSON-LD plan |
| `07-image-asset-map.md` | Old → new image rename map and where each is used |
| `08-build-notes.md` | Technical build notes, file structure, how to preview/deploy |
| `09-client-feedback-log.md` | Client feedback & communication log — what was requested and incorporated |

---

## 1. The brief (what was asked)

Re-design the **entire** Tudinous Kryos website from scratch using **only plain HTML, CSS and
JavaScript** — no libraries, no frameworks, no build step. The new site must deliver:

- **SEO + rich SEO** (clean metadata, Open Graph, Twitter cards, canonical URLs, sitemap, robots).
- **schema.org structured data** (JSON-LD).
- **ARIA** roles/labels and **semantic HTML5** elements throughout.
- **Screen-reader friendly** markup and a verified reading order.
- **WCAG 2.1 AA** as a minimum bar (contrast, focus, targets, motion).
- **Material Design 3** ([m3.material.io](https://m3.material.io/)) as the layout system — type scale,
  spacing, elevation, shape, components.
- **Google Material Symbols** icons ([fonts.google.com/icons](https://fonts.google.com/icons)).
- **Google Fonts** ([fonts.google.com](https://fonts.google.com/)).
- **Reuse the existing images**; use **unDraw** illustrations only where genuinely needed.
- A **competitor study** to inform the content structure.

## 2. Headline decisions

| Decision | Choice | Rationale |
|---|---|---|
| **Where it lives** | New `v2/` folder (staging preview). The live root site is **untouched**. | Lets us review the redesign safely; production keeps running until sign-off. |
| **Visual direction** | "Clean corporate-cryo" — M3 **light** theme, cryo-blue primary derived from the brand, generous whitespace, photo heroes with subtle frost/vapour accents. | Trustworthy B2B feel; modern but conservative enough for an engineering buyer. |
| **Pages** | 7 content pages + 404 (same set as today): Home, About, What We Do, Products, Services, Business Association, Contact. | Matches existing IA and sitemap; no broken links / lost SEO. |
| **Tech** | Hand-written semantic HTML, **one** CSS file (`css/styles.css`), **one** JS file (`js/main.js`). Zero dependencies. | Meets the "plain HTML/CSS/JS, no libraries" requirement; fast, cache-friendly, easy to maintain. |
| **Fonts** | **Roboto Flex** (body/UI) + **Roboto Serif** (display headings) from Google Fonts. | Roboto is M3's reference type family; the serif pairing keeps a touch of the old Playfair elegance while staying on-system. |
| **Icons** | **Material Symbols (Rounded)** via Google Fonts, loaded once. | Official M3 icon set; matches the requested icon source. |
| **Forms** | **No contact form** — email + WhatsApp only. | Mirrors the recent decision on the live site (forms were disabled in favour of email-only). |
| **Images** | Reuse existing photos, renamed by the section that uses them; copied into `v2/imgs/` (originals left in place so the live site keeps working). | Satisfies "rename per section title" without breaking production. |
| **Illustrations** | unDraw used sparingly for "value/process" sections where no suitable photo exists; recoloured to the brand blue. | Keeps the page lively without inventing fake photos. |

## 3. Positioning (the single most important content insight)

Tudinous Kryos is **not a manufacturer**. It is an **independent cryogenics representation,
consultancy and support firm** that connects Indian cryogenic users with the world's leading
manufacturers — and stays with them from advice through to maintenance. The new site leads with
**expertise + independence**, anchored by founder **Dr. Tushar Bhowmick** (PhD Cryogenic
Engineering, IIT Kharagpur; ex-Philips Cryogenics & ex-Stirling Cryogenics; Fellow, Indian
Cryogenic Council). No Indian competitor combines a PhD/industry-veteran founder + a portfolio of
named global principals + an independent advisory stance. That triad is the brand's wedge and is
repeated across the site. See `02-competitor-research.md`.

## 4. Non-goals / out of scope

- No CMS, no backend, no analytics scripts (can be added later).
- No working contact form (email + WhatsApp by design).
- We do **not** modify the live root site in this pass — only `v2/`.
- We do **not** delete or rename the original images in place.

## 5. Success criteria

- Every page passes an HTML validity sanity check and has a single `<h1>`, logical heading order.
- Colour contrast ≥ 4.5:1 for text (3:1 for large text / UI), visible focus rings, ≥ 48px targets.
- Each page ships correct, page-specific `<title>`, meta description, canonical, OG/Twitter tags,
  and JSON-LD.
- Keyboard-only and screen-reader navigation work end to end (skip link, landmarks, labels).
- No external JS/CSS dependencies beyond Google Fonts.
