# Paramount frontend

See the root [README](../README.md) and [deployment guide](../DEPLOY-TO-NETLIFY.md).

Use Node.js 22 LTS. Run `npm ci`, then `npm start` for development or `npm run build` for the static site in `build/`. The included npm lockfile pins the compatible dependency tree.

Stack: React 19, React Router, Tailwind CSS 3.4, Radix/shadcn primitives and CRACO. The Calendar wrapper uses DayPicker 10 with React 19 and date-fns 4 support.
