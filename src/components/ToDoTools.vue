<template>
  <section class="h-full w-full bg-zinc-50 p-3 shadow dark:bg-grey md:h-5/6 md:w-2/3 md:rounded-xl">
    <button @click="$emit('toggleNavigation')" class="md:hidden">
      <Icon icon="align-justify" class="h-10 w-10 text-zinc-400" />
    </button>
    <div class="flex flex-wrap items-center gap-2">
      <InputField icon="search" type="text" placeholder="Search" class="w-full md:w-1/2" />
      <BaseButton icon="plus" class="h-8">Add Filter</BaseButton>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped></style>
