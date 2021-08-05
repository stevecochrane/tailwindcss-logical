const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;
const withAlphaVariable = require('tailwindcss/lib/util/withAlphaVariable').default;

module.exports = function({ config, corePlugins, matchUtilities, theme, variants }) {
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
};
