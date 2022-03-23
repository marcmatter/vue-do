<template>
  <div class="h-30 absolute top-full left-0 p-2 rounded-lg mt-2 bg-zinc-600">
    <ul>
      <li>
        <label>
          Priotity
          <select name="" >
            <option value="all">All</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        </label>
      </li>
      <li>
        <label>
          State
          <select name="" >
            <option value="all">All</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        </label>
      </li>
      <li>
        <label>
          Categorie
          <select name="" >
             <option v-for="category in todoStore.categories" :key="category.id" :value="category.id">{{ category.name }}</option>
          </select>
        </label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  import {useTodoStore} from "../stores/todo";

  const todoStore = useTodoStore();
</script>

<style scoped></style>
