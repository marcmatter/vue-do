<template>
  <div class="h-full w-full flex justify-between items-center flex px-10 gap-10 max-w-screen-xl mx-auto">
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
