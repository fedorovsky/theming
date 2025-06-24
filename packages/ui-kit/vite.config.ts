import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import wyw from '@wyw-in-js/vite';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import path from 'path';

export default defineConfig({
  plugins: [
    libInjectCss(),
    dts(),
    wyw({
      include: ['src/**/*.{ts,tsx}'],
      babelOptions: {
        presets: [
          '@babel/preset-typescript',
          ['@babel/preset-react', { runtime: 'automatic' }],
        ],
      },
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      fileName: (format) => `index.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
    target: 'es2020',
  },
});
