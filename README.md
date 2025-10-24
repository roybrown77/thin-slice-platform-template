# 🧱 Thin Slice Platform Template

<div align="center" style="font-size: 2.5rem; color: #F7B32B; font-family: 'Segoe UI', 'Roboto', sans-serif; font-weight: 600; margin-bottom: 1rem;">
    <span>Thin Slice Platform Template 🍕</span>
    <br>
    <span style="font-size: 1.25rem; color: #F7B32B;; font-weight: 400;">
        Deliver a thin slice of an entire platform to get to prod faster.
    </span>
</div>

![PNPM](https://img.shields.io/badge/package%20manager-pnpm-%232C8EBB)
![Turborepo](https://img.shields.io/badge/build-monorepo%20with%20Turbo-blue)
![TypeScript](https://img.shields.io/badge/language-TypeScript-3178C6?logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/frontend-Next.js-black?logo=next.js)
![Express](https://img.shields.io/badge/backend-Express.js-lightgrey?logo=express)
![CI/CD](https://img.shields.io/github/actions/workflow/status/YOUR_ORG/YOUR_REPO/deploy.yml?label=CI%2FCD&logo=githubactions)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 🚀 Overview

This thin slice template helps you stand up a fully structured full-stack platform—fast. With just enough backend, frontend, cloud infrastructure, and CI/CD, it's perfect for staging environments, MVPs, and scalable projects with admin + user sections and mobile-ready architecture.

> 🍕 Like a classic thin slice pizza, it's fast and ready for anything. Grab a piece and build your platform with extra jalapenos 🌶️🌶️ (features) or just sauce 🍅 (core essentials)!

---

## 📦 Tech Stack

- **Monorepo** powered by [pnpm](https://pnpm.io) and [Turborepo](https://turbo.build/repo)
- **Frontend:** Next.js (user + admin portals)
- **Backend:** Express API with TypeScript
- **Infra:** Terraform (AWS S3 starter)
- **CI/CD:** GitHub Actions with environment config
- **Shared packages:** UI components, utilities, and auth scaffolding
- **Mobile-ready:** Supports future expansion to React Native (Expo)

---

## 📁 Project Structure

```
thin-slice-platform-template/
│
├── apps/
│   ├── web/            # Web frontend (Next.js)
│   ├── admin/          # Admin frontend (can share code with web)
│   └── mobile/         # (future) React Native app (Expo)
│
├── packages/
│   ├── api/            # Backend API (Node.js/Express or Next.js API routes)
│   ├── ui/             # Shared UI components (web + mobile compatible)
│   ├── auth/           # Shared auth logic (middleware, session handling)
│   └── utils/          # Shared utilities (logging, config, etc.)
│
├── infrastructure/
│   ├── terraform/      # Infra-as-Code for AWS, staging/prod
│   └── ci-cd/          # GitHub Actions or GitLab CI pipelines
│
├── docs/               # Internal documentation
│
├── .env.staging
├── .env.production
├── package.json
├── pnpm-workspace.yaml # To define your monorepo structure
├── turbo.json          # (Optional) Turborepo workspace manager
└── README.md
```

---

## 🌐 Environment Setup

initialize:
```
npx pnpm install
npx pnpm run dev:all         # to run everything in monorepo
go to http://localhost:3000 and http://localhost:3001 to view admin and web pages

OR to run just partS of monorepo

npx pnpm --filter web dev
go to http://localhost:3000

npx pnpm --filter admin dev
go to http://localhost:3000 or http://localhost:3001 if new port created

pnpm --filter api dev
```

start over:
```
rm -rf node_modules pnpm-lock.yaml && rm -rf **/node_modules
```

test:
```
npx pnpm lint
npx pnpm test
npx pnpm build
```

---

## 🧪 Routes to Try

```
http://localhost:3000/ → Web app

http://localhost:3001/ → Admin app

http://localhost:4000/health → API health check

http://localhost:4000/logs → API logs
```

---

## ☁️ Cloud Infrastructure

```
Deploy with Terraform: /infrastructure/terraform/main.tf

AWS S3 staging bucket included

Extendable for full-stack environments
```

---

## 📄 License

### ✅ To Finish Setup

MIT © [Your Name or Company]
```
- Replace `YOUR_ORG/YOUR_REPO` in the CI badge with your actual GitHub path
- Optionally add deploy instructions for Vercel, Netlify, or AWS
- Add a `LICENSE` file if not already included
```