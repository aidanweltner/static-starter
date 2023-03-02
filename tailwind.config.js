const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './*.html',
    './*/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Lato"', ...defaultTheme.fontFamily.sans],
        serif: ['"Lora"', ...defaultTheme.fontFamily.serif]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography')
  ],
}
