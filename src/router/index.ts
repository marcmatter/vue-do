import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: () =>
        import(/* webpackChunkName: "views_Login" */ '../views/Login.vue'),
    },
  ],
});
