<template>
  <div class="flex h-full flex-col items-center justify-center gap-10">
    <h1 class="text-7xl">Oooops !</h1>
    <span>We can't seem to find a page your are looking for</span>
    <BaseButton icon="arrow-left" @click="router.push('/')">Back to Home</BaseButton>
  </div>
</template>

<script lang="ts" setup>
import router from '../router';
</script>
