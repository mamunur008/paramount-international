# Paramount International

A company website with 17 public routes, built in React for **paramountint.com**, based on the repository's **emergent** branch and the supplied Codeio IT Consulting Dark comparison assets.

For upload and contact email instructions, start with **DEPLOY-TO-NETLIFY.md**.

## Run locally

Use Node.js 22 LTS and npm. Extract this version into a fresh folder to avoid mixing it with an older download.

```bash
cd frontend
npm ci
npm start
```

## Production build

```bash
cd frontend
npm run build
```

The deployable site is `frontend/build`. The existing backend scaffold is not required for this static marketing website.

## What's included

- Home, Company, Services, Products, Projects and Contact navigation.
- Company dropdown and subnavigation: About Paramount, Leadership & Team, Technology & Strengths.
- Four individual service pages, four detailed project pages and Privacy.
- Restored purple Codeio hero artwork and visible Light / Dark buttons on every page.
- Codeio's dark/blue direction with a complete light theme and a synchronised 240 ms theme transition. Browsers without View Transitions switch immediately.
- Supplied Catena and SalesTrace screenshots, credited JustGo product screens, keyboard-accessible screenshot galleries and a clearly labelled scanner illustration.
- Detailed project purposes, functions, development histories, technologies, buyer value and source notes. Proposed names remain distinct from independently owned historical products.
- Dedicated leadership biographies and photographs, including the replacement portrait of Shovon.
- Company-first homepage, official logo, contact utility bar, team preview and clear company facts.
- Ten custom cursor styles plus the native system cursor. The visible Cursor studio dropdown below the navigation provides keyboard access and saves the selection on this device.
- The original classic ring, rainbow comet, stardust, liquid blob and torchlight effects, plus orbit, precision crosshair, silk ribbon, click ripples and contrast lens.
- Custom cursors automatically turn off for coarse/touch pointers and reduced-motion preferences. Animation work pauses when the tab is hidden.
- Responsive navigation, product tabs, accessible form states and a static Netlify form definition.
- Tailwind CSS, the branch's existing shadcn/Radix infrastructure, Lucide icons and `tailwindcss-animate`.

## Edit the content

- `frontend/src/data/siteContent.js`: company contacts, team, services, products, portfolio descriptions and screenshot captions.
- `frontend/src/components/SiteSections.jsx`: reusable page sections, screenshot viewer and contact form.
- `frontend/src/company.css`: company presentation, navigation and leadership layouts.
- `frontend/src/pages/CompanyPages.jsx`: company and leadership copy.
- `frontend/src/polish.css`: the Codeio refinement, responsive layout and theme transitions.
- `frontend/src/context/CursorContext.jsx`: cursor choices, saved preference and accessibility preferences.
- `frontend/src/components/cursor/`: cursor rendering and pointer lifecycle.
- `frontend/public/assets/`: local imagery. See `ASSET-SOURCES.md` for provenance.

GoMembership / JustGo and IScanner are presented as the technical leadership's earlier experience. The copy does not assert that Paramount held those historical contracts. Unverified demo testimonials, customer counts and performance metrics have been removed.

## Netlify

The root `netlify.toml` supplies the settings:

| Setting | Value |
| --- | --- |
| Base directory | `frontend` |
| Build command | `npm run build` |
| Publish directory | `build` (relative to base) |
| Node version | `22` |

`frontend/public/_redirects` makes direct visits to React routes work. Keep **form detection enabled**. The static `contact` form in `public/index.html` must use exactly the same field names as `ContactSection`: `name`, `organization`, `email`, `phone`, `service`, `message`, `bot-field` and `form-name=contact`.

The visible form sends a URL-encoded POST to `/`, displays success only for an accepted response, retains the message on failure and prevents duplicate submissions while sending. Keep the existing Netlify email notification configuration. Netlify form processing requires a Netlify deployment; a basic local static server does not process submissions.

Official form documentation: https://docs.netlify.com/manage/forms/setup/

### Deploy without installing anything

Use the separate `paramount-ready-to-deploy.zip`. Extract it and upload the extracted folder to the manual deploy area of your existing Netlify project. Select the folder containing `index.html`, `static`, `assets` and `_redirects`. Keep form detection enabled and retain your existing form submission email notification.

Do not double-click `index.html` to test React routes. Deploy it to Netlify or serve the extracted directory through an HTTP server. The source ZIP is for editing and rebuilding; the deployment ZIP contains the compiled website.

For the website, printed company profile and private bank pack content strategy, see `docs/Website-and-Portfolio-Plan.md`.

## Preview and deployment scope

This work is prepared on `codex/paramount-emergent-polish`, based on `emergent`. Review the branch before merging to your production-connected branch. No domain or email notification settings are changed by the source files.

## Installation repair, 5 October 2026

The earlier manifest combined DayPicker 8 with React 19 and date-fns 4. This version uses DayPicker 10.0.2, updates the Calendar wrapper, aligns ESLint and TypeScript with the existing CRA toolchain, and supplies an npm lockfile. Yarn-only dependency resolutions have been converted to npm overrides. Use the included `package-lock.json`; do not restore the old `yarn.lock` or use `--force` / `--legacy-peer-deps`.

If you previously downloaded another edition, replace the complete source, including `frontend/public/assets`, rather than only `package.json`. The theme controls and purple image are source changes, not settings that Netlify adds automatically. Your GitHub production branch must contain these files before Netlify can publish them.
