import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv  } from 'vite'

import vue from '@vitejs/plugin-vue'

const env = loadEnv('', process.cwd(), '')

const apiUrl = env?.VITE_APP_API_BASE_URL || '/api';
const apiProtocol = env?.VITE_APP_API_PROTOCOL || 'http';
const apiService = env?.VITE_APP_API_HOST || 'localhost';
const apiPort = env?.VITE_APP_API_SERVICE_PORT || '80';


export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  logLevel: 'info',
  server: {
    proxy: {
      [apiUrl]: {
        target: `${apiProtocol}://${apiService}:${apiPort}/${apiUrl}`,
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      },
    },
    port: 8080
  },
  build: {
    chunkSizeWarningLimit: 1024,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo: any) => {
          let extType = assetInfo.name?.split('.').at(1);
          if (extType) {
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = 'img';
            } else if (/tiff|bmp|ttf|woff|woff2/i.test(extType)) {
              extType = 'fonts';
            }
          }
          return `${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
      },
    },
  },
})
