import { Request, Response, NextFunction } from 'express';
import { BaseResponse } from '../interfaces/Base';
import { HTTP_STATUS, ERROR_MESSAGES } from '../constants';

/**
 * Authentication Middleware Template
 * 
 * Implement authentication logic here (JWT, Session, etc.)
 */
export const authenticate = (
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  try {
    // TODO: Implement authentication logic
    // Example: Verify JWT token
    // const token = req.headers.authorization?.split(' ')[1];
    // if (!token) {
    //   throw new Error('No token provided');
    // }
    // const decoded = verifyToken(token);
    // req.user = decoded;

    // For now, skip authentication (remove in production)
    // req.user = { id: '1', email: 'user@example.com' };

    const response: BaseResponse = {
      success: false,
      message: ERROR_MESSAGES.UNAUTHORIZED,
      timestamp: new Date(),
    };

    res.status(HTTP_STATUS.UNAUTHORIZED).json(response);
    // Uncomment when implementing:
    // next();
  } catch (error: any) {
    const response: BaseResponse = {
      success: false,
      message: ERROR_MESSAGES.UNAUTHORIZED,
      error: error.message,
      timestamp: new Date(),
    };

    res.status(HTTP_STATUS.UNAUTHORIZED).json(response);
  }
};

/**
 * Authorization Middleware Template
 * Check if user has required role/permission
 */
export const authorize = (..._roles: string[]) => {
  return (_req: Request, res: Response, _next: NextFunction): void => {
    try {
      // TODO: Implement authorization logic
      // if (!req.user) {
      //   throw new Error('User not authenticated');
      // }
      // if (!roles.includes(req.user.role)) {
      //   throw new Error('Insufficient permissions');
      // }

      const response: BaseResponse = {
        success: false,
        message: ERROR_MESSAGES.FORBIDDEN,
        timestamp: new Date(),
      };

      res.status(HTTP_STATUS.FORBIDDEN).json(response);
      // Uncomment when implementing:
      // next();
    } catch (error: any) {
      const response: BaseResponse = {
        success: false,
        message: ERROR_MESSAGES.FORBIDDEN,
        error: error.message,
        timestamp: new Date(),
      };

      res.status(HTTP_STATUS.FORBIDDEN).json(response);
    }
  };
};

