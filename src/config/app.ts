import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

/**
 * Application Configuration
 */
export const appConfig = {
  port: parseInt(process.env.PORT || '3000'),
  env: (process.env.NODE_ENV || 'development') as 'development' | 'production' | 'test',
  apiPrefix: process.env.API_PREFIX || '/api/v1',
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-secret-key',
    expiresIn: process.env.JWT_EXPIRES_IN || '24h',
  },
  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 minutes
    maxRequests: parseInt(process.env.RATE_LIMIT_MAX || '100'),
  },
};

