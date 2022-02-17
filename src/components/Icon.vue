<template>
  <component :is="iconContent" />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue';
import Icon from './Icon.vue';

export default defineComponent({
  name: 'Icon',

  props: {
    icon: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const iconContent = ref('' as string);

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
