<template>
  <div class="relative h-full grow">
    <div
        class="mx-auto h-full w-full max-w-screen-xl flex-1 items-stretch justify-between pt-0 md:flex md:gap-5 md:py-5 md:px-10"
    >
      <AppNavigator
          :isNavigationOpen="isNavigationOpen"
          @toggleNavigation="isNavigationOpen = !isNavigationOpen"
          @toggleCategoryEditor="isCategoryEditorOpen = !isCategoryEditorOpen"
          @filterEntries="filterEntries"
      />
      <ToDo @toggleNavigation="isNavigationOpen = !isNavigationOpen" :entries="entries" />
    </div>
    <CategoryEditor
        class=""
        v-if="isCategoryEditorOpen"
        @close="isCategoryEditorOpen = false"
    />
  </div>
</template>

<script lang="ts" setup>
import { useTodoStore } from '../stores/todo';
import { TodoEntry } from '../types/Todo';
import { Ref } from 'vue';
const todoStore = useTodoStore();

const isNavigationOpen = ref(false);
const isCategoryEditorOpen = ref(false);
const entries: Ref<TodoEntry[]> = ref(todoStore.entries);

const filterEntries = (method, value?) => {
  switch (method) {
    case 'state':
      entries.value = todoStore.getEntriesForState(value);
      break;
    case 'category':
      entries.value = todoStore.getEntriesForCategory(value);
      break;
    case 'priority':
      entries.value = todoStore.getEntriesForPriority(value);
      break;
    default:
      entries.value = todoStore.entries;
      break;
  }
};
</script>

<style scoped></style>
