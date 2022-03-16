import { defineStore } from 'pinia';
import { StorageMethod } from '../types/ConfigTypes';
import { SerializeStore } from '../types/Adapter';
import { LocalStorageAdapter } from '../adapters/localStorage';

export interface ConfigStore {
  storage: StorageMethod;
  isLoggedIn: boolean;
  username?: string;
  authenticationHash?: string;
  encryptionHash?: string;
}

export const useConfigStore = defineStore('configStore', {
  state: (): ConfigStore => {
    return {
      isLoggedIn: false,
      storage: StorageMethod.Unknown,

      username: undefined,
      authenticationHash: undefined,
      encryptionHash: undefined,
    };
  },

  actions: {
    useLocally() {
      this.storage = StorageMethod.Local;
      this.isLoggedIn = true;
    },
    logOut() {
      this.isLoggedIn = false;
      this.storage = StorageMethod.Unknown;
    },
  },
});

export const serializeConfigStore: SerializeStore<ConfigStore> = {
  serialize(store: ConfigStore): string {
    return JSON.stringify({
      ...store,
      storage: store.storage + 0,
    });
  },
  parse(input: string): ConfigStore | undefined {
    try {
      const parsed = JSON.parse(input);

      return {
        ...parsed,
        storage: StorageMethod[parsed],
      };
    } catch {
      return;
    }
  },
};

export const configStoreAdapter = new LocalStorageAdapter('vuedo:config', serializeConfigStore);
