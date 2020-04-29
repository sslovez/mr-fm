import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './utils/axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios //将axios挂载到vue的原型上 组件继承实例 所以Vue原型上的属性 组件也有

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
