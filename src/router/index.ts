import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/Signin.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/Create.vue')
    }
  ]
})

export default router
