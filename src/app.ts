import express, { Application } from 'express';
import cors from 'cors';
import { appConfig } from './config/app';
import { logger } from './middleware/logger';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';
import { securityHeaders, requestId } from './middleware/security';
import { rateLimiter } from './middleware/rateLimiter';

/**
 * Express Application Setup
 */
class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  /**
   * Initialize middlewares
   */
  private initializeMiddlewares(): void {
    // Security & Request ID
    this.app.use(securityHeaders);
    this.app.use(requestId);

    // CORS
    this.app.use(cors(appConfig.cors));

    // Body parsers
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    // Rate limiting
    this.app.use(rateLimiter(appConfig.rateLimit.windowMs, appConfig.rateLimit.maxRequests));

    // Logger
    this.app.use(logger);
  }

  /**
   * Initialize routes
   */
  private initializeRoutes(): void {
    // Health check route
    this.app.get('/health', (_req, res) => {
      res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
      });
    });

    // API routes
    // Example: this.app.use(`${appConfig.apiPrefix}/users`, userRoutes);
  }

  /**
   * Initialize error handling
   */
  private initializeErrorHandling(): void {
    this.app.use(notFoundHandler);
    this.app.use(errorHandler);
  }

  /**
   * Start server
   */
  public listen(): void {
    this.app.listen(appConfig.port, () => {
      console.log(`🚀 Server is running on port ${appConfig.port}`);
      console.log(`📝 Environment: ${appConfig.env}`);
      console.log(`🌐 API Prefix: ${appConfig.apiPrefix}`);
    });
  }
}

export default App;

