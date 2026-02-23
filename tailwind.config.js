/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'emerald-dark': '#064e3b',
        'emerald-mid': '#10b981',
        'emerald-light': '#d1fae5',
        'gold-accent': '#d4af37',
        'slate-soft': '#f8fafc',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
