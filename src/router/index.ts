import { createRouter, createWebHistory } from 'vue-router';

const routes: any = [
  {
    pageTitle: 'Login Page',
    path: '/login',
    component: () => import(/* webpackChunkName: "views_Login" */ '../views/Login.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
