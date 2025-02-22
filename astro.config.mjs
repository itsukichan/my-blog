import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://techpanda.netlify.app/",
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    }),
    compress(),
  ],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  compressHTML: true,
});
