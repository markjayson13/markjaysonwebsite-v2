# Mark Jayson Farol Website

Personal site for Mark Jayson Farol, built with Astro and deployed on Cloudflare Pages.

Production URL: `https://markjayson.com/`

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Where things live

- Page copy and portfolio entries: `src/data/editorial.ts`
- Links, nav, footer, and structured data: `src/data/site.ts`
- Pages: `src/pages/` (home, about, resume, portfolio, profiles, legal, 404)
- Redirects (www, old routes, `/creative`): `public/_redirects`

The creative site at `creative.markjayson.com` is a separate repo
(`creative-markjayson`). Anything under `/creative` on this domain redirects there.

## Cloudflare Pages

Manual deploy from the CLI:

```bash
npx wrangler login
npm run build
npm run deploy
```

`npm run deploy` publishes to the `markjaysonwebsite-v2` Pages project.
Pushes to GitHub also trigger Cloudflare Pages builds, and pull request
branches get a preview URL on `markjaysonwebsite-v2.pages.dev`.
