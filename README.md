# Ricardo Bonilla Morales — Portfolio

Personal portfolio landing page built with **vanilla JavaScript, SCSS, and HTML**, bundled with **Webpack 5**. Showcases my 6 pinned GitHub repositories alongside professional background, tech stack, work experience, and education.

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic, accessible) |
| Styling | SCSS (CSS custom properties, component partials) |
| Logic | Vanilla JavaScript (ES6+, Babel transpiled) |
| Bundler | Webpack 5 (separate dev/prod configs) |
| CSS build | MiniCssExtractPlugin + CssMinimizerPlugin |
| JS build | babel-polyfill + TerserPlugin |

## Getting Started

```bash
npm install
npm start        # dev server → http://localhost:8000
```

## Build

```bash
npm run build-dev-app   # development build with source maps → dist/
npm run build-prod-app  # minified production build → dist/
```

The `dist/` directory is fully static and can be deployed to any static host (GitHub Pages, Netlify, S3, etc.).

## Project Structure

```
src/client/app/
├── index.js              # entry point — imports styles and initialises modules
├── modules/
│   └── projects.js       # pinned repos data + card rendering
├── pages/
│   └── index.html        # HtmlWebpackPlugin template
└── styles/
    ├── index.scss         # root — imports all partials via @use
    ├── _global.scss       # CSS custom property tokens (colors, spacing, radii)
    ├── _resets.scss       # CSS reset
    └── components/       # one partial per page section
```

## Sections

- **Hero** — name, title, key impact stats, CTA links
- **About** — narrative bio and three highlight pillars
- **Skills** — tech stack grouped by category (Frontend, Backend, Cloud/DevOps, Blockchain/ZK, Data, Practices)
- **Projects** — 6 pinned GitHub repositories rendered dynamically from a JS constant
- **Experience** — vertical timeline (Oppizi, Streak, First Factory, Akurey)
- **Education** — degrees, certificates, and notable courses
- **Contact** — GitHub, LinkedIn, email

## Author

**Ricardo Bonilla Morales**
[github.com/richbm10](https://github.com/richbm10) · [linkedin.com/in/ricardo-bonilla-494277174](https://linkedin.com/in/ricardo-bonilla-494277174) · richbm10@gmail.com
