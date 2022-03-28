export interface SerializeStore<I> {
  serialize(store: I): string;
  parse(input: string): I | undefined;
}

export interface StoreAdapter<I> {
  save(content: I): boolean;
  load(): I | undefined;
}

export interface StoreAdapterConstructor<I> {
  new (name: string, serializer: SerializeStore<I>): StoreAdapter<I>;
}
