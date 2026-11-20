# Foodsify launch website

An informational, pre-launch website for independent hospitality businesses. React, TypeScript, Vite, TanStack file routing and Tailwind CSS. No database, forms, account system, payments, analytics or referral tracking.

## Local development

Use Node.js 22 or newer and install dependencies with `npm install` (or `bun install`). Run `npm run dev` for development. Run `npm test` for route and launch-rule tests.

## Deploy to Cloudflare Pages (static hosting)

1. Export the source from Lovable or connect the source repository to Cloudflare Pages.
2. Set the build command to `npm run build:pages`.
3. Set the build output directory to `dist/cloudflare-pages`.
4. Use Node.js 22 or newer (`NODE_VERSION=22` in Cloudflare if needed). No API keys or runtime environment variables are required.
5. For a manual deployment, run `npm run build:pages` locally and upload the contents of `dist/cloudflare-pages` to Cloudflare Pages.

The build prerenders all eight pages to HTML. The export script checks each page exists, copies HTML and assets, and excludes Worker/server files. Only the exported folder is deployed: no permanently running server or Pages Functions are needed. Images and fonts are bundled, so the live site does not depend on Lovable-hosted media or remote font services. `_redirects` normalises trailing-slash URLs; every page has its own HTML for direct visits and refreshes. Do not upload `dist/server` or the complete development project as the Pages output.

If a build output layout changes, the export script fails instead of silently exporting a missing page. Inspect the deployment preview and refresh each direct page URL before connecting a domain.

## Before launch

- Have Terms, Privacy and Cookie draft wording reviewed. Confirm the actual Cloudflare security/cookie and log-retention settings; the drafts intentionally do not claim unconfigured tools are operational.
- Verify the deployed pages, metadata, mobile navigation, photo/font loading and direct URL refreshes.
- Registration is deliberately not open. Join buttons lead to the Contact page, which invites visitors to check back shortly. A real Formspree form can be added once configured.
- Founding-member pricing is not published. Referral technology, fees, eligibility and payment arrangements remain in development.

## Brand assets

`public/foodsify-logo.svg` contains the original scalable brand mark; `public/favicon.svg` uses the same mark. The shared wordmark is rendered as accessible vector-and-text branding. Hospitality photographs are illustrative generated imagery, not evidence of actual members or endorsements.
