<template>
  <button
    class="flex bg-zinc-600 py-2 justify-center items-center text-center rounded-lg border border-zinc-500 hover:border-zinc-400"
    :class="{
      'pl-5 pr-7': icon,
      'px-7': !icon,
    }"
  >
    <Icon v-if="icon" :icon="icon" :class="`mr-2 ${iconClass || ''}`" />
    <span :class="`font-medium block h-6 ${textClass || ''}`">
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
