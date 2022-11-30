<script lang="ts">
  import {
    currentSegment,
    time,
    goToSegment,
    segments,
    videoRef
  } from "../../lib/stores/video-store";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  const videoSrc =
    "https://github.com/j-fan/marle-images/raw/main/jane/marle-escape.mp4";
  const epsilon = 0.05; // seconds
  let greyAmount = tweened(1, {
    delay: 1000,
    duration: 3000,
    easing: cubicOut
  });

  $: {
    if ($currentSegment) {
      const [_start, end] = $currentSegment;
      if ($time >= end - epsilon) {
        $videoRef?.pause();
      }
    }
  }
</script>

<div class="debug-controls">
  <p>
    Current timestamp: {$time}s
  </p>
  {#each segments as _segment, i}
    <button
      id="segment-{i}"
      on:click={() => {
        goToSegment(i);
        if (i > 4) {
          greyAmount.set(0);
        } else {
          greyAmount.set(1);
        }
      }}>{i}</button
    >
  {/each}
</div>

<video
  id="vid"
  bind:this={$videoRef}
  bind:currentTime={$time}
  loop
  muted
  playsinline
  defaultmuted
  disablepictureinpicture
  preload="auto"
  width="1280"
  style="--grey-amount:{$greyAmount};"
>
  <track kind="captions" />
  <source src={videoSrc} type="video/mp4" />
</video>

<style>
  .debug-controls {
    position: fixed;
    z-index: 1;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(var(--grey-amount));
  }
</style>
