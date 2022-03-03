<template>
  <div class="mx-auto h-full w-full max-w-screen-xl items-center justify-between pt-2.5 md:flex md:gap-5 md:px-10">
    <Navigator :isNavigationOpen="isNavigationOpen" @toggleNavigation="toggleNavigation" />
    <!-- To-Do List -->
    <ToDoList @toggleNavigation="toggleNavigation" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Navigator from '../components/Navigator.vue';
import ToDoList from '../components/ToDoList.vue';

export default defineComponent({
  name: 'Home',
  components: {
    ToDoList,
    Navigator,
  },
  data() {
    return {
      isNavigationOpen: false,
    };
  },
  methods: {
    toggleNavigation() {
      this.isNavigationOpen = !this.isNavigationOpen;
    },
  },
});
</script>

<style scoped></style>
