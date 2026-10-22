import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// On Vercel (or any root domain deployment), base must be '/' to prevent MIME-type and blank page errors.
// On GitHub Actions / Pages, relative base './' is used.
export default defineConfig({
  plugins: [react()],
  base: process.env.VERCEL ? "/" : (process.env.GITHUB_ACTIONS ? "./" : "/"),
});
