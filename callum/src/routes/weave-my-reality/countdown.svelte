<script lang="ts">
  import { padStart } from "lodash-es";
  import { onMount } from "svelte";

  export let duration = 2 * 60;
  export let onComplete: () => void = () => undefined;

  onMount(() => {
    const intervalRef = setInterval(() => {
      duration -= 1;
      if (duration <= 0) {
        duration = 0;
        onComplete();
        clearInterval(intervalRef);
      }
    }, 1000);
    return () => clearInterval(intervalRef);
  });
</script>

<p class="font-mono text-2xl text-red-700">
  {padStart(Math.floor(duration / 60), 2, 0)}:{padStart(duration % 60, 2, 0)}
</p>
