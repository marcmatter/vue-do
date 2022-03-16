<template>
  <div
    class="mx-auto h-full w-full max-w-screen-xl flex-1 items-stretch justify-between pt-0 md:flex md:gap-5 md:py-5 md:px-10"
  >
    <AppNavigator :isNavigationOpen="isNavigationOpen" @toggleNavigation="isNavigationOpen = !isNavigationOpen" />
    <!-- To-Do List -->
    <ToDo @toggleNavigation="isNavigationOpen = !isNavigationOpen" />
  </div>
</template>

<script lang="ts" setup>
const isNavigationOpen = ref(false);
</script>

<style scoped></style>
