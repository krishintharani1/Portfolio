# Krishin Lal Portfolio

Professional portfolio for Krishin Lal, an AI Engineer and Data Scientist specializing in production AI, document intelligence, semantic matching, forecasting, and Azure ML deployment.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The Vite base path is set to `/Portfolio/` for deployment at `https://krishintharani1.github.io/Portfolio/`.

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys the site when changes are pushed to `main`. In the repository settings, set **Settings > Pages > Build and deployment > Source** to **GitHub Actions**.
