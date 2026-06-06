import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: [
      'prognosys-site-production.up.railway.app'
    ]
  }
})