import { Request, Response, NextFunction } from 'express';
import { BaseResponse, BasePaginatedResponse, BaseQuery } from '../interfaces/Base';
import { BaseService } from '../services/BaseService';
import { BaseModel } from '../models/BaseModel';

/**
 * Base Controller Class - Template cho tất cả các controllers
 */
export abstract class BaseController<T extends BaseModel> {
  protected service: BaseService<T>;

  constructor(service: BaseService<T>) {
    this.service = service;
  }

  /**
   * Create entity handler
   */
  create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const response: BaseResponse<T> = await this.service.create(req.body);
      
      if (response.success) {
        res.status(201).json(response);
      } else {
        res.status(400).json(response);
      }
    } catch (error) {
      next(error);
    }
  };

  /**
   * Get entity by ID handler
   */
  getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const response: BaseResponse<T> = await this.service.getById(id);
      
      if (response.success) {
        res.status(200).json(response);
      } else {
        res.status(404).json(response);
      }
    } catch (error) {
      next(error);
    }
  };

  /**
   * Get all entities handler
   */
  getAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query: BaseQuery = {
        page: req.query.page ? parseInt(req.query.page as string) : 1,
        limit: req.query.limit ? parseInt(req.query.limit as string) : 10,
        sortBy: req.query.sortBy as string,
        sortOrder: req.query.sortOrder as 'asc' | 'desc',
        search: req.query.search as string,
      };

      const response: BasePaginatedResponse<T> = await this.service.getAll(query);
      
      if (response.success) {
        res.status(200).json(response);
      } else {
        res.status(400).json(response);
      }
    } catch (error) {
      next(error);
    }
  };

  /**
   * Update entity handler
   */
  update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const response: BaseResponse<T> = await this.service.update(id, req.body);
      
      if (response.success) {
        res.status(200).json(response);
      } else {
        res.status(400).json(response);
      }
    } catch (error) {
      next(error);
    }
  };

  /**
   * Delete entity handler
   */
  delete = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const response: BaseResponse<void> = await this.service.delete(id);
      
      if (response.success) {
        res.status(200).json(response);
      } else {
        res.status(400).json(response);
      }
    } catch (error) {
      next(error);
    }
  };
}

