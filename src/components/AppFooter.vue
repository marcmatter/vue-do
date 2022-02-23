<template>
  <footer class="h-15 bg-zinc-900 w-screen-- flex justify-between gap-2 overflow-hidden p-3 absolute bottom-0">
    <div class="text-sm">
      <p>Released under the <span class="font-bold">MPL-2.0 Licence.</span></p>
      <p class="font-thin">Copyright © {{ copyRightYear }} Marc Matter & Neo Samardzic</p>
    </div>
    <div class="flex">
      <a v-for="socialLink in socialMediaLinks" :key="socialLink.name" :href="socialLink.link" target="_blank">
        <Icon :icon="socialLink.name + '-circle'" class="h-full w-8 mx-1" />
      </a>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue';
import Icon from "./Icon.vue";

export default defineComponent({
  name: "AppFooter",
  components: {
    Icon
  },
  data() {
    return {
      socialMediaLinks: [
        {
          name: "github",
          link: "https://github.com/marcmatter/vue-do",
        },
        {
          name: "twitter",
          link: "https://example.com",
        },
        {
          name: "facebook",
          link: "https://example.com",
        },
      ]
    }
  },
  computed: {
    copyRightYear() {
      const startYear = 2022;
      const currentYear = new Date().getFullYear();
      if (startYear === currentYear) {
        return startYear
      }

      return `${startYear} - ${currentYear}`
    }
  }
});
</script>

<style scoped>

</style>