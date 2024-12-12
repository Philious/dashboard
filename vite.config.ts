import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';

import path from 'path';
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `
          @use '@/styles/scss_variables' as *;
          @use '@/styles/mixins' as *;
        `
      }
    }
  },
  plugins: [
    vue(),
  ],
})
