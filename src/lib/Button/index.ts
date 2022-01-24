// 提供Button的安装方法

import { App } from 'vue'
import KButton from './src/index.vue'



export default {
  install: (app: App<Element>)=>{
    app.component('k-button', KButton)
  }
}