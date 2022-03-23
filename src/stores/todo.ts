import { defineStore } from 'pinia';
import { TodoCategory, TodoEntry, TodoEntryPriority, TodoEntryState, TodoEntryToCategory } from '../types/Todo';
import { LocalStorageAdapter } from '../adapters/localStorage';
import { Dayjs } from '../utils';
import { SerializeStore } from '../types/Adapter';

export interface TodoStore {
  categories: TodoCategory[];
  entries: TodoEntry[];

  entriesToCategories: TodoEntryToCategory[];
}

export const useTodoStore = defineStore('todoStore', {
  state: (): TodoStore => {
    return {
      categories: [
        {
          id: 0,
          name: 'School',
        },
        {
          id: 1,
          name: 'Work',
        },
        {
          id: 2,
          name: 'Private',
        },
      ],
      entries: [
        {
          state: TodoEntryState.Open,
          priority: TodoEntryPriority.Medium,
          name: 'Lorem ipsum',
          id: 0,
        },
        {
          state: TodoEntryState.Closed,
          priority: TodoEntryPriority.Low,
          name: 'Data elpate',
          id: 1,
        },
        {
          state: TodoEntryState.Open,
          priority: TodoEntryPriority.Medium,
          name: 'sindo mesodo',
          id: 2,
        },
        {
          state: TodoEntryState.Open,
          priority: TodoEntryPriority.High,
          name: 'Olvane sitoro',
          id: 3,
        },
      ],

      entriesToCategories: [],
    };
  },

  actions: {
    getEntriesForCategory(categoryId: number) {
      const entryIds = this.entriesToCategories.filter((el) => el.categoryId === categoryId).map((el) => el.entryId);

      return this.entries.filter((el) => entryIds.includes(el.id));
    },
    addEntry(entry: TodoEntry, position?: number) {
      if (position != null) {
        this.entries.splice(position, 0, entry);
      } else {
        this.entries.push(entry);
      }
    },
    addCategory(category: TodoCategory, position?: number) {
      if (position != null) {
        this.categories.splice(position, 0, category);
      } else {
        this.categories.push(category);
      }
    },
    moveEntry(entryId: number, newPosition: number) {
      const entryPosition = this.entries.findIndex((el) => el.id === entryId);

      const [entry] = this.entries.splice(entryPosition, 1);
      this.entries.splice(newPosition, 0, entry);
    },
    moveCategory(categoryId: number, newPosition: number) {
      const categoryPosition = this.categories.findIndex((el) => el.id === categoryId);

      const [category] = this.categories.splice(categoryPosition, 1);
      this.categories.splice(newPosition, 0, category);
    },
    replaceEntry(entryId: number, newEntry: TodoEntry) {
      const entryIndex = this.entries.findIndex((el) => el.id === entryId);

      this.entries[entryIndex] = newEntry;
    },
    replaceCategory(categoryId: number, newCategory: TodoCategory) {
      const categoryIndex = this.categories.findIndex((el) => el.id === categoryId);

      this.categories[categoryIndex] = newCategory;
    },
    patchEntry(entryId: number, fields: Partial<TodoEntry>) {
      const entryIndex = this.entries.findIndex((el) => el.id === entryId);

      this.entries[entryIndex] = { ...this.entries[entryIndex], ...fields };
    },
    patchCategory(categoryId: number, fields: Partial<TodoCategory>) {
      const categoryIndex = this.categories.findIndex((el) => el.id === categoryId);

      this.categories[categoryIndex] = {
        ...this.categories[categoryIndex],
        ...fields,
      };
    },
    deleteEntry(entryId: number) {
      const entryIndex = this.entries.findIndex((el) => el.id === entryId);

      this.entries.splice(entryIndex, 1);
    },
    deleteCategory(categoryId: number) {
      const categoryIndex = this.categories.findIndex((el) => el.id === categoryId);

      this.categories.splice(categoryIndex, 1);
    },
    addEntryToCategory(entryId: number, categoryId: number) {
      const hasExisting = this.entriesToCategories.some((el) => el.categoryId === categoryId && el.entryId === entryId);

      if (!hasExisting) {
        this.entriesToCategories.push({
          categoryId,
          entryId,
        });
      }
    },
    removeEntryFromCategory(entryId: number, categoryId: number) {
      const existingEntryIndex = this.entriesToCategories.findIndex(
        (el) => el.categoryId === categoryId && el.entryId === entryId
      );

      if (existingEntryIndex !== -1) {
        this.entriesToCategories.splice(existingEntryIndex, 1);
      }
    },
  },
});

export const serializeTodoStore: SerializeStore<TodoStore> = {
  serialize(todoStore) {
    const categories = todoStore.categories.map((el) => ({
      ...el,
      createdAt: el.createdAt?.toString(),
      modifiedAt: el.modifiedAt?.toString(),
      deletedAt: el.deletedAt?.toString(),
    }));

    const entries = todoStore.entries.map((el) => ({
      ...el,
      dueDate: el.dueDate?.toString(),
      createdAt: el.createdAt?.toString(),
      modifiedAt: el.modifiedAt?.toString(),
      deletedAt: el.deletedAt?.toString(),
    }));

    const entriesToCategories = todoStore.entriesToCategories.map((el) => ({
      ...el,
    }));

    return JSON.stringify({
      categories,
      entries,

      entriesToCategories,
    });
  },

  parse(input) {
    try {
      const parsed = JSON.parse(input);

      const categories = parsed.categories.map(
        (el: any) =>
          ({
            ...el,
            createdAt: el.createdAt && Dayjs(el.createdAt),
            modifiedAt: el.modifiedAt && Dayjs(el.modifiedAt),
            deletedAt: el.deletedAt && Dayjs(el.deletedAt),
          } as TodoCategory)
      );

      const entries = parsed.entries.map(
        (el: any) =>
          ({
            ...el,
            dueDate: el.dueDate && Dayjs(el.dueDate),
            createdAt: el.createdAt && Dayjs(el.createdAt),
            modifiedAt: el.modifiedAt && Dayjs(el.modifiedAt),
            deletedAt: el.deletedAt && Dayjs(el.deletedAt),
          } as TodoEntry)
      );

      const entriesToCategories = parsed.entriesToCategories.map(
        (el: any) =>
          ({
            ...el,
          } as TodoEntryToCategory)
      );

      return {
        categories,
        entries,

        entriesToCategories,
      };
    } catch {
      return undefined;
    }
  },
};

export const todoStoreAdapter = new LocalStorageAdapter('vuedo:todo', serializeTodoStore);
