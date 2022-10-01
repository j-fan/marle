<script type="ts">
  import ChatBot from "$lib/components/ChatBot.svelte";
  import PixiWaterAsync from "$lib/components/PixiWaterAsync.svelte";
  import { fade } from "svelte/transition";
  import { dreamImages } from "../../lib/stores/background-image/dream-images";
  import { fabricOfDreamsDialog } from "$lib/dialog/dream-data";
  import {
    currentBgImage,
    currentBgImageKey
  } from "$lib/stores/background-image/store";
  import { onMount } from "svelte";

  let displacePower = 20;

  onMount(() => {
    currentBgImage.set(dreamImages.noise);
  });
</script>

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

<style>
  .full-size {
    width: 100%;
    height: 100%;
  }
</style>
