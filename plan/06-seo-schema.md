# SEO & Structured Data Plan

Canonical host: **https://www.tudinous.com/** (CNAME). The redesign currently lives at `/v2/`; when
promoted to root, the canonical/sitemap/OG URLs below become the real paths (build notes cover the
find-replace). During staging, canonicals point at the intended production paths so we don't index
`/v2/` accidentally — and `v2/robots.txt` + a `noindex` option are available if the staging folder
is ever exposed.

## Per-page `<head>` recipe

Every page includes, in order:

1. `<meta charset="utf-8">`, `<meta name="viewport" content="width=device-width, initial-scale=1">`.
2. Unique **`<title>`** (≤ ~60 chars) and **`<meta name="description">`** (≤ ~155 chars) — see table.
3. `<link rel="canonical" href="https://www.tudinous.com/<page>">`.
4. **Open Graph:** `og:type`, `og:site_name`, `og:title`, `og:description`, `og:url`, `og:image`
   (`https://www.tudinous.com/imgs/logo-tudinous-kryos.jpeg`), `og:image:alt`, `og:locale=en_IN`.
5. **Twitter:** `twitter:card=summary_large_image`, `twitter:title/description/image`.
6. `theme-color`, favicon (`imgs/favicon.webp`), apple-touch-icon, `manifest.webmanifest`.
7. Fonts: `preconnect` to fonts.googleapis.com & fonts.gstatic.com, one stylesheet link.
8. JSON-LD blocks (below).

## Title / description table

| Page | Title | Description (≈) |
|---|---|---|
| Home | Tudinous Kryos — Cryogenics Consultancy, Representation & Support in India | Independent cryogenics partner in New Delhi: we connect Indian users with the world's leading manufacturers and support them from expert advice to plant maintenance. |
| About | About Tudinous Kryos — Independent Cryogenics Experts, New Delhi | PhD-led, independent cryogenics consultancy founded by Dr. Tushar Bhowmick (ex-Philips & Stirling Cryogenics; Fellow, Indian Cryogenic Council). |
| What We Do | What We Do — How Tudinous Kryos Works | From connection and advice to sourcing, commissioning and O&M support — how Tudinous Kryos delivers economic, reliable and fit-to-purpose cryogenics. |
| Products | Cryogenic Products We Represent in India | Cryogenic valves, transfer lines, cryostats, cryocoolers, liquefaction plants, storage and more — represented in India through our global principals. |
| Services | Cryogenic Services — Consultancy, Sourcing & O&M Support | Operations & maintenance support for liquefaction plants, expert consultancy, equipment sourcing, research support and India business development. |
| Business Association | Business Association — Partner With Tudinous Kryos | Represent your cryogenic products in India with minimal investment, or offer your cryogenic expertise. Our principals: Industrial CryoTech, Cryo Comp, Addcool, Demaco. |
| Contact | Contact Tudinous Kryos — Dwarka, New Delhi | Email, phone, WhatsApp and address for Tudinous Kryos Pvt. Ltd., Dwarka, New Delhi. CIN U74999DL2016PTC302188. |
| 404 | Page Not Found — Tudinous Kryos | `noindex`. |

## JSON-LD structured data

- **Site-wide (all pages):** `Organization` *(or `ProfessionalService`)* with `name`, `legalName`,
  `url`, `logo`, `image`, `description`, `email`, `telephone`, `address` (PostalAddress: Dwarka, New
  Delhi 110077, IN), `founder` (`Person` — Dr. Tushar Bhowmick, with `alumniOf` IIT Kharagpur and
  `jobTitle`), `identifier` (CIN U74999DL2016PTC302188), `areaServed` India, `sameAs` (partner /
  social where applicable), `knowsAbout` (cryogenics topics).
- **Home:** add `WebSite` (+ optional `SearchAction` omitted — no on-site search).
- **Contact:** `LocalBusiness`/`ProfessionalService` with `geo` (lat 28.5607, lng 77.0572 from the
  existing map), `hasMap`, `openingHours` (Mon–Fri 09:30–18:00 — placeholder, confirm), `priceRange`.
- **Products:** `ItemList` of product categories (`Product`/`ListItem` names) — lightweight, no
  fake prices/reviews.
- **Services:** `ItemList` / `Service` entries for each service offered, `provider` → the Org.
- **Breadcrumbs:** `BreadcrumbList` on every inner page (Home › Page).
- All JSON-LD validates against schema.org; no spammy/fabricated ratings or offers.

## Sitemap & robots (production, at root after promotion)

- `sitemap.xml` — lists all 7 indexable pages (drop 404), `https://www.tudinous.com/...`, with
  `lastmod`, `changefreq=monthly`, priority Home 1.0 / About 0.9 / others 0.8. *(The existing deploy
  workflow rewrites `lastmod` on each deploy.)*
- `robots.txt` — **replace the broken HTML-wrapped one** with a valid plain-text file:
  `User-agent: *` / `Allow: /` / `Sitemap: https://www.tudinous.com/sitemap.xml`.
- A staging `v2/robots.txt` + `v2/sitemap.xml` are included for completeness; when promoted to root
  they become the canonical ones.

## Performance (SEO-adjacent)

- Single CSS + single JS file, both small; no render-blocking libraries.
- Fonts: `preconnect` + `display=swap`.
- Images: `loading="lazy"` + `decoding="async"` on below-the-fold images; explicit `width`/`height`
  where used as `<img>` to avoid CLS. Hero photos as CSS backgrounds with a solid fallback colour.
- `<iframe>` map: `loading="lazy"`.
