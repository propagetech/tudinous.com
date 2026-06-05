# Accessibility Plan — WCAG 2.1 AA, ARIA, Screen-Reader

Target: meet/exceed **WCAG 2.1 Level AA**. Decisions and the checklist used while building.

## Semantic structure (every page)

- One `<header role="banner">` (top app bar), one `<main id="main">`, one
  `<footer role="contentinfo">`.
- Primary nav in `<nav aria-label="Primary">`; footer nav in `<nav aria-label="Footer">`.
- Exactly **one `<h1>`** per page; headings never skip levels (`h1→h2→h3`).
- Page regions use `<section aria-labelledby="…">` tied to the section heading, so screen-reader
  rotor/landmark lists are meaningful.
- Lists are real `<ul>/<ol>`; the value-chain uses `<ol>`.

## Keyboard & focus

- **Skip link** (`.skip-link`) is the first focusable element → jumps to `#main`; visible on focus.
- Logical DOM order = visual order (no positive `tabindex`).
- Visible focus indicator on **all** interactive elements (`:focus-visible` → 3px primary outline +
  offset), never removed.
- Mobile nav drawer: hamburger is a `<button aria-expanded="true|false" aria-controls="nav-menu">`;
  `Esc` closes; focus returns to the toggle; (optional) focus trap while open.
- Touch/click targets ≥ 48×48px.

## Colour & contrast

- Body text ≥ 4.5:1; large text & UI/icons ≥ 3:1 (see `04-design-system.md` checks).
- Information never conveyed by colour alone (icons + text labels on cards/chips).
- Hero text always over a dark scrim (≥ 0.55 alpha) to guarantee contrast over photos.

## Images & media

- Every meaningful `<img>` has descriptive `alt`; decorative images use `alt=""`.
- Hero background photos are CSS backgrounds (decorative) — the heading carries the meaning; where a
  photo is informative it is an `<img>` with alt.
- Partner logos: `alt="<Partner name> logo"`.
- Icons: Material Symbols are decorative → `aria-hidden="true"`; when an icon is the only content of
  a control, the control gets an `aria-label`.
- Map `<iframe>` has a descriptive `title`.

## ARIA (used sparingly, correctly)

- Landmarks via native elements first; `aria-label` only to disambiguate multiple same-type
  landmarks (e.g. two `<nav>`s).
- `aria-current="page"` on the active nav link.
- WhatsApp float + icon-only buttons: `aria-label`.
- No redundant roles on elements that already have them natively.
- `aria-labelledby` linking sections to their headings.

## Forms / contact

- No contact form (email-only). All `mailto:`/`tel:`/`wa.me` links have clear visible text and,
  where icon-only, an `aria-label`.

## Motion & preferences

- `prefers-reduced-motion: reduce` disables scroll-reveal, hover transforms, and smooth scroll.
- `prefers-color-scheme` honoured (dark theme mapping).
- Layout reflows to a single column without loss of content/function down to 320px width and at
  200–400% zoom.

## Language & metadata

- `<html lang="en">`.
- Descriptive, unique `<title>` per page; first words distinguish the page.
- `<a>` link text is meaningful out of context (avoid bare "read more" — use "Read more about …"
  via visually-hidden text where needed).

## Build-time checklist (run per page)

- [ ] Single h1, ordered headings.
- [ ] Skip link present & works.
- [ ] All landmarks present; duplicate landmarks labelled.
- [ ] All images have alt (or `alt=""` if decorative).
- [ ] All interactive elements keyboard-reachable with visible focus.
- [ ] Contrast spot-checks pass.
- [ ] `aria-current` on active nav item.
- [ ] Reduced-motion path verified.
- [ ] Tab order matches reading order.
