/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#182620',
        paper: '#f6f2e8',
        forest: {
          DEFAULT: '#1f4d3a',
          dark: '#123023',
          light: '#2f6b4f',
        },
        moss: '#7fa48c',
        sand: '#e9ddc3',
        gold: {
          DEFAULT: '#d69a3c',
          light: '#e8b34d',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
}
