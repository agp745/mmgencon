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
        'mmgreen-dark': 'rgba(52,97,58,1)',
      }
    },
  },
  plugins: [],
}

