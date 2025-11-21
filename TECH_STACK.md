# Tech Stack Documentation

This document provides a comprehensive overview of all technologies, frameworks, libraries, and tools used in this NGO Rehabilitation Forms project.

## Core Framework & Runtime

### Next.js 15.1.7
- **Purpose**: Full-stack React framework
- **Features Used**: 
  - App Router
  - Server Components
  - API Routes
  - Turbopack (development mode)
  - File-based routing
  - Built-in optimization

### React 19.0.0
- **Purpose**: UI library for building user interfaces
- **Package**: `react` and `react-dom`
- **Features**: Component-based architecture, hooks, state management

### Node.js
- **Purpose**: JavaScript runtime environment
- **Used for**: Development server, build process, package management

## Styling & UI Components

### Tailwind CSS 4.1.5
- **Purpose**: Utility-first CSS framework
- **Configuration**: PostCSS integration
- **Additional Plugins**:
  - `@tailwindcss/postcss` (4.1.5)
  - `tw-animate-css` (1.3.0) - Animation utilities

### Shadcn/ui
- **Purpose**: Re-usable component library built with Radix UI
- **Style**: New York variant
- **Components Used**:
  - Checkboxes
  - Labels
  - Input fields
  - Custom UI components

### Radix UI
- **Purpose**: Accessible, unstyled UI primitives
- **Components**:
  - `@radix-ui/react-checkbox` (1.3.1)
  - `@radix-ui/react-label` (2.1.6)

### Icon Libraries
- **Lucide React** (0.511.0) - Primary icon library (SVG icons)
- **React Icons** (5.5.0) - Additional icon collection

### Styling Utilities
- **clsx** (2.1.1) - Utility for constructing className strings
- **tailwind-merge** (3.3.0) - Merge Tailwind CSS classes without conflicts
- **class-variance-authority** (0.7.1) - CVA for creating variants of components

## Form Management & Validation

### Formik 2.4.6
- **Purpose**: Form state management and handling
- **Features**: Form validation, submission handling, error management

### Yup 1.6.1
- **Purpose**: Schema validation library
- **Integration**: Works with Formik for form validation

## Database & ORM

### Prisma
- **Version**: 6.7.0
- **Package**: `@prisma/client`
- **Purpose**: Next-generation ORM for Node.js and TypeScript
- **Features**: Type-safe database client, migrations, database schema management

## Authentication

### NextAuth.js 4.24.11
- **Purpose**: Authentication solution for Next.js applications
- **Providers Configured**:
  - Google OAuth Provider
- **Features**: 
  - Session management
  - JWT tokens
  - Role-based authentication callbacks

## Specialized Components & Features

### React Signature Canvas 1.1.0-alpha.2
- **Purpose**: Component for capturing digital signatures
- **Use Case**: Form signatures and user consent

### React to Print 3.1.0
- **Purpose**: Print functionality for React components
- **Use Case**: Printing forms and documents

## UI/UX Utilities

### Toast 0.5.4
- **Purpose**: Notification system for user feedback
- **Features**: Toast messages, alerts, notifications

## Development Tools & Configuration

### PostCSS 8.5.3
- **Purpose**: CSS transformation tool
- **Configuration**: `postcss.config.mjs`
- **Plugins**: Tailwind CSS PostCSS plugin

### JavaScript Configuration
- **jsconfig.json**: Path aliases configuration (`@/*` → `./src/*`)
- **ES Modules**: Using `.mjs` for configuration files

### Package Manager
- **NPM**: Primary package manager
- **Lock File**: `package-lock.json` for dependency locking

## Build & Development Scripts

- `npm run dev` - Development server with Turbopack
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Next.js linting

## Project Structure

### Architecture Pattern
- **App Router**: Next.js 13+ App Directory structure
- **Component Structure**: 
  - `/src/app` - Pages and layouts
  - `/src/components` - Reusable React components
  - `/src/components/ui` - Shadcn UI components
  - `/src/api` - API routes
  - `/src/lib` - Utility functions

### Path Aliases
- `@/` maps to `./src/`
- `@/components` - Components directory
- `@/lib` - Utilities and helper functions
- `@/hooks` - Custom React hooks

## Key Features & Technologies Summary

1. **Frontend Framework**: Next.js 15 with React 19
2. **Styling**: Tailwind CSS 4 with Shadcn/ui components
3. **Forms**: Formik + Yup validation
4. **Database**: Prisma ORM
5. **Authentication**: NextAuth.js with Google OAuth
6. **UI Components**: Radix UI primitives with custom styling
7. **Icons**: Lucide React + React Icons
8. **Specialized Features**: 
   - Digital signatures (react-signature-canvas)
   - Print functionality (react-to-print)
   - Toast notifications

## Environment Configuration

The project uses environment variables for:
- Google OAuth credentials (`GOOGLE_ID`, `GOOGLE_SECRET`)
- Database connection (Prisma)

## Browser Compatibility

- Modern browsers supporting ES6+
- React 19 browser requirements
- CSS custom properties support (for Tailwind CSS variables)

## Performance Optimizations

- **Turbopack**: Fast development bundler
- **Next.js Image Optimization**: Built-in image component
- **Font Optimization**: Next/font for Geist font family
- **Code Splitting**: Automatic with Next.js
- **Server Components**: Improved performance with RSC

## Deployment Platform

- **Recommended**: Vercel (creators of Next.js)
- **Compatible**: Any Node.js hosting platform supporting Next.js

---

**Project Type**: Full-stack web application for NGO rehabilitation form management
**Architecture**: Modern React with server-side capabilities
**Primary Language**: JavaScript (JSX)
