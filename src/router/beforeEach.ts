import { NavigationGuardWithThis } from 'vue-router';

export const beforeEachHook: NavigationGuardWithThis<any> = (to, from, next) => {
  if (to.meta && typeof to.meta.pageTitle === 'string') {
    document.title = `${to.meta.pageTitle} - VueDo`;
  } else {
    document.title = 'VueDo';
  }

  return next();
};
