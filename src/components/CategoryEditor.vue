<template>
  <div class="absolute w-full h-full top-0 left-0 bg-black bg-opacity-50 z-10">
    <div class="fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <div class="min-w-[36rem] p-8 bg-zinc-800 rounded-xl">
        <div class="flex">
          <h1 class="text-xl mr-auto">Categories</h1>
          <BaseIcon class="my-auto h-8 w-8 cursor-pointer opacity-60 hover:opacity-100" icon="close" @click="$emit('close')" />
        </div>
        <div class="flex mt-4 mb-2">
          <BaseInput
            class="w-full mr-4"
            placeholder="New category name..."
            :onEnter="addCategory"
            :value="newCategoryName"
            @input="v => newCategoryName = v.target.value"
          />
          <BaseButton @click="addCategory">Add</BaseButton>
        </div>
        <Draggable
            class="mt-2 max-h-[30rem] overflow-y-auto"
            :list="[...todoStore.categories]"
            group="todoStore_categories"
            item-key="id"
            @end="(event) => todoStore.moveCategory(todoStore.categories[event.oldIndex].id, event.newIndex)"
        >
          <template #item="{ element }">
            <div
              :key="element.id"
              class="flex items-center p-2 select-none"
            >
              <BaseIcon icon="tag" class="mr-4 text-zinc-300 shrink-0" />
              <div class="w-full">
                <input
                  class="title bg-transparent text-lg"
                  :value="element.name"
                  @keypress.enter="ev => todoStore.patchCategory(element.id, { name: ev.target.value })"
                  @blur="ev => todoStore.patchCategory(element.id, { name: ev.target.value })"
                  type="text"
                />
                <p class="text-sm text-zinc-400">{{ todoStore.getEntriesForCategory(element.id).length }} entries</p>
              </div>
              <div class="relative popup-container py-2">
                <BaseIcon icon="close-circle" @click="todoStore.getEntriesForCategory(element.id).length === 0 && todoStore.deleteCategory(element.id)" class="mx-2 h-6 w-6 text-zinc-400 hover:text-white shrink-0" />
                <div
                  v-if="todoStore.getEntriesForCategory(element.id).length !== 0"
                  class="popup absolute w-[17rem] right-0 bottom-full text-justify bg-zinc-700 p-1 px-3 text-sm rounded"
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
  console.log(newCategoryName.value)
  if (newCategoryName.value) {
    todoStore.addCategory({
      id: 0,
      name: newCategoryName.value
    });

    newCategoryName.value = '';
  }
}
</script>

<style lang="scss" scoped>
.popup-container {
  .popup {
    @apply hidden;
  }

  &:hover, &:focus, &:focus-within {
    .popup {
      @apply block;
    }
  }
}
</style>
