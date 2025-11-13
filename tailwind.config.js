/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Original sand theme (kept for reference)
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
        // New dark theme palette
        dark: {
          50: '#e8eaed',   // Lightest gray (for text on dark)
          100: '#d1d5db',  // Light gray (for secondary text)
          200: '#9ca3af',  // Medium-light gray (for muted text)
          300: '#6b7280',  // Medium gray (for borders)
          400: '#4b5563',  // Medium-dark gray (for cards)
          500: '#374151',  // Dark gray (for elevated surfaces)
          600: '#2d3548',  // Darker gray (for surfaces)
          700: '#242936',  // Very dark gray (for cards/panels)
          800: '#1a1f2e',  // Near black (for backgrounds)
          900: '#0f1419',  // Deepest black (for base background)
        },
        // Accent colors for dark theme
        accent: {
          teal: {
            light: '#5eead4',   // Bright teal (for highlights)
            DEFAULT: '#14b8a6', // Teal (for primary actions)
            dark: '#0d9488',    // Dark teal (for hover states)
          },
          cyan: {
            light: '#67e8f9',   // Bright cyan
            DEFAULT: '#06b6d4', // Cyan
            dark: '#0891b2',    // Dark cyan
          },
          purple: {
            light: '#c4b5fd',   // Light purple (for secondary highlights)
            DEFAULT: '#8b5cf6', // Purple
            dark: '#7c3aed',    // Dark purple
          },
          blue: {
            light: '#93c5fd',   // Light blue
            DEFAULT: '#3b82f6', // Blue
            dark: '#2563eb',    // Dark blue
          },
        },
      },
    },
  },
  plugins: [],
}
