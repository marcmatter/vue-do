<template>
  <TopRainbowBar :is-loading="false" />
  <router-view />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import './styles/main.scss';
import TopRainbowBar from './components/TopRainbowBar.vue';

export default defineComponent({
  name: 'App',

  components: {
    TopRainbowBar,
  },

  setup() {},
});
</script>

<style lang="scss" scoped></style>
