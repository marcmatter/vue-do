<template>
  <div class="mt-3">
    <div class="mb-1 px-2 text-lg text-zinc-400 md:text-xs">
      <p class="pl-1 pb-1 uppercase md:pb-0.5">{{ title }}</p>
      <hr class="border-zinc-300 dark:border-zinc-500" />
    </div>
    <ul>
      <li v-for="endpoint in endpoints" :key="endpoint.name">
        <a href="javascript:void(0)" class="navigationButton" :class="{ active: endpoint.active }">
          <Icon :icon="endpoint.icon" class="mr-4 h-8 md:mr-0 md:h-4" />
          {{ endpoint.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import Icon from './BaseIcon.vue';

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

<style scoped lang="scss">
.active {
  position: relative;
  &::before {
    @apply absolute absolute left-0 h-2/3 w-1 rounded bg-primary content-[''] md:w-0.5;
  }
}
.navigationButton {
  @apply flex items-center rounded py-5 px-3 text-2xl text-zinc-500 transition;
  @apply hover:bg-zinc-200 hover:text-zinc-700;
  @apply dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-zinc-50;
  @apply md:p-1 md:text-base;
}
</style>
