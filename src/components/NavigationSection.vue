<template>
  <div class="mt-3">
    <div class="mb-1 px-2 text-lg text-zinc-400 md:text-xs">
      <p class="pl-1 pb-1 uppercase md:pb-0.5">{{ title }}</p>
      <hr class="border-zinc-300 dark:border-zinc-500" />
    </div>
    <ul>
      <li v-for="endpoint in endpoints" :key="endpoint.name">
        <a
          href="javascript:void(0)"
          class="flex items-center rounded py-5 py-5 px-2 text-2xl text-zinc-500 transition hover:bg-zinc-200 hover:text-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-zinc-50 md:py-1 md:text-sm"
        >
          <Icon :icon="endpoint.icon" class="mr-4 h-8 md:mr-0 md:h-4" />
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
