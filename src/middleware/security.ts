import { Request, Response, NextFunction } from 'express';

/**
 * Security Headers Middleware
 * 
 * Note: For production, consider using helmet package
 */
export const securityHeaders = (
  _req: Request,
  res: Response,
  next: NextFunction
): void => {
  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Remove X-Powered-By header
  res.removeHeader('X-Powered-By');

  next();
};

/**
 * Request ID Middleware
 * Add unique request ID to each request
 */
export const requestId = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const requestId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  req.requestId = requestId;
  res.setHeader('X-Request-ID', requestId);
  next();
};

