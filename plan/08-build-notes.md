# Build Notes — File Structure, Conventions, Preview & Promotion

## File structure (`v2/`)

```
v2/
├── index.html                 # Home
├── about.html
├── what-we-do.html
├── products.html
├── services.html
├── business-association.html  # replaces old career.html
├── contact-us.html
├── 404.html
├── robots.txt                 # plain-text, valid
├── sitemap.xml
├── manifest.webmanifest
├── css/
│   └── styles.css             # the ONLY stylesheet (M3 design system + page styles)
├── js/
│   └── main.js                # the ONLY script (nav drawer, scroll reveal, year, active link)
└── imgs/                       # renamed copies of existing images (see 07-image-asset-map.md)
```

## Conventions

- **No dependencies.** Only external requests are Google Fonts (fonts + Material Symbols).
- Markup is hand-written, semantic, indented 2 spaces; UTF-8.
- A shared header/footer pattern is duplicated across pages (static site, no includes). When editing
  nav/footer, update all pages — they are intentionally identical except `aria-current` and the
  page-specific `<head>`.
- CSS is organised: `@font` → tokens (`:root`) → reset/base → layout → components → page sections →
  utilities → media queries (responsive + reduced-motion + dark scheme).
- JS is vanilla, deferred, feature-detected, and no-ops gracefully if elements are absent.
- Class naming: lightweight BEM-ish (`.card`, `.card__title`, `.btn--outlined`).

## Accessibility / SEO are baked in per `05-*` and `06-*`. Each page carries its own JSON-LD.

## Preview locally

```bash
cd v2 && python3 -m http.server 8080   # then open http://localhost:8080
```

Pure static — opening the HTML files directly also works, but a server gives correct root-relative
behaviour and the map iframe.

## Promotion to production (when approved)

The live site is the repo **root** (GitHub Pages deploys `.` — see `.github/workflows/deploy.yml`).
To promote `v2/` to live:

1. Move `v2/*` to repo root (replacing the old `*.html`, `css/`, `js/`; keep `CNAME`, `.github/`,
   `imgs/cdn/` if still referenced elsewhere).
2. The new pages reference **root-relative** asset paths (`/css/styles.css`, `/imgs/…`, `/js/main.js`)
   and **root-relative page links** (`/`, `/about.html`, …) so they work unchanged once at root.
   *(While previewing under `/v2/`, paths are written root-relative against the v2 base — see note
   below.)*
3. Replace root `robots.txt` and `sitemap.xml` with the valid versions from `v2/`.
4. Add a `career.html` → `business-association.html` redirect stub if the old URL has inbound links.
5. Verify canonical URLs already point at `https://www.tudinous.com/<page>` (production paths).

### Path strategy used in the build

To keep promotion friction-free, in-page links and assets use paths **relative to the page file**
(e.g. `css/styles.css`, `imgs/hero-home.jpeg`, `about.html`, `index.html`). This works both:
- under `/v2/` during staging (served from the `v2` directory), and
- at root after promotion (files moved up).

Canonical/OG URLs are **absolute production URLs** (`https://www.tudinous.com/...`) regardless of
staging location, so search engines only ever see the real address.

## Things deliberately deferred (future work)

- Real case studies / references (placeholder section omitted until content exists).
- Analytics / consent banner.
- A working enquiry form (currently email + WhatsApp only, by decision).
- Confirm exact business hours for the LocalBusiness JSON-LD (`openingHours` is a sensible
  placeholder: Mon–Fri 09:30–18:00 IST).
- Optional unDraw illustrations (pipeline documented in `07-image-asset-map.md`).
