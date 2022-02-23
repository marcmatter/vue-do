import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import svgPlugin from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ...(process.env.NODE_ENV === 'production'
      ? [
          eslintPlugin({
            cache: false,
          }),
        ]
      : []),
    svgPlugin(),
  ],
});
