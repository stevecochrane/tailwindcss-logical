const postcss = require('postcss');
const tailwindcss = require('tailwindcss');

const plugin = require('../index.js');

const blockSizeStyles = require('./output/blockSize');
const borderRadiusStyles = require('./output/borderRadius');
const borderWidthStyles = require('./output/borderWidth');
const inlineSizeStyles = require('./output/inlineSize');
const insetStyles = require('./output/inset');
const marginStyles = require('./output/margin');
const maxBlockSizeStyles = require('./output/maxBlockSize');
const maxInlineSizeStyles = require('./output/maxInlineSize');
const minBlockSizeStyles = require('./output/minBlockSize');
const minInlineSizeStyles = require('./output/minInlineSize');
const nonconfigurableStyles = require('./output/nonconfigurable');
const paddingStyles = require('./output/padding');

const generatePluginCss = (options = {}) => {
  return postcss(tailwindcss(options))
    .process('@tailwind utilities;', {
      from: undefined,
    })
    .then(result => result.css);
};

const getBaseConfig = () => {
  return {
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
  };
};

test('float, clear, text-align and resize', () => {
  return generatePluginCss(getBaseConfig())
    .then(css => {
      expect(css).toMatchCss(nonconfigurableStyles);
    });
});

test('block-size, with default height and spacing configs', () => {
  let config = getBaseConfig();
  delete config.theme.spacing;
  delete config.theme.height;

  return generatePluginCss(config)
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}
        ${blockSizeStyles}
      `);
    });
});

test('min-block-size, with default minHeight config', () => {
  let config = getBaseConfig();
  delete config.theme.minHeight;

  return generatePluginCss(config)
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}
        ${minBlockSizeStyles}
      `);
    });
});

test('max-block-size, with default maxHeight config', () => {
  let config = getBaseConfig();
  delete config.theme.maxHeight;

  return generatePluginCss(config)
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}
        ${maxBlockSizeStyles}
      `);
    });
});

test('inline-size, with default width and spacing configs', () => {
  let config = getBaseConfig();
  delete config.theme.spacing;
  delete config.theme.width;

  return generatePluginCss(config)
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}
        ${inlineSizeStyles}
      `);
    });
});

test('min-inline-size, with default minWidth config', () => {
  let config = getBaseConfig();
  delete config.theme.minWidth;

  return generatePluginCss(config)
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}
        ${minInlineSizeStyles}
      `);
    });
});

test('max-inline-size, with default maxWidth config', () => {
  let config = getBaseConfig();
  delete config.theme.maxWidth;

  return generatePluginCss(config)
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}
        ${maxInlineSizeStyles}
      `);
    });
});

test('margin shorthand and single-side, with default margin and spacing configs', () => {
  let config = getBaseConfig();
  delete config.theme.spacing;
  delete config.theme.margin;

  return generatePluginCss(config)
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}
        ${marginStyles}
      `);
    });
});

test('padding shorthand and single-side, with default padding and spacing configs', () => {
  let config = getBaseConfig();
  delete config.theme.spacing;
  delete config.theme.padding;

  return generatePluginCss(config)
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}
        ${paddingStyles}
      `);
    });
});

test('inset shorthand and single-side, with default inset config', () => {
  let config = getBaseConfig();
  delete config.theme.inset;

  return generatePluginCss(config)
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}
        ${insetStyles}
      `);
    });
});

test('border-width, with default borderWidth config', () => {
  let config = getBaseConfig();
  delete config.theme.borderWidth;

  return generatePluginCss(config)
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}
        ${borderWidthStyles}
      `);
    });
});

test('border-radius side and corner, with default borderRadius config', () => {
  let config = getBaseConfig();
  delete config.theme.borderRadius;

  return generatePluginCss(config)
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}
        ${borderRadiusStyles}
      `);
    });
});
