<template>
  <footer
    class="min-h-16 mt-2 flex w-full justify-between gap-2 bg-white p-3 text-zinc-700 dark:bg-zinc-900 dark:text-white"
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

<script lang="ts" setup>
const socialMediaLinks = [
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
];

const copyRightYear = computed(() => {
  const startYear = 2022;
  const currentYear = new Date().getFullYear();
  if (startYear === currentYear) {
    return startYear;
  }

  return `${startYear} - ${currentYear}`;
});
</script>

<style scoped></style>
