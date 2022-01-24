import { App } from 'vue'
import KSwitch from './src/index.vue'

export default {
  install: (Vue: App<Element>)=>{
    Vue.component('KSwitch', KSwitch)
  }
}
