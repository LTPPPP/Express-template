import { Base } from '../interfaces/Base';

/**
 * Base Model Class - Template cho tất cả các models
 */
export abstract class BaseModel implements Base {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;

  constructor(data?: Partial<Base>) {
    this.id = data?.id || this.generateId();
    this.createdAt = data?.createdAt || new Date();
    this.updatedAt = data?.updatedAt || new Date();
    this.deletedAt = data?.deletedAt || null;
  }

  /**
   * Generate unique ID
   */
  protected generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Update timestamp
   */
  updateTimestamp(): void {
    this.updatedAt = new Date();
  }

  /**
   * Soft delete
   */
  softDelete(): void {
    this.deletedAt = new Date();
    this.updateTimestamp();
  }

  /**
   * Restore from soft delete
   */
  restore(): void {
    this.deletedAt = null;
    this.updateTimestamp();
  }

  /**
   * Check if entity is deleted
   */
  isDeleted(): boolean {
    return this.deletedAt !== null && this.deletedAt !== undefined;
  }

  /**
   * Convert to JSON
   */
  toJSON(): Base {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }
}

