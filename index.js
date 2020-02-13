const plugin = require('tailwindcss/plugin');
const prefixNegativeModifiers = require('tailwindcss/lib/util/prefixNegativeModifiers').default;

module.exports = plugin(function({ addUtilities, theme, variants, e }) {
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

  const captionSideUtilities = {
    '.caption-side-is': { captionSide: 'inline-start' },
    '.caption-size-ie': { captionSide: 'inline-end' }
  };

  const floatUtilities = {
    '.float-is': { float: 'inline-start' },
    '.float-ie': { float: 'inline-end' }
  };

  const clearUtilities = {
    '.clear-is': { clear: 'inline-start' },
    '.clear-ie': { clear: 'inline-end' }
  };

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

  const marginUtilities = margin.map(([key, value]) => (
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

  const paddingUtilities = padding.map(([key, value]) => (
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

  const insetUtilities = inset.map(([key, value]) => (
    {
      [`.${e(prefixNegativeModifiers('inset-block-start', key))}`]: {
        insetBlockStart: value
      },
      [`.${e(prefixNegativeModifiers('inset-block-end', key))}`]: {
        insetBlockEnd: value
      },
      [`.${e(prefixNegativeModifiers('inset-inline-start', key))}`]: {
        insetInlineStart: value
      },
      [`.${e(prefixNegativeModifiers('inset-inline-end', key))}`]: {
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
        borderEndStartRadius: value
      },
      [`.${e(`rounded-be${keyString}`)}`]: {
        borderEndEndRadius: value,
        borderStartEndRadius: value
      },
      [`.${e(`rounded-is${keyString}`)}`]: {
        borderStartEndRadius: value,
        borderStartStartRadius: value
      },
      [`.${e(`rounded-ie${keyString}`)}`]: {
        borderEndStartRadius: value,
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
      [`.${e(`rounded-es${keyString}`)}`]: {
        borderEndStartRadius: value
      },
      [`.${e(`rounded-ee${keyString}`)}`]: {
        borderEndEndRadius: value
      },
      [`.${e(`rounded-se${keyString}`)}`]: {
        borderStartEndRadius: value
      }
    }
  });

  addUtilities(captionSideUtilities, variants('logical'));
  addUtilities(floatUtilities, variants('logical'));
  addUtilities(clearUtilities, variants('logical'));
  addUtilities(textAlignUtilities, variants('logical'));
  addUtilities(resizeUtilities, variants('logical'));

  addUtilities(blockSizeUtilities, variants('logical'));
  addUtilities(minBlockSizeUtilities, variants('logical'));
  addUtilities(maxBlockSizeUtilities, variants('logical'));
  addUtilities(inlineSizeUtilities, variants('logical'));
  addUtilities(minInlineSizeUtilities, variants('logical'));
  addUtilities(maxInlineSizeUtilities, variants('logical'));

  addUtilities(marginUtilities, variants('logical'));
  addUtilities(paddingUtilities, variants('logical'));
  addUtilities(insetUtilities, variants('logical'));

  addUtilities(borderWidthUtilities, variants('logical'));
  addUtilities(borderRadiusSideUtilities, variants('logical'));
  addUtilities(borderRadiusCornerUtilities, variants('logical'));
});
