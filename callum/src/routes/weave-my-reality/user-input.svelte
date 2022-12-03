<script lang="ts">
  import { buttonInlineC } from "./styles";

  import type { Line } from "./types";

  export let onSubmit: (inputValue: string) => void;
  export let onInput: (inputValue: string) => string;
  export let line: Line;

  let inputValue = "";
</script>

<form
  class="relative flex items-center"
  on:submit|preventDefault={() => onSubmit(inputValue)}
>
  <input
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
</form>
