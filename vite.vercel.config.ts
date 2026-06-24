import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Config used only for Vercel static deployment.
// The main vite.config.ts (Cloudflare Workers) remains unchanged.
export default defineConfig({
  plugins: [tailwindcss(), tsConfigPaths(), react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
