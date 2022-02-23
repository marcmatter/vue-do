<template>
  <div class="h-full w-full md:flex justify-between items-center md:px-10 md:gap-10 max-w-screen-xl mx-auto">
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
