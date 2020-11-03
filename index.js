const plugin = require('tailwindcss/plugin');
const prefixNegativeModifiers = require('tailwindcss/lib/util/prefixNegativeModifiers').default;

const addFloatUtilities = require('./modules/float');
const addClearUtilities = require('./modules/clear');

module.exports = plugin(function(pluginHelpers) {
  const { addUtilities, theme, variants, e } = pluginHelpers;

  const borderWidth = Object.entries(theme('borderWidth'));
  const borderRadius = Object.entries(theme('borderRadius'));
  const height = Object.entries(theme('height'));
  const inset = Object.entries(theme('inset'));
  const margin = Object.entries(theme('margin'));
  const maxHeight = Object.entries(theme('maxHeight'));
  const maxWidth = Object.entries(theme('maxWidth'));
  const minHeight = Object.entries(theme('minHeight'));
  const minWidth = Object.entries(theme('minWidth'));
  const padding = Object.entries(theme('padding'));
  const spacing = Object.entries(theme('spacing'));
  const width = Object.entries(theme('width'));

  const textAlignUtilities = {
    '.text-start': { textAlign: 'start' },
    '.text-end': { textAlign: 'end' }
  };

  const resizeUtilities = {
    '.resize-block': { resize: 'block' },
    '.resize-inline': { resize: 'inline' }
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
    const keyString = key === 'default' ? `` : `-${key}`;
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
    const keyString = key === 'default' ? `` : `-${key}`;
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
    const keyString = key === 'default' ? `` : `-${key}`;
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
    }
  });

  addFloatUtilities(pluginHelpers);
  addClearUtilities(pluginHelpers);
  addUtilities(textAlignUtilities, variants('logical'));
  addUtilities(resizeUtilities, variants('logical'));

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
  addUtilities(insetShorthandUtilities, variants('logical'));
  addUtilities(insetSingleSideUtilities, variants('logical'));

  addUtilities(borderWidthUtilities, variants('logical'));
  addUtilities(borderRadiusSideUtilities, variants('logical'));
  addUtilities(borderRadiusCornerUtilities, variants('logical'));

});
