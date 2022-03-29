<template>
  <aside class="navigatorContainer" :class="{ hidden: !isNavigationOpen }">
    <button class="mb-3 h-10 w-10 md:hidden" @click="$emit('toggleNavigation')">
      <BaseIcon icon="close-circle-f" class="h-10 w-10 text-2xl text-zinc-400" />
    </button>
    <div class="userProfile">
      <span>Local Storage</span>
      <button @click="logOut">
        <BaseIcon class="h-10 w-10 md:h-5 md:w-5" icon="log-out" />
      </button>
    </div>
    <nav>
      <AppNavigatorSection title="States" data-cy="navStates" :endpoints="endpoints.tasks" />
      <AppNavigatorSection title="Priorities" data-cy="navPriorities" :endpoints="endpoints.priority" />
      <AppNavigatorSection
        title="Categories"
        data-cy="navCategories"
        :endpoints="[...endpoints.categories, ...categories]"
      >
        <template #title>
          <BaseIcon
            class="ml-auto mb-auto h-4 w-4 cursor-pointer hover:text-zinc-300"
            icon="pencil"
            @click="$emit('toggleCategoryEditor')"
            data-cy="manageCategories"
          />
        </template>
      </AppNavigatorSection>
    </nav>
  </aside>
</template>

<script lang="ts" setup>
import { useConfigStore } from '../stores/config';
import router from '../router';
import { useTodoStore } from '../stores/todo';
import { TodoEntryPriority, TodoEntryState } from '../types/Todo';

defineProps({
  isNavigationOpen: Boolean,
});

const emit = defineEmits(['toggleNavigation', 'filterEntries']);

const configStore = useConfigStore();

const logOut = () => {
  configStore.logOut();
  router.push('/login');
};

const todoStore = useTodoStore();

const categories = computed(() =>
  todoStore.categories.map((category: any, index) => ({
    ...category,
    icon: 'tag',
    id: 8 + index,
    event: () => emit('filterEntries', 'category', category.id),
  }))
);

const endpoints = reactive({
  tasks: [
    {
      id: 0,
      name: 'All States',
      icon: 'inboxes-f',
      active: true,
      event: () => emit('filterEntries', 'state'),
    },
    {
      id: 1,
      name: 'Open',
      icon: 'cogs',
      event: () => emit('filterEntries', 'state', TodoEntryState.Open),
    },
    {
      id: 2,
      name: 'Closed',
      icon: 'task-list',
      event: () => emit('filterEntries', 'state', TodoEntryState.Closed),
    },
  ],
  priority: [
    {
      id: 3,
      name: 'All Priorities',
      icon: 'chevrons-square-up-f',
      active: true,
      event: () => emit('filterEntries', 'priority'),
    },
    {
      id: 4,
      name: 'High',
      icon: 'chevron-square-up',
      event: () => emit('filterEntries', 'priority', TodoEntryPriority.High),
    },
    {
      id: 5,
      name: 'Medium',
      icon: 'chevron-square-middle',
      event: () => emit('filterEntries', 'priority', TodoEntryPriority.Medium),
    },
    {
      id: 6,
      name: 'Low',
      icon: 'chevron-square-down',
      event: () => emit('filterEntries', 'priority', TodoEntryPriority.Low),
    },
  ],
  categories: [
    {
      id: 7,
      name: 'All Categories',
      icon: 'tags-f',
      active: true,
      event: () => emit('filterEntries', 'category'),
    },
  ],
});
</script>

<style scoped>
.navigatorContainer {
  @apply fixed absolute z-10 m-0 min-h-full w-screen select-none bg-zinc-50 p-3 text-zinc-700 shadow;
  @apply dark:bg-grey dark:text-zinc-50;
  @apply md:relative md:block md:h-5/6 md:h-fit md:min-h-min md:w-1/3 md:max-w-xs md:rounded-xl;
}
.userProfile {
  @apply flex items-center justify-between p-2 pb-1 text-3xl;
  @apply md:text-xl;
}
</style>
