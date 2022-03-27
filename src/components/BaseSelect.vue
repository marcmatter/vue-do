<template>
  <div
    :class="`
      relative block flex select-none rounded-lg border border-zinc-200 bg-zinc-100
      pl-2 outline-none focus-within:border-zinc-400 dark:border-zinc-600 dark:bg-zinc-700 focus-within:dark:border-zinc-500
    `"
  >
    <BaseIcon
      v-if="!_.get(select, 'selectedOption.icon') && placeholderIcon"
      :icon="placeholderIcon"
      :class="`my-auto h-6 w-6 flex-shrink-0 ${_.isEmpty(select.selectedOption) ? 'text-zinc-400' : ''}`"
    />
    <template v-for="element in options" :key="element.id">
      <BaseIcon
        v-if="element.id === _.get(select, 'selectedOption.id')"
        :icon="_.get(select, 'selectedOption.icon')"
        :class="`my-auto h-6 w-6 flex-shrink-0 ${_.isEmpty(select.selectedOption) ? 'text-zinc-400' : ''}`"
      />
    </template>
    <input
      :placeholder="placeholder"
      @focus="showAutoComplete"
      @blur="hideAutoComplete"
      autocomplete="off"
      :value="select.selectedOption ? select.selectedOption.name : ''"
      :class="`
        w-full bg-transparent py-2
        pl-2 text-zinc-800 focus:outline-none dark:text-white ${selectClass || ''}
      `"
    />
    <ul
      class="absolute top-0 left-0 z-10 w-full overflow-hidden rounded-lg border border-zinc-500 bg-zinc-100 dark:bg-zinc-700"
      :class="{ hidden: !select.show }"
    >
      <li v-for="element in options" :key="element.name">
        <button
          class="flex w-full gap-2 p-2 text-black hover:bg-zinc-200 dark:text-white dark:hover:bg-grey"
          :name="element.id"
          @click="selectOption"
        >
          <BaseIcon v-if="element.icon" :icon="element.icon" />
          <span>{{ element.name }}</span>
        </button>
      </li>
    </ul>
    <BaseIcon
      v-if="showRemoveValue && select.selectedOption"
      icon="close"
      class="my-auto h-5 w-5 flex-shrink-0 text-zinc-400"
      @click="removeSelectedOption"
    />
    <BaseIcon icon="triangle-f" class="my-auto mr-2 h-3 w-3 flex-shrink-0 rotate-180 text-zinc-400" />
  </div>
</template>

<script lang="ts" setup>
import _ from 'lodash';

interface Option {
  id: number;
  name: string;
  icon?: string;
}
interface Autocomplete {
  show: boolean;
  selectedOption?: Option;
}

const props = defineProps({
  options: {
    type: Array as PropType<Option[]>,
    required: true,
  },
  selectedOption: {
    type: Object as PropType<Option>,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  placeholderIcon: {
    type: String,
    required: false,
  },
  showRemoveValue: {
    type: Boolean,
    default: true,
  },
  iconClass: {
    type: String,
    required: false,
  },
  selectClass: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
  onChange: {
    type: Function as PropType<(payload: Event) => void>,
    required: false,
  },
  onRemove: {
    type: Function as PropType<(payload: Event) => void>,
    required: false,
  },
});

const select = reactive({
  show: false,
  selectedOption: props.selectedOption || {},
} as Autocomplete);

const showAutoComplete = () => {
  select.show = true;
};

const hideAutoComplete = () => {
  setTimeout(() => (select.show = false), 100);
};

const selectOption = (event) => {
  select.selectedOption = props.options.find((option: Option) => option.id == event.currentTarget.name);
  const optionsIds = props.options.map((option: Option) => option.id);

  if (select.selectedOption && optionsIds.includes(select.selectedOption.id)) {
    props.onChange && props.onChange(event);
  } else {
    select.selectedOption = undefined;
  }
};

const removeSelectedOption = (event) => {
  select.selectedOption = undefined;
  props.onRemove && props.onRemove(event);
};
</script>