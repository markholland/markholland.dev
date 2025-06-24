import next from '@next/eslint-plugin-next'
import eslintConfigPrettier from 'eslint-config-prettier'
import react from 'eslint-plugin-react'
import tailwindcss from 'eslint-plugin-tailwindcss'
import tseslint from 'typescript-eslint'

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },
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
      '**/node_modules/',
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      next,
      react,
      tailwindcss,
    },
    rules: {
      ...next.configs.recommended.rules,
      ...next.configs['core-web-vitals'].rules,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]
