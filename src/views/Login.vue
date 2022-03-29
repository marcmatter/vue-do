<template>
  <div class="my-5 flex min-h-full w-full flex-1 flex-col items-center justify-center">
    <div class="rounded-2xl p-8 md:bg-zinc-50 md:shadow dark:md:bg-zinc-50 dark:md:bg-opacity-5">
      <h1 class="vuedo-icon mt-4 mb-8 flex justify-center bg-clip-text text-7xl font-bold md:mx-16">
        <span class="text-secondary">Vue</span>
        <span class="text-primary">Do</span>
      </h1>
      <BaseSeparator class="my-4 uppercase">Log in to Server</BaseSeparator>

      <BaseInput class="my-4" icon="user-circle" type="text" placeholder="Username" />
      <BaseInput class="my-4" icon="key" type="password" placeholder="Password" icon-class="p-0.5" />

      <BaseButton icon="log-in" color="primary" class="mx-auto my-4"> Log In </BaseButton>

      <BaseSeparator class="my-4 mt-8 uppercase">Alternatively</BaseSeparator>

      <BaseButton
        class="my-4 mx-auto"
        color="secondary"
        icon="computer-alt"
        @click="loginLocally"
        data-cy="loginLocallyBtn"
      >
        Store data locally
      </BaseButton>
      <span class="mx-auto block max-w-xs text-center text-sm leading-tight text-zinc-400">
        VueDo can store your data in the browser, which means you can use it without a connection to our servers.
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useConfigStore } from '../stores/config';
import router from '../router';

const configStore = useConfigStore();

const loginLocally = () => {
  configStore.useLocally();
  router.push('/home');
};
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
