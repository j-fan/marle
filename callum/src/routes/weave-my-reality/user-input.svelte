<script lang="ts">
  import { onMount } from "svelte";

  import { buttonInlineC } from "./styles";

  import type { Line } from "./types";

  export let onSubmit: (inputValue: string) => void;
  export let onInput: (inputValue: string) => string;
  export let line: Line;

  export let inputValue = line?.inputProps?.inputValue || "";
  let inputRef: HTMLInputElement;
  $: isLocked = line.id === "q04";

  // const action = (node) => {
  //   return {
  //     destroy() {
  //       lockDeleted = true
  //     }
  //   }
  // }

  onMount(() => {
    if (!isLocked) {
      inputRef.focus();
    }
  });
</script>

<form
  class="relative flex items-center justify-center flex-col border border-red-500"
  class:border={line.inputProps?.labelMessage}
  class:border-red-500={line.inputProps?.labelMessage}
  on:submit|preventDefault={() => onSubmit(inputValue)}
>
  {#if isLocked}
    <div
      id="lock"
      class="absolute inset-0 z-10 bg-red-700/50 font-bold flex items-center justify-center"
    >
      ⛔︎ LOCKED ⛔︎
    </div>
  {/if}
  <div class="relative flex items-center my-6">
    <input
      bind:this={inputRef}
      id="response"
      type="text"
      placeholder="type answer..."
      bind:value={inputValue}
      on:input={() => {
        inputValue = onInput(inputValue);
      }}
      maxlength={42}
      required
      class="bg-white rounded-full py-2 pr-8 pl-4 shadow-sm tracking-wide"
      {...line.inputProps}
    />
    <button class={buttonInlineC}>➤</button>
  </div>
  {#if line.inputProps?.labelMessage}
    <p
      class="w-full bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3"
      role="alert"
    >
      {line.inputProps.labelMessage}
    </p>
  {/if}
</form>
