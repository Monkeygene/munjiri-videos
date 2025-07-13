/** @type {import('tailwindcss').Config} */
export default {
  
 content: [
    "./index.html",
     "./blog.html",
    "./contact.html",
    "./video-content-packages.html",
    "./video-production-portfolio.html",
    "./creative-video-productions.html",
    "./charity-video-production.html",
    "./nature-video-production.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        linen: 'rgb(254, 252, 250)',
      },
      fontFamily: {
        crimson: ['"Crimson Text"', 'serif'],
      },
    },
  },
  plugins: [],
}
