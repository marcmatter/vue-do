<template>
  <div class="mt-2 h-full w-full">
    <BaseButton icon="plus" class="!h-12 !w-full" @click="addEntry()" data-cy="addEntryBtn">Add Item</BaseButton>
    <Draggable
      :list="[...todoStore.getFilteredEntries(todoStore.entries)]"
      v-if="todoStore.getFilteredEntries(todoStore.entries).length > 0"
      group="todoStore_entries"
      item-key="id"
      @end="(event) => todoStore.moveEntry(todoStore.entries[event.oldIndex].id, event.newIndex)"
    >
      <template #item="{ element }">
        <ToDoListItem
          :key="element.id"
          :todo-item="element"
          :onPatch="(item) => todoStore.patchEntry(element.id, item)"
          :onDelete="() => todoStore.deleteEntry(element.id)"
        />
      </template>
    </Draggable>
    <div v-else class="flex h-40 flex-col items-center justify-center">
      <BaseIcon icon="help" class="mb-2 h-12 w-12" />
      <span>No entries found</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Draggable from 'vuedraggable';
import { useTodoStore } from '../stores/todo';
import { TodoEntryPriority, TodoEntryState } from '../types/Todo';

const todoStore = useTodoStore();

const addEntry = () => {
  todoStore.addEntry(
    {
      name: '',
      state: TodoEntryState.Open,
      priority: TodoEntryPriority.Medium,
      id: 0,
    },
    0
  );
  setTimeout(() => {
    const newEntryTitle: HTMLInputElement | null = document.querySelector('.todo-item .title');
    if (newEntryTitle) {
      newEntryTitle.focus();
    }
  }, 50);
};
</script>

<style lang="scss" scoped>
.ghostClass {
  @apply bg-primary;
}
</style>
