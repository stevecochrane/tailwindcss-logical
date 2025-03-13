module.exports = function ({ matchUtilities, theme }) {
  const calculatedValues = {};

  for (const property in theme("margin")) {
    if (property === "px") {
      calculatedValues[property] = "1px";
    } else if (property === "auto") {
      calculatedValues[property] = "auto";
    } else {
      calculatedValues[property] = `calc(var(--spacing) * ${property})`;
    }
  }

  matchUtilities(
    {
      mlb: (value) => ({
        marginBlock: value,
      }),
      mli: (value) => ({
        marginInline: value,
      }),
    },
    {
      supportsNegativeValues: true,
      values: calculatedValues,
    },
  );
  matchUtilities(
    {
      mbs: (value) => ({
        marginBlockStart: value,
      }),
      mbe: (value) => ({
        marginBlockEnd: value,
      }),
      mis: (value) => ({
        marginInlineStart: value,
      }),
      mie: (value) => ({
        marginInlineEnd: value,
      }),
    },
    {
      supportsNegativeValues: true,
      values: calculatedValues,
    },
  );
};
