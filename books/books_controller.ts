import { Body, Controller, Delete, Get, Path, Post, Query, Route, SuccessResponse } from 'tsoa'
import { type Book, type Filter } from '../adapter/assignment-4'
import { BooksService } from './books_service'

@Route('books')
export class BooksController extends Controller {
  @SuccessResponse('200', 'Created or Updated')
  @Post()
  public async createOrUpdateBook (@Body() book: Book): Promise<{ id: string }> {
    const service = new BooksService()
    const id = await service.createOrUpdateBook(book)
    return { id }
  }

  @SuccessResponse('200', 'Deleted')
  @Delete('{id}')
  public async deleteBook (@Path() id: string): Promise<void> {
    const service = new BooksService()
    await service.deleteBook(id)
  }

  @Get()
  public async listBooks (@Query() filters?: string): Promise<Book[]> {
    const service = new BooksService()
    const parsedFilters = (filters != null) ? JSON.parse(filters) : []
    const books = await service.listBooks(parsedFilters as Filter[])
    return books
  }

  @Get('{id}')
  public async getBook (@Path() id: string): Promise<Book> {
    const service = new BooksService()
    const book = await service.getBook(id)
    return book
  }
}
