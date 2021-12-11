const plugin = require('tailwindcss/plugin');
const borderColorPlugin = require('./plugins/borderColor');

module.exports = plugin(function(helpers) {
  const { addUtilities, e, matchUtilities, theme, variants } = helpers;

  const borderRadius = Object.entries(theme('borderRadius'));
  const borderWidth = Object.entries(theme('borderWidth'));
  const divideWidth = Object.entries(theme('divideWidth'));
  const inset = Object.entries(theme('inset'));

  addUtilities({
    '.float-start': { float: 'inline-start' },
    '.float-end': { float: 'inline-end' }
  });

  addUtilities({
    '.clear-start': { clear: 'inline-start' },
    '.clear-end': { clear: 'inline-end' }
  });

  addUtilities({
    '.text-start': { textAlign: 'start' },
    '.text-end': { textAlign: 'end' }
  });

  addUtilities({
    '.resize-block': { resize: 'block' },
    '.resize-inline': { resize: 'inline' }
  });

  addUtilities({
    '.overscroll-b-auto': { overscrollBehaviorBlock: 'auto' },
    '.overscroll-b-contain': { overscrollBehaviorBlock: 'contain' },
    '.overscroll-b-none': { overscrollBehaviorBlock: 'none' },
    '.overscroll-i-auto': { overscrollBehaviorInline: 'auto' },
    '.overscroll-i-contain': { overscrollBehaviorInline: 'contain'},
    '.overscroll-i-none': { overscrollBehaviorInline: 'none' }
  });

  matchUtilities(
    {
      'bs': (value) => ({
        blockSize: value
      })
    },
    { values: theme('height') }
  );

  matchUtilities(
    {
      'min-bs': (value) => ({
        minBlockSize: value
      })
    },
    { values: theme('minHeight') }
  );

  matchUtilities(
    {
      'max-bs': (value) => ({
        maxBlockSize: value
      })
    },
    { values: theme('maxHeight') }
  );

  matchUtilities(
    {
      'is': (value) => ({
        inlineSize: value
      })
    },
    { values: theme('width') }
  );

  matchUtilities(
    {
      'min-is': (value) => ({
        minInlineSize: value
      })
    },
    { values: theme('minWidth') }
  );

  matchUtilities(
    {
      'max-is': (value) => ({
        maxInlineSize: value
      })
    },
    { values: theme('maxWidth') }
  );

  matchUtilities(
    {
      'mlb': (value) => ({
        marginBlock: value
      }),
      'mli': (value) => ({
        marginInline: value
      })
    },
    {
      supportsNegativeValues: true,
      values: theme('margin')
    }
  );

  matchUtilities(
    {
      'mbs': (value) => ({
        marginBlockStart: value
      }),
      'mbe': (value) => ({
        marginBlockEnd: value
      }),
      'mis': (value) => ({
        marginInlineStart: value
      }),
      'mie': (value) => ({
        marginInlineEnd: value
      })
    },
    {
      supportsNegativeValues: true,
      values: theme('margin')
    }
  );

  matchUtilities(
    {
      'plb': (value) => ({
        paddingBlock: value
      }),
      'pli': (value) => ({
        paddingInline: value
      })
    },
    { values: theme('padding') }
  );

  matchUtilities(
    {
      'pbs': (value) => ({
        paddingBlockStart: value
      }),
      'pbe': (value) => ({
        paddingBlockEnd: value
      }),
      'pis': (value) => ({
        paddingInlineStart: value
      }),
      'pie': (value) => ({
        paddingInlineEnd: value
      })
    },
    { values: theme('padding') }
  );

  matchUtilities(
    {
      'space-b': (value) => {
        value = value === '0' ? '0px' : value;
        return {
          '& > :not([hidden]) ~ :not([hidden])': {
            '--tw-space-b-reverse': '0',
            'margin-block-start': `calc(${value} * calc(1 - var(--tw-space-b-reverse)))`,
            'margin-block-end': `calc(${value} * var(--tw-space-b-reverse))`
          }
        };
      },
      'space-i': (value) => {
        value = value === '0' ? '0px' : value;
        return {
          '& > :not([hidden]) ~ :not([hidden])': {
            '--tw-space-i-reverse': '0',
            'margin-inline-start': `calc(${value} * calc(1 - var(--tw-space-i-reverse)))`,
            'margin-inline-end': `calc(${value} * var(--tw-space-i-reverse))`
          }
        };
      }
    },
    {
      supportsNegativeValues: true,
      values: theme('space')
    }
  );

  addUtilities({
    '.space-b-reverse > :not([hidden]) ~ :not([hidden])': {
      '--tw-space-b-reverse': '1'
    },
    '.space-i-reverse > :not([hidden]) ~ :not([hidden])': {
      '--tw-space-i-reverse': '1'
    }
  });

  const insetShorthandUtilities = inset.map(([key, value]) => (
    {
      [`.${e(`inset-block-${key}`)}`]: {
        insetBlock: value
      },
      [`.${e(`inset-inline-${key}`)}`]: {
        insetInline: value
      }
    }
  ));

  const insetSingleSideUtilities = inset.map(([key, value]) => (
    {
      [`.${e(`block-start-${key}`)}`]: {
        insetBlockStart: value
      },
      [`.${e(`block-end-${key}`)}`]: {
        insetBlockEnd: value
      },
      [`.${e(`inline-start-${key}`)}`]: {
        insetInlineStart: value
      },
      [`.${e(`inline-end-${key}`)}`]: {
        insetInlineEnd: value
      }
    }
  ));

  const borderWidthUtilities = borderWidth.map(([key, value]) => {
    const keyString = key.toLowerCase() === 'default' ? '' : `-${key}`;
    return {
      [`.${e(`border-bs${keyString}`)}`]: {
        borderBlockStartWidth: value
      },
      [`.${e(`border-be${keyString}`)}`]: {
        borderBlockEndWidth: value
      },
      [`.${e(`border-is${keyString}`)}`]: {
        borderInlineStartWidth: value
      },
      [`.${e(`border-ie${keyString}`)}`]: {
        borderInlineEndWidth: value
      }
    };
  });

  const borderRadiusSideUtilities = borderRadius.map(([key, value]) => {
    const keyString = key.toLowerCase() === 'default' ? '' : `-${key}`;
    return {
      [`.${e(`rounded-bs${keyString}`)}`]: {
        borderStartStartRadius: value,
        borderStartEndRadius: value
      },
      [`.${e(`rounded-be${keyString}`)}`]: {
        borderEndStartRadius: value,
        borderEndEndRadius: value
      },
      [`.${e(`rounded-is${keyString}`)}`]: {
        borderStartStartRadius: value,
        borderEndStartRadius: value
      },
      [`.${e(`rounded-ie${keyString}`)}`]: {
        borderStartEndRadius: value,
        borderEndEndRadius: value
      }
    };
  });

  const borderRadiusCornerUtilities = borderRadius.map(([key, value]) => {
    const keyString = key.toLowerCase() === 'default' ? '' : `-${key}`;
    return {
      [`.${e(`rounded-ss${keyString}`)}`]: {
        borderStartStartRadius: value
      },
      [`.${e(`rounded-se${keyString}`)}`]: {
        borderStartEndRadius: value
      },
      [`.${e(`rounded-es${keyString}`)}`]: {
        borderEndStartRadius: value
      },
      [`.${e(`rounded-ee${keyString}`)}`]: {
        borderEndEndRadius: value
      }
    };
  });

  let divideWidthUtilities = divideWidth.map(([key, value]) => {
    const keyString = key.toLowerCase() === 'default' ? '' : `-${key}`;
    return {
      [`.${e(`divide-b${keyString}`)} > :not([hidden]) ~ :not([hidden])`]: {
        '--tw-divide-b-reverse': '0',
        borderBlockStartWidth: `calc(${value} * calc(1 - var(--tw-divide-b-reverse)))`,
        borderBlockEndWidth: `calc(${value} * var(--tw-divide-b-reverse))`
      },
      [`.${e(`divide-i${keyString}`)} > :not([hidden]) ~ :not([hidden])`]: {
        '--tw-divide-i-reverse': '0',
        borderInlineStartWidth: `calc(${value} * calc(1 - var(--tw-divide-i-reverse)))`,
        borderInlineEndWidth: `calc(${value} * var(--tw-divide-i-reverse))`
      }
    };
  });

  if (divideWidthUtilities.length) {
    divideWidthUtilities.push({
      '.divide-b-reverse > :not([hidden]) ~ :not([hidden])': {
        '--tw-divide-b-reverse': '1'
      },
      '.divide-i-reverse > :not([hidden]) ~ :not([hidden])': {
        '--tw-divide-i-reverse': '1'
      }
    });
  }

  addUtilities(insetShorthandUtilities, variants('logical'));
  addUtilities(insetSingleSideUtilities, variants('logical'));

  addUtilities(borderWidthUtilities, variants('logical'));
  borderColorPlugin(helpers);
  addUtilities(borderRadiusSideUtilities, variants('logical'));
  addUtilities(borderRadiusCornerUtilities, variants('logical'));
  addUtilities(divideWidthUtilities, variants('logical'));
});
