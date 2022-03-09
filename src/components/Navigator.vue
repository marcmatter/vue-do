<template>
  <aside class="navigatorContainer" :class="{ hidden: !isNavigationOpen }">
    <button class="mb-3 h-10 w-10 md:hidden" @click="$emit('toggleNavigation')">
      <BaseIcon icon="close-circle-f" class="h-10 w-10 text-2xl text-zinc-400" />
    </button>
    <div class="userProfile">
      <span>{{ username || 'Local Storage' }}</span>
      <button @click="logOut">
        <BaseIcon class="h-10 w-10 md:h-5 md:w-5" icon="log-out" />
      </button>
    </div>
    <nav>
      <NavigatorSection title="My Tasks" :endpoints="endpoints.tasks" />
      <NavigatorSection title="Categories" :endpoints="endpoints.categories" />
    </nav>
  </aside>
</template>

<script lang="ts" setup>
import { useConfigStore } from '../stores/config';
import router from '../router';

defineProps({
  isNavigationOpen: Boolean,
});

defineEmits(['toggleNavigation']);

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
</script>

<style scoped>
.navigatorContainer {
  @apply fixed absolute m-0 h-full w-screen select-none bg-zinc-50 p-3 text-zinc-700 shadow;
  @apply dark:bg-grey dark:text-zinc-50;
  @apply md:relative md:block md:h-5/6 md:w-1/3 md:max-w-xs md:rounded-xl;
}
.userProfile {
  @apply flex items-center justify-between p-2 pb-1 text-3xl;
  @apply md:text-xl;
}
</style>
