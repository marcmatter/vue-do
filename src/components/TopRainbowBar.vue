<template>
  <div
    class="w-full h-3 absolute top-0 left-0 top-rainbow-bar"
    :class="{
      'is-loading': isLoading,
    }"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TopRainbowBar',

  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.top-rainbow-bar {
  background-image: linear-gradient(
    90deg,
    rgba(252, 70, 107, 0.8) 0%,
    rgba(252, 222, 70, 0.8) 29.37%,
    rgba(18, 212, 185, 0.8) 65.31%,
    rgba(0, 153, 255, 0.8) 100%
  );

  &.is-loading {
    animation: top-rainbow-loading 5s infinite linear;
  }
}

@keyframes top-rainbow-loading {
  0% {
    background-position-x: 0%;
  }
  100% {
    background-position-x: 100%;
  }
}
</style>
