# Steadfast Courier API Documentation

Developer documentation and an interactive API explorer for the Steadfast Courier REST API, built with Docusaurus.

## Requirements

- Node.js 20 or later
- npm 10 or later

## Development

```bash
npm ci
npm start
```

## API documentation

`openapi/steadfast-api.yaml` is the source of truth for generated endpoint pages in `docs/api`.

Regenerate those pages after changing the specification:

```bash
npm run docusaurus -- clean-api-docs steadfast
npm run docusaurus -- gen-api-docs steadfast
```

## Production build

```bash
npm run build
npm run serve
```

The GitHub Actions workflow publishes the generated `build` directory to GitHub Pages after changes land on `main`.
