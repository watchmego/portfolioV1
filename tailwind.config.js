/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // fontFamily:{
      //   sans:  ['FuturaPTWeb', ...defaultTheme.fontFamily.sans],
      //   futura: ["FuturaPTWeb","Futura","TrebuchetMS","Arial","sans-serif"]
      // }
    }
  },
  plugins: [],
}