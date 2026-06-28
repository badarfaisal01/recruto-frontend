import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        interview: resolve(__dirname, 'interview.html'),
        report: resolve(__dirname, 'report.html')
      }
    }
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',  // ✅ Use 127.0.0.1 (IPv4) not localhost
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  }
})