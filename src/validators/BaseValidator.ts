/**
 * Base Validator - Template cho validation schemas
 * 
 * Note: Có thể sử dụng Joi, Zod, Yup, hoặc class-validator
 * Ví dụ này sử dụng cấu trúc generic, bạn có thể thay thế bằng library validation cụ thể
 */

export interface ValidationRule {
  required?: boolean;
  type?: 'string' | 'number' | 'boolean' | 'object' | 'array' | 'date';
  min?: number;
  max?: number;
  pattern?: RegExp;
  custom?: (value: any) => boolean;
  message?: string;
}

export interface ValidationSchema {
  [key: string]: ValidationRule | ValidationSchema;
}

/**
 * Base Validator Class
 */
export abstract class BaseValidator {
  /**
   * Validate data against schema
   */
  abstract validate(data: any, schema: ValidationSchema): {
    isValid: boolean;
    errors: string[];
  };

  /**
   * Create validation schema for common fields
   */
  static createBaseSchema(): ValidationSchema {
    return {
      id: {
        type: 'string',
        required: false,
      },
      createdAt: {
        type: 'date',
        required: false,
      },
      updatedAt: {
        type: 'date',
        required: false,
      },
    };
  }

  /**
   * Create pagination query schema
   */
  static createPaginationSchema(): ValidationSchema {
    return {
      page: {
        type: 'number',
        required: false,
        min: 1,
      },
      limit: {
        type: 'number',
        required: false,
        min: 1,
        max: 100,
      },
      sortBy: {
        type: 'string',
        required: false,
      },
      sortOrder: {
        type: 'string',
        required: false,
        custom: (value: any) => value === 'asc' || value === 'desc',
      },
      search: {
        type: 'string',
        required: false,
      },
    };
  }
}

