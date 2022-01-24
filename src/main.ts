import { createApp } from 'vue'
import App from './App.vue'

// 导入全局样式
import './styles/global.scss'

// 导入路由配置
import router from './router/router'

// 导入button
import { KButton, KSwitch } from './lib/index'

// 导入打包后的组件


const app = createApp(App)

app.use(router)
app.use(KSwitch)

app.use(KButton)




app.mount('#app')
