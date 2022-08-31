import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import authRouter from "@/modules/auth/router";
import daybookRouter from "@/modules/daybook/router";
import isAuthenticatedGuard from '@/modules/auth/router/auth-guard';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/auth',
    ...authRouter
  },
  {
    path: '/daybook',
    beforeEnter: [ isAuthenticatedGuard ],
    ...daybookRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
