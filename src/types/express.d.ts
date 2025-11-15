import { BaseResponse } from '../interfaces/Base';

/**
 * Express Request/Response Type Extensions
 */
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email?: string;
        role?: string;
        [key: string]: any;
      };
      requestId?: string;
    }

    interface Response {
      success: (data?: any, message?: string, statusCode?: number) => void;
      error: (message?: string, error?: string, statusCode?: number) => void;
      paginated: (
        data: any[],
        pagination: {
          page: number;
          limit: number;
          total: number;
          totalPages: number;
        },
        message?: string
      ) => void;
    }
  }
}

export {};

