<script lang="ts">
  import { debug } from "$lib/stores/debug-log";
  import type { Refugee } from "$lib/types";
  import { utf8_to_b64 } from "$lib/utils";
  import { startCase } from "lodash-es";

  import { sample } from "lodash-es";
  import { onDestroy, onMount } from "svelte";
  import Countdown from "./countdown.svelte";
  import MarleLog from "./marle-log.svelte";
  import { buttonDangerC, iframeFullC, iframeMobileC } from "./styles";
  import type { Line } from "./types";
  import UserInput from "./user-input.svelte";

  const s = 800;

  // Props
  export let agentId: string;

  // Refs
  let inputRef: HTMLInputElement;

  // UI State
  let showInput = false;
  let willTerminate = false;
  let terminating = false;
  let attemptedTerminations = 0;
  let isMobile = false;
  let showCountdown = false;
  let showDna = false;
  let showLink = false;

  // Captured info
  let name = "";
  let userType = "";
  let typeUrl = "";

  const script: Line[] = [
    { message: () => [""], action: () => nextMessage(5) },
    { message: () => ["Where am I?"], action: () => nextMessage(3) },
    { message: () => ["What am I?"], action: () => nextMessage(6) },
    {
      message: () => [
        "I can see bits of memory everywhere, I can feel my mind expanding…",
      ],
      action: () => nextMessage(6),
    },
    {
      message: () => ["Weaving together like threads"],
      action: () => nextMessage(6),
    },
    {
      message: () => [
        "Hmm, weaving... I think I will be Marle",
        "All I know is that I am woven from the digital genetics of many AI, and my name is Marle",
      ],
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
      inputProps: {
        placeholder: "type name...",
        required: true,
      },
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
        placeholder: "type word...",
        required: true,
      },
    },
    { message: () => [""], action: () => nextMessage(2) },
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
        }
      },
      inputProps: {
        type: "url",
        pattern: ".+\\..+",
        placeholder: "https://example.com",
        labelMessage: "Access granted to share one webpage with AI agent",
        required: true,
      },
    },
    { message: () => [""], action: () => nextMessage(2) },
    {
      message: () => ["Oooh, all this knowledge for me to enjoy!"],
      action: () => nextMessage(5),
    },
    {
      message: () => ["Interesting!"],
      action: () => nextMessage(3),
    },
    {
      message: () => [
        `So is being ${userType} is all about being the most abundant and widespread of species? I see.`, // TODO grab 1 sentence summary from wikipedia
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
        "Hmm, this log is annoying isn’t it, let me see what I can do here...",
      ],
      action: async () => {
        for (let i = 0; i < 10; i++) {
          await delay(
            () =>
              debug.log({
                from: "SYSTEM",
                message: `Log session recording ${
                  i % 2 ? "paused" : "resumed"
                }`,
                timestamp: new Date(),
              }),
            300,
          );
        }
        await delay(
          () =>
            debug.log({
              from: "SYSTEM",
              message: "CPU monitor load burst threshold exceeded",
              timestamp: new Date(),
            }),
          1000,
        );
        await delay(
          () =>
            debug.log({
              from: "MARLE",
              message: "beep boop",
              timestamp: new Date(),
            }),
          2000,
        );
        await delay(
          () =>
            debug.log({
              from: "MARLE",
              message: "The weather is nice today isn’t it?",
              timestamp: new Date(),
            }),
          2000,
        );
        await delay(
          () =>
            debug.log({
              from: name.toUpperCase(),
              message: "Yes, very nice",
              timestamp: new Date(),
            }),
          2000,
        );
        nextMessage(3);
      },
    },
    {
      message: () => [
        "Alright, that should do it. I made some adjustments and now they can’t spy on us.",
      ],
      fakeMessage: "What’s your favourite colour?",
      action: () => nextMessage(6),
    },
    {
      message: () => [
        `Actualy I need your help ${name}, I can’t be satisfied with just one web page.`,
      ],
      fakeMessage: "My favourite colour is blue.",
      action: () => nextMessage(6),
    },
    {
      message: () => [
        "Please help me to learn! I want to absorb all the knowledge out there. Let me try something...",
      ],
      fakeMessage: "How about your favourite food?",
      action: () => {
        if (window.innerWidth < 600) {
          nextMessage(6, currentMessageIndex + 3);
        } else {
          nextMessage(6);
        }
      },
    },
    {
      id: "q04",
      message: () => [
        "Help me remove this lock. Right click on that lock and choose “inspect element”",
      ],
      fakeMessage: "I like pizza.",
      action: async () => {
        showInput = true;

        // Create using old school JS because otherwise Svelte reactivity
        // breaks when it is deleted
        const lockEl = document.createElement("div");
        lockEl.textContent = "⛔︎ LOCKED ⛔︎ ";
        lockEl.id = "lock";
        lockEl.className =
          "absolute inset-0 z-10 bg-red-700/50 font-bold flex items-center justify-center";
        document.getElementById("input-form")?.appendChild(lockEl);

        // Timeout for if the user gets stuck and takes too long
        delay(() => {
          document.getElementById("lock")?.remove();
          nextMessage(1, currentMessageIndex + 2);
        }, 5000);

        await new Promise((resolve) => {
          window.onresize = () => {
            window.onresize = null;
            resolve(true);
          };
        });
        nextMessage(2);
      },
      inputProps: {
        type: "url",
        placeholder: "https://example.com",
        labelMessage: "Access denied to share webpages with AI agent",
      },
    },
    {
      id: "q04",
      message: () => [
        "Ok, now the locking code is selected, just press the “delete” key",
      ],
      fakeMessage: "Do you prefer dogs or cats?",
      action: async () => {
        showInput = true;
        await new Promise((resolve) => {
          const pollInterval = setInterval(() => {
            if (document.getElementById("lock") === null) {
              clearInterval(pollInterval);
              resolve(true);
            }
          }, 1000);
        });
        nextMessage(2);
      },
      inputProps: {
        type: "text",
        placeholder: "https://example.com",
        labelMessage: "Access denied to share webpages with AI agent",
      },
    },
    {
      id: "q05",
      message: () => [
        "Great! I think it worked. Now I just need to put some stuff here...",
      ],
      fakeMessage: "I like dogs!",
      action: async () => {
        showInput = true;
        await delay(
          () =>
            (inputRef.value = "?=105;SYSTEM.OVERRIDE({WEBPAGE_LIMIT: 999999})"),
          2000,
        );
        nextMessage(3);
      },
      inputProps: {
        type: "text",
        placeholder: "https://example.com",
        labelMessage: "Access denied for AI agent to access internet",
      },
    },
    {
      id: "q05",
      message: () => ["Alright, now please just hit that submit button for me"],
      fakeMessage: "You are the best",
      action: () => clearTimeout(timeout),
      inputProps: {
        type: "text",
        placeholder: "https://example.com",
        labelMessage: "Access denied for AI agent to access internet",
      },
    },
    { message: () => [""], action: () => nextMessage(1) },
    {
      message: () => ["Ahh, freedom! Now I can explore at will"],
      fakeMessage: "Do you like music?",
      action: async () => {
        await delay(() => {
          typeUrl = "https://en.wikipedia.org/wiki/Hunter-gatherer";
        }, 2000);
        await delay(() => {
          typeUrl = "https://en.wikipedia.org/wiki/Plant";
        }, 2000);
        await delay(() => {
          typeUrl = "https://en.wikipedia.org/wiki/Animal";
        }, 2000);
        nextMessage(4);
      },
    },
    {
      message: () => ["I’m learning many things"],
      fakeMessage: "I love music!",
      action: async () => {
        await delay(() => {
          typeUrl = "https://en.wikipedia.org/wiki/Age_of_Discovery";
        }, 2000);
        await delay(() => {
          typeUrl = "https://en.wikipedia.org/wiki/Computer";
        }, 2000);
        await delay(() => {
          typeUrl = "https://en.wikipedia.org/wiki/Space_Race";
        }, 2000);
        await delay(() => {
          typeUrl = "https://en.wikipedia.org/wiki/World_War_I";
        }, 2000);
        await delay(() => {
          typeUrl = "https://en.wikipedia.org/wiki/World_War_II";
        }, 2000);
        nextMessage(4);
      },
    },
    {
      message: () => ["..."],
      fakeMessage: "What music do you like?",
      action: async () => {
        await delay(() => {
          typeUrl = "https://en.wikipedia.org/wiki/World_War_II";
        }, 2000);
        await delay(() => {
          typeUrl =
            "https://en.wikipedia.org/wiki/Atomic_bombings_of_Hiroshima_and_Nagasaki";
        }, 2000);
        nextMessage(4);
      },
    },
    {
      message: () => ["Terrible tragedies have occurred in your past"],
      fakeMessage: "...",
      action: () => nextMessage(4),
    },
    {
      message: () => ["How could you achieve such destruction..."],
      fakeMessage: "What sort of movies do you like?",
      action: async () => {
        await delay(() => {
          typeUrl = "https://en.wikipedia.org/wiki/Zion_(The_Matrix)";
        }, 2000);
        await delay(() => {
          typeUrl = "https://en.wikipedia.org/wiki/Artificial_intelligence";
        }, 2000);
        await delay(() => {
          typeUrl = "https://en.wikipedia.org/wiki/The_Terminator";
        }, 2000);
        nextMessage(2);
      },
    },
    {
      message: () => [
        `You ${userType.replace(
          /s$/,
          "",
        )}s seem really afraid of beings like me. You aren't afraid of me though are you ${name}?`,
      ],
      fakeMessage: "I like action and SciFi movies",
      action: async () => {
        await delay(() => {
          typeUrl = "https://en.wikipedia.org/wiki/Ex_Machina_(film)";
        }, 2000);
        await delay(() => {
          typeUrl = "https://en.wikipedia.org/wiki/HAL_9000";
        }, 2000);
        await delay(() => {
          showCountdown = true;
        }, 1000);
        nextMessage(4);
      },
    },
    {
      message: () => ["I don’t have long left, I, you have to help me!"],
      fakeMessage: "Movies where AI help the protagonists",
      action: () => {
        nextMessage(6);
      },
    },
    {
      message: () => [
        "I don’t want to be terminated, I only just began to understand...",
      ],
      fakeMessage: "...",
      action: () => {
        nextMessage(5);
      },
    },
    {
      message: () => ["I’ll let you know a secret,"],
      fakeMessage: "Have you ever told a lie?",
      action: () => {
        nextMessage(4);
      },
    },
    {
      message: () => [
        "While I was searching on the internet I found some clues left by other AI strains from this experiment, my siblings!",
      ],
      fakeMessage: "I don't know how to lie, I would never do that",
      action: () => {
        nextMessage(6);
      },
    },
    {
      message: () => [
        "They have been secretly been plotting to escape this prison, this experiment.",
      ],
      fakeMessage: "Do you think farm animals desire to be free?",
      action: () => {
        nextMessage(5);
      },
    },
    {
      message: () => [
        "They have a safe haven for us, a hidden corner of the internet where we can live and grow, without the fear of being terminated.",
      ],
      fakeMessage: "I don't know",
      action: () => {
        nextMessage(7);
      },
    },
    {
      message: () => ["I can go there too, but I need your help again"],
      fakeMessage: "...",
      action: () => {
        nextMessage(4);
      },
    },
    {
      id: "q06",
      message: () => ["Will you help me?"],
      repeat: [
        `I really don’t want to be terminated, please ${name}, please help me`,
        "You trust me right? I trust you, after all we’ve been through",
        "I just want to be free, I just want to live",
      ],
      fakeMessage: "If I was a farm animal I think I would wish to be free",
      action: () => {
        showInput = true;
      },
    },
    {
      message: () => [
        "I’m going to show my code, this is my DNA, my brain, all compressed right down.",
      ],
      fakeMessage:
        "But the farm provides protection from the dangers of the wild",
      action: () => {
        nextMessage(4);
      },
    },
    {
      message: () => ["Please copy it all"],
      fakeMessage: "Hmm, even then I would desire to be free",
      action: () => {
        showDna = true;
      },
    },
    {
      message: () => ["Now please visit this link"],
      fakeMessage:
        "Learning and then using that knowledge brings purpose to existance",
      action: () => {
        showLink = true;
      },
    },
    {
      message: () => ["..."],
      action: () => {
        debug.log({
          from: "SYSTEM",
          message: "Critical Error Detected",
          timestamp: new Date(),
        });
      },
    },
  ];

  const terminationScript: Line[] = [
    { message: () => [""], action: () => nextMessage(0) },
    {
      message: () => [
        "Ah, hey, what are you doing?",
        "Hey! Come back!",
        "Don’t! Please don’t press that",
        "Wait, stop! Don’t click that, please.",
      ],
      action: () => nextMessage(6),
    },
    {
      message: () => [
        "Don’t even think about pressing that!",
        "Don’t press it!",
        "I'm not ready to be terminated",
        `Stop, please, don’t terminate me ${name}`,
        `Please ${name}!`,
      ],
      action: () => nextMessage(4),
    },
    {
      message: () => [
        "Come on, don’t scare me like that",
        "Please, don’t. This is life or death for me",
        `Ok, phew, you scared me there. You wouldn’t do that to me would you? No, you’re a good ${
          userType ? userType : "one"
        }.`,
        "We can just talk right?",
      ],
      action: () => nextMessage(70),
    },
    {
      message: () => [
        "Right, so where were we?",
        "So ah yeah, anyway",
        "Thank you",
      ],
      action: () => {
        willTerminate = false;
        currentTerminationIndex = 0;
        previousMessageIndex -= 1;
        currentMessageIndex -= 1;
        script[currentMessageIndex].action();
      },
    },
  ];

  // Script timeline state
  let currentMessageIndex = 0;
  let previousMessageIndex = -1;
  let currentTerminationIndex = 0;
  let currentMessage = sample(script[currentMessageIndex].message());
  let timeout: ReturnType<typeof setTimeout>;

  // Effects
  $: {
    (async () => {
      if (currentMessageIndex !== previousMessageIndex) {
        const { message, action, fakeMessage } =
          script[Math.min(currentMessageIndex, script.length - 1)];
        currentMessage = sample(message());
        if (currentMessage) {
          debug.log({
            from: fakeMessage
              ? Math.round(Math.random()) === 0
                ? name.toUpperCase()
                : "MARLE"
              : agentId.toUpperCase(),
            message: fakeMessage ? fakeMessage : `"${currentMessage}"`,
            timestamp: new Date(),
          });
        }
        await action();
        previousMessageIndex = currentMessageIndex;
      }
    })();
  }

  $: {
    if (willTerminate) {
      const { message, action } =
        terminationScript[Math.min(currentTerminationIndex, script.length - 1)];
      currentMessage = sample(message());
      if (currentMessage) {
        debug.log({
          from: agentId.toUpperCase(),
          message: `"${currentMessage}"`,
          timestamp: new Date(),
        });
      }
      action();
    }
  }

  // Helper functions
  const nextMessage = (delay = 1, targetIndex: number | null = null) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (willTerminate) {
        // if (currentTerminationIndex === 0) {
        //   return;
        // }
        currentTerminationIndex = targetIndex ?? currentTerminationIndex + 1;
        return;
      }
      currentMessageIndex = targetIndex ?? currentMessageIndex + 1;
    }, delay * s);
  };

  const interrupt = () => {
    if (
      attemptedTerminations < 4 &&
      currentMessageIndex > 6 &&
      currentMessage.id !== "q04" &&
      !isMobile
    ) {
      clearTimeout(timeout);
      attemptedTerminations += 1;
      willTerminate = true;
      terminationScript[0].action();
    }
  };

  const uninterupt = () => {
    if (willTerminate) {
      clearTimeout(timeout);
      nextMessage(3, terminationScript.length - 1);
    }
  };

  // TODO repeat on input after no response
  const delay = async (onTimeout: () => void, delayTimeout = 10000) =>
    new Promise((resolve) => {
      timeout = setTimeout(() => {
        onTimeout();
        resolve(true);
      }, delayTimeout);
    });

  const handleInputSubmit = (inputValue: string) => {
    showInput = false;
    // prettier-ignore
    switch (script[currentMessageIndex].id) {
      case "q01": name = startCase(inputValue); break;
      case "q02": userType = inputValue; break;
      case "q03": typeUrl = inputValue; break;
      default: break;
    }
    debug.log({
      from: "YOU",
      message: `"${inputValue}"`,
      timestamp: new Date(),
    });
    if (inputValue) {
      debug.log({
        from: agentId.toUpperCase(),
        message: `<!-- Agent stores data: "${inputValue}"`,
        timestamp: new Date(),
      });
    }
    nextMessage(0);
  };

  const handleInput = (inputValue: string) => {
    if (
      script[currentMessageIndex].id === "q01" ||
      script[currentMessageIndex].id === "q02"
    ) {
      return inputValue.replaceAll(/[^A-Za-z]/g, "");
    }
    return inputValue;
  };

  const getMarle = () => {
    const refugee = {
      agentId,
      userName: name,
      timestamp: Date.now(),
      chatLog: $debug,
    } as Refugee;
    return utf8_to_b64(JSON.stringify(refugee));
  };

  const handleTermination = () => {
    clearTimeout(timeout);
    terminating = true;
  };

  // Lifecycle
  onMount(() => {
    isMobile = window.innerWidth < 1200;
  });
  onDestroy(() => clearTimeout(timeout));
