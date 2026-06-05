# Information Architecture & Page Structure

Reconciles the competitor recommendations (`02`) with the content we actually have (`01`).

## Global navigation (lean, 7 items)

`Home · About · What We Do · Products · Services · Business Association · Contact`

- **Header:** logo (links home) + nav + a persistent primary CTA button **"Talk to our expert"**
  (`mailto:info@tudinous.com`). On mobile the nav collapses behind a hamburger (`<button
  aria-expanded>` toggling an accessible drawer).
- **Footer (every page):** company blurb · quick links · Dwarka address + phone/email/WhatsApp ·
  partner logos · **CIN U74999DL2016PTC302188** · "Fellow, Indian Cryogenic Council" · copyright.
- **Floating WhatsApp button** retained on every page (accessible label).
- **Skip-to-content link** as the first focusable element on every page.

## URL / file map (in `v2/`)

| Page | File | `<title>` |
|---|---|---|
| Home | `index.html` | Tudinous Kryos — Cryogenics Consultancy, Representation & Support in India |
| About | `about.html` | About Tudinous Kryos — Independent Cryogenics Experts, New Delhi |
| What We Do | `what-we-do.html` | What We Do — How Tudinous Kryos Works |
| Products | `products.html` | Cryogenic Products We Represent in India |
| Services | `services.html` | Cryogenic Services — Consultancy, Sourcing, O&M Support |
| Business Association | `business-association.html` | Business Association — Partner With Tudinous Kryos |
| Contact | `contact-us.html` | Contact Tudinous Kryos — Dwarka, New Delhi |
| 404 | `404.html` | Page Not Found — Tudinous Kryos |

> `business-association.html` replaces the old `career.html`. We keep `contact-us.html` as-is to
> preserve the existing inbound link/sitemap entry. (If desired later, add a `career.html` redirect
> stub — noted in build notes.)

## Per-page section lists

### HOME (`index.html`)
1. **Hero** — `hero-home.jpeg` (cryo vial + vapour). H1: "Your partner to the world of low
   temperature." Sub: independent cryogenics representation, consultancy & support — Dwarka, New
   Delhi. CTAs: "Talk to our expert" (primary) + "Explore what we do" (secondary).
2. **Positioning strip** — one line: we connect Indian cryogenic users with the world's leading
   manufacturers, and stay from advice to maintenance. + 3 mini stat/feature chips (Economic ·
   Reliable · Fit to purpose) or trust facts (PhD-led · 4 global principals · 30+ yrs in Indian
   cryogenics).
3. **What we do (capabilities grid)** — 4 M3 cards w/ Material Symbols icons: Representation &
   Sourcing · Expert Consultancy · India Business Development · Operations & Maintenance. Each links
   to the relevant page.
4. **Why Tudinous (differentiator)** — "Economic, reliable & fit to purpose"; independent (not a
   manufacturer) → unbiased advice; PhD-led expertise. (unDraw illustration.)
5. **Founder credibility block** — Dr. Tushar Bhowmick: 2-line bio + credentials → link to About.
6. **Industries served** — tile grid: Pharma & Biotech · Space & Research · Electronics ·
   Food & Beverage · LNG / Energy · Metallurgy · Healthcare / IVF · Superconductivity.
7. **Business Association (partners)** — logo strip of the 4 principals → link to page.
8. **Vision & Mission** — two cards.
9. **CTA band** — "Looking for the right cryogenic solution? Let's talk." email + WhatsApp.

### ABOUT (`about.html`)
1. Hero (`hero-about.jpeg`) — H1 "About Tudinous Kryos".
2. Who we are — company intro + representation/consultancy model + name meaning ("Beautiful
   Cryogenics").
3. **Founder profile** (centerpiece) — Dr. Tushar Bhowmick full credentials & heritage.
4. Our philosophy — Economic, Reliable & Fit to purpose; the three "budgets" (money / cold energy /
   acquisition & ownership).
5. Why independence matters — unbiased advice vs. manufacturer sales.
6. Vision & Mission.
7. Affiliations & registration (Indian Cryogenic Council; CIN).
8. CTA band.

### WHAT WE DO (`what-we-do.html`)
1. Hero (`hero-what-we-do.png`) — H1 "What We Do".
2. The value chain — connect → advise → source → coordinate → commission → support (numbered M3
   step list).
3. Four pillars — Representation · Consultancy · India Business Development · O&M Support (cards
   linking to Products/Services).
4. Resources — collaborating companies + Cryogenic Expertise of India.
5. Commitment — "from Proof of Concept to Performance".
6. Relation — long-term, trust & mutual cooperation.
7. CTA band.

### PRODUCTS (`products.html`)
1. Hero (`hero-products.jpeg`) — H1 "Cryogenic Products We Represent".
2. Intro — "Through our principals, we offer…".
3. **Product category cards** (full 15-item range from audit, grouped sensibly) — each card: name,
   short description, applications; "Enquire" CTA.
4. Principal callouts — which partner supplies what (valves → Cryo Comp; transfer lines → Demaco;
   etc.).
5. CTA band.

### SERVICES (`services.html`)
1. Hero (`hero-services.jpeg`) — H1 "Cryogenic Services".
2. **Service cards** (lead with O&M):
   - Operations & Maintenance support for cryogenic liquefaction plants *(headline)*
   - Consultancy & expert advice / feasibility
   - Equipment selection & sourcing / procurement coordination
   - Expertise support for cryogenic research projects
   - India business development & market entry (for foreign manufacturers)
   Each: problem → outcome → CTA.
3. CTA band.

### BUSINESS ASSOCIATION (`business-association.html`)
1. Hero (`hero-business-association.jpeg`, puzzle/collaboration) — H1 "Business Association".
2. Intro — Tudinous's role as India representative; zero/minimal-investment market entry.
3. **Our principals** — one block per partner: logo, what they make, relationship, link.
4. **For manufacturers** — "Foreign cryogenics manufacturer seeking India entry?" CTA.
5. **For experts** — invitation to independent Indian cryogenic experts.
6. CTA band.

### CONTACT (`contact-us.html`)
1. Hero (`hero-contact.png`, handshake) — H1 "Contact Us".
2. Contact cards — Email (primary) · Phone/Mobile · WhatsApp · Address. (No form — email-only.)
3. Two enquiry paths — "I'm a cryogenic user" vs. "I'm a manufacturer" (mailto with subject preset).
4. Registration line — CIN.
5. **Google Map embed** (retained) + "Open in Google Maps" link.

### 404 (`404.html`)
- Minimal centered layout, friendly message, link home + key nav. Same header/footer is optional;
  keep it light. `noindex`.

## Re-phrased mission (timeless)

> **Mission:** "To be the trusted cryogenic competence partner for Indian users — connecting them
> with the world's best products and expertise, and supporting them from concept to performance."

(Original "80% by 2020" target retained in audit for the record but not shown on the live page.)
