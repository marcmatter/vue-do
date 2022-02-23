import { createRouter, createWebHistory } from 'vue-router';
import { beforeEachHook } from './beforeEach';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: {
        loggedInOnly: true,
      },
    },
    {
      path: '/home',
      component: () => import(/* webpackChunkName: "views_Home" */ '../views/Home.vue'),
      meta: {
        loggedInOnly: true,
        pageTitle: 'Home',
      },
    },
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "views_Login" */ '../views/Login.vue'),
      meta: {
        loggedOutOnly: true,
        pageTitle: 'Login',
        showFooter: true,
      },
    },
  ],
});

router.beforeEach(beforeEachHook);

export default router;
