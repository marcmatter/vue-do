<template>
  <div
    :class="`
      block flex rounded-lg border border-zinc-200 bg-zinc-100
      pl-2 outline-none focus-within:border-zinc-400 dark:border-zinc-600 dark:bg-zinc-700 focus-within:dark:border-zinc-500
    `"
  >
    <Icon v-if="icon" :icon="icon" :class="`my-auto h-6 w-6 flex-shrink-0 ${iconClass || ''}`" />
    <input
      :class="`
        w-full bg-transparent py-2 pl-2
        pr-4 text-zinc-800 focus:outline-none dark:text-white ${inputClass || ''}
      `"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="onInput"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps({
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
    type: Function as PropType<(payload: Event) => void>,
    required: false,
  },
});
</script>
