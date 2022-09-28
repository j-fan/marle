<script type="ts">
  import { onMount } from "svelte";
  import * as PIXI from "pixi.js";
  import { base } from "$app/paths";

  export let imageSrc: string;

  onMount(() => {
    const domNode = document.getElementById("pixi-canvas")!;
    const app = new PIXI.Application({
      width: document.body.offsetWidth,
      height: document.body.offsetHeight
    });
    domNode.appendChild(app.view);

    app.stage.interactive = true;

    const container = new PIXI.Container();
    app.stage.addChild(container);

    const dreamTexture = PIXI.Sprite.from(imageSrc);
    container.addChild(dreamTexture);

    const displacementSprite = PIXI.Sprite.from(
      `${base}/img/displacement_map.jpeg`
    );
    // Make sure the sprite is wrapping.
    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    const displacementFilter = new PIXI.filters.DisplacementFilter(
      displacementSprite
    );

    displacementFilter.padding = 10;
    displacementSprite.position = dreamTexture.position;

    app.stage.addChild(displacementSprite);

    dreamTexture.filters = [displacementFilter];

    displacementFilter.scale.x = 30;
    displacementFilter.scale.y = 60;

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

<div id="pixi-canvas" on:click />

<style>
  #pixi-canvas {
    width: 100%;
    height: 100%;
  }
</style>
