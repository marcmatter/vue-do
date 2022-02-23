<template>
  <div class="flex flex h-full w-full flex-col items-center justify-center">
    <div class="rounded-2xl p-8 md:bg-zinc-50 dark:md:bg-zinc-50 dark:md:bg-opacity-5">
      <h1 class="vuedo-icon mt-4 mb-8 flex justify-center bg-clip-text text-7xl font-bold md:mx-16">
        <span class="text-secondary">Vue</span>
        <span class="text-primary">Do</span>
      </h1>
      <TextSeparator class="my-4 uppercase">Log in to Server</TextSeparator>

      <InputField class="my-4" icon="user-circle" type="text" placeholder="Username" />
      <InputField class="my-4" icon="key" type="password" placeholder="Password" icon-class="p-0.5" />

      <DecoratedButton
        class="my-4 mx-auto !border-primary !bg-primary !text-white hover:!border-orange-800 hover:dark:!border-orange-300"
        icon="log-in"
      >
        Log In
      </DecoratedButton>

      <TextSeparator class="my-4 mt-8 uppercase">Alternatively</TextSeparator>

      <DecoratedButton
        class="my-4 mx-auto !border-secondary !bg-secondary !text-white hover:!border-sky-700 hover:dark:!border-blue-200"
        icon="computer-alt"
        @click="loginLocally"
      >
        Store data locally
      </DecoratedButton>
      <span class="mx-auto block max-w-xs text-center text-sm leading-tight text-zinc-400">
        VueDo can store your data in the browser, which means you can use it without a connection to our servers.
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Dayjs } from '../utils';
import InputField from '../components/InputField.vue';
import TextSeparator from '../components/TextSeparator.vue';
import DecoratedButton from '../components/DecoratedButton.vue';
import { useConfigStore } from '../stores/config';
import router from '../router';

export default defineComponent({
  name: 'LoginView',

  components: {
    DecoratedButton,
    InputField,
    TextSeparator,
  },

  setup() {
    const configStore = useConfigStore();

    const loginLocally = () => {
      configStore.useLocally();
      router.push('/home');
    };

    return {
      configStore,
      Dayjs,
      loginLocally,
    };
  },
});
</script>

<style lang="scss" scoped>
.todo-title {
  @apply m-10 bg-clip-text text-8xl font-bold text-transparent;

  background-image: radial-gradient(circle at 60% -20%, rgba(252, 70, 107, 1) 0%, rgba(252, 70, 107, 0) 90%),
    linear-gradient(16deg, rgba(18, 212, 185, 1) 0%, rgba(0, 153, 255, 1) 100%);
}

.todo-box {
  @apply m-4 w-96 border-t border-zinc-600;
}
</style>
