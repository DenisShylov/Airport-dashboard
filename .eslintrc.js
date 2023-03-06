module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint-config-airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'react/function-component-definition': ['off'],
    'arrow-body-style': ['off'],
    'linebreak-style': ['off'],
    'react/button-has-type': ['off'],
    indent: ['off'],
    'react/jsx-indent': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/no-noninteractive-element-interactions': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'no-dupe-keys': ['off'],
    'react/jsx-closing-bracket-location': ['off'],
    'operator-linebreak': ['off'],
    semi: ['off']
  }
};
