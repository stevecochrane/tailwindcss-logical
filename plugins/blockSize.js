const numberRegex = require("./util/numberRegex");

module.exports = function ({ matchUtilities, theme }) {
  const values = theme("height");
  const calculatedValues = {};
  const keywords = [
    "auto",
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
    } else if (property.includes("/")) {
      calculatedValues[property] = `calc(${property} * 100%)`;
    } else {
      calculatedValues[property] = `calc(var(--spacing) * ${property})`;
    }
  }

  matchUtilities(
    {
      bs: (value) => ({
        blockSize: value,
      }),
    },
    { values: calculatedValues },
  );
};
