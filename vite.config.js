import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/mySite/',   // ← دقیقاً اسم ریپو + اسلش اول و آخر
})