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
        blog: path.resolve(__dirname, 'blog.html'),
        services: path.resolve(__dirname, 'video-content-packages.html'),
        portfolio: path.resolve(__dirname, 'video-production-portfolio.html'),
        creativevideoproductions: path.resolve(__dirname, 'creative-video-productions.html'),
        charityvideoproduction: path.resolve(__dirname, 'charity-video-production.html'),
        naturevideoproduction: path.resolve(__dirname, 'nature-video-production.html'),
      }
    }
  }
})
