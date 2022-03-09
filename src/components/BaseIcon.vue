<template>
  <component v-if="iconContent" :is="iconContent" />
</template>

<script lang="ts" setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
});

const iconContent = shallowRef(undefined);

onBeforeMount(async () => {
  const iconModule = await import(`../assets/icons/${props.icon}.svg`);
  iconContent.value = iconModule.default;
});
</script>

<style scoped></style>
