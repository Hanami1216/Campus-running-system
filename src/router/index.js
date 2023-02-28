import { createRouter, createWebHistory } from 'vue-router'

import login from '../views/login/Login.vue'
import main from '../views/Home.vue'
import root from '../views/root/Root.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/root',
    name: 'root',
    component: root
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
