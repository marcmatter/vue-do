<template>
  <div class="h-30 absolute top-full left-0 z-20 mt-2 rounded-lg bg-zinc-600 p-2 shadow">
    <ul>
      <li>
        <BaseSelect
          placeholder="Priorities"
          placeholderIcon="chevrons-square-up-f"
          :options="[
            { id: 0, name: 'High', icon: 'chevron-square-up' },
            { id: 1, name: 'Medium', icon: 'chevron-square-middle' },
            { id: 2, name: 'Low', icon: 'chevron-square-down' },
          ]"
        />
      </li>
      <li>
        <BaseSelect
          placeholder="States"
          placeholderIcon="cogs-f"
          :options="[
            { id: 0, name: 'Open', icon: 'cogs' },
            { id: 1, name: 'Closed', icon: 'task-list' },
          ]"
        />
      </li>
      <li>
        <BaseSelect
          placeholder="Categories"
          placeholderIcon="tags"
          :options="todoStore.categories.map((category) => ({ icon: 'tag', ...category }))"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useTodoStore } from '../stores/todo';

const todoStore = useTodoStore();
</script>

<style scoped></style>
