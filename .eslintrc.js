module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint-config-airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'react/function-component-definition': ['off'],
    'arrow-body-style': ['off'],
    'linebreak-style': ['off'],
    'react/button-has-type': ['off'],
    semi: ['off'],
  },
};
