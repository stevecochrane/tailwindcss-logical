module.exports = ({ addUtilities, variants }) => {

  const clearUtilities = {
    '.clear-start': { clear: 'inline-start' },
    '.clear-end': { clear: 'inline-end' }
  };

  addUtilities(clearUtilities, variants('logical'));

};
