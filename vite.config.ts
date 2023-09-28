import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import AutoImport from 'unplugin-auto-import/vite'

const API_URL = 'http://116.62.24.71:3000/'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  // env.NODE_ENV === 'development'
  return {
    define: {
      API_URL: `'http://116.62.24.71:3000/'`
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('echarts')) {
              return 'echarts';
            }
            // 生产环境已 tree shaking
            // if (id.includes('mock') || id.includes('faker')) {
            //   return 'mock';
            // }
            if (id.includes('vant')) {
              return 'vant';
            }
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      UnoCSS(),
      Components({
        resolvers: [VantResolver()],
      }),
      AutoImport({
        dts: true,
        imports: ['vue', 'vue-router'],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      proxy: {
        '/api/v1': {
          target: API_URL,
        }
      }
    }
  }
})
