import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(),
      tailwindcss(),
      viteStaticCopy({
        targets: [{ src: 'image', dest: '.' }],
      }),
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    base: process.env.BASE_URL || '/',
    build: {
      rollupOptions: {
        output: {
          // Split large libraries into separate, long-cacheable chunks.
          manualChunks: {
            react: ['react', 'react-dom', 'react-dom/client', 'react-router-dom'],
            motion: ['motion/react'],
            i18n: ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
          },
        },
      },
    },
  };
});
