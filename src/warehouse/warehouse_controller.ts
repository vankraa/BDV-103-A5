// src/controllers/warehouse_controller.ts
import { Controller, Route, Get, Post, Put, Delete, Body, Path } from 'tsoa'
import { WarehouseService } from './warehouse_service'
import { BookID, OrderId, ShelfId } from '../../adapter/assignment-4'

@Route('warehouses')
export class WarehouseController extends Controller {
  private readonly warehouseService: WarehouseService

  constructor () {
    super()
    this.warehouseService = new WarehouseService()
  }

  @Put('/book')
  public async placeBookOnShelf (@Body() body: { bookId: BookID, shelf: ShelfId, count: number }): Promise<void> {
    const { bookId, shelf, count } = body
    await this.warehouseService.placeBookOnShelf(bookId, shelf, count)
  }

  @Get('/book/{bookId}/shelf/{shelf}')
  public async getCopiesOnShelf (@Path() bookId: BookID, @Path() shelf: ShelfId): Promise<number> {
    return await this.warehouseService.getCopiesOnShelf(bookId, shelf)
  }

  @Get('/book/{bookId}')
  public async getCopies (@Path() bookId: BookID): Promise<Record<ShelfId, number>> {
    return await this.warehouseService.getCopies(bookId)
  }

  @Get('/order/{orderId}')
  public async getOrder (@Path() orderId: OrderId): Promise<Record<BookID, number> | false> {
    return await this.warehouseService.getOrder(orderId)
  }

  @Post('/order')
  public async placeOrder (@Body() body: Record<BookID, number>): Promise<OrderId> {
    return await this.warehouseService.placeOrder(body)
  }

  @Get('/orders')
  public async listOrders (): Promise<Array<{ orderId: OrderId, books: Record<BookID, number> }>> {
    return await this.warehouseService.listOrders()
  }

  @Delete('/order/{orderId}')
  public async removeOrder (@Path() orderId: OrderId): Promise<void> {
    await this.warehouseService.removeOrder(orderId)
  }
}
