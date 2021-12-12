module.exports = function({ matchUtilities, theme }) {
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
};
