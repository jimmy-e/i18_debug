/* eslint-disable */

module.exports = {
  extends: [
    'airbnb',
    'next',
    'next/core-web-vitals',
    'turbo'
  ],
  globals: { JSX: true, React: true },
  rules: {
    // ----- NEXTJS ----- //
    '@next/next/no-html-link-for-pages': 'off',

    // ----- GENERAL ----- //
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'function-paren-newline': ['error', { minItems: 3 }],
    indent: ['error', 2],
    'max-len': ['error', { code: 100 }],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'sort-keys': 'error',
    'sort-vars': 'error',

    // ----- IMPORTING ----- //
    'import/extensions': ['error', 'never'],
    'import/no-anonymous-default-export': [0],
    'import/no-extraneous-dependencies': [0],
    'import/prefer-default-export': [0],

    // ----- REACT ----- //
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-filename-extension': ['error', { allow: 'as-needed', extensions: ['.tsx'] }],
    'react/jsx-max-props-per-line': ['error', { maximum: 2 }],
    'react/jsx-one-expression-per-line': ['error', { allow: 'literal' }],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-sort-props': 'error',
    'react/no-array-index-key': 0
  }
};
