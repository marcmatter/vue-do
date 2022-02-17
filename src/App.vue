<template>
  <TopRainbowBar :is-loading="true" />
  <Icon class="w-16 h-16" icon="alert-f" />
  <router-view />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import './styles/main.scss';
import TopRainbowBar from './components/TopRainbowBar.vue';
import Icon from './components/Icon.vue';

export default defineComponent({
  name: 'App',

  components: {
    Icon,
    TopRainbowBar,
  },

  setup() {
    const isLoaded = ref(false);

    return {
      isLoaded,
    };
  },
});
</script>

<style lang="scss" scoped></style>
