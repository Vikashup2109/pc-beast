/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['PixelFont'],
      }
    },
    screens: {
      'tablet': '600px',
      // => @media (min-width: 640px) { ... }
      'mid': '750px',
      // => @media (min-width: 640px) { ... }
      'desktop': '1100px',
      // => @media (min-width: 640px) { ... }
      'large': '1400px'
    },

  },
  plugins: [],
}
