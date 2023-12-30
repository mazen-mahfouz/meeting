import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/HomePage.vue'
import Login from './views/LoginPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'login',
    },
    {
      path: '/login',
      component: Login,
    },

    {
      path: '/home',
      component: Home
    }
  ]
})
