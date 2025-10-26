const numberRegex = require("./util/numberRegex");

module.exports = function ({ matchUtilities, theme }) {
  const values = theme("margin");
  const calculatedValues = {};
  const keywords = ["auto"];

  for (const property in values) {
    if (property === "px") {
      calculatedValues[property] = "1px";
    } else if (
      keywords.includes(property) ||
      (!numberRegex.test(property) && values[property])
    ) {
      calculatedValues[property] = values[property];
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
