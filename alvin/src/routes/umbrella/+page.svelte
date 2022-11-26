<script lang="ts">
  import Glyph from "$lib/components/Glyph.svelte";
</script>

<div>
  <img
    src="https://raw.githubusercontent.com/j-fan/marle-images/main/alvin/umbrella.jpg"
    alt="person holding a umbrella"
  />
</div>

<Glyph
  href="https://j-fan.github.io/marle/callum/corrosion"
  xPos={5}
  yPos={50}
  glyphId={10}
  colour="#ff0062"
/>

<Glyph
  href="https://j-fan.github.io/marle/alvin/ipod"
  xPos={20}
  yPos={50}
  glyphId={12}
  colour="#ff0062"
/>

<style>
  div {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 65%;
    display: flex;
    justify-content: center;
  }

  img {
    height: 100%;
    object-fit: cover;
    aspect-ratio: 1409 / 1388;
  }
</style>
