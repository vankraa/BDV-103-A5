import { defineConfig } from 'vitest/config'
import generateOpenApi from './vitest-openapi-plugin'

export default defineConfig({
  plugins: [
    generateOpenApi
  ],
  server: {
    watch: {
      ignored: ['client/**']
    }
  },
  test: {
    includeSource: ['src/**/*.{js,ts}'],
    setupFiles: ['./database_test_setup.ts'],
    testTimeout: 20000
  }
})
