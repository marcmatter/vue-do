<template>
  <div class="pz-3 top-rainbow-bar h-3 w-full" />
  <div
    class="top-rainbow-bar is-loading absolute top-0 left-0 h-3 w-full"
    :class="{
      hide: !isLoading,
    }"
  />
</template>

<script lang="ts" setup>
defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.top-rainbow-bar {
  /*background-image: linear-gradient(
    90deg,
    rgba(252, 70, 107, 0.8) 0%,
    rgba(252, 222, 70, 0.8) 15%,
    rgba(18, 212, 185, 0.8) 32%,
    rgba(0, 153, 255, 0.8) 50%,
    rgba(18, 212, 185, 0.8) 66%,
    rgba(252, 222, 70, 0.8) 85%,
    rgba(252, 70, 107, 0.8) 100%
  );
  background-size: 200% 100%;
  background-repeat: repeat-x;

  transition: opacity 0.5s ease;*/
  background-image: repeating-linear-gradient(
    -30deg,
    theme('colors.primary') 0px,
    theme('colors.primary') 15px,
    theme('colors.secondary') 15px,
    theme('colors.secondary') 30px
  );
  background-repeat: repeat;
  background-size: 200% 100%;

  &.is-loading {
    animation: top-rainbow-loading 15s infinite linear;
  }

  &.hide {
    @apply opacity-0;
  }
}

@keyframes top-rainbow-loading {
  0% {
    background-position-x: 0%;
  }
  100% {
    background-position-x: 200%;
  }
}
</style>
