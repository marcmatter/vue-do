<template>
  <div class="w-full flex items-center justify-center">
    <div class="h-0.5 bg-zinc-300 dark:bg-zinc-600 w-full" />
    <span class="flex-shrink-0 px-3 py-1 leading-none font-medium text-zinc-400">
      <slot />
    </span>
    <div class="h-0.5 bg-zinc-300 dark:bg-zinc-600 w-full" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TextSeparator',
});
</script>

<style scoped></style>
