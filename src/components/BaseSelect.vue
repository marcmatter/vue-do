<template>
  <div
    :class="`
      relative block flex select-none rounded-lg border border-zinc-200 bg-zinc-100
      pl-2 outline-none focus-within:border-zinc-400 dark:border-zinc-600 dark:bg-zinc-700 focus-within:dark:border-zinc-500
    `"
  >
    <BaseIcon
      v-if="!_.get(autocomplete, 'selectedOption.icon') && placeholderIcon"
      :icon="placeholderIcon"
      :class="`my-auto h-6 w-6 flex-shrink-0 ${_.isEmpty(autocomplete.selectedOption) ? 'text-zinc-400' : ''}`"
    />
    <template v-for="element in options" :key="element.id">
      <BaseIcon
        v-if="element.id === _.get(autocomplete, 'selectedOption.id')"
        :icon="_.get(autocomplete, 'selectedOption.icon')"
        :class="`my-auto h-6 w-6 flex-shrink-0 ${_.isEmpty(autocomplete.selectedOption) ? 'text-zinc-400' : ''}`"
      />
    </template>
    <input
      :placeholder="placeholder"
      @focus="showAutoComplete"
      @blur="hideAutoComplete"
      autocomplete="off"
      :value="autocomplete.selectedOption.name"
      :class="`
        w-full bg-transparent py-2
        pl-2 text-zinc-800 focus:outline-none dark:text-white ${selectClass || ''}
      `"
    />
    <ul
      class="absolute top-0 left-0 z-10 w-full overflow-hidden rounded-lg border border-zinc-500 bg-zinc-700"
      :class="{ hidden: !autocomplete.show }"
    >
      <li v-for="element in options" :key="element.name">
        <button class="flex w-full gap-2 p-2 hover:bg-grey" :name="element.id" @click="selectOption">
          <BaseIcon v-if="element.icon" :icon="element.icon" />
          <span>{{ element.name }}</span>
        </button>
      </li>
    </ul>
    <BaseIcon
      v-if="showRemoveValue && autocomplete.selectedOption"
      icon="close"
      class="my-auto h-5 w-5 flex-shrink-0 text-zinc-400"
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
});

let autocomplete = reactive({
  show: false,
  selectedOption: props.selectedOption || {},
} as Autocomplete);

const showAutoComplete = () => {
  autocomplete.show = true;
};

const hideAutoComplete = () => {
  setTimeout(() => (autocomplete.show = false), 100);
};

const selectOption = (event) => {
  autocomplete.selectedOption = props.options.find((option: Option) => option.id == event.currentTarget.name);
  const optionsIds = props.options.map((option: Option) => option.id);

  if (autocomplete.selectedOption && optionsIds.includes(autocomplete.selectedOption.id)) {
    props.onChange && props.onChange(event);
  } else {
    autocomplete.selectedOption = undefined;
  }
};
</script>
