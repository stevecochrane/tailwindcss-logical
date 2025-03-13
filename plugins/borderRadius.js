module.exports = function ({ matchUtilities, theme }) {
  const values = theme("borderRadius");
  const calculatedValues = {};
  const sizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"];

  for (const property in values) {
    if (sizes.includes(property)) {
      calculatedValues[property] = `var(--radius-${property})`;
    } else if (property === "full") {
      calculatedValues[property] = "calc(infinity * 1px)";
    } else {
      calculatedValues[property] = values[property];
    }
  }

  matchUtilities(
    {
      "rounded-bs": (value) => ({
        borderStartStartRadius: value,
        borderStartEndRadius: value,
      }),
      "rounded-be": (value) => ({
        borderEndStartRadius: value,
        borderEndEndRadius: value,
      }),
      "rounded-is": (value) => ({
        borderStartStartRadius: value,
        borderEndStartRadius: value,
      }),
      "rounded-ie": (value) => ({
        borderStartEndRadius: value,
        borderEndEndRadius: value,
      }),
    },
    { values: calculatedValues },
  );
};
