<template>
  <div class="min-h-screen w-full">
    <TopRainbowBar :is-loading="false" />
    <main
      class="flex flex-col justify-center items-center h-screen"
      :class="{
        'md:pb-16': showFooter,
      }"
    >
      <router-view class="grow-2" />
    </main>
    <AppFooter v-if="showFooter" class="-mt-16 md:mt-0" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, watch } from 'vue';
import './styles/main.scss';
import TopRainbowBar from './components/TopRainbowBar.vue';
import AppFooter from './components/AppFooter.vue';
import router from './router';
import { configStoreAdapter, useConfigStore } from './stores/config';

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
