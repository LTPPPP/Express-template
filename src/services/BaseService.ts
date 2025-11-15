import { BaseQuery, BaseResponse, BasePaginatedResponse } from '../interfaces/Base';
import { BaseModel } from '../models/BaseModel';

/**
 * Base Service Class - Template cho tất cả các services
 */
export abstract class BaseService<T extends BaseModel> {
  protected items: Map<string, T> = new Map();

  /**
   * Create new entity
   */
  async create(data: Partial<T>): Promise<BaseResponse<T>> {
    try {
      const entity = this.createEntity(data);
      this.items.set(entity.id, entity);
      
      return {
        success: true,
        message: 'Created successfully',
        data: entity,
        timestamp: new Date(),
      };
    } catch (error: any) {
      return {
        success: false,
        message: 'Failed to create',
        error: error.message,
        timestamp: new Date(),
      };
    }
  }

  /**
   * Get entity by ID
   */
  async getById(id: string): Promise<BaseResponse<T>> {
    try {
      const entity = this.items.get(id);
      
      if (!entity) {
        return {
          success: false,
          message: 'Entity not found',
          timestamp: new Date(),
        };
      }

      if (entity.isDeleted()) {
        return {
          success: false,
          message: 'Entity has been deleted',
          timestamp: new Date(),
        };
      }

      return {
        success: true,
        message: 'Retrieved successfully',
        data: entity,
        timestamp: new Date(),
      };
    } catch (error: any) {
      return {
        success: false,
        message: 'Failed to retrieve',
        error: error.message,
        timestamp: new Date(),
      };
    }
  }

  /**
   * Get all entities with pagination
   */
  async getAll(query?: BaseQuery): Promise<BasePaginatedResponse<T>> {
    try {
      const page = query?.page || 1;
      const limit = query?.limit || 10;
      const skip = (page - 1) * limit;

      let items = Array.from(this.items.values())
        .filter(item => !item.isDeleted());

      // Apply search if provided
      if (query?.search) {
        items = this.filterBySearch(items, query.search);
      }

      // Apply sorting
      if (query?.sortBy) {
        items = this.sortItems(items, query.sortBy, query.sortOrder || 'asc');
      }

      const total = items.length;
      const paginatedItems = items.slice(skip, skip + limit);
      const totalPages = Math.ceil(total / limit);

      return {
        success: true,
        message: 'Retrieved successfully',
        data: paginatedItems,
        pagination: {
          page,
          limit,
          total,
          totalPages,
        },
        timestamp: new Date(),
      };
    } catch (error: any) {
      return {
        success: false,
        message: 'Failed to retrieve',
        error: error.message,
        pagination: {
          page: query?.page || 1,
          limit: query?.limit || 10,
          total: 0,
          totalPages: 0,
        },
        timestamp: new Date(),
      };
    }
  }

  /**
   * Update entity
   */
  async update(id: string, data: Partial<T>): Promise<BaseResponse<T>> {
    try {
      const entity = this.items.get(id);
      
      if (!entity) {
        return {
          success: false,
          message: 'Entity not found',
          timestamp: new Date(),
        };
      }

      if (entity.isDeleted()) {
        return {
          success: false,
          message: 'Cannot update deleted entity',
          timestamp: new Date(),
        };
      }

      Object.assign(entity, data);
      entity.updateTimestamp();
      this.items.set(id, entity);

      return {
        success: true,
        message: 'Updated successfully',
        data: entity,
        timestamp: new Date(),
      };
    } catch (error: any) {
      return {
        success: false,
        message: 'Failed to update',
        error: error.message,
        timestamp: new Date(),
      };
    }
  }

  /**
   * Delete entity (soft delete)
   */
  async delete(id: string): Promise<BaseResponse<void>> {
    try {
      const entity = this.items.get(id);
      
      if (!entity) {
        return {
          success: false,
          message: 'Entity not found',
          timestamp: new Date(),
        };
      }

      entity.softDelete();
      this.items.set(id, entity);

      return {
        success: true,
        message: 'Deleted successfully',
        timestamp: new Date(),
      };
    } catch (error: any) {
      return {
        success: false,
        message: 'Failed to delete',
        error: error.message,
        timestamp: new Date(),
      };
    }
  }

  /**
   * Abstract method to create entity instance
   */
  protected abstract createEntity(data: Partial<T>): T;

  /**
   * Filter items by search term (override in child classes)
   */
  protected filterBySearch(items: T[], _search: string): T[] {
    return items;
  }

  /**
   * Sort items (override in child classes)
   */
  protected sortItems(items: T[], sortBy: string, sortOrder: 'asc' | 'desc'): T[] {
    return items.sort((a, b) => {
      const aValue = (a as any)[sortBy];
      const bValue = (b as any)[sortBy];
      
      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }
}

