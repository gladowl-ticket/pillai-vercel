import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/admissions-2026/",  
  plugins: [react()],
  server: {
    port: 5173,
  },
});
