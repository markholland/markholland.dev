import next from '@next/eslint-plugin-next'
import tsParser from '@typescript-eslint/parser'
import eslintConfigPrettier from 'eslint-config-prettier'
import react from 'eslint-plugin-react'
import tailwindcss from 'eslint-plugin-tailwindcss'
import tseslint from 'typescript-eslint'

export default [
  eslintConfigPrettier,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  ...tailwindcss.configs['flat/recommended'],
  ...tseslint.configs.recommended,
  {
    ignores: [
      '**/package.json',
      '**/package-lock.json',
      '**/out/',
      '**/.next/',
    ],
  },
  {
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: 'script',
    },
    plugins: {
      next,
      react,
      tailwindcss,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]
