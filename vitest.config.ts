import { fileURLToPath } from "url";
import { configDefaults, defineConfig } from "vitest/config";
import "dotenv/config";

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude],
    alias: {
      "@/": fileURLToPath(new URL("./src/", import.meta.url)),
    },
  },
});