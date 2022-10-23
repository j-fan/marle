<script>
  import { dreamImages } from "$lib/stores/background-image/dream-images";
  import * as PIXI from "pixi.js";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let loadedAssetCount = 0;
  let done = false;

  onMount(() => {
    PIXI.utils.clearTextureCache();
    const loader = new PIXI.Loader();

    Object.entries(dreamImages).forEach(([key, src]) => {
      loader.add(key, src);
    });

    loader.load(() => {});

    loader.onProgress.add(() => {
      loadedAssetCount = loadedAssetCount + 1;
    });

    loader.onComplete.add(() => {
      done = true;
    });
  });
</script>

{#if done}
  <slot />
{:else}
  <div class="pixi-loading" transition:fade={{ duration: 500 }}>
    <h2>
      Loading assets: {loadedAssetCount} / {Object.keys(dreamImages).length}
    </h2>
  </div>
{/if}

<style>
  .pixi-loading {
    width: 100%;
    height: 100vh;
    background: black;
    color: var(--accent-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
