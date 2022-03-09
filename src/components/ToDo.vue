<template>
  <ToDoTools />
</template>

<script>
import { defineComponent } from 'vue';

import ToDoTools from './ToDoTools.vue';

export default defineComponent({
  name: 'ToDo',
  components: {
    ToDoTools,
  },
});
</script>
