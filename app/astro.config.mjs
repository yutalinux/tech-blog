// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://yutalinux.github.io",
  base: "/tech-blog",
  integrations: [tailwind(), react()],
});
