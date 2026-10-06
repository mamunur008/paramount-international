# Validation

Validated locally on 4 October 2026 against the production build.

- Production compilation: `CI=true GENERATE_SOURCEMAP=false npm run build` — successful.
- All 15 public routes load with one page heading and no broken image assets.
- Desktop at 1440 px and principal pages at 320, 390 and 768 px: no horizontal overflow.
- Light/dark selection persists after reload; icon and page update in the same View Transition. CSS transition duration is 240 ms.
- All ten custom cursor effects and the system option select correctly; preference persists.
- Cursor popover supports Escape and restores trigger focus.
- Reduced-motion preference disables custom cursors; touch devices retain the native pointer and omit the chooser.
- Mobile navigation opens, follows a route and closes.
- Product tabs and portfolio filters switch to the expected content.
- Screenshot gallery opens, supports arrow-key navigation and closes with Escape.
- Contact form URL-encoded payload, HTTP error state, retained draft, retry and successful reset verified using intercepted local requests. No external enquiries were sent.
- No browser runtime errors observed during these checks.

The live Netlify form processing and email delivery require the deployed Netlify environment; this local verification does not claim a live email-delivery test.

## Expanded portfolio, 5 October 2026

- Production compilation passed after the four project stories and Engineering route were added.
- All four project routes load with their expected content and without broken images or browser runtime errors.
- New and expanded project pages have no horizontal overflow at 390 and 768 px.
- Membership gallery opens, advances with an arrow key and closes with Escape.
- The Engineering route renders its technology and strengths content.
- The separate conversation preview was checked at 1024 and 390 px, including theme switching, cursor selection, screenshot selection and image expansion.
- The 15-page company profile and 17-page bank portfolio were rendered and visually reviewed.

## Company website edition, 5 October 2026

- Production compilation passed with the new company layout and leadership route.
- All 17 public routes load with one H1 and no broken images or browser runtime errors.
- Company dropdown navigation, Escape dismissal and mobile menu routing passed.
- Four leadership profiles and portraits are present on the dedicated page.
- Home, Company, Leadership, Engineering, Services, Products, Projects and Contact layouts checked at 1024, 768, 390 and 320 px without content overflow.
- Dark/light changes and persistence passed; all 11 cursor choices (including system) remain available.
- Contact tests used intercepted local requests: required-field validation; exact URL-encoded fields; rejected-response message and retained draft; accepted-response message and reset. No external enquiry was sent.
- Netlify static form blueprint and field names checked in compiled HTML. Live notification delivery is a post-deployment check.

## npm and appearance repair, 5 October 2026

- Clean `npm ci` completed on Node 22.23.3 using the included npm lockfile, with no `--force`, `--legacy-peer-deps` or dependency-resolution warnings. Older CRA dependencies still emit deprecation notices.
- Resolved direct dependencies: React 19.0.0, DayPicker 10.0.2, date-fns 4.1.0, ESLint 8.57.1 and TypeScript 4.9.5.
- `npm start` compiled successfully from that fresh installation; `/leadership` returned HTTP 200 and the application HTML.
- Production compilation from the same fresh installation passed with CI enabled.
- The actual company homepage includes the purple Codeio artwork. Permanent Light / Dark buttons and a native Cursor studio select are visible below the navigation.
- All 17 routes, their imagery, company and mobile menus, desktop/mobile layouts, theme persistence and all 11 cursor choices passed browser checks. Every custom choice mounted its corresponding effect. Reduced-motion preferences were retained.
- Contact validation, submitted fields, rejected-request draft preservation and accepted-request reset passed with intercepted local requests. No external message was sent.
- This verification ran on Linux with Node 22, not on the user's Windows machine. Instructions use portable npm commands.
- GitHub and Netlify production settings have not been modified. This source must be committed to the branch Netlify builds before the production website can change.
