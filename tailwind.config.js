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
          50: '#FFF5F3',   // Very light peachy tint
          100: '#FFE8E3',  // Light peach
          200: '#FFCFC4',  // Light coral
          300: '#FFB0A0',  // Soft coral
          400: '#FF8970',  // Medium coral
          500: '#F2613F',  // Bright coral/orange-red
          600: '#9B3922',  // Medium red-brown
          700: '#6D2818',  // Dark red-brown
          800: '#481E14',  // Dark reddish-brown
          900: '#0C0C0C',  // Almost black
        },
      },
    },
  },
  plugins: [],
}
