<template>
  <div
    class="mx-auto h-full w-full max-w-screen-xl flex-1 items-stretch justify-between pt-0 md:flex md:gap-5 md:py-5 md:px-10"
  >
    <AppNavigator
      :isNavigationOpen="isNavigationOpen"
      @toggleNavigation="isNavigationOpen = !isNavigationOpen"
      @filterEntries="filterEntries"
    />
    <ToDo @toggleNavigation="isNavigationOpen = !isNavigationOpen" :entries="entries" />
  </div>
</template>

<script lang="ts" setup>
import { useTodoStore } from '../stores/todo';
const todoStore = useTodoStore();

const isNavigationOpen = ref(false);
const entries = ref(todoStore.entries);

const filterEntries = (method, value?) => {
  switch (method) {
    case 'state':
      entries.value = todoStore.getEntriesForState(entries.value, value);
      break;
    case 'category':
      entries.value = todoStore.getEntriesForCategory(entries.value, value);
      break;
    case 'priority':
      entries.value = todoStore.getEntriesForPriority(entries.value, value);
      break;
    default:
      entries.value = todoStore.entries;
      break;
  }
};
</script>

<style scoped></style>
