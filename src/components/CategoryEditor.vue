<template>
  <div class="absolute top-0 left-0 z-10 h-full w-full bg-black bg-opacity-50">
    <div class="fixed top-0 left-0 flex h-full w-full items-center justify-center">
      <div
        class="max-w-screen h-full bg-zinc-100 px-4 py-8 dark:bg-zinc-800 md:h-auto md:w-[36rem] md:rounded-xl md:px-8"
      >
        <div class="flex">
          <h1 class="mr-auto text-xl">Categories</h1>
          <BaseIcon
            class="my-auto h-8 w-8 cursor-pointer opacity-60 hover:opacity-100"
            icon="close"
            @click="$emit('close')"
          />
        </div>
        <div class="mt-4 mb-2 flex">
          <BaseInput
            class="mr-4 w-full"
            placeholder="New category name..."
            :onEnter="addCategory"
            :value="newCategoryName"
            @input="(v) => (newCategoryName = v.target.value)"
          />
          <BaseButton @click="addCategory">Add</BaseButton>
        </div>
        <Draggable
          class="mt-2 overflow-y-auto md:max-h-[30rem]"
          :list="[...todoStore.categories]"
          group="todoStore_categories"
          item-key="id"
          @end="(event) => todoStore.moveCategory(todoStore.categories[event.oldIndex].id, event.newIndex)"
        >
          <template #item="{ element }">
            <div :key="element.id" class="flex shrink select-none items-center p-2">
              <BaseIcon icon="tag" class="mr-4 shrink-0 text-zinc-300" />
              <div class="w-full shrink">
                <input
                  class="title w-full min-w-0 shrink bg-transparent text-lg"
                  :value="element.name"
                  @keypress.enter="(ev) => todoStore.patchCategory(element.id, { name: ev.target.value })"
                  @blur="(ev) => todoStore.patchCategory(element.id, { name: ev.target.value })"
                  type="text"
                />
                <p class="text-sm text-zinc-400">{{ todoStore.getEntriesForCategory(element.id).length }} entries</p>
              </div>
              <div class="popup-container relative py-2">
                <BaseIcon
                  icon="close-circle"
                  @click="
                    todoStore.getEntriesForCategory(element.id).length === 0 && todoStore.deleteCategory(element.id)
                  "
                  class="mx-2 h-6 w-6 shrink-0 text-zinc-400 hover:text-black dark:hover:text-white"
                />
                <div
                  v-if="todoStore.getEntriesForCategory(element.id).length !== 0"
                  class="popup absolute right-0 bottom-full z-20 w-[17rem] rounded bg-zinc-700 p-1 px-3 text-justify text-sm"
                >
                  You can't delete this category as long as it has entries assigned to it.
                </div>
              </div>
            </div>
          </template>
        </Draggable>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Draggable from 'vuedraggable';
import { useTodoStore } from '../stores/todo';

const todoStore = useTodoStore();

const newCategoryName = ref('');

const addCategory = () => {
  if (newCategoryName.value) {
    todoStore.addCategory({
      id: 0,
      name: newCategoryName.value,
    });

    newCategoryName.value = '';
  }
};
</script>

<style lang="scss" scoped>
.popup-container {
  .popup {
    @apply hidden;
  }

  &:hover,
  &:focus,
  &:focus-within {
    .popup {
      @apply block;
    }
  }
}
</style>
