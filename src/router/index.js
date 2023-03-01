import { createRouter, createWebHistory } from 'vue-router'

import login from '../views/login/Login.vue'
import User from '../views/user/User.vue'
import Manager from '../views/manager/Manager.vue'


const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/manager',
    name: 'manage',
    component: Manager
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
