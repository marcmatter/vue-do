<template>
  <div class="h-full w-full">
    <ToDoTools @toggleNavigation="toggleNavigation" @queryEntriesByName="queryEntriesByName" />
    <ToDoList :entries="queryEntries || props.entries" />
  </div>
</template>

<script lang="ts" setup>
import { TodoEntry } from '../types/Todo';

const emit = defineEmits(['toggleNavigation']);
const queryEntries = ref(undefined);

const props: any = defineProps({
  entries: {
    type: Array as PropType<TodoEntry[]>,
    require: true,
  },
});

const toggleNavigation = () => {
  emit('toggleNavigation');
};

const queryEntriesByName = (searchTerm) => {
  queryEntries.value = props.entries.filter((entry) => entry.name.toLowerCase().includes(searchTerm.toLowerCase()));
};
</script>
