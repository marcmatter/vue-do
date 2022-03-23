<template>
  <div class="mt-2 h-full w-full">
    <BaseButton icon="plus" class="!h-12 !w-full" @click="addEntry()">Add Item</BaseButton>
    <Draggable
      :list="[...todoStore.entries]"
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
          :ref="(el) => (todoListItemRefs[element.id] = el)"
        />
      </template>
    </Draggable>
  </div>
</template>

<script lang="ts" setup>
import Draggable from 'vuedraggable';
import { useTodoStore } from '../stores/todo';
import BaseButton from './BaseButton.vue';
import { TodoEntryPriority, TodoEntryState } from '../types/Todo';
import { Ref } from 'vue';

const todoStore = useTodoStore();

const addEntry = () => {
  todoStore.addEntry(
    {
      name: '',
      state: TodoEntryState.Open,
      priority: TodoEntryPriority.Medium,
      id: Date.now(),
    },
    0
  );
};

const todoListItemRefs: Ref<HTMLElement> = ref([]) as any;
onMounted(() => console.log(todoListItemRefs.value));
</script>

<style lang="scss" scoped>
.ghostClass {
  @apply bg-primary;
}
</style>
