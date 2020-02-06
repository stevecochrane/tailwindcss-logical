module.exports = function (variants) {
  return function ({ addUtilities, theme, variants, e }) {
    const borderWidth = Object.entries(theme('borderWidth'));
    const borderRadius = Object.entries(theme('borderRadius'));
    const height = Object.entries(theme('height'));
    const inset = Object.entries(theme('inset'));
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

    const blockSizeUtilities = width.map(([key, value]) => (
      {
        [`.${e(`bs-${key}`)}`]: {
          blockSize: value
        }
      }
    ));

    const inlineSizeUtilities = height.map(([key, value]) => (
      {
        [`.${e(`is-${key}`)}`]: {
          inlineSize: value
        }
      }
    ));

    const marginUtilities = spacing.map(([key, value]) => (
      {
        [`.${e(`mbs-${key}`)}`]: {
          marginBlockStart: value
        },
        [`.${e(`mbe-${key}`)}`]: {
          marginBlockEnd: value
        },
        [`.${e(`mis-${key}`)}`]: {
          marginInlineStart: value
        },
        [`.${e(`mie-${key}`)}`]: {
          marginInlineEnd: value
        }
      }
    ));

    const paddingUtilities = spacing.map(([key, value]) => (
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
        [`.${e(`inset-block-start-${key}`)}`]: {
          insetBlockStart: value
        },
        [`.${e(`inset-block-end-${key}`)}`]: {
          insetBlockEnd: value
        },
        [`.${e(`inset-inline-start-${key}`)}`]: {
          insetInlineStart: value
        },
        [`.${e(`inset-inline-end-${key}`)}`]: {
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
    addUtilities(inlineSizeUtilities, variants('logical'));
    addUtilities(marginUtilities, variants('logical'));
    addUtilities(paddingUtilities, variants('logical'));
    addUtilities(insetUtilities, variants('logical'));

    addUtilities(borderWidthUtilities, variants('logical'));
    addUtilities(borderRadiusSideUtilities, variants('logical'));
    addUtilities(borderRadiusCornerUtilities, variants('logical'));
  };
};
