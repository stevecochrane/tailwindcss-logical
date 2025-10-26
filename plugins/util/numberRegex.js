// Matches whole numbers such as "123", decimal numbers such as "12.3",
// and fractional numbers such as "12/3".
const numberRegex = /^\d+(?:[./]\d+)?$/;

module.exports = numberRegex;
