/**
 * Base Interface - Template cho tất cả các entities/models
 */
export interface Base {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}

/**
 * Base DTO Interface - Template cho Data Transfer Objects
 */
export interface BaseDTO {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * Base Response Interface - Template cho API responses
 */
export interface BaseResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  timestamp: Date;
}

/**
 * Base Pagination Interface
 */
export interface BasePagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

/**
 * Base Paginated Response
 */
export interface BasePaginatedResponse<T = any> extends BaseResponse<T[]> {
  pagination: BasePagination;
}

/**
 * Base Query Interface
 */
export interface BaseQuery {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  search?: string;
}

