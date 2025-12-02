import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/simple_dropdown_menu.js",
      name: "SimpleDropdown",
      fileName: "simple-dropdown",
      formats: ["es"],
    },
    rollupOptions: {
      external: [],
    },
  },
});
