module.exports = {
  corePlugins: [],
  theme: {
    extend: {
      inset: {
        '1/2': '50%'
      },
      spacing: {
        '1/2': '50%'
      }
    }
  },
  plugins: [
    require('./index.js')()
  ]
}
