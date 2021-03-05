const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content: ['./demo/*.html'],
    enabled: true
  },
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        lightBlue: colors.lightBlue,
        teal: colors.teal
      },
      fontSize: {
        rhythmLead: ['1.25rem', '1.6']
      }
    }
  },
  plugins: [
    require('../index.js')
  ]
};
