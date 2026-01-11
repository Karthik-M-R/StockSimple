
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <--- MUST BE HERE

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <--- MUST BE HERE
  ],
})