const numberRegex = require("./util/numberRegex");

module.exports = function ({ matchUtilities, theme }) {
  const values = theme("minWidth");
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

  // It looks like the only containers available in theme are theme("screens"),
  // and that isn't the full list used by v4, so we create it manually here.
  const containers = [
    "3xs",
    "2xs",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
    "7xl",
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

  for (const property of containers) {
    calculatedValues[property] = `var(--container-${property})`;
  }

  matchUtilities(
    {
      "min-is": (value) => ({
        minInlineSize: value,
      }),
    },
    { values: calculatedValues },
  );
};
