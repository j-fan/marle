<script lang="ts">
  export let href: string;
  /**
   * Valid values: 1 - 13
   */
  export let glyphId = 1;
  /**
   * Valid values: 1 - 100
   */
  export let xPos: number;
  /**
   * Valid values: 1 - 100
   */
  export let yPos: number;
  $: src = `https://raw.githubusercontent.com/j-fan/marle-images/main/glyph/g${glyphId}.png`;
  export let colour = "#00ff00";

  let randomAnimDelay = -Math.random() * 3;
</script>

<a {href}>
  <img
    {src}
    alt="gylph to click"
    style="--colour: {colour}; --random-anim-delay: {randomAnimDelay}s; --x: {xPos}%; --y:{yPos}%;"
  />
</a>

<style>
  img {
    position: fixed;
    top: var(--x);
    left: var(--y);
    width: 70px;
    height: 70px;
    filter: drop-shadow(0 0 5px var(--colour));
    cursor: pointer;
    animation: float 3s linear infinite;
    animation-delay: var(--random-anim-delay);
    transition: width 0.3s ease, height 0.3s ease;
  }

  img:hover {
    filter: drop-shadow(0 0 5px var(--colour))
      drop-shadow(0 0 5px var(--colour));
    width: 80px;
    height: 80px;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0) translateX(-50%);
    }

    50% {
      transform: translateY(20px) translateX(-50%);
    }
  }
</style>
