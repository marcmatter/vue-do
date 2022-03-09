<template>
  <div class="flex min-h-screen w-full flex-col">
    <TopRainbowBar :is-loading="false" />
    <main class="flex flex-1 flex-col">
      <router-view />
    </main>
    <AppFooter v-if="showFooter" class="-mt-16 md:mt-0" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, watch } from 'vue';

import { configStoreAdapter, useConfigStore } from './stores/config';
import './styles/main.scss';

import TopRainbowBar from './components/AppHeaderBar.vue';
import AppFooter from './components/AppFooter.vue';
import router from './router';

export default defineComponent({
  name: 'App',

  components: {
    TopRainbowBar,
    AppFooter,
  },

  setup() {
    const configStore = useConfigStore();
    const showFooter = computed(() => router.currentRoute.value.meta.showFooter);

    onBeforeMount(() => {
      const configStateRestored = configStoreAdapter.load();
      if (configStateRestored) {
        configStore.$state = configStateRestored;
      }
    });

    watch(
      () => configStore.$state,
      (value) => {
        configStoreAdapter.save(value);
      },
      { deep: true }
    );

    return {
      showFooter,
    };
  },
});
</script>

<style lang="scss" scoped></style>
