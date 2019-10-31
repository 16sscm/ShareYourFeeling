import Vue from 'vue'
import Router from 'vue-router'
import register from '../pages/register'
import login from '../pages/login'
import index from '../pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
