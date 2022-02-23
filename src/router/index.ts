import { createRouter, createWebHistory } from 'vue-router';
import { beforeEachHook } from './beforeEach';
import { AccessBitmask } from '../types/AccessControl';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "views_Home" */ '../views/Home.vue'),
      meta: {
        accessMask: AccessBitmask.LoggedIn,
        pageTitle: 'My Todo List',
      },
    },
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "views_Login" */ '../views/Login.vue'),
      meta: {
        accessMask: AccessBitmask.LoggedOut,
        pageTitle: 'Login',
      },
    },
  ],
});

router.beforeEach(beforeEachHook);

export default router;
