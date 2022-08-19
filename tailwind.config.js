const colors = require('tailwindcss/colors')

module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      './node_modules/tw-elements/dist/js/**/*.js'
    ],
    theme: {
      colors: {
        transparent: 'transparent',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        red: colors.red,
        slate: colors.slate,
        green: colors.green,
        violet: colors.violet,
        amber: colors.amber,
        cyan: colors.cyan,
        blue: colors.blue,
        'dark': '#121212',
        'currys-primary': '#4c12a1',
      },
      extend: {},
    },
    plugins: [
        require('tw-elements/dist/plugin')
    ],

  }