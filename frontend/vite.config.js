import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Tailwind CSS v4 Vite 플러그인
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // shadcn/ui @/ 경로 alias
    },
  },
})
