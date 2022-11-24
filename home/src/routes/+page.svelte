<script lang="ts">
  import VortexCanvas from "$lib/VortexCanvas.svelte";

  let vortexAnimComplete = false;
</script>

<svelte:head>
  <title>Origin: Marle</title>
</svelte:head>

<VortexCanvas
  onAnimationComplete={() => {
    vortexAnimComplete = true;
  }}
/>

<style>
</style>
