import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { APP_HOST_URL, APP_PORT } from './src/app.vars'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: APP_HOST_URL,
    port: APP_PORT
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
