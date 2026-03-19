# Mark Jayson Farol Website

Editorial-cinematic Astro website for Mark Jayson Farol.

Production URL: `https://markjayson.com/`

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Cloudflare Pages

This repo is configured to deploy through Cloudflare Pages.

Dashboard project:

- `markjaysonwebsite`

Manual deploy from the CLI:

```bash
npx wrangler login
npm run build
npm run deploy
```

Recommended dashboard setup:

1. In Cloudflare, open `Workers & Pages` and select `markjaysonwebsite`.
2. Under `Custom domains`, attach `markjayson.com`.
3. Add `www.markjayson.com` and redirect it to `markjayson.com` if desired.
4. Remove any GitHub Pages custom-domain setting from the repository to avoid conflicts.
