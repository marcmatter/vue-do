<template>
  <section
    class="h-full w-screen select-none rounded-xl bg-zinc-50 p-2 pt-7 text-zinc-700 shadow dark:bg-zinc-50 dark:bg-opacity-5 dark:text-zinc-50 md:h-5/6 md:w-1/3 md:max-w-xs md:pt-2"
  >
    <div class="mb-5 ml-1 md:hidden">
      <Icon icon="close-rectangle-f" class="h-10 w-10" />
    </div>
    <div class="flex justify-between p-2 pb-1 text-3xl md:text-base">
      <span>Max Mustermann</span>
      <span @click="logOut">
        <button>
          <Icon class="h-10 w-10 md:h-5 md:w-5" icon="log-out" />
        </button>
      </span>
    </div>
    <NavigationSection title="My Tasks" :endpoints="endpoints.tasks" />
    <NavigationSection title="Categories" :endpoints="endpoints.categories" />
  </section>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import Icon from './Icon.vue';
import NavigationSection from './NavigationSection.vue';
import { useConfigStore } from '../stores/config';
import router from '../router';

export default defineComponent({
  name: 'Navigator',
  components: {
    Icon,
    NavigationSection,
  },
  setup() {
    const configStore = useConfigStore();

    const logOut = () => {
      configStore.logOut();
      router.push('/login');
    };

    const endpoints = reactive({
      tasks: [
        {
          name: 'All Entries',
          icon: 'inboxes-f',
        },
        {
          name: 'Open',
          icon: 'cogs-f',
        },
        {
          name: 'Closed',
          icon: 'task-list',
        },
      ],
      categories: [
        {
          name: 'All Entries',
          icon: 'folder-f',
        },
      ],
    });

    return {
      endpoints,
      logOut,
    };
  },
});
</script>
