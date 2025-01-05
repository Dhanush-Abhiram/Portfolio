import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio/',  // This ensures correct asset linking for GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist',  // This is where the build will be placed
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});
