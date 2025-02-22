import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://techpanda.netlify.app/",
  integrations: [
    vue(),
    tailwind({
      config: { applyBaseStyles: false },
    }),
    sitemap(),
    compress(),
  ],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  compressHTML: true,
});
