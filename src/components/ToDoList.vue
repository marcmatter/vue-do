<template>
  <section class="h-full w-full p-3 shadow dark:bg-grey md:h-5/6 md:w-2/3 md:rounded-xl">
    <button @click="$emit('toggleNavigation')" class="ml-1 md:hidden">
      <Icon icon="align-justify" class="h-10 w-10 text-zinc-400" />
    </button>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import Icon from './Icon.vue';

export default defineComponent({
  name: 'ToDoList',
  components: { Icon },
});
</script>
