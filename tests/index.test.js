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

const nonconfigurableStyles = `
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
`;

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
      expect(css).toMatchCss(nonconfigurableStyles);
    });
});

test('block-size, with default height and spacing configs', () => {
  return generatePluginCss({
      corePlugins: false,
      theme: {
        borderRadius: {},
        borderWidth: {},
        inset: {},
        margin: {},
        maxHeight: {},
        maxWidth: {},
        minHeight: {},
        minWidth: {},
        padding: {},
        width: {}
      },
      plugins: [ plugin ],
      variants: []
    })
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}

        .bs-0 {
          block-size: 0
        }

        .bs-1 {
          block-size: 0.25rem
        }

        .bs-2 {
          block-size: 0.5rem
        }

        .bs-3 {
          block-size: 0.75rem
        }

        .bs-4 {
          block-size: 1rem
        }

        .bs-5 {
          block-size: 1.25rem
        }

        .bs-6 {
          block-size: 1.5rem
        }

        .bs-8 {
          block-size: 2rem
        }

        .bs-10 {
          block-size: 2.5rem
        }

        .bs-12 {
          block-size: 3rem
        }

        .bs-16 {
          block-size: 4rem
        }

        .bs-20 {
          block-size: 5rem
        }

        .bs-24 {
          block-size: 6rem
        }

        .bs-32 {
          block-size: 8rem
        }

        .bs-40 {
          block-size: 10rem
        }

        .bs-48 {
          block-size: 12rem
        }

        .bs-56 {
          block-size: 14rem
        }

        .bs-64 {
          block-size: 16rem
        }

        .bs-auto {
          block-size: auto
        }

        .bs-px {
          block-size: 1px
        }

        .bs-full {
          block-size: 100%
        }

        .bs-screen {
          block-size: 100vh
        }
      `);
    });
});

test('min-block-size, with default minHeight config', () => {
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
        ${nonconfigurableStyles}

        .min-bs-0 {
          min-block-size: 0
        }

        .min-bs-full {
          min-block-size: 100%
        }

        .min-bs-screen {
          min-block-size: 100vh
        }
      `);
    });
});
