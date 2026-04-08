# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start              # webpack-dev-server on http://localhost:8000 (auto-opens browser)
npm run build-dev-app  # development build → dist/
npm run build-prod-app # production build with minification → dist/
npm test               # Jest
```

## Architecture

This is a **purely static** portfolio site — no server. Webpack bundles everything into `dist/` which can be served as-is.

### Entry point flow

```
webpack entry: ['babel-polyfill', src/client/app/index.js]
  └── imports src/client/app/styles/index.scss  (triggers CSS extraction)
  └── imports src/client/app/modules/projects.js
        └── renderProjects() injects 6 project cards into #projects-grid on DOMContentLoaded
```

### Webpack configs

Two separate configs (same pattern as `richbm10/Evaluate-a-News-Article-with-NPL-Project-Udacity`):
- `webpack.dev.js` — source maps, dev server port 8000, no minification
- `webpack.prod.js` — TerserPlugin (JS) + CssMinimizerPlugin (CSS), no dev server

Both use: `HtmlWebpackPlugin` (template → `src/client/app/pages/index.html`), `MiniCssExtractPlugin`, `CleanWebpackPlugin`, `babel-loader`, `sass-loader` with `api: 'modern'` (Dart Sass).

### Styles

SCSS with CSS custom properties defined in `_global.scss` (all colors, spacing, radii, transitions as `--var` tokens). `index.scss` imports all partials via `@use`. Each page section has its own partial under `styles/components/`.

### Pinned repos data

`src/client/app/modules/projects.js` contains the `PINNED_REPOS` array as a hardcoded JS constant (fetched via `gh api graphql` on 2026-04-06). To update pinned repos, edit this array directly — no API calls happen at runtime.
