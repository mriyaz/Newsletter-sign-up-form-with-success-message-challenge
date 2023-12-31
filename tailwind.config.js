/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        tomato: 'hsl(4, 100%, 67%)',
        darkslate: 'hsl(234, 29%, 20%)',
        charcoal: 'hsl(235, 18%, 26%)',
        grey: 'hsl(231, 7%, 60%)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

