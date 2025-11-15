import { Request, Response, NextFunction } from 'express';
import { BaseResponse } from '../interfaces/Base';
import { HTTP_STATUS, ERROR_MESSAGES } from '../constants';

/**
 * Validation Middleware Factory
 * 
 * Note: This is a generic validator. You can integrate with:
 * - Joi: const { error } = schema.validate(req.body)
 * - Zod: schema.parse(req.body)
 * - Yup: await schema.validate(req.body)
 * - class-validator: validate(req.body)
 */
export const validate = (_schema: any) => {
  return (_req: Request, res: Response, next: NextFunction): void => {
    try {
      // Generic validation - replace with your validation library
      // Example for Joi:
      // const { error } = schema.validate(req.body, {
      //   abortEarly: false,
      //   stripUnknown: true,
      // });

      // Example for Zod:
      // schema.parse(req.body);

      // For now, just pass through (implement with your chosen library)
      next();
    } catch (error: any) {
      const response: BaseResponse = {
        success: false,
        message: ERROR_MESSAGES.VALIDATION_ERROR,
        error: error.details?.map((detail: any) => detail.message).join(', ') || error.message,
        timestamp: new Date(),
      };

      res.status(HTTP_STATUS.BAD_REQUEST).json(response);
    }
  };
};

