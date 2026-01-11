import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Ensure this matches your package version

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})