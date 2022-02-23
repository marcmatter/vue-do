import { createRouter, createWebHistory } from 'vue-router';
import { beforeEachHook } from './beforeEach';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      name: 'Login',
      path: '/login',
      component: () => import(/* webpackChunkName: "views_Login" */ '../views/Login.vue'),
    },
    {
      name: 'Home',
      path: '/home',
      component: () => import(/* webpackChunkName: "views_Home" */ '../views/Home.vue'),
    }
  ],
});

router.beforeEach(beforeEachHook);

export default router;
