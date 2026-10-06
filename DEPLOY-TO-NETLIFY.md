# Paramount International — Netlify setup

Company website · npm and appearance update · 5 October 2026

## Deploy from your GitHub repository

1. Extract the corrected source ZIP into a fresh folder. Use the **contents** of `paramount-international` as the repository root. The root must contain `netlify.toml` alongside `frontend/`.
2. Copy the corrected files into `mamunur008/paramount-international` on your intended production branch. Include `frontend/package.json`, `frontend/package-lock.json`, `frontend/src`, all of `frontend/public`, and `netlify.toml`. Remove the obsolete `frontend/yarn.lock` from the repository. Keep your Git history and unrelated files. Do not upload `node_modules` or the ZIP itself.
3. In the existing Netlify project, open **Project configuration → Build & deploy → Continuous deployment**. Confirm the production branch is the same branch you updated. If you update `emergent`, Netlify must deploy `emergent`; uploading there does not update `main` automatically.
4. Use base `frontend`, build command `npm run build`, publish directory `build` (relative to base), and Node.js `22`. The root `netlify.toml` includes these settings. Do not reuse the earlier Nuxt `.output/public` settings.
5. Trigger a deploy after committing the files. Use the option to clear the build cache for this dependency repair. Check the deploy log identifies your latest commit.
6. Open the deployed page. The header should show **Light**, **Dark**, and **Cursor studio** on a computer; the homepage should include the purple artwork. If not, compare the deploy commit and branch before changing the form settings.

The GitHub repository has both `main` and `emergent`. When checked for this update, `main` did not contain `frontend/package.json`, while `emergent` contained the older incompatible manifest. Your Netlify connected branch was not changed by this download.

## Alternatively: upload the finished website

1. Download `paramount-ready-to-deploy.zip` and extract it.
2. Open your existing Paramount International project in Netlify. Use the existing project to keep the domain and notification settings together.
3. Open **Deploys** and use the manual upload/drop area.
4. Drag in the extracted folder that directly contains `index.html`, `static`, `assets` and `_redirects`.
5. Wait for the deploy to complete, then open the production URL from Netlify.

This ZIP is already built. You do not need Node.js or an install command for a manual upload. Keep all extracted files together. Do not test by double-clicking `index.html`: use the deployed website or an HTTP server.

## Receive contact enquiries

The website includes a form named **contact**, with name, organisation, email, phone, service and message fields. A hidden static definition lets Netlify discover it; the visible form submits an encoded request to Netlify.

1. In your Netlify project, open **Forms** and confirm **form detection is enabled**. If you enable it now, upload the site again.
2. After deployment, confirm that `contact` appears in Forms.
3. In **Forms → Submission notifications**, retain or add an email notification to **mamunur008@gmail.com**, for `contact` or all forms.
4. Submit one test enquiry from `https://paramountint.com/contact`. Confirm it appears under form submissions and check Gmail, including Spam.

The website's displayed business email is separate from this notification recipient. No Gmail password or email-service secret belongs in the source code.

The submitted `email` field supplies the visitor's reply-to address. Local checks covered required-field validation, the request payload, error messages, preservation of the draft after an error and clearing it after an accepted response. Actual email delivery must be checked after deployment.

Official references, checked 5 October 2026:
- https://docs.netlify.com/manage/forms/setup/
- https://docs.netlify.com/manage/forms/notifications/

## What visitors can explore

| Menu | Pages |
|---|---|
| Home | Company introduction, services, selected work, leadership preview and strengths |
| Company | About Paramount; Leadership & Team; Technology & Strengths |
| Services | Overview and four individual service pages |
| Products | Paramount Commerce implementation offering and employee management |
| Projects | Overview and four detailed case studies, with screenshots and customer context |
| Contact | Enquiry form, email, phone and office address |

The site has 17 public routes including Privacy. Light / Dark buttons and a Cursor studio dropdown appear directly below the navigation. The purple artwork is part of the actual homepage. Ten optional cursor effects plus the system cursor remain available. Touch and reduced-motion preferences use the native cursor.

## Edit or deploy from GitHub

Use `paramount-emergent-polished.zip` for editable source. Use Node.js 22 LTS. Extract it into a fresh folder, then run these commands in PowerShell or a terminal:

```bash
cd paramount-international/frontend
npm ci
npm start
```

Build:

```bash
npm run build
```

For a Netlify Git-connected deployment, the included `netlify.toml` uses:

| Setting | Value |
|---|---|
| Base directory | `frontend` |
| Build command | `npm run build` |
| Publish directory | `build` relative to the base |
| Node.js | `22` |

The output is `frontend/build`. A separate backend is not required for this company website. If your Netlify project automatically deploys a Git branch, update that connected branch before its next automated deploy so it does not restore an earlier site.

## Editing locations

- `frontend/src/data/siteContent.js`: company details, navigation, services, products and projects.
- `frontend/src/pages/CompanyPages.jsx`: company story and leadership biographies.
- `frontend/src/components/CompanySections.jsx`: homepage sections and leadership preview.
- `frontend/src/components/Header.jsx`: desktop and mobile menus.
- `frontend/src/components/SiteSections.jsx`: contact form and project gallery.
- `frontend/src/company.css`: company presentation and responsive layouts.
- `frontend/public/assets/team`: supplied leadership photographs.

Keep the visible form's field names aligned with the static form in `frontend/public/index.html`. Keep `_redirects` in the deployment so direct links such as `/leadership` and `/projects/iscanner` continue to work.

## Why npm failed in the previous version

`react-day-picker@8.10.1` accepts neither React 19 nor date-fns 4. Downgrading only date-fns fixes one conflict and reveals the React conflict. The corrected manifest uses DayPicker 10.0.2 with a matching Calendar component and an npm lockfile. It also aligns ESLint and TypeScript with CRA. No forced installation is required.

Use `npm ci` for the supplied lockfile, `npm start` for local development, and `npm run build` for Netlify output. The form sends enquiries only on Netlify; localhost has no Netlify submission service. Keep the notification recipient configured in Netlify.
