/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#333b2a', // Dark olive green from background
          light: '#4f5a43',
        },
        accent: {
          DEFAULT: '#8b1e28', // Pomegranate red
          light: '#a62632',
        },
        surface: {
          DEFAULT: '#E9DBC5', // Warm Cream / Beige
          dark: '#dccba9',
        },
        text: {
          DEFAULT: '#1c2215',
          light: '#3f4f34',
        }
      },
      fontFamily: {
        arabic: ['"Cairo"', '"Amiri"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
