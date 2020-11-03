module.exports = ({ addUtilities, variants }) => {

  const floatUtilities = {
    '.float-start': { float: 'inline-start' },
    '.float-end': { float: 'inline-end' }
  };

  addUtilities(floatUtilities, variants('logical'));

};
