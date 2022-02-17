<template>
  <h1 class="todo-title">Todo</h1>
  <div class="fixed opacity-5 w-full h-full top-0 left-0">
    <p class="w-[140vw] h-[140vh] text-justify uppercase text-sm rotate-12 translate-x-[-10%] translate-y-[-12%]">
      <text>
      <template v-for="(item, index) in thingsToDo">
        <tspan :key="`8913_${index}_1`" v-if="index % 2" class="font-bold">
          {{ item }}&nbsp;
        </tspan>
        <tspan :key="`8913_${index}_2`" v-else class="font-regular">
          {{ item }}&nbsp;
        </tspan>
      </template>
      </text>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTodoStore } from '../stores/todo';
import { Dayjs } from '../utils';

import thingsToDo from '../data/thingsToDo';

export default defineComponent({
  name: 'TodoView',

  components: {},

  setup() {
    const todoStore = useTodoStore();

    return {
      Dayjs,
      todoStore,
      thingsToDo,
    };
  },
});
</script>

<style lang="scss" scoped>
.todo-title {
  @apply text-8xl font-bold m-10 text-transparent bg-clip-text;

  background-image: radial-gradient(
      circle at 60% -20%,
      rgba(252, 70, 107, 1) 0%,
      rgba(252, 70, 107, 0) 90%
    ),
    linear-gradient(16deg, rgba(18, 212, 185, 1) 0%, rgba(0, 153, 255, 1) 100%);
}

.todo-box {
  @apply m-4 border-t border-zinc-600 w-96;
}
</style>
