# VanLife

A React + TypeScript single-page app for browsing and managing camper van rentals.  
It includes a public rental experience and a host dashboard, powered by React Router data APIs and MirageJS mock backend routes.

## Live Demo

- https://pranav-vanlife.netlify.app

## Features

- Explore available vans with category-based filtering (`simple`, `rugged`, `luxury`)
- View detailed van pages with pricing and descriptions
- Host area with nested dashboard routes:
  - Dashboard overview
  - Income
  - Reviews
  - Host vans list
  - Individual hosted van details, pricing, and photos sections
- Route-level loaders and actions using React Router
- Form-based login flow with redirect support
- Local auth state via `localStorage`
- Error boundary and route fallback handling

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS
- MirageJS (mock API server)
- ESLint

## Mock API and Authentication

The app boots a MirageJS server from:

- `server.js`

Available API namespace:

- `/api/vans`
- `/api/vans/:id`
- `/api/host/vans`
- `/api/host/vans/:id`
- `/api/login`

Demo login credentials seeded in MirageJS:

- **Email:** `b@b.com`
- **Password:** `p123`

## Getting Started

### Prerequisites

- Node.js (18+ recommended)
- npm

### Install dependencies

```bash
npm ci
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Preview production build

```bash
npm run preview
```

## Project Structure

```text
src/
  Components/   # Shared UI components (navigation, buttons, filters, etc.)
  Pages/        # Route components and nested route sections
  Types/        # Shared TypeScript types
  assets/       # Static assets used by route/components
server.js       # MirageJS mock backend and seeded data
utils.ts        # Shared fetch helpers and utility functions
```

## Notes

- The current repository has pre-existing lint/type issues unrelated to this README updates.
