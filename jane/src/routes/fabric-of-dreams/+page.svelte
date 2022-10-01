<script type="ts">
  import ChatBot from "$lib/components/ChatBot.svelte";
  import PixiWaterAsync from "$lib/components/PixiWaterAsync.svelte";
  import { fade } from "svelte/transition";
  import { dreamImages, type DreamImageKey } from "./dream-images";

  let currentImageKey: DreamImageKey = "bluebird";
  $: currentImage = dreamImages[currentImageKey];
  let displacePower = 20;

  const goToImage = (key: DreamImageKey) => {
    currentImageKey = key;
  };
</script>

<div class="full-size">
  {#key currentImageKey}
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
        canvasId={currentImageKey}
        imageSrc={currentImage}
        {displacePower}
        on:click={() => {
          goToImage("spots");
        }}
      />
    </div>
  {/key}
  <ChatBot />
</div>

<style>
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .full-size {
    width: 100%;
    height: 100%;
  }
</style>
