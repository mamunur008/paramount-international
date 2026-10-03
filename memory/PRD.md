# Paramount International – Codeio IT Consulting Clone

## Original problem statement
Recreate the "Codeio IT Consulting Dark" HTML template (https://html.awaikenthemes.com/codeio/it-consulting-dark/) as a pixel-close, responsive React clone. Later requests:
- Rebrand logo to **"Paramount International"** (plain words, no icon)
- Add a **cursor-following effect**, "more satisfying, like neal.fun", with **multiple extremely distinct options the user can choose from**
- Make the **color combination exactly as Codeio**
- **Light-mode toggle** matching the template's light variant (follow system preference, dark fallback, remember choice)
- **Inner pages**: Service, Project and Blog detail pages so every card opens its own full story
- Keep everything **frontend-only with rich mock content** (user choice, June 2026)

## Exact Codeio tokens (from live template CSS)
| Token | Dark | Light |
|---|---|---|
| bg | #000000 | #F8F9FD |
| headings (primary) | #FFFFFF | #090915 |
| text | #FFFFFF | #505058 |
| accent | #0668FD | #0668FD |
| card / secondary | #FFFFFF14 | #FFFFFF |
| divider | #FFFFFF14 | #0909151A |
| font | IBM Plex Sans | IBM Plex Sans |
Buttons: 10px radius, arrow ↗, white fill slides in on hover. Headings weight 400, letter-spacing -0.03em. Dark panels (`.dark-section`) rounded 30px with 20px side margin: hero, how-it-works, testimonials, CTA, footer, page headers.

## Architecture
- React 19 + react-router-dom 7 + Tailwind (CSS-variable tokens under `c.*` in tailwind.config.js) + lucide-react
- `src/context/ThemeContext.jsx` – `data-theme` on `<html>`, localStorage `pi-theme`, pre-paint script in `public/index.html`
- `src/context/CursorContext.jsx` + `src/components/cursor/*` – modes: ring (default), trail, sparkle, blob, spotlight, none; picker FAB bottom-right; hidden on coarse pointers; localStorage `pi-cursor`
- `src/App.js` – Router/Layout, ScrollManager (hash scrolling), routes `/`, `/services/:slug`, `/projects/:slug`, `/blog/:slug`, `*`
- `src/pages/*` – Home, ServiceDetail, ProjectDetail, BlogDetail, NotFound
- `src/components/*` – one component per section; `Accordion`, `PageHeader`, `Sidebar` (CategoryList, MetaList, CtaBox) shared by inner pages
- `src/mock.js` – ALL content (MOCKED). Backend `server.py` is an untouched stub.

## Implemented (2026-06)
- [x] Full home clone re-skinned to exact Codeio palette, IBM Plex Sans, Codeio button/eyebrow/readmore styles
- [x] Light/dark theme with system-preference default + persistence
- [x] "Paramount International" text logo in header, footer, sidebar CTA
- [x] 6 cursor effects + picker UI
- [x] Service / Project / Blog detail pages with rich mock content, sidebars, breadcrumbs, 404
- [x] Scroll-reveal re-runs on route change; hash navigation from inner pages
- [x] Tested by testing agent: 100% frontend flows pass (test_reports/iteration_1.json)

## Backlog
- P1: Backend (FastAPI + Mongo) for services/projects/blog + contact form persistence (user chose frontend-only for now)
- P2: Blog archive / services listing pages, team & contact pages from the template
- P2: Replace Unsplash images with brand assets
- P3: Preloader animation like the template
