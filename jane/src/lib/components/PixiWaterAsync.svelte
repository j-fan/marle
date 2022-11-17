<script type="ts">
  import type * as PIXI from "pixi.js";

  export let imageSrc: PIXI.SpriteSource;
  export let displacePower = 20;
  export let canvasId: string;
  export let isGrayscale = false;
  export let fitToWindow = false;
</script>

<!-- 
  This ensures pixi and its dependencies are only loaded on the client, as
  pixi.js cannot be imported server-side without errors
  Alternatively, you could disable SSR for the route(s) via https://kit.svelte.dev/docs/hooks#handle
  which would allow you to import Pixi components as normal.
-->
{#await import("$lib/components/PixiWater.svelte") then pixiComponent}
  <svelte:component
    this={pixiComponent.default}
    {imageSrc}
    {displacePower}
    {canvasId}
    {isGrayscale}
    {fitToWindow}
    on:click
  />
{/await}
