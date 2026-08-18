import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    minify: "terser",

    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],

          mui: [
            "@mui/material",
            "@mui/icons-material",
          ],

          emotion: [
            "@emotion/react",
            "@emotion/styled",
          ],

          charts: [
            "chart.js",
            "react-chartjs-2",
          ],
        },
      },
    },
  },
});