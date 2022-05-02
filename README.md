# [SvelteKit](https://kit.svelte.dev) Starter

This is an opinionated PWA ready sveltekit starter project with folders structured in favor of the [Clean Architecture](https://github.com/bespoyasov/frontend-clean-architecture).

## Features

- [HTML template](https://www.joshwcomeau.com/snippets/html/html-skeleton/) by Joshua Comeau for basic SEO support
- [tailwindcss](https://tailwindcss.com/docs/guides/sveltekit) setup
- [SASS](https://sass-lang.com/) setup (it's useful sometimes)
- CSS reset based on [Joshua Comeau's article](https://www.joshwcomeau.com/css/custom-css-reset/)
- [Prettier](https://prettier.io/) setup
- TypeScript support
- QR Code for localhost URL printed in terminal with the support of [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal)
- 2 frequently used Svelte actions:
  - clickoutside
  - pannable
- utilities
  - device detection

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
