import { resolve } from 'path'
import { defineConfig, transformWithEsbuild } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      name: 'treat-js-files-as-jsx',
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) return null

        // Use the exposed transform from vite, instead of directly
        // transforming with esbuild
        return transformWithEsbuild(code, id, {
          loader: 'jsx',
          jsx: 'automatic',
        })
      },
    },
    react(),
  ],

  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },

  build: {
    lib: {
      entry: {
        PinBoard: resolve(__dirname, 'src/components/PinBoard/index.js'),
        Note: resolve(__dirname, 'src/components/Note/index.js'),
      },
      name: '[NotesPinBoard]',
      fileName: (format) => `notes-pinboard.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'dompurify'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          dompurify: 'DOMPurify',
        },
      },
    },
  },
})
