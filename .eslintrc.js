module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:jest/recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 12
  },
  'plugins': [
    'jest'
  ],
  'rules': {
    'quotes': ['error', 'single'],
    'semi': ['error', 'always']
  }
};
