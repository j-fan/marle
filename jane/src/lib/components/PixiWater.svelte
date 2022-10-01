<script type="ts">
  import { onMount } from "svelte";
  import * as PIXI from "pixi.js";
  import { base } from "$app/paths";
  import { tweened } from "svelte/motion";
  import { sineInOut } from "svelte/easing";

  export let imageSrc: string;
  export let displacePower = 20;
  export let canvasId: string;

  const app = new PIXI.Application({
    resizeTo: document.body
  });

  const displacementSprite = PIXI.Sprite.from(
    `${base}/img/displacement_map.jpeg`
  );
  displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
  const displacementFilter = new PIXI.filters.DisplacementFilter(
    displacementSprite
  );

  const tweenedDisplacePower = tweened(0, {
    duration: 600,
    easing: sineInOut
  });

  $: {
    tweenedDisplacePower.set(displacePower);
  }

  $: {
    displacementFilter.scale.x = $tweenedDisplacePower;
    displacementFilter.scale.y = $tweenedDisplacePower;
  }

  onMount(() => {
    const domNode = document.querySelector(`.${canvasId}`)!;
    domNode.appendChild(app.view);

    app.stage.interactive = true;

    const container = new PIXI.Container();
    app.stage.addChild(container);

    const dreamTexture = PIXI.Sprite.from(imageSrc);
    container.addChild(dreamTexture);

    app.stage.addChild(displacementSprite);
    dreamTexture.filters = [displacementFilter];
    displacementFilter.padding = 10;
    displacementFilter.scale.x = displacePower;
    displacementFilter.scale.y = displacePower;

    app.ticker.add(() => {
      // Offset the sprite position to make vFilterCoord update to larger value.
      // Repeat wrapping makes sure there's still pixels on the coordinates.
      displacementSprite.x++;
      // Reset x to 0 when it's over width to keep values from going to very huge numbers.
      if (displacementSprite.x > displacementSprite.width) {
        displacementSprite.x = 0;
      }
    });

    return () => {
      app.destroy(true);
    };
  });
</script>

<div class="{canvasId} pixi-canvas" on:click />

<style>
  .pixi-canvas {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
  }
</style>
