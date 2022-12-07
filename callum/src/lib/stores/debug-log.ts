import type { MessageRecord } from "$lib/types";
import { writable } from "svelte/store";

const createDebug = () => {
  const { subscribe, update, set } = writable([] as MessageRecord[]);
  return {
    subscribe,
    log: (record: MessageRecord) =>
      update((store) => {
        store.push(record);
        return store;
      }),
    reset: () => set([]),
  };
};

export const debug = createDebug();
