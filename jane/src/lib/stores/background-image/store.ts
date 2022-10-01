import { writable, derived } from "svelte/store";

export const currentBgImage = writable("");
export const currentBgImageKey = derived(currentBgImage, ($currentBgImage) =>
  $currentBgImage.replaceAll(/[^a-zA-Z ]/g, "")
);
