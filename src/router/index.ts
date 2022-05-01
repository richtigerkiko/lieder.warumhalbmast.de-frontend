import { createRouter, createWebHistory } from 'vue-router'
import SongOverview from '../views/SongOverview.vue'
import HomeView from '../views/SongOverview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SongOverview
    },
    {
      path: '/song',
      name: 'song',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Song.vue')
    }
  ]
})

export default router
