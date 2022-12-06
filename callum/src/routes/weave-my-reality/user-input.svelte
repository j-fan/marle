<script lang="ts">
  import { onMount } from "svelte";

  import { buttonInlineC } from "./styles";

  import type { Line } from "./types";

  export let onSubmit: (inputValue: string) => void;
  export let onInput: (inputValue: string) => string;
  export let line: Line;
  export let inputRef: HTMLInputElement | null = null;

  let inputValue = "";
  $: isLocked = line.id === "q04";

  onMount(() => {
    if (!isLocked) {
      inputRef?.focus();
    }
  });
</script>

<form
  id="input-form"
  class="relative flex items-center justify-center flex-col border border-red-500"
  class:border={line.inputProps?.labelMessage}
  class:border-red-500={line.inputProps?.labelMessage}
  on:submit|preventDefault={() => onSubmit(inputValue)}
>
  <div
    class="relative flex items-center"
    class:my-6={line.inputProps?.labelMessage}
  >
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
      required={undefined}
      class="bg-white rounded-full py-2 pr-8 pl-4 shadow-sm tracking-wide"
      {...line.inputProps}
    />
    <button class={buttonInlineC}>➤</button>
  </div>
  {#if line.inputProps?.labelMessage}
    <p
      class="w-full bg-red-100 border-t border-red-500 text-red-700 px-4 py-3"
      role="alert"
    >
      {line.inputProps.labelMessage}
    </p>
  {/if}
</form>
