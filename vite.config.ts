import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@use "@/assets/sass/variables" as * \n@use "@/assets/sass/mixins" as *\n`,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@atoms': fileURLToPath(
        new URL('./src/components/atoms', import.meta.url)
      ),
      '@molecules': fileURLToPath(
        new URL('./src/components/molecules', import.meta.url)
      ),
      '@organisms': fileURLToPath(
        new URL('./src/components/organisms', import.meta.url)
      ),
    },
  },
});
