import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/prisma-color-website/', // Ligne cruciale pour corriger l'erreur 404 sur GitHub Pages
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});