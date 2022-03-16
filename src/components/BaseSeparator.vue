<template>
  <div class="flex w-full items-center justify-center">
    <div class="h-0.5 w-full bg-zinc-300 dark:bg-zinc-600" />
    <span class="flex-shrink-0 px-3 py-1 font-medium leading-none text-zinc-400">
      <slot />
    </span>
    <div class="h-0.5 w-full bg-zinc-300 dark:bg-zinc-600" />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
