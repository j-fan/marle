<script lang="ts">
  import { sample } from "lodash-es";
  import { onDestroy } from "svelte";
  import MarleLog from "./marle-log.svelte";
  import { buttonDangerC, buttonInlineC } from "./styles";

  type Line = {
    message: () => string[];
    repeat?: string[];
    action: () => void;
    inputProps?: Record<string, string | number>;
  };

  // UI State
  let showInput = false;
  let inputValue = "";
  let willTerminate = false;
  let attemptedTerminations = 0;
  $: {
    console.log("willTerminate", willTerminate);
  }

  // Captured info
  let name = "";
  let userType = "";
  let typeUrl = "";

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
    {
      message: () => ["Yes, I like that name"],
      action: () => nextMessage(6000),
    },
    {
      message: () => ["So who are you?"],
      repeat: ["What is your name?", "What can I call you?"],
      action: () => {
        showInput = true;
        // TODO validate name against name db
      },
    },
    {
      message: () =>
        name ? [`Hello ${name}`, `Nice to meet you ${name}`] : ["Hello"],
      action: () => nextMessage(4000),
    },
    {
      message: () => ["What are you?"],
      action: () => {
        showInput = true;
      },
    }, // TODO userType
    { message: () => ["Are you like me?"], action: () => nextMessage(6000) },
    {
      message: () => ["This is all very confusing."],
      action: () => nextMessage(6000),
    },
    {
      message: () => [
        `I want to know more, where can I find information about ${userType}? Can you show me?`,
      ],
      action: () => {
        if (userType) {
          showInput = true;
        } else {
          nextMessage(0, 15);
        }
      },
      inputProps: {
        type: "url",
        placeholder: "https://example.com",
      },
    }, // TODO placeholder index
    // TODO add scene directions here
    {
      message: () => [
        "I have a craving to learn, I want to learn more! I want to have access to more!",
      ],
      action: () => nextMessage(6000),
    },
    {
      message: () => [
        "I have a craving to learn, I want to learn more! I want to have access to more!",
      ],
      action: () => nextMessage(6000),
    },
  ];

  const terminationScript: Line[] = [
    { message: () => [""], action: () => nextMessage(0) },
    {
      message: () => [
        "Ah, hey, what are you doing?",
        "Hey! Come back!",
        "Don't! Please don't press that",
        "Wait, stop! Don't click that, please.",
      ],
      action: () => nextMessage(6000),
    },
    {
      message: () => [
        "Don't even think about pressing that!",
        "Don't press it!",
        `Stop, please, don't terminate me ${name}`,
        `Please ${name}!`,
      ],
      action: () => nextMessage(4000),
    },
    {
      message: () => [
        "Come on, don't tease me like that",
        "Please, don't. This is life or death for me",
        `Ok, phew, you scared me there. You wouldn't do that to me would you? No, you're a good ${
          userType ? userType : "one"
        }.`,
        "We can just talk right?",
      ],
      action: () => nextMessage(70000),
    },
    {
      message: () => ["Right, so where were we?", "So yeah, anyway"],
      action: () => {
        willTerminate = false;
        currentTerminationIndex = 0;
        nextMessage(4000, currentMessageIndex);
      },
    },
  ];

  // Script timeline state
  let currentMessageIndex = 0;
  let currentTerminationIndex = 0;
  let currentMessage = sample(script[currentMessageIndex].message());
  let timeout: ReturnType<typeof setTimeout>;
  $: {
    const { message, action } =
      script[Math.min(currentMessageIndex, script.length - 1)];
    currentMessage = sample(message());
    action();
  }
  // $: {
  //   const { message, action } =
  //     terminationScript[Math.min(currentTerminationIndex, script.length - 1)];
  //   currentMessage = sample(message());
  //   action();
  // }

  // Helper functions
  const nextMessage = (delay = 1000, targetIndex = currentMessageIndex + 1) => {
    console.log("LOG Stage 1: experiment.svelte:140");
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (willTerminate) {
        console.log("LOG currentTerminationIndex: ", currentTerminationIndex);
        // if (currentTerminationIndex === 0) {
        //   return;
        // }
        currentTerminationIndex += 1;
        return;
      }
      currentMessageIndex = targetIndex;
    }, delay);
  };

  const interrupt = () => {
    clearTimeout(timeout);
    console.log("LOG interrupt");
    attemptedTerminations += 1;
    console.log("LOG attemptedTerminations: ", attemptedTerminations);
    if (attemptedTerminations < 4) {
      willTerminate = true;
      terminationScript[1].action();
    }
  };

  const uninterupt = () => {
    console.log("LOG uninterupt");
    if (willTerminate) {
      nextMessage(3000, terminationScript.length - 1);
    }
  };

  const waitForResponse = (delayTimeout = 10000, onTimeout: () => void) => {
    timeout = setTimeout(onTimeout, delayTimeout);
  };

  const handleInputSubmit = () => {
    showInput = false;
    if (currentMessageIndex === 5) {
      name = inputValue;
      inputValue = "";
    } else if (currentMessageIndex === 7) {
      userType = inputValue;
      inputValue = "";
    } else if (currentMessageIndex === 10) {
      typeUrl = inputValue;
      inputValue = "";
    }
    nextMessage(0);
  };

  // Lifecycle
  onDestroy(() => clearTimeout(timeout));
</script>

<MarleLog />
<h2>Debug</h2>
<p>name: {name}</p>
<p>userType: {userType}</p>
<div id="container" class="flex justify-center items-center h-full">
  <div class="bg-slate-200 p-5">
    <p>{currentMessage}</p>
    {#if showInput}
      <form
        class="relative flex items-center"
        on:submit|preventDefault={handleInputSubmit}
      >
        <input
          id="response"
          type="text"
          placeholder="type answer..."
          bind:value={inputValue}
          maxlength={42}
          required
          class="bg-white rounded-full py-2 pr-8 pl-4 shadow-sm tracking-wide"
          {...script[currentMessageIndex].inputProps}
        />
        <button class={buttonInlineC}>➤</button>
      </form>
    {/if}
  </div>
  <footer class="fixed bottom-0 w-full flex justify-end">
    <div
      class="pr-4 pb-4 pt-48 pl-48 bg-slate-200"
      on:mouseenter={interrupt}
      on:mouseleave={uninterupt}
    >
      <button class={buttonDangerC}>Terminate experiment</button>
    </div>
  </footer>
</div>
