import { defineStore } from 'pinia';
import { TodoCategory, TodoEntry, TodoEntryState, TodoEntryToCategory } from '../types/Todo';

export interface TodoStore {
  categories: TodoCategory[];
  entries: TodoEntry[];

  entriesToCategories: TodoEntryToCategory[];
}

export const useTodoStore = defineStore('todoStore', {
  state: (): TodoStore => {
    return {
      categories: [],
      entries: [
        {
          state: TodoEntryState.Open,
          name: 'Deine Mutter ficken',
          id: 0,
        },
        {
          state: TodoEntryState.Closed,
          name: 'Deine Schwester ficken',
          id: 1,
        },
        {
          state: TodoEntryState.Open,
          name: 'Deine Tante ficken',
          id: 2,
        },
        {
          state: TodoEntryState.Open,
          name: 'Deine Cousine ficken',
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
