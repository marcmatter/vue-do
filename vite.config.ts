import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoImport from 'unplugin-auto-import';
import components from 'unplugin-vue-components';
import eslintPlugin from 'vite-plugin-eslint';
import svgPlugin from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    autoImport.vite({
      imports: ['vue'],
      eslintrc: {
        enabled: true,
      },
    }),
    components.vite(),
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
