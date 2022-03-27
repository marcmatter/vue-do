<template>
  <div class="mt-2 h-full w-full">
    <BaseButton icon="plus" class="!h-12 !w-full" @click="addEntry()">Add Item</BaseButton>
    <Draggable
      :list="[...entries]"
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
  </div>
</template>

<script lang="ts" setup>
import Draggable from 'vuedraggable';
import { useTodoStore } from '../stores/todo';
import BaseButton from './BaseButton.vue';
import { TodoEntry, TodoEntryPriority, TodoEntryState } from '../types/Todo';

const todoStore = useTodoStore();

const { entries } = defineProps({
  entries: {
    type: Array as PropType<TodoEntry[]>,
    require: true,
  },
});

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