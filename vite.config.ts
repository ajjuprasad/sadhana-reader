import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/sadhana-reader/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  plugins: [react()],
});
