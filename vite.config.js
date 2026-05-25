import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sendFormHandler from './api/send-form.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'dreamcare-local-api',
      configureServer(server) {
        server.middlewares.use('/api/send-form', (req, res) => {
          sendFormHandler(req, res)
        })
      },
    },
  ],
})
