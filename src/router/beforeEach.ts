import { NavigationGuardWithThis } from 'vue-router';

export const beforeEachHook: NavigationGuardWithThis<any> = (to, from, next) => {
  if (to.name && typeof to.name === 'string') {
    document.title = `${to.name} - VueDo`;
  } else {
    document.title = 'VueDo';
  }

  return next();
};
