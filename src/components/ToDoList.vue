<template>
  <div class="mt-2 h-full w-full">
    <Draggable
      :list="[...todoStore.entries]"
      group="todoStore_entries"
      item-key="id"
      handle=".drag-handle"
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

const todoStore = useTodoStore();
</script>

<style lang="scss" scoped>
.ghostClass {
  @apply bg-primary;
}
</style>
