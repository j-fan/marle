import { onDestroy } from "svelte";

export const onInterval = (callback: () => void, milliseconds: number) => {
  const interval = setInterval(callback, milliseconds);

  onDestroy(() => {
    clearInterval(interval);
  });
};

export function utf8_to_b64(str: string) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

export function b64_to_utf8(str: string) {
  return decodeURIComponent(escape(window.atob(str)));
}
