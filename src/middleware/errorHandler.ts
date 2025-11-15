import { Request, Response, NextFunction } from 'express';
import { BaseResponse } from '../interfaces/Base';
import { HTTP_STATUS, ERROR_MESSAGES } from '../constants';

/**
 * Error Handler Middleware
 */
export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const statusCode = (err as any).statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
  
  const response: BaseResponse = {
    success: false,
    message: err.message || ERROR_MESSAGES.INTERNAL_ERROR,
    error: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    timestamp: new Date(),
  };

  res.status(statusCode).json(response);
};

/**
 * Not Found Handler Middleware
 */
export const notFoundHandler = (
  req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const response: BaseResponse = {
    success: false,
    message: `Route ${req.method} ${req.path} not found`,
    timestamp: new Date(),
  };

  res.status(HTTP_STATUS.NOT_FOUND).json(response);
};

