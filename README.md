# Noah Nerius P — AI/ML Engineer Portfolio

A modern, accessible, and performant personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Dark-first design** with cream/brown color palette
- **Fully responsive** — mobile, tablet, desktop
- **Accessible** — WCAG 2.1 AA compliant, keyboard navigable, reduced motion support
- **Performant** — optimized builds, code splitting, lazy loading
- **SEO-ready** — meta tags, Open Graph, JSON-LD structured data
- **Type-safe** — TypeScript with strict mode

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build**: Vite 5
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Routing**: Anchor-based (single page)
- **Linting**: ESLint 9 + TypeScript ESLint
- **Formatting**: Prettier + Tailwind plugin
- **Git Hooks**: Husky + lint-staged
- **Deploy**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:3000`

### Build

```bash
npm run build
```

Outputs to `dist/`

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

### Type Checking

```bash
npm run typecheck
```

### Formatting

```bash
npm run format
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI primitives (Button, Card, etc.)
│   ├── layout/          # Header, Footer
│   ├── sections/        # Page sections (Hero, About, Skills, etc.)
│   └── animations/      # Framer Motion wrappers
├── data/                # Content data (profile, skills, projects, timeline)
├── hooks/               # Custom React hooks
├── styles/              # Global styles & Tailwind config
├── utils/               # Utility functions
├── App.tsx
└── main.tsx
```

## Customization

### Colors

Edit `tailwind.config.ts` — the `cream` and `brown` palettes define the design system.

### Content

Update files in `src/data/`:
- `profile.ts` — name, bio, links, resume path
- `skills.ts` — skill categories and proficiency levels
- `projects.ts` — project cards with descriptions, tech stack, links
- `timeline.ts` — experience and education entries

### Resume

Place your PDF resume at `public/resume.pdf` (referenced in `profile.ts`).

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy — zero config required

### Manual

```bash
npm run build
# Deploy `dist/` to any static host
```

## Accessibility

- Semantic HTML5 landmarks
- Focus-visible styles
- Skip to main content link
- ARIA labels and roles
- Sufficient color contrast (AAA for text)
- `prefers-reduced-motion` respected
- Keyboard-navigable interactive elements

## Performance

- Code splitting (vendor, motion, icons chunks)
- Tree-shaken dependencies
- Optimized font loading (preconnect, preload)
- Compressed assets
- Cache headers via Vercel

## License

MIT — feel free to use as a template for your own portfolio.