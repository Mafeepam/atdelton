import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Necessário para que o preview funcione no GitHub Codespaces
    host: true,
    port: 5173,
  },
})
