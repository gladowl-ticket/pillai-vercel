# Pillai University Landing Page (React)

This app is organized with a scalable, production-ready React architecture: layout and UI components are reusable, data is centralized, and sections are feature-based.

## Structure

- `src/app/` — App shell and global layout styles.
- `src/components/` — Reusable layout and UI primitives.
- `src/sections/` — Page sections composed from data + UI.
- `src/data/` — Content and configuration data.
- `src/index.css` — Design system tokens and global styles.

## Scripts

- `npm run dev` — start the local dev server.
- `npm run build` — build for production.
- `npm run lint` — lint the project.

## Notes

The main entry point is `src/main.jsx`, and the composed layout lives in `src/app/App.jsx`.

### Security audit (dev vs production)

- `npm audit` reports vulnerabilities across both production and dev tooling.
- To check only production dependencies (what ships to users), run `npm audit --omit=dev`.
- Any remaining high issues after this are typically from dev-only tooling like ESLint and do not affect the production build.
# pillai-vercel
.
