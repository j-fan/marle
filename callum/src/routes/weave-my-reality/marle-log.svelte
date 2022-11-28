<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  let interval: ReturnType<typeof setInterval>;
  let currentLog = 0;
  let log = [
    "Loading...\n",
    "initialising experiment...",
    "done\n",
    "allocating memory resource table...",
    "done\n",
  ];

  onMount(() => {
    interval = setInterval(() => {
      currentLog += 1;
    }, Math.random() * 2000 + 200);
  });

  onDestroy(() => clearInterval(interval));
</script>

<div id="debug-output" class="fixed font-mono">
  <pre>
    {#each log.slice(0, currentLog) as logMessage}
      {logMessage}
    {/each}
  </pre>
</div>
