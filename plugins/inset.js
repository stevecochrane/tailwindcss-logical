module.exports = function ({ matchUtilities, theme }) {
  const calculatedValues = {};

  for (const property in theme("inset")) {
    if (property === "px") {
      calculatedValues[property] = "1px";
    } else if (property === "full") {
      calculatedValues[property] = "100%";
    } else if (property === "auto") {
      calculatedValues[property] = "auto";
    } else if (property.includes("/")) {
      calculatedValues[property] = `calc(${property} * 100%)`;
    } else {
      calculatedValues[property] = `calc(var(--spacing) * ${property})`;
    }
  }

  matchUtilities(
    {
      "inset-block": (value) => ({
        insetBlock: value,
      }),
      "inset-inline": (value) => ({
        insetInline: value,
      }),
    },
    {
      supportsNegativeValues: true,
      values: calculatedValues,
    },
  );
  matchUtilities(
    {
      "block-start": (value) => ({
        insetBlockStart: value,
      }),
      "block-end": (value) => ({
        insetBlockEnd: value,
      }),
      "inline-start": (value) => ({
        insetInlineStart: value,
      }),
      "inline-end": (value) => ({
        insetInlineEnd: value,
      }),
    },
    {
      supportsNegativeValues: true,
      values: calculatedValues,
    },
  );
};
