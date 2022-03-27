<template>
  <div class="h-full w-full">
    <ToDoTools @toggleNavigation="toggleNavigation" />
    <ToDoList :entries="props.entries" />
  </div>
</template>

<script lang="ts" setup>
import { TodoEntry } from '../types/Todo';

const emit = defineEmits(['toggleNavigation']);

const props = defineProps({
  entries: {
    type: Array as PropType<TodoEntry[]>,
    require: true,
  },
});

const toggleNavigation = () => {
  emit('toggleNavigation');
};
</script>
