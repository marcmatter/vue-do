<template>
  <button
    :class="`
      flex items-center justify-center rounded-lg border border-zinc-200
      bg-zinc-100 py-2 text-center text-zinc-600 hover:border-zinc-300 dark:border-zinc-500
      dark:bg-zinc-600 dark:text-white dark:hover:border-zinc-400 ${icon ? 'pl-5 pr-7' : 'px-7'}
    `"
  >
    <Icon v-if="icon" :icon="icon" :class="`mr-2 ${iconClass || ''}`" />
    <span :class="`block h-6 font-medium ${textClass || ''}`">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Icon from './Icon.vue';

export default defineComponent({
  name: 'DecoratedButton',

  components: {
    Icon,
  },

  props: {
    icon: {
      type: String,
      required: false,
    },
    iconClass: {
      type: String,
      required: false,
    },
    textClass: {
      type: String,
      required: false,
    },
  },
});
</script>

<style scoped></style>
