/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dispatch: {
          bg: '#081017',
          surface: '#0d1620',
          card: '#121b27',
          border: '#1f2b38',
          yellow: '#fbc21e',
          yellowLight: '#fed156',
          yellowDark: '#d9a30b',
          muted: '#8e9cae',
          textMuted: '#68778a'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
      }
    },
  },
  plugins: [],
}
