const plugin = require('tailwindcss/plugin');
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;
const prefixNegativeModifiers = require('tailwindcss/lib/util/prefixNegativeModifiers').default;
const withAlphaVariable = require('tailwindcss/lib/util/withAlphaVariable').default;

module.exports = plugin(function({ addUtilities, config, corePlugins, e, matchUtilities, theme, variants }) {
  const borderRadius = Object.entries(theme('borderRadius'));
  const borderWidth = Object.entries(theme('borderWidth'));
  const divideWidth = Object.entries(theme('divideWidth'));
  const height = Object.entries(theme('height'));
  const inset = Object.entries(theme('inset'));
  const margin = Object.entries(theme('margin'));
  const maxHeight = Object.entries(theme('maxHeight'));
  const maxWidth = Object.entries(theme('maxWidth'));
  const minHeight = Object.entries(theme('minHeight'));
  const minWidth = Object.entries(theme('minWidth'));
  const padding = Object.entries(theme('padding'));
  const space = Object.entries(theme('space'));
  const width = Object.entries(theme('width'));

  const floatUtilities = {
    '.float-start': { float: 'inline-start' },
    '.float-end': { float: 'inline-end' }
  };

  const clearUtilities = {
    '.clear-start': { clear: 'inline-start' },
    '.clear-end': { clear: 'inline-end' }
  };

  const textAlignUtilities = {
    '.text-start': { textAlign: 'start' },
    '.text-end': { textAlign: 'end' }
  };

  const resizeUtilities = {
    '.resize-block': { resize: 'block' },
    '.resize-inline': { resize: 'inline' }
  };

  const overscrollBehaviorUtilities = {
    '.overscroll-b-auto': { overscrollBehaviorBlock: 'auto' },
    '.overscroll-b-contain': { overscrollBehaviorBlock: 'contain' },
    '.overscroll-b-none': { overscrollBehaviorBlock: 'none' },
    '.overscroll-i-auto': { overscrollBehaviorInline: 'auto' },
    '.overscroll-i-contain': { overscrollBehaviorInline: 'contain'},
    '.overscroll-i-none': { overscrollBehaviorInline: 'none' }
  };

  const blockSizeUtilities = height.map(([key, value]) => (
    {
      [`.${e(`bs-${key}`)}`]: {
        blockSize: value
      }
    }
  ));

  const minBlockSizeUtilities = minHeight.map(([key, value]) => (
    {
      [`.${e(`min-bs-${key}`)}`]: {
        minBlockSize: value
      }
    }
  ));

  const maxBlockSizeUtilities = maxHeight.map(([key, value]) => (
    {
      [`.${e(`max-bs-${key}`)}`]: {
        maxBlockSize: value
      }
    }
  ));

  const inlineSizeUtilities = width.map(([key, value]) => (
    {
      [`.${e(`is-${key}`)}`]: {
        inlineSize: value
      }
    }
  ));

  const minInlineSizeUtilities = minWidth.map(([key, value]) => (
    {
      [`.${e(`min-is-${key}`)}`]: {
        minInlineSize: value
      }
    }
  ));

  const maxInlineSizeUtilities = maxWidth.map(([key, value]) => (
    {
      [`.${e(`max-is-${key}`)}`]: {
        maxInlineSize: value
      }
    }
  ));

  const marginShorthandUtilities = margin.map(([key, value]) => (
    {
      [`.${e(prefixNegativeModifiers('mlb', key))}`]: {
        marginBlock: value
      },
      [`.${e(prefixNegativeModifiers('mli', key))}`]: {
        marginInline: value
      }
    }
  ));

  const marginSingleSideUtilities = margin.map(([key, value]) => (
    {
      [`.${e(prefixNegativeModifiers('mbs', key))}`]: {
        marginBlockStart: value
      },
      [`.${e(prefixNegativeModifiers('mbe', key))}`]: {
        marginBlockEnd: value
      },
      [`.${e(prefixNegativeModifiers('mis', key))}`]: {
        marginInlineStart: value
      },
      [`.${e(prefixNegativeModifiers('mie', key))}`]: {
        marginInlineEnd: value
      }
    }
  ));

  const paddingShorthandUtilities = padding.map(([key, value]) => (
    {
      [`.${e(`plb-${key}`)}`]: {
        paddingBlock: value
      },
      [`.${e(`pli-${key}`)}`]: {
        paddingInline: value
      }
    }
  ));

  const paddingSingleSideUtilities = padding.map(([key, value]) => (
    {
      [`.${e(`pbs-${key}`)}`]: {
        paddingBlockStart: value
      },
      [`.${e(`pbe-${key}`)}`]: {
        paddingBlockEnd: value
      },
      [`.${e(`pis-${key}`)}`]: {
        paddingInlineStart: value
      },
      [`.${e(`pie-${key}`)}`]: {
        paddingInlineEnd: value
      }
    }
  ));

  let spaceBetweenUtilities = space.map(([key, value]) => (
    {
      [`.${e(prefixNegativeModifiers('space-b', key))} > :not([hidden]) ~ :not([hidden])`]: {
        '--tw-space-b-reverse': '0',
        marginBlockStart: `calc(${value} * calc(1 - var(--tw-space-b-reverse)))`,
        marginBlockEnd: `calc(${value} * var(--tw-space-b-reverse))`
      },
      [`.${e(prefixNegativeModifiers('space-i', key))} > :not([hidden]) ~ :not([hidden])`]: {
        '--tw-space-i-reverse': '0',
        marginInlineStart: `calc(${value} * calc(1 - var(--tw-space-i-reverse)))`,
        marginInlineEnd: `calc(${value} * var(--tw-space-i-reverse))`
      }
    }
  ));

  if (spaceBetweenUtilities.length) {
    spaceBetweenUtilities.push({
      '.space-b-reverse > :not([hidden]) ~ :not([hidden])': {
        '--tw-space-b-reverse': '1'
      },
      '.space-i-reverse > :not([hidden]) ~ :not([hidden])': {
        '--tw-space-i-reverse': '1'
      }
    });
  }

  const insetShorthandUtilities = inset.map(([key, value]) => (
    {
      [`.${e(prefixNegativeModifiers('inset-block', key))}`]: {
        insetBlock: value
      },
      [`.${e(prefixNegativeModifiers('inset-inline', key))}`]: {
        insetInline: value
      }
    }
  ));

  const insetSingleSideUtilities = inset.map(([key, value]) => (
    {
      [`.${e(prefixNegativeModifiers('block-start', key))}`]: {
        insetBlockStart: value
      },
      [`.${e(prefixNegativeModifiers('block-end', key))}`]: {
        insetBlockEnd: value
      },
      [`.${e(prefixNegativeModifiers('inline-start', key))}`]: {
        insetInlineStart: value
      },
      [`.${e(prefixNegativeModifiers('inline-end', key))}`]: {
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

  addUtilities(floatUtilities, variants('logical'));
  addUtilities(clearUtilities, variants('logical'));
  addUtilities(textAlignUtilities, variants('logical'));
  addUtilities(resizeUtilities, variants('logical'));
  addUtilities(overscrollBehaviorUtilities, variants('logical'));

  addUtilities(blockSizeUtilities, variants('logical'));
  addUtilities(minBlockSizeUtilities, variants('logical'));
  addUtilities(maxBlockSizeUtilities, variants('logical'));
  addUtilities(inlineSizeUtilities, variants('logical'));
  addUtilities(minInlineSizeUtilities, variants('logical'));
  addUtilities(maxInlineSizeUtilities, variants('logical'));

  addUtilities(marginShorthandUtilities, variants('logical'));
  addUtilities(marginSingleSideUtilities, variants('logical'));
  addUtilities(paddingShorthandUtilities, variants('logical'));
  addUtilities(paddingSingleSideUtilities, variants('logical'));
  addUtilities(spaceBetweenUtilities, variants('logical'));
  addUtilities(insetShorthandUtilities, variants('logical'));
  addUtilities(insetSingleSideUtilities, variants('logical'));

  addUtilities(borderWidthUtilities, variants('logical'));

  if (config('mode') === 'jit') {
    matchUtilities(
      {
        'border-bs': (value) => {
          if (!corePlugins('borderOpacity')) {
            return {
              'border-block-start-color': value,
            };
          }

          return withAlphaVariable({
            color: value,
            property: 'border-block-start-color',
            variable: '--tw-border-opacity',
          });
        },
        'border-be': (value) => {
          if (!corePlugins('borderOpacity')) {
            return {
              'border-block-end-color': value,
            };
          }

          return withAlphaVariable({
            color: value,
            property: 'border-block-end-color',
            variable: '--tw-border-opacity',
          });
        },
        'border-is': (value) => {
          if (!corePlugins('borderOpacity')) {
            return {
              'border-inline-start-color': value,
            };
          }

          return withAlphaVariable({
            color: value,
            property: 'border-inline-start-color',
            variable: '--tw-border-opacity',
          });
        },
        'border-ie': (value) => {
          if (!corePlugins('borderOpacity')) {
            return {
              'border-inline-end-color': value,
            };
          }

          return withAlphaVariable({
            color: value,
            property: 'border-inline-end-color',
            variable: '--tw-border-opacity',
          });
        },
      },
      {
        values: (({ DEFAULT: _, ...colors }) => colors)(
          flattenColorPalette(theme('borderColor'))
        ),
        variants: variants('borderColor'),
        type: 'color',
      }
    );
  }

  addUtilities(borderRadiusSideUtilities, variants('logical'));
  addUtilities(borderRadiusCornerUtilities, variants('logical'));
  addUtilities(divideWidthUtilities, variants('logical'));
});
