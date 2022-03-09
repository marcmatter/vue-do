<template>
  <div :class="`${ButtonStyles[color]} w-fit rounded-lg`">
    <button
      class="flex h-full w-full items-center justify-center rounded-lg py-2 text-center hover:bg-zinc-800/10 dark:hover:bg-zinc-100/10"
      :class="`${icon ? 'pl-5 pr-7' : 'px-7'}`"
    >
      <BaseIcon v-if="icon" :icon="icon" :class="`mr-2 ${iconClass || ''}`" />
      <span :class="`block h-6 font-medium ${textClass || ''}`">
        <slot />
      </span>
    </button>
  </div>
</template>

<script lang="ts" setup>
const ButtonStyles = {
  default: 'bg-zinc-200 text-zinc-600 dark:bg-zinc-700 dark:text-white',
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
};

defineProps({
  color: {
    type: String as PropType<keyof typeof ButtonStyles>,
    required: false,
    default: 'default',
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
});
</script>

<style scoped></style>
