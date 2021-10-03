module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/all',
    'plugin:tailwind/recommended',
    'prettier',
  ],

  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/forbid-component-props': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'react/jsx-filename-extension': [2, { extensions: ['.ts', '.tsx'] }],
    'react/jsx-max-depth': 'off',
  },
  plugins: ['react', 'prettier'],
  globals: {
    React: 'writable',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
