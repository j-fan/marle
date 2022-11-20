<script type="ts">
  import ChatBot from "$lib/components/ChatBot.svelte";
  import PixiWaterAsync from "$lib/components/PixiWaterAsync.svelte";
  import { fade } from "svelte/transition";
  import { dreamImages } from "../../lib/stores/background-image/dream-images";
  import { fabricOfDreamsDialog } from "$lib/dialog/fabric-of-dreams-dialog";
  import {
    currentBgImage,
    currentBgImageKey
  } from "$lib/stores/background-image/store";
  import { onDestroy, onMount } from "svelte";
  import PreloadPixi from "$lib/components/PreloadPixi.svelte";

  let displacePower = 20;

  onMount(() => {
    currentBgImage.set(dreamImages.black);
  });

  onDestroy(() => {
    currentBgImage.set(dreamImages.black);
  });
</script>

<svelte:head>
  <title>Fabric of Dreams - Jane Fan</title>
</svelte:head>
<PreloadPixi>
  <div class="full-size">
    {#key $currentBgImage}
      <div
        class="full-size"
        transition:fade={{ duration: 600 }}
        on:introstart={() => {
          displacePower = 300;
        }}
        on:introend={() => {
          displacePower = 20;
        }}
        on:outrostart={() => {
          displacePower = 300;
        }}
      >
        <PixiWaterAsync
          canvasId={$currentBgImageKey}
          imageSrc={$currentBgImage}
          {displacePower}
        />
      </div>
    {/key}
    <ChatBot dialogData={fabricOfDreamsDialog} />
  </div>
</PreloadPixi>

<style>
  :global(body) {
    background-color: black;
  }

  .full-size {
    width: 100%;
    height: 100%;
  }
</style>
