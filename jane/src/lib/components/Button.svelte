<script lang="ts">
  export let isFullWidth = false;
  export let href: string | undefined = undefined;

  const width = isFullWidth ? "100%" : "auto";
</script>

{#if href}
  <a {href} style="width: {width}">
    <button type="button" style="width: {width}">
      <slot />
    </button>
  </a>
{:else}
  <button type="button" style="width: {width}" on:click>
    <slot />
  </button>
{/if}

<style>
  button {
    background-color: var(--c-pink);
    padding: 0.5rem;
    cursor: pointer;

    border: var(--accent-color) 2px solid;
    border-radius: 1rem;
  }

  button:hover {
    background-color: var(--hover-color);
  }

  a,
  button {
    color: var(--c-black);
  }
</style>
