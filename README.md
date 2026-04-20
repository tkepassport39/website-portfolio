# Anthony Vanegas — Portfolio Website

Personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- **React 19** + **TypeScript 6**
- **Vite 8** — build tool
- **Tailwind CSS 3** — utility-first styling
- **shadcn/ui** — component primitives
- **Lucide React** — icons

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## CI/CD

GitHub Actions runs lint, type-check, and build on every push/PR to `main`.
On merge to `main`, the built site is deployed to AWS S3 + CloudFront.
