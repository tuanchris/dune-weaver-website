/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#fdfaf6',
          100: '#f7f0e8',
          200: '#ede1d0',
          300: '#dfc9ad',
          400: '#ccab87',
          500: '#b8906a',
          600: '#a67d5e',
          700: '#8a6a50',
          800: '#705747',
          900: '#5c483c',
        },
      },
    },
  },
  plugins: [],
}
