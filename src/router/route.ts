import router from './index';

router.beforeEach((to, from, next) => {
  // use nearest title for nested routes
  const nearestTitle: any = to.matched
    .slice()
    .reverse()
    .find((route: any) => route.pageTitle);

  if (nearestTitle) document.title = `${nearestTitle || "ToDo App"} - VueDo`;
});
