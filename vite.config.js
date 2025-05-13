import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    watch: {
      ignored: ["**/cities.json"], // Ignore JSON Server file changes
    },
  },
  plugins: [react()],
});
