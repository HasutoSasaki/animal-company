import { createRouter, createWebHistory } from 'vue-router'
import indexView from '../views/index.vue'
import aboutView from '../views/about/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: indexView,
      meta: { title: 'どうぶつパワーシステム' }
    },
    {
      path: '/about',
      name: 'about',
      component: aboutView,
      meta: { title: 'aboutページ' }
    },


  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'デフォルトのタイトル'
  next()
})

export default router
