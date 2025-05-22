# TyrePartner Website - Architecture Overview

## Overview

This project is a full-stack web application for TyrePartner, a tire sales company. It features a modern React frontend with a Node.js/Express backend, designed as a single-page application (SPA) with tire search functionality, company information sections, and contact capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom TyrePartner branding variables
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript throughout the stack
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Express sessions with PostgreSQL store
- **API Design**: RESTful API with /api prefix

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with responsive mobile menu
2. **SearchSection**: Main tire search functionality with CSV data integration
3. **AboutSection**: Company mission, vision, and values display
4. **ContactSection**: Contact form and company information
5. **TireCard**: Individual tire display component with WhatsApp integration

### Backend Components
1. **Express Server**: Main application server with middleware setup
2. **Routes**: Modular route handlers in `/server/routes.ts`
3. **Storage Interface**: Abstracted storage layer with in-memory implementation
4. **Database Schema**: User management schema with Drizzle ORM

### Shared Components
- **Schema Definitions**: Shared between frontend and backend for type safety
- **Type Definitions**: Common TypeScript interfaces and types

## Data Flow

### Tire Data Management
1. CSV file (`pneus.csv`) contains tire inventory data
2. Frontend loads and parses CSV using PapaParse library
3. Search functionality filters data client-side for performance
4. Results displayed in responsive card layout

### User Interactions
1. Navigation updates URL hash and switches content sections
2. Search queries filter tire data in real-time
3. WhatsApp integration opens external messaging with pre-formatted text
4. Contact form validates and displays success messages

### Backend API Flow
1. Express middleware handles logging, JSON parsing, and error handling
2. Storage abstraction layer provides CRUD operations
3. Session management maintains user state
4. API responses follow consistent JSON format

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives for accessible components
- **Data Fetching**: TanStack Query for server state management
- **CSV Parsing**: PapaParse for client-side CSV processing
- **Date Handling**: date-fns for date utilities
- **Styling**: Tailwind CSS with custom configuration

### Backend Dependencies
- **Database**: Neon serverless PostgreSQL
- **ORM**: Drizzle with PostgreSQL adapter
- **Session Store**: connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for runtime type checking

### Development Dependencies
- **Build Tools**: Vite, esbuild for optimized builds
- **TypeScript**: Full type safety across the stack
- **Development**: tsx for TypeScript execution, Replit integration

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with HMR on port 5000
- **Database**: Neon serverless PostgreSQL via DATABASE_URL
- **Build Process**: Vite builds frontend to `dist/public`, esbuild bundles backend

### Production Deployment
- **Target**: Replit autoscale deployment
- **Build Command**: `npm run build` - builds both frontend and backend
- **Start Command**: `npm run start` - runs production server
- **Port Configuration**: Internal port 5000 mapped to external port 80

### Database Management
- **Migrations**: Drizzle Kit for schema migrations
- **Connection**: Environment-based DATABASE_URL configuration
- **Schema**: Centralized in `shared/schema.ts` for consistency

### Key Architectural Decisions

1. **Monorepo Structure**: Frontend and backend in single repository for easier development and deployment
2. **Shared Types**: TypeScript interfaces shared between client and server for type safety
3. **Client-Side CSV Processing**: CSV data processed in browser for better performance and offline capability
4. **Component-Based Architecture**: Modular React components with clear separation of concerns
5. **Storage Abstraction**: Interface-based storage layer allowing easy database switching
6. **Environment-Based Configuration**: Flexible configuration via environment variables
7. **Responsive Design**: Mobile-first approach with Tailwind CSS utilities

The architecture prioritizes developer experience, performance, and maintainability while keeping the codebase simple and focused on the core tire search and company presentation functionality.