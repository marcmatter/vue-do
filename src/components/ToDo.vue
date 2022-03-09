<template>
  <ToDoTools />
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
        @patch="(item) => todoStore.patchEntry(element.id, item)"
        @delete="() => todoStore.deleteEntry(element.id)"
      />
    </template>
  </Draggable>
</template>

<script>
import { defineComponent } from 'vue';

import Draggable from 'vuedraggable';
import ToDoTools from './ToDoTools.vue';
import ToDoListItem from './ToDoListItem.vue';
import { useTodoStore } from '../stores/todo';
import { Dayjs } from '../utils';

export default defineComponent({
  name: 'ToDo',
  components: {
    Draggable,
    ToDoListItem,
    ToDoTools,
  },

  setup() {
    const todoStore = useTodoStore();

    return {
      Dayjs,
      todoStore,
    };
  },
});
</script>
