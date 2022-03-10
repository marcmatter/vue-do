<template>
  <div
    class="mx-auto h-full w-full max-w-screen-xl flex-1 items-stretch justify-between pt-0 md:flex md:gap-5 md:py-5 md:px-10"
  >
    <Navigator :isNavigationOpen="isNavigationOpen" @toggleNavigation="isNavigationOpen = !isNavigationOpen" />
    <img :src="icon" />
    <!-- To-Do List -->
    <ToDo @toggleNavigation="isNavigationOpen = !isNavigationOpen" />
  </div>
</template>

<script lang="ts" setup>
const isNavigationOpen = ref(false);

const icon = ref(undefined as any);

onBeforeMount(async () => {
  const time = Date.now();
  const path = 'logo';
  icon.value = (await import(`../assets/${path}.png`)).default;
  console.log(Date.now() - time);
});
</script>

<style scoped></style>
