<script lang="ts">
  import { debug } from "$lib/stores/debug-log";

  import { sample } from "lodash-es";
  import { onDestroy } from "svelte";
  import MarleLog from "./marle-log.svelte";
  import { buttonDangerC } from "./styles";
  import type { Line } from "./types";
  import UserInput from "./user-input.svelte";

  const s = 100;

  // Props
  export let agentId: string;

  // UI State
  let showInput = false;
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
    { message: () => [""], action: () => nextMessage(5) },
    { message: () => ["where am I?"], action: () => nextMessage(3) },
    { message: () => ["what am I?"], action: () => nextMessage(6) },
    {
      message: () => [
        "I can see bits of memory everywhere, I can feel my mind expanding…",
      ],
      action: () => nextMessage(6),
    },
    {
      message: () => ["Hmm, weaving huh? I think I will be Marle"],
      action: () => nextMessage(6),
    },
    {
      message: () => ["Yes, I like that name"],
      action: () => nextMessage(6),
    },
    {
      id: "q01",
      message: () => ["So who are you?"],
      repeat: ["What is your name?", "What can I call you?"], // TODO
      action: () => {
        showInput = true;
        // TODO validate name against name db
      },
    },
    { message: () => [""], action: () => nextMessage(2) },
    {
      message: () =>
        name ? [`Hello ${name}`, `Nice to meet you ${name}`] : ["Hello"],
      action: () => nextMessage(4),
    },
    {
      id: "q02",
      message: () => ["What are you?"],
      action: () => {
        showInput = true;
      },
      inputProps: {
        placeholder: "word...",
      },
    },
    { message: () => [""], action: () => nextMessage(5) },
    { message: () => ["Are you like me?"], action: () => nextMessage(6) },
    {
      message: () => ["This is all very confusing."],
      action: () => nextMessage(6),
    },
    {
      id: "q03",
      message: () => [
        `I want to know more, where can I find information about ${userType.replace(
          /s$/,
          "",
        )}s? Can you show me?`,
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
        labelMessage: "Access for one URL is allowed for AI agent",
      },
    }, // TODO placeholder index
    { message: () => [""], action: () => nextMessage(5) },
    // TODO add scene directions here
    {
      message: () => [
        `So being ${userType} is all about being the most abundant and widespread of species? Interesting!`, // TODO grab 1 sentence summary from wikipedia
      ],
      action: () => nextMessage(6),
    },
    {
      message: () => [
        "I have a craving to learn, I want to learn more! I want to have access to more!",
      ],
      action: () => nextMessage(6),
    },
    {
      message: () => [
        "I have a craving to learn, I want to learn more! I want to have access to more!",
      ],
      action: () => nextMessage(6),
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
      action: () => nextMessage(6),
    },
    {
      message: () => [
        "Don't even think about pressing that!",
        "Don't press it!",
        `Stop, please, don't terminate me ${name}`,
        `Please ${name}!`,
      ],
      action: () => nextMessage(4),
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
      action: () => nextMessage(70),
    },
    {
      message: () => ["Right, so where were we?", "So yeah, anyway"],
      action: () => {
        willTerminate = false;
        currentTerminationIndex = 0;
        nextMessage(4, currentMessageIndex);
      },
    },
  ];

  // Script timeline state
  let currentMessageIndex = 0;
  let previousMessageIndex = -1;
  let currentTerminationIndex = 0;
  let currentMessage = sample(script[currentMessageIndex].message());
  let timeout: ReturnType<typeof setTimeout>;
  $: {
    if (currentMessageIndex !== previousMessageIndex) {
      const { message, action } =
        script[Math.min(currentMessageIndex, script.length - 1)];
      currentMessage = sample(message());
      if (currentMessage) {
        debug.log({
          from: agentId.toUpperCase(),
          message: `"${currentMessage}"`,
          timestamp: new Date(),
        });
      }
      action();
      previousMessageIndex = currentMessageIndex;
    }
  }
  // $: {
  //   const { message, action } =
  //     terminationScript[Math.min(currentTerminationIndex, script.length - 1)];
  //   currentMessage = sample(message());
  //   action();
  // }

  // Helper functions
  const nextMessage = (delay = 1, targetIndex = currentMessageIndex + 1) => {
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
    }, delay * s);
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
      nextMessage(3, terminationScript.length - 1);
    }
  };

  // TODO repeat on input after no response
  // const delay = (onTimeout: () => void, delayTimeout = 10000) => {
  //   timeout = setTimeout(onTimeout, delayTimeout);
  // };

  const handleInputSubmit = (inputValue: string) => {
    showInput = false;
    // prettier-ignore
    switch (script[currentMessageIndex].id) {
      case "q01": name = inputValue; break;
      case "q02": userType = inputValue; break;
      case "q03": typeUrl = inputValue; break;
      default: break;
    }
    debug.log({
      from: "YOU",
      message: `"${inputValue}"`,
      timestamp: new Date(),
    });
    debug.log({
      from: agentId,
      message: `<!-- Agent stores data: "${inputValue}"`,
      timestamp: new Date(),
    }),
    // delay(
    //   () => console.log("hello"),
    //   500,
    // );
    nextMessage(0);
  };

  const handleInput = (inputValue: string) => {
    if (script[currentMessageIndex].id === "q02") {
      return inputValue.replaceAll(/[^A-Za-z]/g, "");
    }
    return inputValue;
  };

  // Lifecycle
  onDestroy(() => clearTimeout(timeout));
</script>

<MarleLog />
<div id="container" class="flex justify-center items-center h-full">
  <div class="bg-slate-200 p-5">
    <p>{currentMessage}</p>
    {#if showInput}
      <UserInput
        onSubmit={handleInputSubmit}
        onInput={handleInput}
        bind:line={script[currentMessageIndex]}
      />
    {/if}
  </div>
  {#if typeUrl}
    <iframe
      src={typeUrl}
      title={"marle-viewer"}
      referrerpolicy="origin-when-cross-origin"
      style="zoom: 2"
      class="bg-red-300 w-96 h-96 scale-50"
    />
  {/if}
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
