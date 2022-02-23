<template>
  <div class="h-screen w-full flex justify-center items-center flex flex-col">
    <div class="p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-50 dark:bg-opacity-5">
      <h1 class="vuedo-icon text-7xl font-bold mx-16 mt-4 mb-8 bg-clip-text">
        <span class="text-secondary">Vue</span>
        <span class="text-primary">Do</span>
      </h1>
      <TextSeparator class="my-4">LOG IN TO SERVER</TextSeparator>

      <InputField class="my-4" icon="user-circle" type="text" placeholder="Username" />
      <InputField class="my-4" icon="key" type="password" placeholder="Password" icon-class="p-0.5" />

      <DecoratedButton
        class="my-4 mx-auto !text-white !bg-primary !border-primary hover:!border-orange-800 hover:dark:!border-orange-300"
        icon="log-in"
      >
        Log In
      </DecoratedButton>

      <TextSeparator class="mt-8 my-4">ALTERNATIVELY</TextSeparator>

      <DecoratedButton
        class="my-4 mx-auto !text-white !bg-secondary !border-secondary hover:!border-sky-700 hover:dark:!border-blue-200"
        icon="computer-alt"
      >
        Store data locally
      </DecoratedButton>
      <span class="text-sm block max-w-xs text-center leading-tight mx-auto text-zinc-400">
        VueDo can store your data in the browser, which means you can use it without a connection to our servers.
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTodoStore } from '../stores/todo';
import { Dayjs } from '../utils';
import InputField from '../components/InputField.vue';
import TextSeparator from '../components/TextSeparator.vue';
import DecoratedButton from '../components/DecoratedButton.vue';

export default defineComponent({
  name: 'LoginView',

  components: {
    DecoratedButton,
    InputField,
    TextSeparator,
  },

  setup() {
    const todoStore = useTodoStore();

    return {
      Dayjs,
      todoStore,
    };
  },
});
</script>

<style lang="scss" scoped>
.todo-title {
  @apply text-8xl font-bold m-10 text-transparent bg-clip-text;

  background-image: radial-gradient(circle at 60% -20%, rgba(252, 70, 107, 1) 0%, rgba(252, 70, 107, 0) 90%),
    linear-gradient(16deg, rgba(18, 212, 185, 1) 0%, rgba(0, 153, 255, 1) 100%);
}

.todo-box {
  @apply m-4 border-t border-zinc-600 w-96;
}
</style>
