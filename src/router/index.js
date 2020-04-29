import Vue from 'vue'
import VueRouter from 'vue-router'

import Classify from '../views/Classify'
import Login from '../views/Login'
import Music from '../views/Music'
import My from '../views/My'
import Recommend from '../views/Recommend'
import Register from '../views/Register'
import Search from '../views/Search'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      name: 'music',
      path: '/Music',
      component: Music
    },
    {
      name: 'recommend',
      path: '/Recommend',
      component: Recommend
    },
    {
      name: 'classify',
      path: '/Classify',
      component: Classify
    },
    {
      name: 'my',
      path: '/My',
      component: My
    },
    {
      name: 'login',
      path: '/Login',
      component: Login
    },
    {
      name: 'register',
      path: '/Register',
      component: Register
    }, {
      name: 'search',
      path: '/Search',
      component: Search
    }
  ]
})

export default router
