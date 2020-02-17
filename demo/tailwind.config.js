module.exports = {
  // corePlugins: [],
  theme: {
    extend: {
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
}
