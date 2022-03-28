import { createRouter, createWebHistory } from 'vue-router';
import { beforeEachHook } from './beforeEach';

import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import PageNotFound from '../views/PageNotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home,
      meta: {
        loggedInOnly: true,
        pageTitle: 'Home',
      },
    },
    {
      path: '/login',
      component: Login,
      meta: {
        loggedOutOnly: true,
        pageTitle: 'Login',
        showFooter: true,
      },
    },
    {
      path: '/:pathMatch(.*)*',
      component: PageNotFound,
      meta: {
        pageTitle: 'Page not found',
        showFooter: true,
      },
    },
  ],
});

router.beforeEach(beforeEachHook);

export default router;
