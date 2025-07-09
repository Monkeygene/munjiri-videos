import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '/munjiri-videos/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        contact: path.resolve(__dirname, 'contact.html'),
      }
    }
  }
})
