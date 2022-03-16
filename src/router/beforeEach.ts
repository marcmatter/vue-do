import { NavigationGuardWithThis } from 'vue-router';
import { useConfigStore } from '../stores/config';

export const beforeEachHook: NavigationGuardWithThis<any> = (to) => {
  if (to.meta) {
    const configStore = useConfigStore();

    if (to.meta.loggedInOnly && !configStore.isLoggedIn) {
      return { path: '/login' };
    }
    if (to.meta.loggedOutOnly && configStore.isLoggedIn) {
      return { path: '/home' };
    }

    if (typeof to.meta.pageTitle === 'string') {
      document.title = `${to.meta.pageTitle} - VueDo`;
    } else {
      document.title = 'VueDo';
    }
  }

  return;
};
