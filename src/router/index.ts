import { createRouter, createWebHistory } from 'vue-router'
import indexView from '../views/index.vue'
import aboutView from '../views/about/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: indexView
    },
    {
      path: '/about',
      name: 'about',
      component: aboutView
    }

  ]
})

export default router