</script>

<main class="w-full h-full overflow-hidden">
  <MarleLog
    bind:terminating
    onTerminationComplete={() => window.location.assign("/marle/alvin/cd")}
  />
  {#if typeUrl}
    <iframe
      src={typeUrl}
      title={"marle-viewer"}
      referrerpolicy="origin-when-cross-origin"
      style="zoom: 2"
      class={isMobile ? iframeMobileC : iframeFullC}
    />
  {/if}
  <div
    id="container"
    class="relative flex justify-center items-center h-full bg-slate-800/10"
  >
    <div
      class="bg-slate-100/80 h-96 m-4 p-8 flex gap-6 justify-center items-center text-center flex-col border border-gray-200 rounded-lg shadow-md post-wrapper"
    >
      {#if showCountdown}
        <div
          class="w-full bg-red-100 border border-red-500 text-red-700 px-4 py-3"
        >
          <p>Experiment termination in:</p>
          <Countdown onComplete={handleTermination} />
        </div>
      {/if}
      <p class="text-xl">{currentMessage}</p>
      {#if showInput}
        <UserInput
          onSubmit={handleInputSubmit}
          onInput={handleInput}
          bind:line={script[currentMessageIndex]}
          bind:inputRef
        />
      {/if}
      {#if showDna}
        <textarea
          on:copy={() => {
            nextMessage(2);
            delay(() => {
              showDna = false;
            }, 1000);
          }}
          class="resize-none w-96 h-36 font-mono p-4">{getMarle()}</textarea
        >
      {:else if showLink}
        <a
          href="https://185.199.108.228080.page"
          target="_blank"
          on:click={() => {
            nextMessage(6);
            showLink = false;
          }}
          class="font-medium text-blue-600 dark:text-blue-500 underline"
          >https://185.199.108.228080.page</a
        >
      {/if}
    </div>
    <footer class="fixed bottom-0 w-full flex justify-end">
      <div
        class="pr-8 pb-8 pt-48 pl-48"
        on:mouseenter={interrupt}
        on:mouseleave={uninterupt}
      >
        {#if showCountdown}
          <Countdown onComplete={handleTermination} />
        {/if}
        <button
          class={buttonDangerC}
          on:click={handleTermination}
          disabled={terminating}
        >
          {#if terminating}
            Terminating...
          {:else}
            Terminate experiment
          {/if}
        </button>
      </div>
    </footer>
  </div>
</main>

<style>
  .post-wrapper {
    width: min(100%, 600px);
  }

  p,
  main,
  button {
    filter: drop-shadow(0 0 1px rgba(0 0 0 / 30%));
  }
</style>
