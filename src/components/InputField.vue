<template>
  <div
    :class="`
      block bg-zinc-100 dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600
      rounded-lg flex pl-2 outline-none focus-within:border-zinc-400 focus-within:dark:border-zinc-500
    `"
  >
    <Icon v-if="icon" :icon="icon" :class="`w-6 h-6 my-auto flex-shrink-0 ${iconClass || ''}`" />
    <input
      :class="`
        bg-transparent text-zinc-800 dark:text-white py-2
        pl-2 pr-4 w-full focus:outline-none ${inputClass || ''}
      `"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="onInput"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Icon from './Icon.vue';

export default defineComponent({
  name: 'InputField',

  components: {
    Icon,
  },

  props: {
    iconClass: {
      type: String,
      required: false,
    },
    inputClass: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      required: false,
    },
    onInput: {
      type: Function,
      required: false,
    },
  },
});
</script>

<style scoped></style>
