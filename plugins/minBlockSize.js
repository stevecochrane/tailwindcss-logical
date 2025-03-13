module.exports = function ({ matchUtilities, theme }) {
  const values = theme("minHeight");
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
    if (keywords.includes(property)) {
      calculatedValues[property] = values[property];
    } else if (property === "px") {
      calculatedValues[property] = "1px";
    } else {
      calculatedValues[property] = `calc(var(--spacing) * ${property})`;
    }
  }

  matchUtilities(
    {
      "min-bs": (value) => ({
        minBlockSize: value,
      }),
    },
    { values: calculatedValues },
  );
};
