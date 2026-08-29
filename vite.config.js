import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base must match the repo name for GitHub Pages project sites
// (served at https://<user>.github.io/lovecitybbq/).
export default defineConfig({
  plugins: [react()],
  base: '/lovecitybbq/',
})
