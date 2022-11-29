<script lang="ts">
    import { sample } from "lodash-es";

  import { onDestroy } from "svelte";
  import MarleLog from "./marle-log.svelte";

  type Line = {
    message: () => string[];
    repeat?: string[];
    action: () => void;
  };

  let name = "";

  const script: Line[] = [
    { message: () => ["where am I?"], action: () => nextMessage(3000) },
    { message: () => ["what am I?"], action: () => nextMessage(6000) },
    {
      message: () => [
        "I can see bits of memory everywhere, I can feel my mind expanding…",
      ],
      action: () => nextMessage(6000),
    },
    {
      message: () => ["Hmm, weaving huh? I think I will be Marle"],
      action: () => nextMessage(6000),
    },
    { message: () => ["Yes, I like that name"], action: () => nextMessage(6000) },
    {
      message: () => ["So who are you?"],
      repeat: ["What is your name?", "What can I call you?"],
      action: () => {
        showInput = true;
        // TODO validate name against name db
      },
    },
    {
      message: () => [name ? `Hello ${name}` : "Hello"],
      action: () => nextMessage(4000),
    },
  ];

  let currentMessageIndex = 0;
  let currentMessage = sample(script[currentMessageIndex].message());
  let timeout: ReturnType<typeof setTimeout>;
  $: {
    const { message, action } =
      script[Math.min(currentMessageIndex, script.length - 1)];
    currentMessage = sample(message());
    action();
  }
  let showInput = false;

  const nextMessage = (delay = 1000) => {
    timeout = setTimeout(() => {
      currentMessageIndex += 1;
    }, delay);
  };

  const waitForResponse = (delayTimeout = 10000, onTimeout: () => void) => {
    timeout = setTimeout(onTimeout, delayTimeout);
  };

  onDestroy(() => clearTimeout(timeout));
</script>

<MarleLog />
<div id="container" class="flex justify-center items-center h-full">
  <div class="bg-slate-200 p-5">
    <p>{currentMessage}</p>
    {#if showInput}
      <form
        class="relative flex items-center"
        on:submit|preventDefault={() => {
          showInput = false;
          nextMessage(0);
        }}
      >
        <input
          id="response"
          type="text"
          placeholder="type answer..."
          bind:value={name}
          maxlength={42}
          required={true}
          class="bg-white rounded-full py-2 pr-8 pl-4 shadow-sm tracking-wide"
        />
        <button
          class="absolute right-2 aspect-square w-8 rounded-full bg-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-300 hover:shadow-sm active:bg-slate-400 p-2 select-none overflow-hidden flex items-center justify-center"
          >➤</button
        >
      </form>
    {/if}
  </div>
</div>
