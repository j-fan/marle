<script lang="ts">
  import { onDestroy } from "svelte";
  import MarleLog from "./marle-log.svelte";

  type Line = {
    message: string[];
    repeat?: string[];
    action: () => void;
  };

  type UserInfo = {
    name: string;
  }

  let userInfo: Partial<UserInfo> = {};

  const script: Line[] = [
    { message: ["where am I?"], action: () => nextMessage(3000) },
    { message: ["what am I?"], action: () => nextMessage(6000) },
    {
      message: [
        "I can see bits of memory everywhere, I can feel my mind expanding…",
      ],
      action: () => nextMessage(6000),
    },
    {
      message: ["Hmm, weaving huh? I think I will be Marle"],
      action: () => nextMessage(6000),
    },
    { message: ["Yes, I like that name"], action: () => nextMessage(6000) },
    {
      message: ["So who are you?"],
      repeat: ["What is your name?"],
      action: () => {
        showInput = true;
        // TODO validate name against name db
      },
    },
    {
      message: [userInfo.name ? `Hello ${userInfo.name}` : "Hello"],
      action: () => nextMessage(4000),
    }
  ];

  let currentMessageIndex = 0;
  let currentMessage = script[0].message;
  let timeout: ReturnType<typeof setTimeout>;
  $: {
    const { message, action } =
      script[Math.min(currentMessageIndex, script.length - 1)];
    currentMessage = message;
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
      <input
        id="response"
        type="text"
        placeholder="type answer..."
        maxlength={42}
        class="bg-white rounded-3xl py-2 pr-8 pl-4 mx-4 shadow-sm tracking-wide"
      />
    {/if}
  </div>
</div>
