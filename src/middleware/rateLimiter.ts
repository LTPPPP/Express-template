import { Request, Response, NextFunction } from 'express';
import { BaseResponse } from '../interfaces/Base';
import { HTTP_STATUS } from '../constants';

/**
 * Simple Rate Limiter Middleware Template
 * 
 * Note: For production, consider using express-rate-limit or redis-based rate limiting
 */
interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

/**
 * Rate Limiter Middleware
 */
export const rateLimiter = (
  windowMs: number = 15 * 60 * 1000, // 15 minutes
  maxRequests: number = 100
) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const key = req.ip || req.socket.remoteAddress || 'unknown';
    const now = Date.now();

    // Clean up expired entries
    Object.keys(store).forEach((k) => {
      if (store[k].resetTime < now) {
        delete store[k];
      }
    });

    // Check or create entry
    if (!store[key] || store[key].resetTime < now) {
      store[key] = {
        count: 1,
        resetTime: now + windowMs,
      };
      return next();
    }

    // Check limit
    if (store[key].count >= maxRequests) {
      const response: BaseResponse = {
        success: false,
        message: 'Too many requests, please try again later',
        timestamp: new Date(),
      };

      res.status(HTTP_STATUS.BAD_REQUEST).json(response);
      return;
    }

    // Increment count
    store[key].count++;
    next();
  };
};

