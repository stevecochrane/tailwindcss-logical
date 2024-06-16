module.exports = {
  plugins: [
    require('tailwindcss')({ config: './docs/tailwind.config.js' }),
  ]
};

/*
  Alternatively, you could use postcss-preset-env for the same outcome, like this:

  module.exports = {
    plugins: [
      require('tailwindcss')({ config: './docs/tailwind.config.js' }),
      require('postcss-preset-env')
    ]
  };
*/
