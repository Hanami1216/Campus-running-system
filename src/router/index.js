import { createRouter, createWebHistory } from 'vue-router'

import login from '../views/login/Login.vue'
import main from '../views/Main.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/main',
    name: 'main',
    component: main
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
