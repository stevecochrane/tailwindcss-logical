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
    if (keywords.includes(property)) {
      calculatedValues[property] = values[property];
    } else if (property === "px") {
      calculatedValues[property] = "1px";
    } else if (property.includes("/")) {
      calculatedValues[property] = `calc(${property} * 100%)`;
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
