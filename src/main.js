import { createApp } from 'vue'

import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'


import App from './App.vue'


const app = createApp(App)
app.use(router)

app.use(ElementPlus)

app.mount('#app')

app.use(ElementPlus, {
    locale: zhCn,
  })



for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
