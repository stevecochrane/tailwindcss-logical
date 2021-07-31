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
  config.purge = {
    content: ['./tests/templates/*.html'],
    enabled: true
  };
  delete config.variants;
  return config;
};

describe('float, clear, text-align, resize, and overscroll-behavior', () => {
  test('default mode', () => {
    return generatePluginCss(getBaseConfig())
      .then(css => {
        expect(css).toMatchCss(nonconfigurableStyles);
      });
  });

  test('JIT mode', () => {
    return generatePluginCss(getBaseJitConfig())
      .then(css => {
        expect(css).toMatchCss(nonconfigurableStyles);
      });
  });
});

describe('block-size, with default height and spacing configs', () => {
  test('default mode', () => {
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

  test('JIT mode', () => {
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
});

describe('min-block-size, with default minHeight config', () => {
  test('default mode', () => {
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

  test('JIT mode', () => {
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
});

describe('max-block-size, with default maxHeight and spacing configs', () => {
  test('default mode', () => {
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

  test('JIT mode', () => {
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
});

describe('inline-size, with default width and spacing configs', () => {
  test('default mode', () => {
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

  test('JIT mode', () => {
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
});

describe('min-inline-size, with default minWidth config', () => {
  test('default mode', () => {
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

  test('JIT mode', () => {
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
});

describe('max-inline-size, with default maxWidth config', () => {
  test('default mode', () => {
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

  test('JIT mode', () => {
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
});

describe('margin shorthand and single-side, with default margin and spacing configs', () => {
  test('default mode', () => {
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

  test('JIT mode', () => {
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
});

describe('padding shorthand and single-side, with default padding and spacing configs', () => {
  test('default mode', () => {
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

  test('JIT mode', () => {
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
});

describe('space between, with default space and spacing configs', () => {
  test('default mode', () => {
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

  test('JIT mode', () => {
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
});

describe('inset shorthand and single-side, with default inset and spacing configs', () => {
  test('default mode', () => {
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

  test('JIT mode', () => {
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
});

describe('border-width, with default borderWidth config', () => {
  test('default mode', () => {
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

  test('JIT mode', () => {
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
  test('default mode', () => {
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

  test('JIT mode', () => {
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
});

describe('divide width, with default divideWidth and borderWidth configs', () => {
  test('default mode', () => {
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

  test('JIT mode', () => {
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
});
