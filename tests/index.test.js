const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const plugin = require('../index.js');

const generatePluginCss = (options = {}) => {
  return postcss(tailwindcss(options))
    .process('@tailwind utilities;', {
      from: undefined,
    })
    .then(result => result.css);
};

test('float, clear, text-align and resize', () => {
  return generatePluginCss({
      corePlugins: false,
      theme: {
        borderRadius: {},
        borderWidth: {},
        height: {},
        inset: {},
        margin: {},
        maxHeight: {},
        maxWidth: {},
        minHeight: {},
        minWidth: {},
        padding: {},
        spacing: {},
        width: {}
      },
      plugins: [ plugin ],
      variants: []
    })
    .then(css => {
      expect(css).toMatchCss(`
        .float-start {
          float: inline-start
        }

        .float-end {
          float: inline-end
        }

        .clear-start {
          clear: inline-start
        }

        .clear-end {
          clear: inline-end
        }

        .text-start {
          text-align: start
        }

        .text-end {
          text-align: end
        }

        .resize-block {
          resize: block
        }

        .resize-inline {
          resize: inline
        }
      `);
    });
});
