import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

// 将markdown文档转换成html，vue组件的形式
const markdownPlugin = require("vite-plugin-markdown");


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    markdownPlugin.plugin({
      mode: ['html', 'vue']
    })
  ],
  resolve: {
    alias:{
      "@": resolve(__dirname, 'src')
    }
  }
})
