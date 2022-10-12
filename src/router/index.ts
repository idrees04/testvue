import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LifeCycleHook from "../views/LifeCycleHook.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/LifeCycleHook',
      name: 'LifeCycleHook',
      // route level code-splitting
      // this generates a separate chunk (LifeCycleHook.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
     // component: () => import('../views/LifeCycleHook.vue')
        component: LifeCycleHook,

    }
  ]
})

export default router