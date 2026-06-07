# Client Feedback & Communication Log

A running record of feedback received (from the client and from internal review) and exactly what
was incorporated in response. Newest entries first. Dates are absolute.

---

## Client review #2 — Dr. Tushar Bhowmick (Director) · 2026-06-07
**Channel:** Email. **Outcome:** Approved to publish live.

### Confirmations / inputs
- **Contact email:** agreed with our recommendation — keep **`info@tudinous.com`** as primary. (No
  change needed; site already matches.)
- **Global Sensor Technology website:** **www.gst-ir.net** provided.
- **Go-live:** authorised to upload the new version live.
- **Invoicing details** supplied (for billing, not shown on the site):
  Tudinous Kryos Pvt. Ltd., 4/203 Beverly Park, Jaypee CGHS, Plot No. 2, Sector 22, Dwarka, New
  Delhi 110077 · **GST 07AAFCT8066K1ZT** · **PAN AAFCT8066K**.

### Incorporated
- **GSTiR logo now hyperlinked** to `https://www.gst-ir.net/` (opens in new tab, `rel="noopener"`),
  on both the **Business Association** partner block and the **Home** logo strip — matching the other
  four principals. All open items from review #1 are now closed.

### Pending
- **Publish to production** (promote root site to live `tudinous.com` via the GitHub Pages deploy) —
  awaiting final go-ahead to commit & push.
- Forward invoice to the client per the billing details above.

**Status:** All content/links ✅ done · go-live ⏳ ready, pending push.

---

## Client review #1 — Dr. Tushar Bhowmick (Director, Tudinous Kryos) · 2026-06-07
**Channel:** Email (reply to the website-draft review).
**Overall:** Reviewed the modified draft of www.tudinous.com — "quite impressive and updated."

### Requests
1. **Contact email** — use `t.bhowmick@tudinous.com`, or keep `info@tudinous.com`?
2. **Add a new business associate** included recently:
   - **Global Sensor Technology (GSTiR)**, Wuhan 430205, P.R. China.
   - Product: **Miniature Stirling Cryocoolers**.
   - Logo supplied by client (`GST-Wuhan-China-logo.png`).

### Incorporated
- **Global Sensor Technology added across the site:**
  - **Business Association page** — new partner block (logo + "Miniature Stirling cryocoolers. Wuhan
    430205, P.R. China."), placed after Demaco Holland BV.
  - **Home page** — added to the principals logo strip; the headline stat updated **"4" → "5"
    global principals represented**.
  - **Products page** — *Cryocoolers* card now reads "…including miniature Stirling cryocoolers from
    Global Sensor Technology (GSTiR), Wuhan."
  - Logo saved to the partner naming convention as `imgs/partner-global-sensor-technology.png` and
    recorded in [`07-image-asset-map.md`](07-image-asset-map.md).
- All edited pages re-verified (single `<h1>`, balanced tags, logo resolves, HTTP 200).

### Response / decision sent to client
- **Email address:** recommended keeping **`info@tudinous.com` as the primary** contact (header,
  CTAs, footer) with **`t.bhowmick@tudinous.com` listed on the Contact page** (already present).
  Rationale: company-style address, professional, durable across staffing changes, reduces spam to
  the Director's personal inbox; direct address still available on Contact. **No code change made —**
  current state already matches this recommendation; awaiting the Director's confirmation.

### Awaiting from client
- **GSTiR official website URL** — to hyperlink their logo (the other four principals link to their
  sites). Logo currently shown without a link.
- Confirmation that the **product wording** ("Miniature Stirling Cryocoolers") is exactly as desired.
- Final **email preference** (keep `info@` primary, or switch the primary to `t.bhowmick@`
  site-wide — a one-line change either way).

**Status:** Partner addition ✅ implemented · email + GSTiR link ⏳ awaiting client confirmation.

---

## Internal review & design iterations (build/QA feedback) · 2026-06-06 → 2026-06-07
Feedback-driven refinements made during review, before client sign-off:

- **Positioning strip contrast** — heading/stat numbers were dark-on-dark in places; corrected the
  colour treatment so the strip is readable in both light and dark themes.
- **Header navigation** — long labels were wrapping at mid widths. Pinned the nav to a single line and
  set the mobile drawer to engage below 1200px so menu items never wrap.
- **Light/dark theme** — added a manual theme toggle (remembers choice, respects OS setting, no
  flash on load) in addition to the automatic OS-preference support.
- **About → "Who we are"** — empty right-hand space on wide screens replaced with an "At a glance"
  fact card; later aligned the card to the top, level with the section heading.
- **Home hero** — redesigned to a split layout (text left, crisp image right on a light surface with
  a cryo-frost accent), chosen by the client from three presented options. Both text and image kept
  prominent.
- **Copy punctuation** — removed all em dashes ("—") from the content per request; replaced with
  context-appropriate commas, colons, parentheses and periods.
- **Home page** — added the Google Map ("Find us in Dwarka, New Delhi") section, matching Contact.
- **Repository restructure** — old live site moved to `archive/`; the redesigned site promoted to the
  repository root; `career.html` kept as a redirect to `business-association.html` to preserve the
  old URL and its search ranking.

---

### How to use this log
Add a new dated entry at the top for each client communication or review round: capture the
**request**, what was **incorporated**, the **response/decision**, and anything **awaiting** the
client. This keeps a clear audit trail of why the site changed over time.
