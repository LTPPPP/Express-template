/**
 * Application Constants
 */

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const ERROR_MESSAGES = {
  NOT_FOUND: 'Resource not found',
  UNAUTHORIZED: 'Unauthorized access',
  FORBIDDEN: 'Forbidden access',
  VALIDATION_ERROR: 'Validation error',
  INTERNAL_ERROR: 'Internal server error',
  BAD_REQUEST: 'Bad request',
} as const;

export const SUCCESS_MESSAGES = {
  CREATED: 'Created successfully',
  UPDATED: 'Updated successfully',
  DELETED: 'Deleted successfully',
  RETRIEVED: 'Retrieved successfully',
} as const;

export const DEFAULT_PAGINATION = {
  PAGE: 1,
  LIMIT: 10,
  MAX_LIMIT: 100,
} as const;

