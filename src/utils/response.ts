import { Response } from 'express';
import { BaseResponse, BasePaginatedResponse } from '../interfaces/Base';

/**
 * Response Utility
 */
export class ResponseUtil {
  static success<T>(
    res: Response,
    data: T,
    message: string = 'Success',
    statusCode: number = 200
  ): void {
    const response: BaseResponse<T> = {
      success: true,
      message,
      data,
      timestamp: new Date(),
    };
    res.status(statusCode).json(response);
  }

  static error(
    res: Response,
    message: string = 'Error',
    error?: string,
    statusCode: number = 400
  ): void {
    const response: BaseResponse = {
      success: false,
      message,
      error,
      timestamp: new Date(),
    };
    res.status(statusCode).json(response);
  }

  static paginated<T>(
    res: Response,
    data: T[],
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    },
    message: string = 'Success'
  ): void {
    const response: BasePaginatedResponse<T> = {
      success: true,
      message,
      data,
      pagination,
      timestamp: new Date(),
    };
    res.status(200).json(response);
  }
}

