<template>
  <div class="mx-auto h-full w-full max-w-screen-xl items-center justify-between md:flex md:gap-10 md:px-10">
    <Navigator />
    <!-- To-Do List -->
    <section class="w-2/3">VueDo</section>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Navigator from '../components/Navigator.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Navigator,
  },
});
</script>

<style scoped></style>
