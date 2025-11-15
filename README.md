# Express TypeScript Backend Template

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

**A production-ready Express.js backend template with TypeScript, featuring Base classes, comprehensive middleware, and Docker support.**

[Features](#-features) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Architecture](#-architecture)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Architecture](#-architecture)
- [Usage Guide](#-usage-guide)
- [Docker Deployment](#-docker-deployment)
- [API Documentation](#-api-documentation)
- [Configuration](#-configuration)
- [Development](#-development)
- [Testing](#-testing)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 Overview

This is a comprehensive, production-ready Express.js backend template built with TypeScript. It provides a solid foundation for building scalable RESTful APIs with:

- **Base Classes & Interfaces**: Reusable templates for Models, Services, Controllers, and Routes
- **Type Safety**: Full TypeScript support with strict mode
- **Middleware Stack**: Authentication, validation, error handling, rate limiting, and security
- **Docker Support**: Multi-stage builds for production and development environments
- **Best Practices**: Clean architecture, separation of concerns, and maintainable code structure

## ✨ Features

### Core Features

- ✅ **TypeScript** with strict mode and comprehensive type definitions
- ✅ **Base Template System** for rapid entity development
- ✅ **CRUD Operations** out of the box
- ✅ **Pagination** support with configurable limits
- ✅ **Soft Delete** functionality
- ✅ **Clean Architecture** with separation of concerns

### Middleware & Security

- ✅ **Error Handling** with custom error classes
- ✅ **Request Logging** with request ID tracking
- ✅ **Validation** middleware template (Joi/Zod/Yup ready)
- ✅ **Authentication & Authorization** middleware templates
- ✅ **Rate Limiting** to prevent abuse
- ✅ **Security Headers** (XSS protection, CSRF, etc.)
- ✅ **CORS** configuration

### Developer Experience

- ✅ **Hot Reload** in development
- ✅ **ESLint & Prettier** for code quality
- ✅ **Environment Variables** management
- ✅ **Docker** support for development and production
- ✅ **Health Check** endpoints
- ✅ **Comprehensive Logging**

### Infrastructure

- ✅ **Docker Compose** for multi-service orchestration
- ✅ **Redis** integration (optional)
- ✅ **PostgreSQL** template (optional)
- ✅ **MongoDB** template (optional)
- ✅ **Multi-stage Docker builds** for optimized images

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 18.x
- **npm** >= 9.x or **yarn** >= 1.22.x
- **Docker** >= 20.x (optional, for containerized deployment)
- **Docker Compose** >= 2.x (optional)

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd express_template

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Edit .env file with your configuration
nano .env
```

### Development

```bash
# Start development server with hot reload
npm run dev

# Server will be available at http://localhost:3000
```

### Production

```bash
# Build TypeScript
npm run build

# Start production server
npm start
```

### Docker (Recommended)

```bash
# Development
npm run docker:dev

# Production
npm run docker:up:build
```

## 📁 Project Structure

```
express_template/
├── src/
│   ├── interfaces/          # TypeScript interfaces
│   │   ├── Base.ts         # Base interfaces (Base, BaseDTO, BaseResponse)
│   │   └── index.ts
│   ├── models/              # Data models
│   │   ├── BaseModel.ts    # Base model class template
│   │   └── index.ts
│   ├── services/            # Business logic layer
│   │   ├── BaseService.ts  # Base service class template
│   │   └── index.ts
│   ├── controllers/         # Request handlers
│   │   ├── BaseController.ts # Base controller class template
│   │   └── index.ts
│   ├── routes/              # Route definitions
│   │   ├── BaseRoutes.ts   # Base routes class template
│   │   └── index.ts
│   ├── middleware/          # Express middleware
│   │   ├── auth.ts         # Authentication & authorization
│   │   ├── errorHandler.ts # Error handling
│   │   ├── logger.ts       # Request logging
│   │   ├── rateLimiter.ts  # Rate limiting
│   │   ├── security.ts     # Security headers
│   │   ├── validator.ts    # Request validation
│   │   └── index.ts
│   ├── config/              # Configuration files
│   │   ├── app.ts          # Application config
│   │   ├── database.ts     # Database config
│   │   └── index.ts
│   ├── utils/               # Utility functions
│   │   ├── asyncHandler.ts # Async error wrapper
│   │   ├── errors.ts       # Custom error classes
│   │   ├── logger.ts       # Logger utility
│   │   ├── response.ts     # Response helpers
│   │   └── index.ts
│   ├── types/               # TypeScript type definitions
│   │   ├── express.d.ts    # Express type extensions
│   │   └── index.ts
│   ├── constants/           # Application constants
│   │   └── index.ts
│   ├── validators/          # Validation schemas
│   │   └── BaseValidator.ts
│   ├── app.ts              # Express app setup
│   └── server.ts            # Server entry point
├── dist/                    # Compiled JavaScript (generated)
├── Dockerfile               # Production Docker image
├── Dockerfile.dev           # Development Docker image
├── docker-compose.yml       # Production compose file
├── docker-compose.dev.yml   # Development compose file
├── .dockerignore            # Docker ignore patterns
├── .env.example             # Environment variables template
├── .eslintrc.json           # ESLint configuration
├── .prettierrc              # Prettier configuration
├── .gitignore               # Git ignore patterns
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## 🏗️ Architecture

### Base Template System

The template uses a base class pattern that allows you to quickly create new entities:

```
Base Interface → BaseModel → BaseService → BaseController → BaseRoutes
```

**Benefits:**

- Consistent API structure across all entities
- Reduced boilerplate code
- Type-safe operations
- Built-in CRUD operations
- Pagination and filtering support

### Layer Responsibilities

1. **Models**: Data structure and business rules
2. **Services**: Business logic and data manipulation
3. **Controllers**: Request/response handling
4. **Routes**: Route definitions and middleware application
5. **Middleware**: Cross-cutting concerns (auth, validation, logging)

## 📖 Usage Guide

### Creating a New Entity

Let's create a `User` entity as an example:

#### 1. Create the Model

```typescript
// src/models/User.ts
import { BaseModel } from './BaseModel';

export class User extends BaseModel {
  name: string;
  email: string;
  age?: number;

  constructor(data?: Partial<User>) {
    super(data);
    this.name = data?.name || '';
    this.email = data?.email || '';
    this.age = data?.age;
  }
}
```

#### 2. Create the Service

```typescript
// src/services/UserService.ts
import { BaseService } from './BaseService';
import { User } from '../models/User';

export class UserService extends BaseService<User> {
  protected createEntity(data: Partial<User>): User {
    return new User(data);
  }

  // Override filterBySearch for custom search logic
  protected filterBySearch(items: User[], search: string): User[] {
    return items.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );
  }
}
```

#### 3. Create the Controller

```typescript
// src/controllers/UserController.ts
import { BaseController } from './BaseController';
import { UserService } from '../services/UserService';
import { User } from '../models/User';

export class UserController extends BaseController<User> {
  constructor() {
    super(new UserService());
  }

  // Add custom methods if needed
  // customMethod = async (req: Request, res: Response, next: NextFunction) => { ... }
}
```

#### 4. Create the Routes

```typescript
// src/routes/UserRoutes.ts
import { BaseRoutes } from './BaseRoutes';
import { UserController } from '../controllers/UserController';
import { User } from '../models/User';
import { authenticate } from '../middleware/auth';

export class UserRoutes extends BaseRoutes<User> {
  constructor() {
    super(new UserController());
  }

  protected setupRoutes(): void {
    // Apply authentication to all routes
    this.router.use(authenticate);

    // Use base CRUD routes
    super.setupRoutes();

    // Add custom routes
    // this.router.get('/custom', this.controller.customMethod);
  }
}
```

#### 5. Register Routes

```typescript
// src/app.ts
import { UserRoutes } from './routes/UserRoutes';
import { appConfig } from './config/app';

// In initializeRoutes method:
this.app.use(`${appConfig.apiPrefix}/users`, new UserRoutes().getRouter());
```

## 🐳 Docker Deployment

### Development Environment

```bash
# Start development environment
npm run docker:dev

# Or with build
npm run docker:dev:build
```

This will start:

- API server with hot reload (port 3000)
- Redis for caching (port 6379)

### Production Environment

```bash
# Build and start production services
npm run docker:up:build

# Or step by step
docker-compose build
docker-compose up -d
```

### Docker Commands

```bash
# View logs
npm run docker:logs
# Or
docker-compose logs -f api

# Stop services
npm run docker:down
# Or
docker-compose down

# Clean up (remove volumes)
npm run docker:clean
# Or
docker-compose down -v
```

### Environment Variables

Create a `.env` file from `.env.example`:

```bash
cp .env.example .env
```

Configure the following variables:

```env
# Server
PORT=3000
NODE_ENV=production
API_PREFIX=/api/v1

# Security
JWT_SECRET=your-super-secret-key-change-in-production
CORS_ORIGIN=https://yourdomain.com

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX=100

# Database (uncomment when needed)
# DATABASE_URI=postgresql://user:password@db:5432/dbname
```

## 📡 API Documentation

### Base Endpoints

All entities following the Base pattern will have these endpoints:

| Method   | Endpoint                 | Description                         |
| -------- | ------------------------ | ----------------------------------- |
| `GET`    | `/api/v1/{resource}`     | Get all resources (with pagination) |
| `GET`    | `/api/v1/{resource}/:id` | Get resource by ID                  |
| `POST`   | `/api/v1/{resource}`     | Create new resource                 |
| `PUT`    | `/api/v1/{resource}/:id` | Update resource (full)              |
| `PATCH`  | `/api/v1/{resource}/:id` | Update resource (partial)           |
| `DELETE` | `/api/v1/{resource}/:id` | Delete resource (soft delete)       |

### Query Parameters

- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10, max: 100)
- `sortBy`: Field to sort by
- `sortOrder`: `asc` or `desc` (default: `asc`)
- `search`: Search term

### Response Format

**Success Response:**

```json
{
  "success": true,
  "message": "Retrieved successfully",
  "data": { ... },
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

**Paginated Response:**

```json
{
  "success": true,
  "message": "Retrieved successfully",
  "data": [ ... ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  },
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

**Error Response:**

```json
{
  "success": false,
  "message": "Error message",
  "error": "Detailed error (development only)",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### Health Check

```bash
GET /health
```

Response:

```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 123.456
}
```

## ⚙️ Configuration

### Application Config

Edit `src/config/app.ts` or use environment variables:

```typescript
export const appConfig = {
  port: parseInt(process.env.PORT || '3000'),
  env: process.env.NODE_ENV || 'development',
  apiPrefix: process.env.API_PREFIX || '/api/v1',
  // ... more config
};
```

### TypeScript Config

The project uses strict TypeScript settings. Edit `tsconfig.json` to customize:

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2020",
    "module": "commonjs"
    // ... more options
  }
}
```

## 💻 Development

### Available Scripts

| Script               | Description                              |
| -------------------- | ---------------------------------------- |
| `npm run dev`        | Start development server with hot reload |
| `npm run build`      | Build TypeScript to JavaScript           |
| `npm start`          | Start production server                  |
| `npm run lint`       | Run ESLint                               |
| `npm run lint:fix`   | Fix ESLint errors automatically          |
| `npm run format`     | Format code with Prettier                |
| `npm run type-check` | Check TypeScript types without building  |

### Code Quality

The project includes:

- **ESLint**: Code linting with TypeScript support
- **Prettier**: Code formatting
- **TypeScript**: Strict type checking

Run before committing:

```bash
npm run lint
npm run format
npm run type-check
```

### Adding Dependencies

```bash
# Production dependency
npm install <package>

# Development dependency
npm install -D <package>
```

## 🧪 Testing

> **Note**: Testing setup can be added. Common choices:
>
> - Jest + Supertest for API testing
> - Vitest for faster unit tests
> - Mocha + Chai for BDD-style tests

Example test structure (to be implemented):

```
tests/
├── unit/
├── integration/
└── e2e/
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Follow TypeScript best practices
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Keep functions small and focused
- Write self-documenting code

## 📄 License

This project is licensed under the **ISC License**.

Copyright (c) 2025, **LTPPPP**

See the [LICENSE](LICENSE) file for details.

## 👤 Author

**LTPPPP**

## 🙏 Acknowledgments

- [Express.js](https://expressjs.com/) - Web framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Docker](https://www.docker.com/) - Containerization

---

<div align="center">

**Made with ❤️ by LTPPPP using TypeScript and Express.js**

[Report Bug](https://github.com/yourusername/express_template/issues) • [Request Feature](https://github.com/yourusername/express_template/issues)

</div>
