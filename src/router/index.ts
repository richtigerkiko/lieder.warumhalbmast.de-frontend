import { createRouter, createWebHistory } from 'vue-router'
import SongOverview from '../views/SongOverview.vue'
import { Auth } from "aws-amplify";

import {userStore} from '@/stores/userStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SongOverview
    },
    {
      path: '/song/:id',
      name: 'song',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Song.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Account.vue')
    }
  ]
})

router.beforeEach( async (to, from) => {
  userStore().getLoginState()
})

export default router
