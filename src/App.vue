<template>
  <TodoView v-if="isLoaded && false" />
  <TableDemo v-if="false" />
  <ProductDemo v-if="true" />
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref, watch } from 'vue'
import { useTodoStore, todoStoreLocalStorageAdapter } from './stores/todo'
import TodoView from './containers/TodoView.vue'
import './styles/main.scss'
import TableDemo from "./containers/TableDemo.vue";
import ProductDemo from "./containers/ProductDemo.vue";

export default defineComponent({
  name: 'App',

  components: {
    ProductDemo,
    TableDemo,
    TodoView
  },

  setup () {
    const todoStore = useTodoStore()

    const isLoaded = ref(false)

    onMounted(() => {
      const todoStoreFromLocalStorage = todoStoreLocalStorageAdapter.load()
      if (todoStoreFromLocalStorage) {
        todoStore.$state.entries = todoStoreFromLocalStorage.entries
        todoStore.$state.categories = todoStoreFromLocalStorage.categories
      }
      isLoaded.value = true
    })

    watch(
      () => todoStore.$state,
      () => todoStoreLocalStorageAdapter.save(todoStore.$state),
      { deep: true }
    )

    return {
      isLoaded
    }
  }
})
</script>

<style lang="scss" scoped>
/*
h2 {
  @apply text-4xl font-bold mt-10;
}

h1 {
  @apply text-9xl font-bold m-10;

  background-image:
    radial-gradient(circle at 60% -20%, rgba(252,70,107,1) 0%, rgba(252,70,107,0) 90%),
    linear-gradient(16deg, rgba(18,212,185,1) 0%, rgba(0,153,255,1) 100%);

  background-clip: text;
  color: transparent;
}

button {
  @apply bg-zinc-700 text-zinc-100 py-1 px-4 m-1 rounded;

  &:hover {
    @apply bg-zinc-600;
  }
}
*/
</style>
