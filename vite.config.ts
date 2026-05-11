import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// The Firebase Messaging service worker is a static file at /firebase-messaging-sw.js
// and cannot read Vite import.meta.env. We emit a sibling /firebase-messaging-sw-config.js
// at build time that assigns the config to globalThis so the SW can pick it up.
function firebaseMessagingSwConfigPlugin(): Plugin {
  return {
    name: 'firebase-messaging-sw-config',
    generateBundle() {
      const cfg = {
        apiKey: process.env.VITE_FIREBASE_API_KEY,
        authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.VITE_FIREBASE_APP_ID,
      };
      this.emitFile({
        type: 'asset',
        fileName: 'firebase-messaging-sw-config.js',
        source: `self.__SADHANA_FIREBASE_CONFIG__ = ${JSON.stringify(cfg)};\n`,
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          astronomy: ['astronomy-engine'],
        },
      },
    },
  },
  plugins: [react(), firebaseMessagingSwConfigPlugin()],
});
