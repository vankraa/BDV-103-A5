// tests/placeholderRoute.spec.ts
import { setupTestServer } from './test_helper'
import { DefaultApi, Configuration } from '../client'
import { describe, it, expect } from 'vitest'

describe('Book API', () => {
  const server = setupTestServer()
  const client = new DefaultApi(new Configuration({ basePath: server.address }))

  it('should return book details', async () => {
    const bookId = '12345'
    const response = await client.getBook({ id: bookId })
    expect(response.id).toBe(bookId)
    expect(response.name).toBeDefined()
    expect(response.author).toBeDefined()
  })
})
