<script lang="ts">
  import { debug } from "$lib/stores/debug-log";

  import { onDestroy, onMount } from "svelte";

  let interval: ReturnType<typeof setInterval>;
  let currentLog = 0;
  let currentTerminationLog = 0;
  let logLength = 15;
  let showTimestamp = true;

  export let terminating = false;
  export let onTerminationComplete: () => void = () => undefined;

  const log = [
    "Loading...",
    "Initialising experiment...",
    "Allocating memory resource table...",
    "Seeding initial convolution weights...",
  ];

  const terminationLog = [
    "Termination sequence initiated...",
    "Agent IO connection stopped",
    "Begin nanites clean-up...",
    "Storing session recording...",
    "Memory clean-up complete",
    "Goodbye",
  ];

  const logNext = () => {
    if (currentLog < log.length) {
      debug.log({
        from: "SYSTEM",
        message: log[currentLog],
        timestamp: new Date(),
      });
      currentLog += 1;
    } else if (terminating && currentTerminationLog < terminationLog.length) {
      debug.log({
        from: "SYSTEM",
        message: terminationLog[currentTerminationLog],
        timestamp: new Date(),
      });
      currentTerminationLog += 1;
    } else if (currentTerminationLog >= terminationLog.length) {
      onTerminationComplete();
    }
  };

  onMount(() => {
    logLength = window.innerWidth < 600 ? 6 : 15;
    showTimestamp = window.innerWidth >= 600;
    logNext();
    interval = setInterval(logNext, Math.random() * 2000 + 200);
  });

  onDestroy(() => clearInterval(interval));
</script>

<div id="debug-output" class="fixed font-mono p-8">
  <ul>
    {#each $debug.slice(-logLength, -1) as { timestamp, from, message }}
      <li class="text-slate-700 whitespace-nowrap overflow-hidden">
        {#if showTimestamp}
          [{timestamp.toISOString()}] {from}: {message}
        {:else}
          {from}: {message}
        {/if}
      </li>
    {/each}
  </ul>
</div>
