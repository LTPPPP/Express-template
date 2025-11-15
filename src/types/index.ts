/**
 * Common Type Definitions
 */

export type Environment = 'development' | 'production' | 'test';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type SortOrder = 'asc' | 'desc';

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface SortParams {
  sortBy?: string;
  sortOrder?: SortOrder;
}

export interface SearchParams {
  search?: string;
}
