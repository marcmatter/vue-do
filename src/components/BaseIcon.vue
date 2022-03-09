<template>
  <component :is="iconContent" />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, shallowRef } from 'vue';

export default defineComponent({
  name: 'BaseIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const iconContent = shallowRef('' as string);

    onBeforeMount(async () => {
      const iconModule = await import(`../assets/icons/${props.icon}.svg`);
      iconContent.value = iconModule.default;
    });

    return {
      iconContent,
    };
  },
});
</script>

<style scoped></style>
