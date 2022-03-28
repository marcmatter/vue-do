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
    <CategoryEditor class="" v-if="isCategoryEditorOpen" @close="isCategoryEditorOpen = false" />
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
const filterProps = reactive({ state: undefined, category: undefined, priority: undefined });

const filterEntries = (method, value?) => {
  filterProps[method] = value;
  entries.value = todoStore.entries;
  entries.value = todoStore.getEntriesForState(filterProps.state, entries.value);
  entries.value = todoStore.getEntriesForCategory(filterProps.category, entries.value);
  entries.value = todoStore.getEntriesForPriority(filterProps.priority, entries.value);
};
</script>

<style scoped></style>
