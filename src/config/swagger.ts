import swaggerJsdoc from 'swagger-jsdoc';
import { appConfig } from './app';

/**
 * Swagger configuration options
 */
const swaggerOptions: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express Template API',
      version: '1.0.0',
      description: 'API documentation for Express Template with TypeScript',
      contact: {
        name: 'API Support',
        email: 'support@example.com',
      },
      license: {
        name: 'ISC',
      },
    },
    servers: [
      {
        url: `http://localhost:${appConfig.port}`,
        description: 'Development server',
      },
      {
        url: `http://localhost:${appConfig.port}${appConfig.apiPrefix}`,
        description: 'Development server with API prefix',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    tags: [
      {
        name: 'Health',
        description: 'Health check endpoints',
      },
    ],
  },
  apis: ['./src/routes/*.ts', './src/app.ts'], // Paths to files containing OpenAPI definitions
};

/**
 * Swagger specification
 */
export const swaggerSpec = swaggerJsdoc(swaggerOptions);
