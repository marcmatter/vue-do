<template>
  <section
    class="w-screen pt-5 md:pt-2 md:w-1/3 h-full md:h-5/6 bg-zinc-50 dark:bg-opacity-5 dark:bg-zinc-50 text-zinc-700 dark:text-zinc-50 rounded-xl p-2 shadow md:max-w-xs"
  >
    <div class="flex justify-between text-3xl md:text-base p-2 pb-1">
      <span>Max Mustermann</span>
      <span @click="logOut">
        <button>
          <Icon icon="log-out" />
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
