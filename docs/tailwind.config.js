const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content: ['./docs/*.html'],
    enabled: true
  },
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        sky: colors.sky,
        teal: colors.teal
      },
      fontSize: {
        rhythmLead: ['1.25rem', '1.6']
      }
    }
  },
  plugins: [
    require('../index.js')
  ],
  variants: {
    logical: ['responsive']
  }
};
