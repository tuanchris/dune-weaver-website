/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base sand palette (brand colors) - brown/earth tones
        sand: {
          50: '#FFF9F0',
          100: '#FED8B1',
          200: '#F5C894',
          300: '#ECB176',
          400: '#C99968',
          500: '#B88A5F',
          600: '#A67B5B',
          700: '#8B6549',
          800: '#6F4E37',
          900: '#5A3E2C',
        },
        // Semantic theme colors
        theme: {
          // Primary brand colors (brown/earth tones)
          primary: {
            50: '#FFF9F0',
            100: '#FED8B1',
            200: '#F5C894',
            300: '#ECB176',
            400: '#C99968',
            500: '#B88A5F',  // Main primary color
            600: '#A67B5B',
            700: '#8B6549',
            800: '#6F4E37',
            900: '#5A3E2C',
          },
          // Accent color (warm amber tones for highlights)
          accent: {
            50: '#FFF9F0',
            100: '#FEE5C7',
            200: '#FED8B1',
            300: '#F5C894',
            400: '#ECB176',
            500: '#D99A5C',
            600: '#C17940',  // Main accent color
            700: '#A66334',
            800: '#8B5229',
            900: '#6F4E37',
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
            tertiary: '#FFF9F0',   // sand-50 (warm off-white)
            dark: '#111827',       // gray-900
            overlay: '#000000',    // black (used with opacity)
          },
          // Border colors
          border: {
            light: '#f3f4f6',      // gray-100
            DEFAULT: '#e5e7eb',    // gray-200
            medium: '#d1d5db',     // gray-300
            dark: '#9ca3af',       // gray-400
            accent: '#C17940',     // Updated to match new accent-600
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
