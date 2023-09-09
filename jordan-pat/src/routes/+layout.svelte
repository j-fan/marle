<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";

  let timeoutId: NodeJS.Timeout | null = null;

  const goHomeAfterTimeout = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      window.location.assign("https://j-fan.github.io/marle/home");
    }, 1000 * 60 * 2);
    timeoutId = newTimeoutId;
  };

  onMount(() => {
    goHomeAfterTimeout();
    window.addEventListener("click", goHomeAfterTimeout);

    return () => {
      window.removeEventListener("click", goHomeAfterTimeout);
    };
  });
</script>

<svelte:head>
  <title>Origin:Marle - growing pAIns - Jordan East & Pat Younis</title>
</svelte:head>

<slot />
