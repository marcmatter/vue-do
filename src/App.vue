<template>
  <div class="wrapper flex w-full flex-col">
    <AppHeaderBar :is-loading="false" />
    <main class="flex h-full flex-1 flex-col">
      <router-view />
    </main>
    <AppFooter v-if="showFooter" class="-mt-16 md:mt-0" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, watch } from 'vue';

import { configStoreAdapter, useConfigStore } from './stores/config';
import { todoStoreAdapter, useTodoStore } from './stores/todo';
import './styles/main.scss';

import AppHeaderBar from './components/AppHeaderBar.vue';
import AppFooter from './components/AppFooter.vue';
import router from './router';

export default defineComponent({
  name: 'App',

  components: {
    AppHeaderBar,
    AppFooter,
  },

  setup() {
    const configStore = useConfigStore();
    const todoStore: any = useTodoStore();
    const showFooter = computed(() => router.currentRoute.value.meta.showFooter);

    onBeforeMount(() => {
      const configStateRestored = configStoreAdapter.load();
      const todoStoreRestored = todoStoreAdapter.load();
      if (configStateRestored) {
        configStore.$state = configStateRestored;
      }
      if (todoStoreRestored) {
        todoStore.$state = todoStoreRestored;
      }
    });

    watch(
      () => configStore.$state,
      (value) => {
        configStoreAdapter.save(value);
      },
      { deep: true }
    );

    watch(
      () => todoStore.$state,
      (value) => {
        todoStoreAdapter.save(value);
      },
      { deep: true }
    );

    return {
      showFooter,
    };
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}
</style>
