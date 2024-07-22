import { beforeEach, afterEach } from 'vitest'
import { createServer } from '../server_launcher'
import { type Server } from 'http'

export interface TestContext {
  address: string
  close: () => void
}

export function setupTestServer (): TestContext {
  let server: Server
  let address: string

  beforeEach((done: () => void) => {
    server = createServer()
    server.on('listening', () => {
      const { port } = server.address() as { port: number }
      address = `http://localhost:${port}`
      done()
    })
  })

  afterEach((done: ((err?: Error | undefined) => void) | undefined) => {
    server.close(done)
  })

  return {
    get address () {
      return address
    },
    close: () => server.close()
  }
}
