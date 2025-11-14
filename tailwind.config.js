/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base sand palette (brand colors)
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
          // Primary brand colors (amber/sand tones)
          primary: {
            50: '#fdfaf6',
            100: '#f7f0e8',
            200: '#ede1d0',
            300: '#dfc9ad',
            400: '#ccab87',
            500: '#b8906a',  // Main primary color
            600: '#a67d5e',
            700: '#8a6a50',
            800: '#705747',
            900: '#5c483c',
          },
          // Accent color (amber tones for highlights)
          accent: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',  // Main accent color
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
          },
          // Text colors
          text: {
            primary: '#111827',    // gray-900
            secondary: '#4b5563',  // gray-600
            tertiary: '#6b7280',   // gray-500
            inverse: '#ffffff',    // white
            muted: '#9ca3af',      // gray-400
          },
          // Background colors
          background: {
            primary: '#ffffff',    // white
            secondary: '#f9fafb',  // gray-50
            tertiary: '#fdfaf6',   // sand-50
            dark: '#111827',       // gray-900
            overlay: '#000000',    // black (used with opacity)
          },
          // Border colors
          border: {
            light: '#f3f4f6',      // gray-100
            DEFAULT: '#e5e7eb',    // gray-200
            medium: '#d1d5db',     // gray-300
            dark: '#9ca3af',       // gray-400
            accent: '#d97706',     // amber-600
          },
          // Status/badge colors
          badge: {
            patreon: {
              bg: '#ede9fe',       // purple-100
              text: '#6b21a8',     // purple-700
            },
            makerworld: {
              bg: '#dcfce7',       // green-100
              text: '#15803d',     // green-700
            },
            info: {
              bg: '#dbeafe',       // blue-100
              text: '#1e40af',     // blue-700
            },
            warning: {
              bg: '#fed7aa',       // orange-100
              text: '#c2410c',     // orange-700
            },
          },
          // Avatar colors
          avatar: {
            blue: '#3b82f6',       // blue-500
            green: '#22c55e',      // green-500
            purple: '#a855f7',     // purple-500
          },
        },
      },
    },
  },
  plugins: [],
}
