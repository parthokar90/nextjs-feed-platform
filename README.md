# Next.js Feed Platform

A modern social feed platform built using Next.js 16, React 19, and scalable frontend architecture.

Designed for real-world large-scale applications with clean component structure, reusable UI, API integration, and production-ready development workflow.

---
## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Axios
- Bootstrap 

---

## Development Tools

- ESLint
- Docker 
- Git & GitHub

---

### Feature
- Modern Feed UI
- Responsive Design
- Post Timeline
- Dropdown Action Menu
- Comment System UI
- Reaction System
- Share Button UI
- Dynamic Post Rendering
- Reusable Components
- API Ready Architecture

---

### Folder Structure
nextjs-feed-platform/
│
├── app/
├── components/
├── public/
├── services/
├── styles/
│
├── Dockerfile       
├── docker-compose.yml 
├── package.json
├── .env.local
├── next.config.js

---

# ⚙️ Installation & Setup

---

## Clone the Repository

Clone the project from GitHub to your local machine.

```bash
git@github.com:parthokar90/nextjs-feed-platform.git
```

## Navigate to Project Folder

Move into the project directory.

```bash
cd nextjs-feed-platform
```

 Install Dependencies
```bash
npm install
```

 Environment Variables,Create a .env.local file in the project root directory and add the following variables:
```bash
.env.local
```

Configure Environment File

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
SANCTUM_CSRF_API_URL=http://localhost:8000
```

Run Development Server
```bash
npm run dev
```

Open in Browser

```bash
http://localhost:3000
```

---
🐳 Run Project with Docker

This project can be run fully using Docker without installing Node.js locally.

---
⚙️ Prerequisites

Make sure you have installed:

Docker
Docker Compose

Check version:
```bash
docker -v
docker compose version
```

---
Build & Run Project
Run the following command from the project root directory:

```bash
docker compose up --build
```
This will:

Build Next.js Docker image
Install dependencies inside container
Start development server
Expose app on port 3000

---

Open in Browser

After successful build, open:

```bash
http://localhost:3000
```
