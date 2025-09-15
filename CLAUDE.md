# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Must Follow Guide
- Always ask whether to implement the code when asked to plan.
- Do not write more code than what was asked for.
- Do not alter `@src/app/globals.css`.
- Do not start a server after implementation.
- DO not use emojis in design. Use Lucide icons instead.
- Always run typescript check after code generation.
- All pages must default to server components.
- Always prefer server components over client components.
- DO not write excessive code examples in `CLAUDE.md` files.
- Always use server action to write server logic.
- Always user theme system colors unless absolutely necessary when creating UI.
- Always create demo components in /components-demo page.
- Always prefer Korean over English.
- Always create files in UTF-8 encoding.
- Always user Playwright MCP after code update and access the appropriate pages to make sure there are no errors and resolve them if there are any.

## Project Overview
This is a Next.js 15 application called "guestbook-light" that uses the App Router and TypeScript. It's set up with Tailwind CSS, shadcn/ui components, and modern tooling including Turbopack for faster builds.

## Development Commands
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production app with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture & Structure
The project follows Next.js 15 App Router conventions:

### Current Directory Structure
```
src/
├── app/                 # App Router directory
│   ├── globals.css     # Global CSS styles with Tailwind v4
│   ├── layout.tsx      # Root layout component
│   ├── page.tsx        # Home page component
│   └── favicon.ico     # App favicon
└── lib/                 # Shared utilities
    └── utils.ts        # Utility functions (cn for className merging)
```

### Additional Directories (Created as needed)
- `components/` - Reusable React components
  - `ui/` - shadcn/ui components (auto-managed by CLI)
  - `guestbook-form.tsx` - 방명록 폼 컴포넌트
  - `guestbook-list.tsx` - 방명록 목록 컴포넌트
- `hooks/` - Custom React hooks
- `components-demo/` - Demo components showcase page

Components are organized using shadcn/ui conventions with simple flat structure for project-specific components

## Tech Stack

### Core Framework
- **Next.js 15.5.3** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type-safe JavaScript

### UI & Styling
- **shadcn/ui** - Component library with "new-york" style
- **Tailwind CSS v4** - Utility-first CSS framework with CSS variables
- **Lucide React 0.544.0** - Icon library
- **class-variance-authority 0.7.1** - Component variant styling
- **clsx 2.1.1** & **tailwind-merge 3.3.1** - Conditional className utilities

### Database & Analytics
- **Supabase** - Backend as a Service with PostgreSQL database
- **@supabase/supabase-js 2.57.4** - Supabase client library
- **@vercel/analytics 1.5.0** - Vercel Analytics for web analytics

### Development Tools
- **Turbopack** - Fast bundler for development and build
- **ESLint 9** - Code linting with Next.js config
- **@tailwindcss/postcss 4** - PostCSS integration for Tailwind
- **tw-animate-css 1.3.8** - Tailwind animation utilities

### Configuration
- **TypeScript**: Strict mode with ES2017 target
- **shadcn/ui**: RSC enabled, TSX, neutral base color
- **Tailwind**: CSS variables, no prefix, PostCSS integration

## Path Aliases (tsconfig.json)
- `@/*` maps to `./src/*`
- Additional shadcn aliases in `components.json`:
  - `@/components` for components
  - `@/lib` for utilities
  - `@/components/ui` for UI components
  - `@/hooks` for custom hooks

## Configuration
- Next.js config: `next.config.ts` (minimal setup)
- ESLint: Uses Next.js core-web-vitals and TypeScript configs
- TypeScript: Strict mode enabled with Next.js plugin
- Tailwind: Uses v4 with neutral base color and CSS variables