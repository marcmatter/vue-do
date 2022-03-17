<template>
  <div class="mt-2 h-full w-full">
    <BaseButton icon="plus" class="!h-12 !w-full" @click="todoStore.addEntry({}, 0)">Add Item</BaseButton>
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
import BaseButton from './BaseButton.vue';

const todoStore = useTodoStore();
</script>

<style lang="scss" scoped>
.ghostClass {
  @apply bg-primary;
}
</style>
