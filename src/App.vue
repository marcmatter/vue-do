<template>
  <div class="min-h-screen w-full" >
    <TopRainbowBar :is-loading="false" />
    <main class="flex flex-col min-h-screen justify-center items-center">
      <router-view class="grow-2"/>
    </main>
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './styles/main.scss';
import TopRainbowBar from './components/TopRainbowBar.vue';
import AppFooter from './components/AppFooter.vue';

export default defineComponent({
  name: 'App',

  components: {
    TopRainbowBar,
    AppFooter
  },

  setup() {},
});
</script>

<style lang="scss" scoped></style>
