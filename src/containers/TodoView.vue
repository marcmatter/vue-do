<template>
  <h1 class="todo-title">Todo</h1>
  <div class="todo-box">
    <Draggable
      :list="[...todoStore.entries]"
      group="todoStore_entries"
      item-key="id"
      handle=".drag-handle"
      @end="
        (event) =>
          todoStore.moveEntry(
            todoStore.entries[event.oldIndex].id,
            event.newIndex
          )
      "
    >
      <template #item="{ element }">
        <TodoItem
          :key="element.id"
          :todo-item="element"
          @patch="(item) => todoStore.patchEntry(element.id, item)"
          @delete="() => todoStore.deleteEntry(element.id)"
        />
      </template>
    </Draggable>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTodoStore } from '../stores/todo';
import Draggable from 'vuedraggable';
import { Dayjs } from '../utils';
import TodoItem from '../components/TodoItem.vue';

export default defineComponent({
  name: 'TodoView',

  components: {
    TodoItem,
    Draggable,
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

<style lang="scss" scoped>
.todo-title {
  @apply text-8xl font-bold m-10 text-transparent bg-clip-text;

  background-image: radial-gradient(
      circle at 60% -20%,
      rgba(252, 70, 107, 1) 0%,
      rgba(252, 70, 107, 0) 90%
    ),
    linear-gradient(16deg, rgba(18, 212, 185, 1) 0%, rgba(0, 153, 255, 1) 100%);
}

.todo-box {
  @apply m-4 border-t border-zinc-600 w-96;
}
</style>
