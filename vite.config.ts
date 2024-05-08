import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import {fileURLToPath, URL} from 'url';
// import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
})
