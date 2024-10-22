// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://yutalinux.github.io",
  base: "/tech-blog",
  integrations: [tailwind()],
});
