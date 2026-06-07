# Image Asset Map (old → new) & Usage

Per the brief, existing images were **renamed by the section/page that uses them**. Because the live
root site references the old names, we did **not** rename originals in place — instead we copied them
into `v2/imgs/` under section-based names. Originals remain in `imgs/` and `imgs/cdn/` so production
keeps working.

## Hero / background photos

| New file (`v2/imgs/`) | Copied from | Subject | Used on |
|---|---|---|---|
| `hero-home.jpeg` | `imgs/cdn/1471346340054LANDING.jpeg` | Cryo vial + tweezers in teal vapour, dark | Home hero |
| `hero-about.jpeg` | `imgs/cdn/147075402077945430890ml.jpeg` | Liquid-nitrogen demo, dense white fog | About hero |
| `hero-what-we-do.png` | `imgs/cdn/1471332355279aviary32858663ml.png` | Gloved hand holding cryo sample tube | What We Do hero |
| `hero-products.jpeg` | `imgs/cdn/147134092104648473417ml.jpeg` | Silver cryo vessel venting vapour | Products hero |
| `hero-services.jpeg` | `imgs/cdn/147134011883837632654ml.jpeg` | Technician dispensing liquid nitrogen | Services hero |
| `hero-business-association.jpeg` | `imgs/cdn/147134483310825798865ml.jpeg` | Hands joining jigsaw pieces (collaboration) | Business Association hero |
| `hero-contact.png` | `imgs/cdn/1471345287392aviary45025081ml.png` | Business handshake | Contact hero |

## Brand & social

| New file | Copied from | Use |
|---|---|---|
| `logo.webp` | `imgs/logo.webp` | Header/footer brand logo (833×116, transparent) |
| `logo-tudinous-kryos.jpeg` | `imgs/cdn/1470654229608Logo.jpeg` | OG/Twitter share image (1200-ish raster) |
| `favicon.webp` | `imgs/image-2.webp` | favicon + apple-touch-icon |

## Partner / principal logos

| New file | Copied from | Partner | Link |
|---|---|---|---|
| `partner-industrial-cryotech.webp` | `imgs/ict.webp` | Industrial CryoTech | http://www.industrialcryotech.com/ |
| `partner-cryo-comp.webp` | `imgs/cryo-camp.webp` | Cryo Comp | http://www.cryocomp.com/ |
| `partner-addcool.webp` | `imgs/addcool-trade-and-service.webp` | Addcool Trade & Services | http://addcool.in/wp/ |
| `partner-demaco.webp` | `imgs/demaco.webp` | Demaco Holland BV | https://www.demaco.nl/ |
| `partner-global-sensor-technology.png` | client-supplied (`GST-Wuhan-China-logo.png`) | Global Sensor Technology (GSTiR), Wuhan 430205, P.R. China — miniature Stirling cryocoolers | (website URL to be confirmed) |

## Not carried over

- `imgs/cdn/1470664819028Office011281.png`, `…NetworkDrives128.png`, `…BioHazard128.png`,
  `…Driller128.png` — generic 128px stock icons (all identical bytes). Replaced by **Material
  Symbols** icons in the new design, so not copied.
- `imgs/about-us.webp`, `what-we-do.webp`, `products.webp`, `services.webp` — tiny circular section
  glyphs from the old layout; replaced by Material Symbols. Not copied.
- `imgs/image-1.webp` — 346-byte spacer/placeholder; unused.
- Principal source rasters in `imgs/cdn/` (`…ICEFLY.png`, `…crycomp…jpeg`, `…Addcoollogo.jpeg`,
  `…demaconl…png`) — superseded by the cleaner `partner-*.webp` versions.

## unDraw illustrations

Used only where no suitable photo exists (e.g. Home "why us"/process, empty states). Download as SVG
from https://undraw.co/illustrations, recolour to the brand primary (`#00629E`) via the unDraw colour
picker before export, and save into `v2/imgs/` as `illus-<purpose>.svg` with descriptive `alt`.
*(Current build relies on photos + Material Symbols; add illustrations here if a section needs one.)*
