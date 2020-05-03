import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './utils/axios'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$axios = axios //将axios挂载到vue的原型上 组件继承实例 所以Vue原型上的属性 组件也有

//图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/lazy_load.png',
  loading: '/lazy_load.png',
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
