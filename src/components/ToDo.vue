<template>
  <div class="h-full w-full">
    <ToDoTools @toggleNavigation="toggleNavigation" @queryEntriesByName="queryEntriesByName" />
    <ToDoList />
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['toggleNavigation']);

const toggleNavigation = () => {
  emit('toggleNavigation');
};
</script>
