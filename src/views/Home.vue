<template>
  <div class="relative h-full grow">
    <div
      class="mx-auto h-full w-full max-w-screen-xl flex-1 items-stretch justify-between pt-0 md:flex md:gap-5 md:py-5 md:px-10"
    >
      <AppNavigator
        :isNavigationOpen="isNavigationOpen"
        @toggleNavigation="isNavigationOpen = !isNavigationOpen"
        @toggleCategoryEditor="isCategoryEditorOpen = !isCategoryEditorOpen"
      />
      <ToDo @toggleNavigation="isNavigationOpen = !isNavigationOpen" />
    </div>
    <CategoryEditor class="" v-if="isCategoryEditorOpen" @close="isCategoryEditorOpen = false" />
  </div>
</template>

<script lang="ts" setup>
const isNavigationOpen = ref(false);
const isCategoryEditorOpen = ref(false);
</script>

<style scoped></style>
