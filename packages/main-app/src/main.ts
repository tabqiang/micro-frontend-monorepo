import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Button, message, Layout, Menu } from 'ant-design-vue'

import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Button)
app.use(Layout)
app.use(Menu)
app.config.globalProperties.$message = message

app.mount('#app')

registerMicroApps([
  {
    name: 'react-app',
    entry: '//localhost:3000',
    container: '#subapp-viewport',
    activeRule: '/react-app'
  }
])

start()
