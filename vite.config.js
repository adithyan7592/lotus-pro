import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // This tells Vite exactly where the files will live on GitHub
  base: "/lotus-pro/dist/", 
  plugins: [react()],
})
