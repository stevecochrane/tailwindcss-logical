const numberRegex = require("./util/numberRegex");

module.exports = function ({ matchUtilities, theme }) {
  const values = theme("padding");
  const calculatedValues = {};

  for (const property in values) {
    if (property === "px") {
      calculatedValues[property] = "1px";
    } else if (!numberRegex.test(property) && values[property]) {
      calculatedValues[property] = values[property];
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
