import { resolve as pathResolve } from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const resolve = (path: string) => pathResolve(__dirname, path)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': resolve('src'),
    },
  },
})
