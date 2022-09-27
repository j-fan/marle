<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { bounceOut } from "svelte/easing";

  let isIconVisible = false;
  let isChatVisible = false;

  onMount(() => {
    isIconVisible = true;
  });

  const toggleChat = () => {
    isChatVisible = !isChatVisible;
  };
</script>

{#if isIconVisible}
  <div
    class="marle-icon"
    in:fly={{ y: 40, duration: 1000, easing: bounceOut }}
    on:click={toggleChat}
    on:introend={toggleChat}
  >
    {#if isChatVisible}
      <div class="chat-wrapper" transition:fly={{ y: 20, duration: 300 }} />
    {/if}
  </div>
{/if}

<style>
  :root {
    --icon-size: 50px;
    --accent-color: hotpink;
  }

  .marle-icon {
    height: var(--icon-size);
    width: var(--icon-size);
    border-radius: 50%;
    background: var(--accent-color);
    position: fixed;
    bottom: 0;
    left: 0;
    margin: 40px;
    cursor: pointer;
  }

  .chat-wrapper {
    height: min(50vh, 400px);
    width: min(75vw, 300px);
    border: 1px solid var(--accent-color);
    position: absolute;
    bottom: var(--icon-size);
    margin-bottom: 1rem;
    border-radius: 1rem;
    background-color: white;
    cursor: default;
  }

  .chat-wrapper::before {
    content: "";
    position: absolute;
    height: 16px;
    width: 16px;
    background-color: white;
    border-right: 1px solid var(--accent-color);
    border-bottom: 1px solid var(--accent-color);
    bottom: -8px;
    left: 1rem;
    transform: rotate(45deg);
  }
</style>
