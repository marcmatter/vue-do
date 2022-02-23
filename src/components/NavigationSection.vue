<template>
  <div class="mt-3">
    <div class="text-zinc-400 text-xs px-2 mb-1">
      <p class="uppercase pl-1 pb-0.5">{{ title }}</p>
      <hr class="border-zinc-300 dark:border-zinc-500" />
    </div>
    <ul>
      <li v-for="endpoint in endpoints" :key="endpoint.name">
        <a
          class="flex items-center py-1 px-2 text-sm text-zinc-500 hover:text-zinc-700 hover:bg-zinc-200 dark:text-zinc-300 dark:hover:text-zinc-50 dark:hover:bg-zinc-700 rounded transition"
        >
          <Icon :icon="endpoint.icon" class="h-4" />
          {{ endpoint.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Icon from './Icon.vue';

export default defineComponent({
  name: 'NavigationSection',
  components: {
    Icon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    endpoints: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style scoped></style>
