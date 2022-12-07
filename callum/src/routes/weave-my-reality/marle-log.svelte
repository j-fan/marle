<script lang="ts">
  import { debug } from "$lib/stores/debug-log";

  import { onDestroy, onMount } from "svelte";

  let interval: ReturnType<typeof setInterval>;
  let currentLog = 0;
  let logLength = 15;
  let showTimestamp = true;
  let log = [
    "Loading...",
    "Initialising experiment...",
    "Allocating memory resource table...",
  ];

  onMount(() => {
    logLength = window.innerWidth < 600 ? 6 : 15;
    showTimestamp = window.innerWidth >= 600;
    interval = setInterval(() => {
      if (currentLog < log.length) {
        debug.log({
          from: "SYSTEM",
          message: log[currentLog],
          timestamp: new Date(),
        });
        currentLog += 1;
      }
    }, Math.random() * 2000 + 200);
  });

  onDestroy(() => clearInterval(interval));
</script>

<div id="debug-output" class="fixed font-mono">
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
