import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import store from './store'
import ElementPlus from "element-plus"
import ko from "element-plus/es/locale/lang/ko"

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import "vue3-dropdown-navbar/preflight.css"; // <-- Add this

import './registerServiceWorker'
loadFonts()

createApp(App)
  .use(store)
  .use(ElementPlus, {locale: ko})
  .use(vuetify)
  .use(router)
  // .use(BootstrapVue)
  // .use(IconsPlugin)

  .mount('#app')
  
