<script lang="ts">
  import { debug } from "$lib/stores/debug-log";

  import { onDestroy, onMount } from "svelte";

  let interval: ReturnType<typeof setInterval>;
  let currentLog = 0;
  let log = [
    "Loading...",
    "Initialising experiment...",
    "Allocating memory resource table...",
  ];

  onMount(() => {
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
    {#each $debug.slice(-15, -1) as { timestamp, from, message }}
      <li class="text-slate-700">
        [{timestamp.toISOString()}] {from}: {message}
      </li>
    {/each}
  </ul>
</div>
