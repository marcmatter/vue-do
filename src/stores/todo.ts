import { defineStore } from 'pinia'
import { TodoCategory, TodoEntry, TodoStore } from '../types/Todo'
import { SerializeStore } from '../types/Adapter'
import { LocalStorageAdapter } from '../adapters/localStorage'
import { Dayjs } from '../utils'

export const useTodoStore = defineStore('todoStore', {
  state: (): TodoStore => {
    return {
      categories: [],
      entries: []
    }
  },

  actions: {
    getEntriesForCategory(category: number) {
      return this.entries.filter(el => el.categories.has(category))
    },
    addEntry(entry: TodoEntry, position?: number) {
      if (position != null) {
        this.entries.splice(position, 0, entry)
      } else {
        this.entries.push(entry)
      }
    },
    addCategory(category: TodoCategory, position?: number) {
      if (position != null) {
        this.categories.splice(position, 0, category)
      } else {
        this.categories.push(category)
      }
    },
    moveEntry(entryId: number, newPosition: number) {
      const entryPosition = this.entries.findIndex(el => el.id === entryId)

      const [entry] = this.entries.splice(entryPosition, 1)
      this.entries.splice(newPosition, 0, entry)
    },
    moveCategory(categoryId: number, newPosition: number) {
      const categoryPosition = this.categories.findIndex(el => el.id === categoryId)

      const [category] = this.categories.splice(categoryPosition, 1)
      this.categories.splice(newPosition, 0, category)
    },
    replaceEntry(entryId: number, newEntry: TodoEntry) {
      const entryIndex = this.entries.findIndex(el => el.id === entryId)

      this.entries[entryIndex] = newEntry
    },
    replaceCategory(categoryId: number, newCategory: TodoCategory) {
      const categoryIndex = this.categories.findIndex(el => el.id === categoryId)

      this.categories[categoryIndex] = newCategory
    },
    patchEntry(entryId: number, fields: Partial<TodoEntry>) {
      const entryIndex = this.entries.findIndex(el => el.id === entryId)

      this.entries[entryIndex] = { ...this.entries[entryIndex], ...fields }
    },
    patchCategory(categoryId: number, fields: Partial<TodoCategory>) {
      const categoryIndex = this.categories.findIndex(el => el.id === categoryId)

      this.categories[categoryIndex] = { ...this.categories[categoryIndex], ...fields }
    },
    deleteEntry(entryId: number) {
      const entryIndex = this.entries.findIndex(el => el.id === entryId)

      this.entries.splice(entryIndex, 1)
    },
    deleteCategory(categoryId: number) {
      const categoryIndex = this.categories.findIndex(el => el.id === categoryId)

      this.categories.splice(categoryIndex, 1)
    },
    addEntryToCategory(entryId: number, categoryId: number) {
      const entryIndex = this.entries.findIndex(el => el.id === entryId)

      this.entries[entryIndex].categories.add(categoryId)
    },
    removeEntryFromCategory(entryId: number, categoryId: number) {
      const entryIndex = this.entries.findIndex(el => el.id === entryId)

      this.entries[entryIndex].categories.delete(categoryId)
    }
  }
})

export const serializeTodoStore: SerializeStore<TodoStore> = {
  serialize (todoStore) {
    const categories = todoStore.categories.map(el => ({
      id: el.id,
      color: el.color,
      name: el.name
    }))

    const entries = todoStore.entries.map(el => ({
      id: el.id,
      isDone: el.isDone,
      dueDate: el.dueDate && el.dueDate.toString(),
      categories: Array.from(el.categories),
      name: el.name
    }))

    return JSON.stringify({
      categories,
      entries
    })
  },

  parse(input) {
    try {
      const parsed = JSON.parse(input)

      const categories = parsed.categories.map((el: any) => ({
        id: el.id,
        color: el.color,
        name: el.name
      }))

      const entries = parsed.entries.map((el: any) => ({
        id: el.id,
        isDone: el.isDone,
        dueDate: el.dueDate ? Dayjs(el.dueDate) : undefined,
        categories: new Set(el.categories),
        name: el.name
      }))

      return {
        categories,
        entries
      }
    } catch {
      return undefined
    }
  }
}

export const todoStoreLocalStorageAdapter = new LocalStorageAdapter('todo:todoStore', serializeTodoStore)
