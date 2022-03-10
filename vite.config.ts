import { defineConfig } from 'vite';
import vuePlugin from '@vitejs/plugin-vue';
import autoImportPlugin from 'unplugin-auto-import/vite';
import componentsPlugin from 'unplugin-vue-components/vite';
import eslintPlugin from 'vite-plugin-eslint';
import checkerPlugin from 'vite-plugin-checker';
import svgPlugin from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vuePlugin(),
    autoImportPlugin({
      imports: ['vue'],
      eslintrc: {
        enabled: true,
      },
    }),
    componentsPlugin(),
    ...(process.env.NODE_ENV === 'production'
      ? [
          eslintPlugin({
            cache: false,
          }),
        ]
      : []),
    svgPlugin(),
    checkerPlugin({
      typescript: true,
      vueTsc: true,
    }),
  ],
});
