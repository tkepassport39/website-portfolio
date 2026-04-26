# Anthony Vanegas — Portfolio Website

Personal portfolio website built with modern web technologies and deployed via an automated CI/CD pipeline.

## Overview

This repository contains the source code and deployment configuration for my personal portfolio website. The project demonstrates a modern frontend stack paired with robust cloud infrastructure and automated deployment practices.

## Tech Stack & Frameworks

The website is a Single Page Application (SPA) built using:
- **React 19** & **TypeScript** — For building scalable and type-safe user interfaces.
- **Vite 8** — A fast, modern build tool and development server.
- **Tailwind CSS 3** — For utility-first, responsive, and maintainable styling.
- **shadcn/ui** — For accessible and customizable UI component primitives.
- **Lucide React** — For consistent, scalable icons.

## Infrastructure & Deployment (AWS)

The application is deployed on Amazon Web Services (AWS) using a highly available and globally distributed architecture:
- **Amazon S3 (Simple Storage Service):** Acts as the origin, securely hosting the static assets (HTML, CSS, JS) of the built React application.
- **Amazon CloudFront:** A Content Delivery Network (CDN) that caches the website globally at edge locations, ensuring low latency, fast load times, and providing HTTPS security via ACM.
- **GitHub Actions (CI/CD):** A fully automated continuous integration and continuous deployment pipeline. 
  - On every push or pull request to the `main` branch, it executes linting, type-checking, and verifies the build.
  - On merge to the `main` branch, the built site is automatically synced to the S3 bucket, and the CloudFront cache is invalidated to serve the latest version to users instantly.
- **Security Best Practices:** The deployment is secured using IAM least-privilege principles. Rather than relying on long-lived static IAM user access keys, the CI/CD pipeline securely authenticates with AWS via **GitHub OIDC (OpenID Connect)** to assume an IAM role temporarily.

## Development

To run the project locally:

```bash
npm install
npm run dev
```

## Build

To verify the production build locally:

```bash
npm run build
npm run preview
```
