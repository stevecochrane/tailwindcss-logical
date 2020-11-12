const cssMatcher = require('jest-matcher-css');

expect.extend({
  toMatchCss: cssMatcher,
});
