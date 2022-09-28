<script type="ts">
  import ChatBot from "$lib/components/ChatBot.svelte";
  import { dreamImages, type DreamImageKey } from "./dream-images";

  let currentImageKey: DreamImageKey = "bluebird";
  $: currentImage = dreamImages[currentImageKey];

  const goToImage = (key: DreamImageKey) => {
    currentImage = dreamImages[key];
  };
</script>

<img
  src={currentImage}
  alt="neural network feature visualisation of blue birds"
  on:click={() => {
    goToImage("spots");
  }}
/>

<ChatBot />

<style>
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
