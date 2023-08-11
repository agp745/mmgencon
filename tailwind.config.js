/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'mmgreen': 'hsl(129,30%,45%)',
        'mm-light': 'rgb(148 163 184)', //bg-slate-400
        'mm-dark': 'rgb(100 116 139)', //bg-slate-500
      }
    },
  },
  plugins: [],
}

