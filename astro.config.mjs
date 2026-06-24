// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: "https://www.leochigne.art",
  trailingSlash: "never",
  integrations: [
    sitemap(),
    icon({
      iconDir: "src/icons",
      include: {
        mdi: [
          "menu",
          "close",
          "phone",
          "email-outline",
          "download",
          "chevron-left",
          "chevron-right",
          "arrow-up",
        ],
        "simple-icons": ["upwork", "behance", "linkedin", "facebook", "twitter", "whatsapp"],
      },
    }),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
});
