<template>
  <footer
    class="bottom-0 flex h-16 w-full justify-between gap-2 overflow-hidden bg-white p-3 text-zinc-700 dark:bg-zinc-900 dark:text-white md:absolute"
  >
    <div class="text-sm">
      <p>Released under the <span class="font-bold">MPL-2.0 Licence.</span></p>
      <p class="font-thin">Copyright © {{ copyRightYear }} Marc & Neo</p>
    </div>
    <div class="flex">
      <a
        v-for="socialLink in socialMediaLinks"
        :key="socialLink.name"
        :href="socialLink.link"
        target="_blank"
        class="transition hover:scale-125 hover:text-secondary"
      >
        <Icon :icon="socialLink.name + '-circle'" class="mx-1 h-full w-8" />
      </a>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue';
import Icon from './Icon.vue';

export default defineComponent({
  name: 'AppFooter',
  components: {
    Icon,
  },
  data() {
    return {
      socialMediaLinks: [
        {
          name: 'github',
          link: 'https://github.com/marcmatter/vue-do',
        },
        {
          name: 'twitter',
          link: 'https://example.com',
        },
        {
          name: 'facebook',
          link: 'https://example.com',
        },
      ],
    };
  },
  computed: {
    copyRightYear() {
      const startYear = 2022;
      const currentYear = new Date().getFullYear();
      if (startYear === currentYear) {
        return startYear;
      }

      return `${startYear} - ${currentYear}`;
    },
  },
});
</script>

<style scoped></style>
