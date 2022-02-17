export interface SerializeStore<I> {
  serialize(store: I): string;
  parse(input: string): I | undefined;
}

export abstract class StoreAdapter<I> {
  // protected constructor(name: string, serializer: SerializeStore<I>) {}
  abstract save(content: I): boolean;
  abstract load(): I | undefined;
}
