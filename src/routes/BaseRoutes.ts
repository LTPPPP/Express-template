import { Router } from 'express';
import { BaseController } from '../controllers/BaseController';
import { BaseModel } from '../models/BaseModel';

/**
 * Base Routes Class - Template cho tất cả các routes
 */
export abstract class BaseRoutes<T extends BaseModel> {
  protected router: Router;
  protected controller: BaseController<T>;

  constructor(controller: BaseController<T>) {
    this.router = Router();
    this.controller = controller;
    this.setupRoutes();
  }

  /**
   * Setup routes - override in child classes
   */
  protected setupRoutes(): void {
    // CRUD routes
    this.router.post('/', this.controller.create);
    this.router.get('/', this.controller.getAll);
    this.router.get('/:id', this.controller.getById);
    this.router.put('/:id', this.controller.update);
    this.router.patch('/:id', this.controller.update);
    this.router.delete('/:id', this.controller.delete);
  }

  /**
   * Get router instance
   */
  getRouter(): Router {
    return this.router;
  }
}

