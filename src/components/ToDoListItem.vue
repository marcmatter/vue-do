<template>
  <div class="todo-item">
    <div
      class="toggle"
      :class="{
        active: todoItem.state === TodoEntryState.Closed,
      }"
      @click="
        onPatch(
          todoItem.state === TodoEntryState.Open ? { state: TodoEntryState.Closed } : { state: TodoEntryState.Open }
        )
      "
    >
      <BaseIcon icon="check" />
    </div>
    <div class="content">
      <div class="row">
        <input
          class="title"
          :class="{
            done: todoItem.state === TodoEntryState.Closed,
          }"
          :value="todoItem.name"
          @keypress.enter="changeName"
          @blur="changeName"
          type="text"
        />
        <p
          v-if="todoItem.dueDate"
          class="due-date"
          :class="{
            expired: isPastDue,
            warning: isOnDue,
            done: todoItem.state === TodoEntryState.Closed,
          }"
        >
          Due
          <input :value="todoItem.dueDate.format('DD.MM.YYYY')" maxlength="10" type="text" />
        </p>
        <p v-else class="due-date">
          <input
            value="No due date"
            maxlength="10"
            @focus="(event) => (event.target.value = '')"
            @blur="(event) => (event.target.value = 'No due date')"
            @keypress.enter="(event) => event.target?.blur()"
            placeholder="dd.mm.yyyy"
            type="text"
          />
        </p>
      </div>
    </div>
    <BaseSelect
      class="mr-2 h-8"
      placeholderIcon="tags-f"
      :options="todoStore.categories.map((category) => ({ ...category, icon: 'tag' }))"
      :selectedOption="
        todoStore.getEntryCategory(todoItem.id)
          ? { ...todoStore.getEntryCategory(todoItem.id), icon: 'tag' }
          : undefined
      "
      :onChange="(event) => todoStore.addEntryToCategory(todoItem.id, parseInt(event.currentTarget.name))"
      :onRemove="(event) => todoStore.removeEntryFromCategory(todoItem.id)"
      data-cy="entryCategorySelect"
    />
    <BaseSelect
      class="h-8 w-52"
      :class="`priority${todoItem.priority}`"
      :options="todoStore.priorities"
      :selectedOption="todoStore.priorities.find((prio) => prio.id === todoItem.priority)"
      :onChange="changePriority"
      :showRemoveValue="false"
      data-cy="entryPrioritySelect"
    />
    <BaseIcon
      icon="close-circle"
      @click="onDelete()"
      class="mx-2 h-7 w-10 text-zinc-400 hover:text-zinc-700 dark:hover:text-white"
    />
  </div>
</template>

<script lang="ts" setup>
import { Dayjs } from '../utils';
import { TodoEntry, TodoEntryState } from '../types/Todo';
import { useTodoStore } from '../stores/todo';

const todoStore = useTodoStore();

const props = defineProps({
  todoItem: {
    required: true,
    type: Object as PropType<TodoEntry>,
  },
  onPatch: {
    required: true,
    type: Function as PropType<(fields: Partial<TodoEntry>) => any>,
  },
  onDelete: {
    required: true,
    type: Function as PropType<() => any>,
  },
});

const isPastDue = computed(() => props.todoItem.dueDate?.isBefore(Dayjs(), 'day'));
const isOnDue = computed(() => props.todoItem.dueDate?.isSame(Dayjs(), 'day'));

function changeName(event: KeyboardEvent | FocusEvent, shouldBlur = false) {
  if (!event || !event.target) return;

  const eventTarget = event.target as HTMLInputElement;
  const inputValue = eventTarget.value;

  if (!inputValue.length) {
    props.onDelete();
  } else {
    props.onPatch({ name: inputValue });
  }

  if (shouldBlur) {
    eventTarget.blur();
  }
}

function changePriority(event: KeyboardEvent | FocusEvent) {
  if (!event || !event.target) return;

  const eventTarget = event.currentTarget as HTMLInputElement;
  const inputValue = eventTarget.name;

  props.onPatch({ priority: parseInt(inputValue) });
}
</script>

<style lang="scss" scoped>
.todo-item {
  @apply flex w-full items-center border-b border-zinc-600 bg-zinc-100 px-3 dark:bg-zinc-800 md:p-0;

  .content {
    @apply ml-2 w-full py-2;

    .title {
      @apply w-full bg-transparent transition;

      &.done {
        @apply text-zinc-500 line-through;
      }
    }

    .due-date {
      @apply text-sm text-zinc-400 transition;

      input {
        @apply bg-transparent;
      }

      &.warning {
        @apply text-yellow-300;
      }

      &.expired {
        @apply text-red-400;
      }

      &.done {
        @apply text-zinc-500;
      }
    }
  }

  .toggle {
    @apply m-2 my-[1.125rem] flex h-6 w-6 shrink-0 rounded-full border border-zinc-500 transition;

    svg {
      @apply m-auto w-6 text-zinc-800 opacity-0;
    }

    &.active {
      @apply border-zinc-400 bg-zinc-400;

      svg {
        @apply opacity-100;
      }
    }
  }
}
.sortable-ghost {
  @apply relative;
  &::before {
    @apply absolute top-0 left-0 h-full w-full bg-zinc-200 content-[''] dark:bg-grey;
  }
}
.priority {
  &0 {
    @apply text-secondary;
  }
  &2 {
    @apply text-primary;
  }
}
</style>
