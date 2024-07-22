import { type Book, type Filter } from '../adapter/assignment-3'
import { getBookDatabase } from './database_access'
import { ObjectId } from 'mongodb'

export class BooksService {
  public async createOrUpdateBook (book: Book): Promise<string> {
    const { books: bookCollection } = getBookDatabase()

    if (book.id != null) {
      const id = book.id
      const result = await bookCollection.replaceOne(
        { _id: { $eq: ObjectId.createFromHexString(id) } },
        book
      )
      if (result.modifiedCount === 1) {
        return id
      } else {
        throw new Error('Book not found')
      }
    } else {
      const result = await bookCollection.insertOne(book)
      return result.insertedId.toHexString()
    }
  }

  public async deleteBook (id: string): Promise<void> {
    const { books: bookCollection } = getBookDatabase()
    const objectId = ObjectId.createFromHexString(id)
    const result = await bookCollection.deleteOne({ _id: { $eq: objectId } })
    if (result.deletedCount !== 1) {
      throw new Error('Book not found')
    }
  }

  public async listBooks (filters?: Filter[]): Promise<Book[]> {
    const { books: bookCollection } = getBookDatabase()

    const validFilters = filters?.filter(({ from, to, name, author }) =>
      typeof from === 'number' ||
      typeof to === 'number' ||
      (typeof name === 'string' && name.trim().length > 0) ||
      (typeof author === 'string' && author.trim().length > 0)
    ) ?? []

    const query = validFilters.length > 0
      ? {
          $or: validFilters.map(({ from, to, name, author }) => {
            const filter: { price?: { $gte?: number, $lte?: number }, name?: { $regex: string, $options: string }, author?: { $regex: string, $options: string } } = {}
            if (typeof from === 'number') {
              filter.price = { $gte: from }
            }
            if (typeof to === 'number') {
              filter.price = { ...(filter.price ?? {}), $lte: to }
            }
            if (typeof name === 'string') {
              filter.name = { $regex: name.toLowerCase(), $options: 'ix' }
            }
            if (typeof author === 'string') {
              filter.author = { $regex: author.toLowerCase(), $options: 'ix' }
            }
            return filter
          })
        }
      : {}

    const bookList = await bookCollection.find(query).map(document => {
      const book: Book = {
        id: document._id.toHexString(),
        name: document.name,
        image: document.image,
        price: document.price,
        author: document.author,
        description: document.description
      }
      return book
    }).toArray()

    return bookList
  }

  public async getBook (id: string): Promise<Book> {
    const { books: bookCollection } = getBookDatabase()
    if (id.length !== 24) {
      throw new Error('Invalid ID')
    }
    const result = await bookCollection.findOne({ _id: ObjectId.createFromHexString(id.trim()) })
    if (result === null) {
      throw new Error('Book not found')
    }
    const book: Book = {
      id,
      name: result.name,
      author: result.author,
      description: result.description,
      price: result.price,
      image: result.image
    }
    return book
  }
}
