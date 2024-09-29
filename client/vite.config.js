import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    "/api": {
      target: "https://vibey-reads-tk4h.onrender.com/",
      changeOrigin: true,
      secure: false,
    },
  },
});
