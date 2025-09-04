# ClarioSocial Studio - Social Media Management Website

## Overview

ClarioSocial Studio is a comprehensive social media management website built for online businesses. The application serves as a marketing platform for a social media agency specializing in helping e-commerce stores, SaaS companies, and online consultants increase their revenue through strategic social media management. The site features a modern, professional design with sections for services, case studies, testimonials, and a contact form for lead generation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system using CSS variables
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible components
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **API Pattern**: RESTful API design with JSON responses
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Request Processing**: JSON and URL-encoded body parsing with CORS support

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing
- **Data Validation**: Zod schemas for runtime type validation and API contract enforcement

### Authentication and Authorization
- Currently implements a basic user system foundation with username/password schema, though full authentication is not actively used in the current application flow. The contact form submission system operates without authentication requirements.

### Component Architecture
- **Design System**: Custom CSS variables for theming with light/dark mode support
- **Typography**: Multiple font families (Montserrat, Inter, Open Sans) for brand consistency
- **Icons**: Lucide React for consistent iconography
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Accessibility**: Radix UI primitives ensure WCAG compliance

### Performance Optimizations
- **Code Splitting**: Vite's automatic code splitting for optimal bundle sizes
- **Asset Optimization**: Vite handles asset optimization and bundling
- **Query Caching**: TanStack Query provides intelligent caching and background updates
- **Font Loading**: Preconnected Google Fonts for improved loading performance

## External Dependencies

### Database and Infrastructure
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe database toolkit and query builder

### UI and Styling
- **Radix UI**: Headless UI components for accessibility and customization
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent visual elements
- **Google Fonts**: External font hosting (Montserrat, Inter, Open Sans)

### Development and Build Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

### Form and Validation
- **React Hook Form**: Performant form library with validation
- **Zod**: Schema validation library for runtime type checking
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### State Management and Data Fetching
- **TanStack Query**: Server state management and caching
- **Wouter**: Lightweight routing library

### Development Environment
- **Replit Integration**: Development environment optimizations and runtime error handling
- **TSX**: TypeScript execution for development server