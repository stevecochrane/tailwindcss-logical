module.exports = {
  plugins: [
    require('tailwindcss')({ config: './demo/tailwind.config.js' }),
    require('postcss-logical'),
    require('postcss-dir-pseudo-class')
  ]
};
