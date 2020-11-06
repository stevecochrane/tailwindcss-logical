const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const plugin = require('../index.js');

const nonconfigurableStyles = require('./output/nonconfigurable');
const blockSizeStyles = require('./output/blockSize');
const minBlockSizeStyles = require('./output/minBlockSize');
const maxBlockSizeStyles = require('./output/maxBlockSize');
const inlineSizeStyles = require('./output/inlineSize');
const minInlineSizeStyles = require('./output/minInlineSize');
const maxInlineSizeStyles = require('./output/maxInlineSize');
const marginStyles = require('./output/margin');

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
        ${blockSizeStyles}
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
        ${minBlockSizeStyles}
      `);
    });
});

test('max-block-size, with default maxHeight config', () => {
  return generatePluginCss({
      corePlugins: false,
      theme: {
        borderRadius: {},
        borderWidth: {},
        height: {},
        inset: {},
        margin: {},
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
        ${nonconfigurableStyles}
        ${maxBlockSizeStyles}
      `);
    });
});

test('inline-size, with default width and spacing configs', () => {
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
        padding: {}
      },
      plugins: [ plugin ],
      variants: []
    })
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}
        ${inlineSizeStyles}
      `);
    });
});

test('min-inline-size, with default minWidth config', () => {
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
        ${minInlineSizeStyles}
      `);
    });
});

test('max-inline-size, with default maxWidth config', () => {
  return generatePluginCss({
      corePlugins: false,
      theme: {
        borderRadius: {},
        borderWidth: {},
        height: {},
        inset: {},
        margin: {},
        maxHeight: {},
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
        ${nonconfigurableStyles}
        ${maxInlineSizeStyles}
      `);
    });
});

test('margin shorthand and single-side, with default margin and spacing configs', () => {
  return generatePluginCss({
      corePlugins: false,
      theme: {
        borderRadius: {},
        borderWidth: {},
        height: {},
        inset: {},
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
        ${marginStyles}
      `);
    });
});
