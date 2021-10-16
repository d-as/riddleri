const { OFF, ERROR } = {
  OFF: 0,
  WARN: 1,
  ERROR: 2,
};

const paddingLine = (blankLine, prev, next) => ({
  blankLine,
  prev,
  next,
});

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  globals: {
    $: true,
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': [ERROR, { allowExpressions: true }],
    '@typescript-eslint/explicit-member-accessibility': ERROR,
    '@typescript-eslint/member-delimiter-style': [ERROR, {
      multiline: { delimiter: 'none' },
    }],
    '@typescript-eslint/no-explicit-any': ERROR,
    '@typescript-eslint/space-before-function-paren': [ERROR, 'always'],
    'arrow-parens': [ERROR, 'as-needed'],
    'curly': [ERROR, 'all'],
    'func-style': [ERROR, 'expression'],
    'import/prefer-default-export': OFF,
    'no-confusing-arrow': OFF,
    'no-console': OFF,
    'no-plusplus': OFF,
    'padding-line-between-statements': [ERROR, paddingLine('always', '*', 'block-like')],
  },
};
