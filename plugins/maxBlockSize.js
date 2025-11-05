const numberRegex = require("./util/numberRegex");

module.exports = function ({ matchUtilities, theme }) {
  const values = theme("maxHeight");
  const calculatedValues = {};
  const keywords = [
    "none",
    "full",
    "screen",
    "dvh",
    "dvw",
    "lvh",
    "lvw",
    "svh",
    "svw",
    "min",
    "max",
    "fit",
  ];

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
      "max-bs": (value) => ({
        maxBlockSize: value,
      }),
    },
    { values: calculatedValues },
  );
};
