const postcss = require('postcss');
const tailwindcss = require('tailwindcss');

const plugin = require('../index.js');

const blockSizeStyles = require('./output/blockSize');
const borderColorStyles = require('./output/borderColor');
const borderRadiusStyles = require('./output/borderRadius');
const borderWidthStyles = require('./output/borderWidth');
const divideWidthStyles = require('./output/divideWidth');
const inlineSizeStyles = require('./output/inlineSize');
const insetStyles = require('./output/inset');
const marginStyles = require('./output/margin');
const maxBlockSizeStyles = require('./output/maxBlockSize');
const maxInlineSizeStyles = require('./output/maxInlineSize');
const minBlockSizeStyles = require('./output/minBlockSize');
const minInlineSizeStyles = require('./output/minInlineSize');
const nonconfigurableStyles = require('./output/nonconfigurable');
const paddingStyles = require('./output/padding');
const spaceBetweenStyles = require('./output/spaceBetween');

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
      borderColor: {},
      borderRadius: {},
      borderWidth: {},
      color: {},
      divideWidth: {},
      height: {},
      inset: {},
      margin: {},
      maxHeight: {},
      maxWidth: {},
      minHeight: {},
      minWidth: {},
      padding: {},
      space: {},
      spacing: {},
      width: {}
    },
    plugins: [ plugin ],
    variants: []
  };
};

const getBaseJitConfig = () => {
  const config = getBaseConfig();
  config.mode = 'jit';
  config.purge = {
    content: ['./tests/templates/*.html'],
    enabled: true
  };
  delete config.variants;
  return config;
};

test('float, clear, text-align, resize, and overscroll-behavior', () => {
  return generatePluginCss(getBaseConfig())
    .then(css => {
      expect(css).toMatchCss(nonconfigurableStyles);
    });
});

test('(JIT) float, clear, text-align, resize, and overscroll-behavior', () => {
  return generatePluginCss(getBaseJitConfig())
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

test('(JIT) block-size, with default height and spacing configs', () => {
  let config = getBaseJitConfig();
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

test('(JIT) min-block-size, with default minHeight config', () => {
  let config = getBaseJitConfig();
  delete config.theme.minHeight;

  return generatePluginCss(config)
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}
        ${minBlockSizeStyles}
      `);
    });
});

test('max-block-size, with default maxHeight and spacing configs', () => {
  let config = getBaseConfig();
  delete config.theme.spacing;
  delete config.theme.maxHeight;

  return generatePluginCss(config)
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}
        ${maxBlockSizeStyles}
      `);
    });
});

test('(JIT) max-block-size, with default maxHeight and spacing configs', () => {
  let config = getBaseJitConfig();
  delete config.theme.spacing;
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

test('(JIT) inline-size, with default width and spacing configs', () => {
  let config = getBaseJitConfig();
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

test('(JIT) min-inline-size, with default minWidth config', () => {
  let config = getBaseJitConfig();
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

test('(JIT) max-inline-size, with default maxWidth config', () => {
  let config = getBaseJitConfig();
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

test('(JIT) margin shorthand and single-side, with default margin and spacing configs', () => {
  let config = getBaseJitConfig();
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

test('(JIT) padding shorthand and single-side, with default padding and spacing configs', () => {
  let config = getBaseJitConfig();
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

test('space between, with default space and spacing configs', () => {
  let config = getBaseConfig();
  delete config.theme.spacing;
  delete config.theme.space;

  return generatePluginCss(config)
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}
        ${spaceBetweenStyles}
      `);
    });
});

test('(JIT) space between, with default space and spacing configs', () => {
  let config = getBaseJitConfig();
  delete config.theme.spacing;
  delete config.theme.space;

  return generatePluginCss(config)
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}
        ${spaceBetweenStyles}
      `);
    });
});

test('inset shorthand and single-side, with default inset and spacing configs', () => {
  let config = getBaseConfig();
  delete config.theme.spacing;
  delete config.theme.inset;

  return generatePluginCss(config)
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}
        ${insetStyles}
      `);
    });
});

test('(JIT) inset shorthand and single-side, with default inset and spacing configs', () => {
  let config = getBaseJitConfig();
  delete config.theme.spacing;
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

test('(JIT) border-width, with default borderWidth config', () => {
  let config = getBaseJitConfig();
  delete config.theme.borderWidth;

  return generatePluginCss(config)
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}
        ${borderWidthStyles}
      `);
    });
});

test('border-color, with default borderColor config', () => {
  let config = getBaseConfig();
  delete config.theme.color;
  delete config.theme.borderColor;

  return generatePluginCss(config)
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}
      `);
    });
});

test('(JIT) border-color, with default borderColor config', () => {
  let config = getBaseJitConfig();
  delete config.theme.color;
  delete config.theme.borderColor;

  return generatePluginCss(config)
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}
        ${borderColorStyles}
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

test('(JIT) border-radius side and corner, with default borderRadius config', () => {
  let config = getBaseJitConfig();
  delete config.theme.borderRadius;

  return generatePluginCss(config)
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}
        ${borderRadiusStyles}
      `);
    });
});

test('divide width, with default divideWidth and borderWidth configs', () => {
  let config = getBaseConfig();
  delete config.theme.borderWidth;
  delete config.theme.divideWidth;

  return generatePluginCss(config)
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}
        ${borderWidthStyles}
        ${divideWidthStyles}
      `);
    });
});

test('(JIT) divide width, with default divideWidth and borderWidth configs', () => {
  let config = getBaseJitConfig();
  delete config.theme.borderWidth;
  delete config.theme.divideWidth;

  return generatePluginCss(config)
    .then(css => {
      expect(css).toMatchCss(`
        ${nonconfigurableStyles}
        ${borderWidthStyles}
        ${divideWidthStyles}
      `);
    });
});
