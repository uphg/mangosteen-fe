import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      APP_ENV: env.APP_ENV
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
          target: 'http://116.62.24.71:3000/',
        }
      }
    }
  }
})
