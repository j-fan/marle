<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { bounceOut } from "svelte/easing";
  import { fabricOfDreamsDialog } from "$lib/dialog/dialog";
  import Button from "./Button.svelte";

  let isIconVisible = false;
  let isChatVisible = false;

  onMount(() => {
    isIconVisible = true;
  });

  const toggleChat = () => {
    isChatVisible = !isChatVisible;
  };

  const answerClick = (nextKey: string) => {
    return (event: MouseEvent) => {
      event.stopPropagation();
    };
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
      <div class="chat-wrapper" transition:fly={{ y: 20, duration: 300 }}>
        <div class="chat-content">
          <div class="dialog-item">
            <h4>Marle</h4>
            <p>
              {fabricOfDreamsDialog.start.text}
            </p>
          </div>
          <div class="dialog-item">
            <h4>YOU</h4>
            {#each fabricOfDreamsDialog.start.options as option}
              <Button isFullWidth on:click={answerClick(option.nextKey)}
                >{option.text}</Button
              >
            {/each}
          </div>
        </div>
      </div>
    {/if}
  </div>
{/if}

<style>
  h4 {
    text-transform: uppercase;
    font-weight: bold;
  }
  .marle-icon {
    height: var(--marle-icon-size);
    width: var(--marle-icon-size);
    border-radius: 50%;
    background: var(--accent-color);
    position: fixed;
    bottom: 0;
    left: 0;
    margin: 40px;
    cursor: pointer;
  }

  .chat-wrapper {
    width: min(75vw, 350px);
    border: 2px solid var(--accent-color);
    position: absolute;
    bottom: var(--marle-icon-size);
    margin-bottom: 1rem;
    border-radius: 1rem;
    background-color: white;
    cursor: default;
    padding: 1rem;
    color: var(--accent-color);
  }

  .chat-wrapper::before {
    content: "";
    position: absolute;
    height: 16px;
    width: 16px;
    background-color: white;
    border-right: 2px solid var(--accent-color);
    border-bottom: 2px solid var(--accent-color);
    bottom: -9px;
    left: 1rem;
    transform: rotate(45deg);
  }

  .chat-content {
    max-height: min(40vh, 400px);
    overflow-y: auto;
  }

  .dialog-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: end;
  }
</style>
