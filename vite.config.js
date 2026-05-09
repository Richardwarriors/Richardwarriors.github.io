import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    open: "/liuhaocun.html",
  },
  build: {
    rollupOptions: {
      input: {
        liuhaocun: resolve(__dirname, "liuhaocun.html"),
      },
    },
  },
});
