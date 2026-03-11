# markholland.dev

Personal website for Mark Holland. Next.js 16 App Router with Tailwind CSS v4, deployed on Vercel.

## Commands

- `npm run dev` - Start dev server
- `npm run build` - Production build
- `npm run lint` - ESLint with zero warnings allowed (`--max-warnings=0`)
- `npm run format` - Prettier check

## Structure

- `app/` - Next.js App Router pages and API routes
- `components/` - Shared React components
- `public/` - Static assets

## Code Style

- TypeScript strict mode
- Prettier + eslint-config-prettier (formatting via Prettier, not ESLint)
- Tailwind CSS v4 with `@tailwindcss/postcss`
- ESLint flat config (`eslint.config.mjs`)

## Gotchas

- Node 22.x required (see `engines` in package.json)
- `patch-package` runs on postinstall - check `patches/` dir for active patches
- Husky pre-commit runs `pretty-quick --staged` and lint
- ESLint enforces zero warnings - all warnings must be resolved before commit
