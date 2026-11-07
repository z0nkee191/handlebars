import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { products } from './data.js';

export default defineConfig({
  plugins: [
    handlebars({
      context: {
        products,
      },
      partialDirectory: resolve(import.meta.dirname, 'src/templates'),
    }),
  ],
});
