import { defineConfig } from 'vite'
import path from 'path'

import react from '@vitejs/plugin-react'
import tsConfigPath from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'
import pluginRewriteAll from 'vite-plugin-rewrite-all'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPath(), svgr(), pluginRewriteAll(), checker({ typescript: true })],
  css: {
    preprocessorOptions: {
      scss: {
        importer(...args) {
          return args[0].startsWith('@')
            ? {
                file: `${path.resolve(__dirname, './src/' + args[0].substring(1))}`,
              }
            : args
        },
      },
    },
  },
})
