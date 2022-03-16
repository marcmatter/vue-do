<template>
  <component :is="iconComponent" />
</template>

<script lang="ts" setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
});

const iconComponent = defineAsyncComponent(() => import(`../assets/icons/${props.icon}.svg`));
</script>

<style scoped></style>
