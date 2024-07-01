// src/services/warehouse_service.ts
import { InMemoryWarehouse, type WarehouseData } from './warehouse_data'
import { type BookID, type OrderId, type ShelfId } from '../../adapter/assignment-4'

export class WarehouseService {
  private readonly warehouse: WarehouseData

  constructor () {
    this.warehouse = new InMemoryWarehouse()
  }

  async placeBookOnShelf (bookId: BookID, shelf: ShelfId, count: number): Promise<void> {
    await this.warehouse.placeBookOnShelf(bookId, shelf, count)
  }

  async getCopiesOnShelf (bookId: BookID, shelf: ShelfId): Promise<number> {
    return await this.warehouse.getCopiesOnShelf(bookId, shelf)
  }

  async getCopies (bookId: BookID): Promise<Record<ShelfId, number>> {
    return await this.warehouse.getCopies(bookId)
  }

  async getOrder (orderId: OrderId): Promise<Record<BookID, number> | false> {
    return await this.warehouse.getOrder(orderId)
  }

  async placeOrder (books: Record<BookID, number>): Promise<OrderId> {
    return await this.warehouse.placeOrder(books)
  }

  async listOrders (): Promise<Array<{ orderId: OrderId, books: Record<BookID, number> }>> {
    return await this.warehouse.listOrders()
  }

  async removeOrder (orderId: OrderId): Promise<void> {
    await this.warehouse.removeOrder(orderId)
  }
}
