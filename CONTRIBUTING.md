# Contributing to Next.js Feed Platform

Thank you for your interest in contributing! This guide will help you get started.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Branch Naming Convention](#branch-naming-convention)
- [Commit Message Format](#commit-message-format)
- [Pull Request Process](#pull-request-process)
- [Issue Labels](#issue-labels)
- [Good First Issues](#good-first-issues)
- [Project Structure](#project-structure)
- [Development Setup](#development-setup)

---

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment. Be kind, constructive, and professional in all interactions.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js >= 18
- npm >= 9
- Docker & Docker Compose (optional but recommended)
- Git

### Fork & Clone

1. **Fork** the repository by clicking the Fork button on GitHub
2. **Clone** your fork locally:

```bash
git clone git@github.com:YOUR_USERNAME/nextjs-feed-platform.git
cd nextjs-feed-platform
```

3. **Add upstream** remote to stay in sync:

```bash
git remote add upstream git@github.com:parthokar90/nextjs-feed-platform.git
```

4. **Install dependencies:**

```bash
npm install
```

5. **Setup environment:**

```bash
cp .env.example .env.local
```

Edit `.env.local` with your local API URL:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
SANCTUM_CSRF_API_URL=http://localhost:8000
```

6. **Run development server:**

```bash
npm run dev
```

App will be available at `http://localhost:3000`

---

## How to Contribute

### Step 1 — Find an Issue

- Browse [open issues](https://github.com/parthokar90/nextjs-feed-platform/issues)
- Start with issues labeled [`good first issue`](https://github.com/parthokar90/nextjs-feed-platform/issues?q=label%3A%22good+first+issue%22) if you are new
- Leave a comment on the issue saying you'd like to work on it
- Wait for the maintainer to assign it to you before starting

### Step 2 — Sync Your Fork

Before starting any work, sync with the upstream main branch:

```bash
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

### Step 3 — Create a Branch

Create a new branch from `main` following the [naming convention](#branch-naming-convention):

```bash
git checkout -b feature/dark-mode
```

### Step 4 — Write Your Code

- Follow existing code style and folder structure
- Write clean, readable TypeScript
- Keep components small and focused
- Do not break existing functionality

### Step 5 — Test Your Changes

```bash
# Run lint check
npm run lint

# Build to check for errors
npm run build
```

Make sure there are no lint errors or build failures before submitting.

### Step 6 — Commit Your Changes

Follow the [commit message format](#commit-message-format).

```bash
git add .
git commit -m "feat: add dark mode toggle with localStorage persistence"
```

### Step 7 — Push & Open a Pull Request

```bash
git push origin feature/dark-mode
```

Go to your fork on GitHub and click **"Compare & pull request"**.

---

## Branch Naming Convention

Use lowercase, hyphen-separated names with a category prefix:

| Type | Pattern | Example |
|------|---------|---------|
| New feature | `feature/short-description` | `feature/dark-mode` |
| Bug fix | `fix/short-description` | `fix/image-validation` |
| Performance | `perf/short-description` | `perf/feed-pagination` |
| Security | `security/short-description` | `security/token-storage` |
| UI/UX improvement | `ux/short-description` | `ux/skeleton-loading` |
| Refactor | `refactor/short-description` | `refactor/api-service` |
| Documentation | `docs/short-description` | `docs/update-readme` |

**Rules:**
- Always branch off from `main`
- Never commit directly to `main`
- One issue per branch

---

## Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/) format:

```
type: short description (max 72 chars)
```

**Types:**

| Type | When to use |
|------|-------------|
| `feat` | Adding a new feature |
| `fix` | Fixing a bug |
| `perf` | Performance improvement |
| `security` | Security fix or improvement |
| `ux` | UI/UX improvement |
| `refactor` | Code refactor (no behavior change) |
| `docs` | Documentation update |
| `chore` | Dependency updates, config changes |
| `style` | Formatting, missing semicolons (no logic change) |

**Examples:**

```bash
feat: add infinite scroll to feed
fix: disable submit button on post creation to prevent duplicate
perf: replace img tags with Next.js Image component
security: move JWT token from localStorage to memory store
ux: add skeleton loading cards for feed
docs: add setup instructions to README
```

---

## Pull Request Process

### Before Submitting

- [ ] Code runs without errors (`npm run dev`)
- [ ] No lint errors (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] You have tested your changes manually
- [ ] Your branch is up to date with `upstream/main`

### PR Title

Use the same format as commit messages:

```
feat: add dark mode support
fix: prevent double post submission
```

### PR Description

Fill out the PR template with:

- **What** — what does this PR do?
- **Why** — which issue does it fix? (use `Closes #15`)
- **How** — brief explanation of your approach
- **Screenshots** — if it's a UI change, add before/after screenshots

### Review Process

1. A maintainer will review your PR within a few days
2. You may be asked to make changes — please respond promptly
3. Once approved, the maintainer will merge your PR
4. Your contribution will be credited in the project

---

## Issue Labels

| Label | Meaning |
|-------|---------|
| `security` | Security vulnerability or hardening |
| `performance` | Speed or efficiency improvement |
| `bug` | Something is broken |
| `feature` | New functionality |
| `enhancement` | Improvement to existing feature |
| `ux` | User experience or UI improvement |
| `good first issue` | Beginner-friendly, well-scoped |
| `help wanted` | Open for contributors, maintainer needs help |

---

## Good First Issues

New to open source? Start here — these are well-defined, beginner-friendly tasks:

- Replace `<img>` tags with Next.js `<Image>` component
- Add skeleton loading cards for feed
- Add toast notifications for user actions
- Add dark mode toggle

Filter by [`good first issue`](https://github.com/parthokar90/nextjs-feed-platform/issues?q=label%3A%22good+first+issue%22) label to find them all.

---

## Project Structure

```
nextjs-feed-platform/
│
├── app/                  # Next.js App Router pages and layouts
├── components/           # Reusable UI components
├── services/
│   └── api/              # Axios API service functions (Laravel backend calls)
├── styles/               # Global CSS styles
│
├── middleware.ts          # Route protection middleware
├── next.config.ts         # Next.js configuration
├── Dockerfile             # Docker image definition
└── docker-compose.yml     # Docker Compose setup
```

### Key Conventions

- **Components** — one component per file, PascalCase filename (`PostCard.tsx`)
- **API services** — all backend calls go in `services/api/`, never directly in components
- **Types** — define TypeScript interfaces/types in the same file or a `types.ts` if shared
- **Styles** — prefer component-scoped CSS modules or global styles in `styles/`

---

## Development Setup with Docker

If you prefer Docker over local Node.js:

```bash
docker compose up --build
```

App will be available at `http://localhost:3000`

---

## Questions?

If you have questions, open a [GitHub Discussion](https://github.com/parthokar90/nextjs-feed-platform/discussions) or comment on the relevant issue.

We appreciate every contribution — from fixing typos to building new features. Thank you! 🙌
