const postcss = require('postcss');
const tailwindcss = require('tailwindcss');

const plugin = require('../index.js');

const blockSizeStyles = require('./output/blockSize');
const borderColorStyles = require('./output/borderColor');
const borderColorWithBorderOpacityStyles = require('./output/borderColor-borderOpacity');
const borderColorDarkModeStyles = require('./output/borderColor-darkMode');
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
  config.purge = ['./tests/templates/*.html'];
  delete config.variants;
  return config;
};

describe('float, clear, text-align, resize, and overscroll-behavior', () => {
  const testNonconfigurableStyles = (config) => {
    return generatePluginCss(config)
      .then(css => {
        expect(css).toMatchCss(nonconfigurableStyles);
      });
  };

  test('default mode', () => testNonconfigurableStyles(getBaseConfig()));
  test('JIT mode', () => testNonconfigurableStyles(getBaseJitConfig()));
});

describe('block-size, with default height and spacing configs', () => {
  const testBlockSize = (config) => {
    delete config.theme.spacing;
    delete config.theme.height;

    return generatePluginCss(config)
      .then(css => {
        expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${blockSizeStyles}
        `);
      });
  };

  test('default mode', () => testBlockSize(getBaseConfig()));
  test('JIT mode', () => testBlockSize(getBaseJitConfig()));
});

describe('min-block-size, with default minHeight config', () => {
  const testMinBlockSize = (config) => {
    delete config.theme.minHeight;

    return generatePluginCss(config)
      .then(css => {
        expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${minBlockSizeStyles}
        `);
      });
  };

  test('default mode', () => testMinBlockSize(getBaseConfig()));
  test('JIT mode', () => testMinBlockSize(getBaseJitConfig()));
});

describe('max-block-size, with default maxHeight and spacing configs', () => {
  const testMaxBlockSize = (config) => {
    delete config.theme.spacing;
    delete config.theme.maxHeight;

    return generatePluginCss(config)
      .then(css => {
        expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${maxBlockSizeStyles}
        `);
      });
  };

  test('default mode', () => testMaxBlockSize(getBaseConfig()));
  test('JIT mode', () => testMaxBlockSize(getBaseJitConfig()));
});

describe('inline-size, with default width and spacing configs', () => {
  const testInlineSize = (config) => {
    delete config.theme.spacing;
    delete config.theme.width;

    return generatePluginCss(config)
      .then(css => {
        expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${inlineSizeStyles}
        `);
      });
  };

  test('default mode', () => testInlineSize(getBaseConfig()));
  test('JIT mode', () => testInlineSize(getBaseJitConfig()));
});

describe('min-inline-size, with default minWidth config', () => {
  const testMinInlineSize = (config) => {
    delete config.theme.minWidth;

    return generatePluginCss(config)
      .then(css => {
        expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${minInlineSizeStyles}
        `);
      });
  };

  test('default mode', () => testMinInlineSize(getBaseConfig()));
  test('JIT mode', () => testMinInlineSize(getBaseJitConfig()));
});

describe('max-inline-size, with default maxWidth config', () => {
  const testMaxInlineSize = (config) => {
    delete config.theme.maxWidth;

    return generatePluginCss(config)
      .then(css => {
        expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${maxInlineSizeStyles}
        `);
      });
  };

  test('default mode', () => testMaxInlineSize(getBaseConfig()));
  test('JIT mode', () => testMaxInlineSize(getBaseJitConfig()));
});

describe('margin shorthand and single-side, with default margin and spacing configs', () => {
  const testMargin = (config) => {
    delete config.theme.spacing;
    delete config.theme.margin;

    return generatePluginCss(config)
      .then(css => {
        expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${marginStyles}
        `);
      });
  };

  test('default mode', () => testMargin(getBaseConfig()));
  test('JIT mode', () => testMargin(getBaseJitConfig()));
});

describe('padding shorthand and single-side, with default padding and spacing configs', () => {
  const testPadding = (config) => {
    delete config.theme.spacing;
    delete config.theme.padding;

    return generatePluginCss(config)
      .then(css => {
        expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${paddingStyles}
        `);
      });
  };

  test('default mode', () => testPadding(getBaseConfig()));
  test('JIT mode', () => testPadding(getBaseJitConfig()));
});

describe('space between, with default space and spacing configs', () => {
  const testSpaceBetween = (config) => {
    delete config.theme.spacing;
    delete config.theme.space;

    return generatePluginCss(config)
      .then(css => {
        expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${spaceBetweenStyles}
        `);
      });
  };

  test('default mode', () => testSpaceBetween(getBaseConfig()));
  test('JIT mode', () => testSpaceBetween(getBaseJitConfig()));
});

describe('inset shorthand and single-side, with default inset and spacing configs', () => {
  const testInset = (config) => {
    delete config.theme.spacing;
    delete config.theme.inset;

    return generatePluginCss(config)
      .then(css => {
        expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${insetStyles}
        `);
      });
  };

  test('default mode', () => testInset(getBaseConfig()));
  test('JIT mode', () => testInset(getBaseJitConfig()));
});

describe('border-width, with default borderWidth config', () => {
  const testBorderWidth = (config) => {
    delete config.theme.borderWidth;

    return generatePluginCss(config)
      .then(css => {
        expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${borderWidthStyles}
        `);
      });
  };

  test('default mode', () => testBorderWidth(getBaseConfig()));
  test('JIT mode', () => testBorderWidth(getBaseJitConfig()));
});

describe('border-color, with default borderColor config', () => {
  test('default mode', () => {
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

  test('JIT mode', () => {
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

  test('JIT mode with dark mode enabled', () => {
    let config = getBaseJitConfig();
    config.darkMode = 'media';
    delete config.theme.color;
    delete config.theme.borderColor;

    return generatePluginCss(config)
      .then(css => {
        expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${borderColorDarkModeStyles}
        `);
      });
  });

  test('JIT mode with borderOpacity core plugin enabled', () => {
    let config = getBaseJitConfig();
    config.corePlugins = ['borderOpacity'];
    delete config.theme.color;
    delete config.theme.borderColor;

    return generatePluginCss(config)
      .then(css => {
        expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${borderColorWithBorderOpacityStyles}
        `);
      });
  });
});

describe('border-radius side and corner, with default borderRadius config', () => {
  const testBorderRadius = (config) => {
    delete config.theme.borderRadius;

    return generatePluginCss(config)
      .then(css => {
        expect(css).toMatchCss(`
          ${nonconfigurableStyles}
          ${borderRadiusStyles}
        `);
      });
  };

  test('default mode', () => testBorderRadius(getBaseConfig()));
  test('JIT mode', () => testBorderRadius(getBaseJitConfig()));
});

describe('divide width, with default divideWidth and borderWidth configs', () => {
  const testDivideWidth = (config) => {
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
  };

  test('default mode', () => testDivideWidth(getBaseConfig()));
  test('JIT mode', () => testDivideWidth(getBaseJitConfig()));
});
