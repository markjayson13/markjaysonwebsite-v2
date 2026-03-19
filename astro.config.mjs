import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://markjayson.com",
  base: "/",
  integrations: [sitemap()],
  markdown: {
    smartypants: false,
  },
});
