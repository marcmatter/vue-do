<template>
  <section
    class="w-1/3 h-5/6 bg-zinc-50 dark:bg-opacity-5 dark:bg-zinc-50 text-zinc-700 dark:text-zinc-50 rounded-xl p-2 shadow max-w-xs"
  >
    <div class="flex justify-between text-md p-2 pb-1">
      <span>Max Mustermann</span>
      <span>
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
import NavigationSection from "./NavigationSection.vue";

export default defineComponent({
  name: 'Navigator',
  components: {
    Icon,
    NavigationSection
  },
  setup() {
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
    };
  },
});
</script>
