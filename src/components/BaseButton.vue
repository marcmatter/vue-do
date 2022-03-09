<template>
  <div
    :class="`${
      color ? `bg-${color} text-white` : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-white'
    } w-fit rounded-lg`"
  >
    <button
      class="flex h-full w-full items-center justify-center rounded-lg border border-zinc-800/30 py-2 text-center hover:border-zinc-800/40 hover:bg-zinc-800/20"
      :class="`${icon ? 'pl-5 pr-7' : 'px-7'}`"
    >
      <Icon v-if="icon" :icon="icon" :class="`mr-2 ${iconClass || ''}`" />
      <span :class="`block h-6 font-medium ${textClass || ''}`">
        <slot />
      </span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Icon from './BaseIcon.vue';

export default defineComponent({
  name: 'BaseButton',
  components: {
    Icon,
  },
  props: {
    color: {
      type: String,
      required: false,
    },
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
