<script lang="ts">
  import { base } from "$app/paths";
  import VortexCanvas from "$lib/VortexCanvas.svelte";
  import WelcomeToMarle from "$lib/WelcomeToMarle.svelte";

  let vortexAnimComplete = false;
</script>

<svelte:head>
  <title>Origin:Marle</title>
  <link rel="manifest" crossorigin="use-credentials" href="{base}/manifest.json" />
  <link
    rel="preload"
    as="image"
    href="https://raw.githubusercontent.com/j-fan/marle-images/main/home/sprite-glyphs.png"
  />
</svelte:head>

{#if vortexAnimComplete}
  <WelcomeToMarle />
{:else}
  <VortexCanvas
    onAnimationComplete={() => {
      vortexAnimComplete = true;
    }}
  />
{/if}
