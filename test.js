const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const plugin = require('./index.js');

const generatePluginCss = () => {
  return postcss(tailwindcss({
      corePlugins: false,
      plugins: [ plugin ]
    }))
    .process('@tailwind utilities;', {
      from: undefined,
    })
    .then(result => result.css);
};

test('it outputs an empty string', () => {
  return generatePluginCss({ variants: [] }).then(css => {
    expect(css).toMatchCss(``);
  });
});
