const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': {
          light: '#448DEF',
          DEFAULT: '#2F80ED',
          dark: '#2A73D5',
        },
        'secondary': {
          light: '#333333',
          DEFAULT: '#202225',
          dark: '#1C1E21',
        },
        'donate': {
          light: '#E088D7',
          DEFAULT: '#D96BCE',
          dark: '#AD55A4',
        },
        'patreon': {
          light: '#F66870',
          DEFAULT: '#FF424D',
          dark: '#E82E39',
        },
        'dace': '#72DACE',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
