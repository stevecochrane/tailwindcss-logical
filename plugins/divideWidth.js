module.exports = function ({ addUtilities, matchUtilities, theme }) {
  matchUtilities(
    {
      "divide-b": (value) => ({
        "& > :not(:last-child)": {
          "--tw-divide-b-reverse": "0",
          "border-block-start-width": `calc(${value} * var(--tw-divide-b-reverse))`,
          "border-block-end-width": `calc(${value} * calc(1 - var(--tw-divide-b-reverse)))`,
        },
      }),
      "divide-i": (value) => ({
        "& > :not(:last-child)": {
          "--tw-divide-i-reverse": "0",
          "border-inline-start-width": `calc(${value} * var(--tw-divide-i-reverse))`,
          "border-inline-end-width": `calc(${value} * calc(1 - var(--tw-divide-i-reverse)))`,
        },
      }),
    },
    { values: theme("divideWidth") },
  );
  addUtilities({
    ".divide-b-reverse > :not(:last-child)": {
      "--tw-divide-b-reverse": "1",
    },
    ".divide-i-reverse > :not(:last-child)": {
      "--tw-divide-i-reverse": "1",
    },
  });
};
