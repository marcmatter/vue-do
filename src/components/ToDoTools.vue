<template>
  <section class="w-full bg-zinc-50 p-3 shadow dark:bg-grey md:rounded-xl">
    <button @click="emit('toggleNavigation')" class="h-10 w-10 md:hidden">
      <BaseIcon icon="align-justify" class="h-10 w-10 text-zinc-400" />
    </button>
    <div class="flex flex-wrap items-center gap-2">
      <BaseInput icon="search" type="text" placeholder="Search" class="w-full md:w-1/2" />
      <div class="relative">
        <BaseButton icon="filter" class="h-8" @click="toggleFilter">Add Filter</BaseButton>
        <ToDoToolsFilter :class="{ hidden: !filter.show }" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const emit = defineEmits(['toggleNavigation']);
const filter = reactive({ show: false });

const toggleFilter = () => {
  filter.show = !filter.show;
};
</script>
