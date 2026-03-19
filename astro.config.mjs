import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://markjayson.com",
  base: "/",
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        return (
          !pathname.startsWith("/creative") &&
          pathname !== "/research" &&
          pathname !== "/research/" &&
          pathname !== "/projects" &&
          pathname !== "/projects/" &&
          pathname !== "/articles" &&
          pathname !== "/articles/"
        );
      },
    }),
  ],
  markdown: {
    smartypants: false,
  },
});
