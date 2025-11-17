# Julian Arleby Munoz Mendez - Portfolio Website

## Overview

This is a modern, premium portfolio website for Julian Arleby Munoz Mendez, a Senior Full Stack Engineer with expertise in Node.js, Python, React, and AWS. The application is designed as a single-page portfolio showcasing professional experience, projects, skills, certifications, and contact information with sophisticated animations and gradient-driven visual design.

The website follows a high-end design approach inspired by Linear (typography and spacing), Apple.com (elegant animations), and Vercel (dark aesthetic with gradient accents), creating a polished engineering-focused portfolio experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing (single-page application with minimal routing needs)
- **TanStack Query (React Query)** for server state management and data fetching

**UI Component System**
- **shadcn/ui** component library based on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom theme configuration
- **Custom design system** with two font families:
  - Inter (400, 500, 600, 700) for body text and UI elements
  - Space Grotesk (500, 600, 700) for headings and hero text
- **Color system** using CSS custom properties supporting light/dark modes with gradient-driven visual language

**Design Implementation**
- Gradient-driven backgrounds and borders throughout (no solid backgrounds)
- Glass morphism effects on cards using backdrop blur and translucent backgrounds
- Scroll-triggered animations and micro-interactions
- Responsive grid layouts with Tailwind breakpoints (mobile → tablet → desktop)
- Custom animation classes for fade-in, scale-in, and gradient shifts

**Page Structure**
The application is organized as a single-page layout with multiple sections:
- Navbar (sticky, with backdrop blur)
- Hero Section (full viewport height with animated gradients)
- About Section (professional summary with stats)
- Projects Section (portfolio showcase with modals)
- Experience Section (timeline of work history)
- Skills Section (categorized technical skills)
- Certifications Section (credentials and education)
- Contact Section (interactive contact cards)
- Footer

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js for HTTP server
- Minimal backend with placeholder storage interface (ready for database integration)
- Middleware chain includes JSON parsing, request logging, and custom response tracking

**API Design**
- RESTful API structure (routes prefixed with `/api`)
- Storage abstraction layer using TypeScript interfaces for future database integration
- Currently implements in-memory storage with user CRUD operations as template

**Development vs Production**
- Development mode uses Vite middleware for HMR and dev tooling
- Production mode serves static built assets from Express
- Custom logging system with timestamp formatting for API requests

### Data Storage Solution

**Current Implementation**
- In-memory storage using Map data structures (MemStorage class)
- User entity with id, username, and password fields

**Database Schema (Configured but not actively used)**
- **Drizzle ORM** configured for PostgreSQL
- Schema defines users table with UUID primary keys
- Connection configured for Neon Database (serverless PostgreSQL)
- Zod validation schemas generated from Drizzle schemas
- Migration system in place via drizzle-kit

**Storage Abstraction**
- IStorage interface defines standard CRUD methods
- Enables easy swapping between in-memory and database implementations
- Type-safe operations using Drizzle-generated types

### Authentication & Authorization

Currently not implemented, but the codebase includes:
- User schema with username/password fields
- Session management dependencies (connect-pg-simple for PostgreSQL sessions)
- Ready for implementation of OAuth2/JWT authentication patterns

## External Dependencies

### UI & Component Libraries
- **@radix-ui/** - Headless UI primitives (accordion, dialog, dropdown, popover, etc.)
- **shadcn/ui** - Pre-built accessible components built on Radix UI
- **lucide-react** - Icon library used throughout the interface
- **class-variance-authority** - Type-safe variant styling
- **tailwindcss** - Utility-first CSS framework
- **tailwind-merge** & **clsx** - Utility for conditional class merging

### State Management & Data Fetching
- **@tanstack/react-query** - Server state management and caching
- **react-hook-form** - Form state management
- **@hookform/resolvers** - Schema validation for forms
- **zod** - Schema validation library

### Database & ORM
- **drizzle-orm** - Type-safe SQL ORM
- **drizzle-zod** - Zod schema generation from Drizzle schemas
- **@neondatabase/serverless** - Neon Database client for serverless PostgreSQL
- **connect-pg-simple** - PostgreSQL session store for Express

### Build & Development Tools
- **vite** - Build tool and dev server
- **@vitejs/plugin-react** - React support for Vite
- **typescript** - Type checking
- **tsx** - TypeScript execution for Node.js
- **esbuild** - JavaScript bundler for server code
- **postcss** & **autoprefixer** - CSS processing

### Replit-Specific Plugins
- **@replit/vite-plugin-runtime-error-modal** - Enhanced error display
- **@replit/vite-plugin-cartographer** - Development tooling
- **@replit/vite-plugin-dev-banner** - Development mode indicator

### Utility Libraries
- **date-fns** - Date formatting and manipulation
- **embla-carousel-react** - Carousel/slider component
- **cmdk** - Command menu implementation
- **nanoid** - Unique ID generation
- **vaul** - Drawer/sheet component primitive

### Assets & Static Content
The application includes AI-generated project preview images stored in the `attached_assets/generated_images/` directory, used in the Projects Section to showcase portfolio work.