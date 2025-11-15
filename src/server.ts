import dotenv from 'dotenv';
import App from './app';
import { Logger } from './utils/logger';

// Load environment variables
dotenv.config();

/**
 * Server Entry Point
 */
const startServer = (): void => {
  try {
    const app = new App();
    app.listen();
  } catch (error: any) {
    Logger.error('Failed to start server:', error);
    process.exit(1);
  }
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason: any, promise: Promise<any>) => {
  Logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error: Error) => {
  Logger.error('Uncaught Exception:', error);
  process.exit(1);
});

// Start server
startServer();

