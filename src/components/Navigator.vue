<template>
  <aside class="navigatorContainer" :class="{ hidden: !isNavigationOpen }">
    <button class="mb-3 h-10 w-10 md:hidden" @click="$emit('toggleNavigation')">
      <Icon icon="close-circle-f" class="h-10 w-10 text-2xl text-zinc-400" />
    </button>
    <div class="userProfile">
      <span>{{ username || 'Local Storage' }}</span>
      <button @click="logOut">
        <Icon class="h-10 w-10 md:h-5 md:w-5" icon="log-out" />
      </button>
    </div>
    <nav>
      <NavigationSection title="My Tasks" :endpoints="endpoints.tasks" />
      <NavigationSection title="Categories" :endpoints="endpoints.categories" />
    </nav>
  </aside>
</template>

<script>
import { defineComponent, reactive } from 'vue';

import { useConfigStore } from '../stores/config';
import router from '../router';

import Icon from './BaseIcon.vue';
import NavigationSection from './NavigatorSection.vue';

export default defineComponent({
  name: 'Navigator',
  components: {
    Icon,
    NavigationSection,
  },
  props: {
    isNavigationOpen: Boolean,
  },
  setup() {
    const configStore = useConfigStore();

    const logOut = () => {
      configStore.logOut();
      router.push('/login');
    };

    const username = 'Max Musterman';

    const endpoints = reactive({
      tasks: [
        {
          name: 'All Entries',
          icon: 'inboxes-f',
          active: true,
        },
        {
          name: 'Open',
          icon: 'cogs-f',
        },
        {
          name: 'Closed',
          icon: 'task-list',
        },
      ],
      categories: [
        {
          name: 'All Entries',
          icon: 'folder-f',
          active: true,
        },
      ],
    });

    return {
      endpoints,
      logOut,
      username,
    };
  },
});
</script>

<style scoped>
.navigatorContainer {
  @apply fixed absolute m-0 h-screen w-screen select-none bg-zinc-50 p-3 text-zinc-700 shadow;
  @apply dark:bg-grey dark:text-zinc-50;
  @apply md:relative md:block md:h-5/6 md:w-1/3 md:max-w-xs md:rounded-xl;
}
.userProfile {
  @apply flex items-center justify-between p-2 pb-1 text-3xl;
  @apply md:text-xl;
}
</style>
