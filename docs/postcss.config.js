module.exports = {
  plugins: [
    require('tailwindcss')({ config: './docs/tailwind.config.js' }),
    require('postcss-logical'),
    require('postcss-dir-pseudo-class')
  ]
};
