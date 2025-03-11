module.exports = function ({ matchUtilities, theme }) {
  const calculatedValues = {};

  for (const property in theme("padding")) {
    if (property === "px") {
      calculatedValues[property] = "1px";
    } else {
      calculatedValues[property] = `calc(var(--spacing) * ${property})`;
    }
  }

  matchUtilities(
    {
      plb: (value) => ({
        paddingBlock: value,
      }),
      pli: (value) => ({
        paddingInline: value,
      }),
    },
    { values: calculatedValues },
  );
  matchUtilities(
    {
      pbs: (value) => ({
        paddingBlockStart: value,
      }),
      pbe: (value) => ({
        paddingBlockEnd: value,
      }),
      pis: (value) => ({
        paddingInlineStart: value,
      }),
      pie: (value) => ({
        paddingInlineEnd: value,
      }),
    },
    { values: calculatedValues },
  );
};
