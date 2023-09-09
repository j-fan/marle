<script>
  import { fly } from "svelte/transition";
  import "../app.css";
  import { onMount } from "svelte";

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

{#if mounted}
  <div
    class="fixed-top-right"
    transition:fly={{ y: 20, delay: 1000 * 60 * 5, duration: 1000 }}
  >
    <a href="https://j-fan.github.io/marle/home/">
      <button class="restart-button">Restart journey</button>
    </a>
  </div>
{/if}

<slot />

<style>
  .fixed-top-right {
    position: fixed;
    top: 0;
    right: 0;
    padding: 1rem;
    z-index: 99;
  }

  .restart-button {
    background-color: #fff;
    color: #000;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
  }
</style>
