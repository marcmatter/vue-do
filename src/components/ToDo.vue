<template>
  <div class="h-full w-full">
    <ToDoTools @toggleNavigation="toggleNavigation" />
    <ToDoList />
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['toggleNavigation']);

const toggleNavigation = () => {
  emit('toggleNavigation');
};
</script>
