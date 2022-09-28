<script type="ts">
  import ChatBot from "$lib/components/ChatBot.svelte";
  import PixiWater from "$lib/components/PixiWater.svelte";
  import { fade } from "svelte/transition";
  import { dreamImages, type DreamImageKey } from "./dream-images";

  let currentImageKey: DreamImageKey = "bluebird";
  $: currentImage = dreamImages[currentImageKey];

  const goToImage = (key: DreamImageKey) => {
    currentImage = dreamImages[key];
  };
</script>

<div class="full-size">
  {#key currentImage}
    <div class="full-size" in:fade>
      <PixiWater
        imageSrc={currentImage}
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
