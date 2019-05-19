import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

Vue.config.productionTip = false

import http from './http'

//加载到实例属性，在任意页面都可访问到http
Vue.prototype.$http=http



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
