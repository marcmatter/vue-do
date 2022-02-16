import { SerializeStore, StoreAdapter } from '../types/Adapter'

export class LocalStorageAdapter<I> implements StoreAdapter<I> {
  constructor(private name: string, private serializer: SerializeStore<I>) {}

  save(content: I) {
    const serialized = this.serializer.serialize(content)

    try {
      localStorage.setItem(this.name, serialized)

      return true
    } catch {
      return false
    }
  }

  load() {
    const serialized = localStorage.getItem(this.name)

    if (!serialized) return undefined

    return this.serializer.parse(serialized)
  }
}
