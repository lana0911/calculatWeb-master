import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// icomoon
import '../src/assets/fonts/icomoon/style.css'
import '../src/assets/stylesheets/style.sass'
import '@element-plus/icons'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIconModules from '@element-plus/icons'
import { transElIconName } from './utils/utils' 



import { Expand } from '@element-plus/icons'
// import * as from '@element-plus/icons'
const app = createApp(App)

// 统一注册el-icon图标
for(let iconName in ElIconModules){
    app.component(transElIconName(iconName),ElIconModules[iconName])
}
app
    .component('expand',Expand)
    .use(store)
    .use(router)
    app.use(ElementPlus)
    .mount('#app')
