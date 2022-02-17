<template>
  <TodoView v-if="isLoaded" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import './styles/main.scss';

export default defineComponent({
  name: 'App',

  components: {},

  setup() {
    const isLoaded = ref(false);

    return {
      isLoaded,
    };
  },
});
</script>

<style lang="scss" scoped></style>
