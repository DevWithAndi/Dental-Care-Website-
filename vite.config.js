import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5533,
    open: true,
  },
  base: process.env.VITE_BASE_PATH || "/Dental-Care-Website-",
  // base: "",
});
