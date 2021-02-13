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
      },
      inset: {
        '-16': '-4rem',
        '4': '1rem',
        '1/2': '50%'
      },
      margin: {
        '-72': '-18rem'
      },
      spacing: {
        '1/2': '50%'
      }
    }
  },
  plugins: [
    require('../index.js')
  ]
};
