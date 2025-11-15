/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base sand palette (brand foundation)
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

        // Semantic theme colors
        theme: {
          // Primary brand colors (sand-based)
          'primary': '#a67d5e',           // sand-600
          'primary-light': '#b8906a',     // sand-500
          'primary-dark': '#8a6a50',      // sand-700
          'primary-hover': '#8a6a50',     // sand-700

          // Secondary brand colors (amber-based)
          'secondary': '#d97706',         // amber-600
          'secondary-light': '#f59e0b',   // amber-500
          'secondary-dark': '#b45309',    // amber-700
          'secondary-hover': '#b45309',   // amber-700

          // Backgrounds
          'background': '#ffffff',        // white
          'background-alt': '#f9fafb',    // gray-50
          'background-sand': '#fdfaf6',   // sand-50
          'surface': '#ffffff',           // white
          'surface-hover': '#f3f4f6',     // gray-100

          // Text colors
          'text-primary': '#111827',      // gray-900
          'text-secondary': '#4b5563',    // gray-600
          'text-tertiary': '#6b7280',     // gray-500
          'text-muted': '#9ca3af',        // gray-400
          'text-inverse': '#ffffff',      // white
          'text-brand': '#78350f',        // amber-900

          // Borders
          'border': '#e5e7eb',            // gray-200
          'border-light': '#f3f4f6',      // gray-100
          'border-strong': '#d1d5db',     // gray-300
          'border-sand': '#ede1d0',       // sand-200
          'border-sand-strong': '#b8906a', // sand-500
          'border-accent': '#fde68a',     // amber-200

          // Interactive states
          'focus': '#3b82f6',             // blue-500
          'focus-ring': '#3b82f6',        // blue-500

          // Overlay
          'overlay': 'rgba(0, 0, 0, 0.2)',
          'overlay-light': 'rgba(255, 255, 255, 0.95)',

          // Footer
          'footer-bg': '#111827',         // gray-900
          'footer-text': '#d1d5db',       // gray-300

          // Gradient colors
          'gradient-start': '#fffbeb',    // amber-50
          'gradient-end': '#ffedd5',      // orange-50
          'gradient-start-alt': '#fef3c7', // amber-100
          'gradient-end-alt': '#fed7aa',  // orange-100
        },

        // Avatar accent colors
        avatar: {
          green: '#10b981',               // green-500
          blue: '#3b82f6',                // blue-500
          purple: '#a855f7',              // purple-500
          amber: '#f59e0b',               // amber-500
          pink: '#ec4899',                // pink-500
          indigo: '#6366f1',              // indigo-500
        },

        // Badge colors
        badge: {
          'patreon-bg': '#f3e8ff',        // purple-100
          'patreon-text': '#7e22ce',      // purple-700
          'makerworld-bg': '#dcfce7',     // green-100
          'makerworld-text': '#15803d',   // green-700
          'orange-bg': '#f97316',         // orange-500
          'blue-bg': '#3b82f6',           // blue-500
        },
      },
    },
  },
  plugins: [],
}
