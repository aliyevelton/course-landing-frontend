import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5253',
        changeOrigin: true,
      },
    },
  },
  preview: {
    allowedHosts: [
      'course-landing-frontend-production.up.railway.app'
    ],
  },
})