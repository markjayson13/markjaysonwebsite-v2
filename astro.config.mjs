import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://markjayson.com",
  base: "/",
  markdown: {
    smartypants: false,
  },
});
