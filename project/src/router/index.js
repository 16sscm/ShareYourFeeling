import Vue from 'vue'
import Router from 'vue-router'
import register from '../pages/register'
import login from '../pages/login'
import index from '../pages/index'
import details from '../pages/details'
import post from '../pages/post'
import self from '../pages/self'
import messagepage from '../pages/messagepage'

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
    },
    {
      path: '/detail',
      name: 'detail',
      component: details
    },
    {
      path: '/post',
      name: 'post',
      component: post
    },
    {
      path: '/self',
      name: 'self',
      component: self
    },
    {
      path: '/message',
      name: 'message',
      component: messagepage
    }
  ]
})
