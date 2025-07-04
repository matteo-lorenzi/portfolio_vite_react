import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio_vite_react/",
  server: {
    watch: {
        usePolling: true
    }
  }
})
