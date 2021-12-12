const plugin = require('tailwindcss/plugin');
const borderColorPlugin = require('./plugins/borderColor');

module.exports = plugin(function(helpers) {
  const { addUtilities, e, matchUtilities, theme, variants } = helpers;

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

  matchUtilities(
    {
      'inset-block': (value) => ({
        insetBlock: value
      }),
      'inset-inline': (value) => ({
        insetInline: value
      })
    },
    {
      supportsNegativeValues: true,
      values: theme('inset')
    }
  );

  matchUtilities(
    {
      'block-start': (value) => ({
        insetBlockStart: value
      }),
      'block-end': (value) => ({
        insetBlockEnd: value
      }),
      'inline-start': (value) => ({
        insetInlineStart: value
      }),
      'inline-end': (value) => ({
        insetInlineEnd: value
      })
    },
    {
      supportsNegativeValues: true,
      values: theme('inset')
    }
  );

  matchUtilities(
    {
      'border-bs': (value) => ({
        borderBlockStartWidth: value
      }),
      'border-be': (value) => ({
        borderBlockEndWidth: value
      }),
      'border-is': (value) => ({
        borderInlineStartWidth: value
      }),
      'border-ie': (value) => ({
        borderInlineEndWidth: value
      })
    },
    { values: theme('borderWidth') }
  );

  borderColorPlugin(helpers);

  matchUtilities(
    {
      'rounded-bs': (value) => ({
        borderStartStartRadius: value,
        borderStartEndRadius: value
      }),
      'rounded-be': (value) => ({
        borderEndStartRadius: value,
        borderEndEndRadius: value
      }),
      'rounded-is': (value) => ({
        borderStartStartRadius: value,
        borderEndStartRadius: value
      }),
      'rounded-ie': (value) => ({
        borderStartEndRadius: value,
        borderEndEndRadius: value
      })
    },
    { values: theme('borderRadius') }
  );

  matchUtilities(
    {
      'rounded-ss': (value) => ({
        borderStartStartRadius: value
      }),
      'rounded-se': (value) => ({
        borderStartEndRadius: value
      }),
      'rounded-es': (value) => ({
        borderEndStartRadius: value
      }),
      'rounded-ee': (value) => ({
        borderEndEndRadius: value
      })
    },
    { values: theme('borderRadius') }
  );

  matchUtilities(
    {
      'divide-b': (value) => {
        value = value === '0' ? '0px' : value;
        return {
          '& > :not([hidden]) ~ :not([hidden])': {
            '--tw-divide-b-reverse': '0',
            'border-block-start-width': `calc(${value} * calc(1 - var(--tw-divide-b-reverse)))`,
            'border-block-end-width': `calc(${value} * var(--tw-divide-b-reverse))`
          }
        };
      },
      'divide-i': (value) => {
        value = value === '0' ? '0px' : value;
        return {
          '& > :not([hidden]) ~ :not([hidden])': {
            '--tw-divide-i-reverse': '0',
            'border-inline-start-width': `calc(${value} * calc(1 - var(--tw-divide-i-reverse)))`,
            'border-inline-end-width': `calc(${value} * var(--tw-divide-i-reverse))`
          }
        };
      }
    },
    {
      supportsNegativeValues: true,
      values: theme('divideWidth')
    }
  );

  addUtilities({
    '.divide-b-reverse > :not([hidden]) ~ :not([hidden])': {
      '--tw-divide-b-reverse': '1'
    },
    '.divide-i-reverse > :not([hidden]) ~ :not([hidden])': {
      '--tw-divide-i-reverse': '1'
    }
  });
});
