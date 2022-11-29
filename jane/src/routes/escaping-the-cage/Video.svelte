<script lang="ts">
  import { currentSegment, time, goToSegment, segments } from "./video-store";

  const videoSrc = "https://github.com/j-fan/marle-images/raw/main/jane/marle-escape.mp4";
  const epsilon = 0.05; // seconds
  let videoRef: HTMLVideoElement;

  $: {
    if ($currentSegment) {
      const [_start, end] = $currentSegment;
      if ($time >= end - epsilon) {
        videoRef?.pause();
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
        videoRef.play();
      }}>{i}</button
    >
  {/each}
</div>

<video
  id="vid"
  bind:this={videoRef}
  bind:currentTime={$time}
  loop
  muted
  playsinline
  defaultmuted
  disablepictureinpicture
  preload="auto"
  width="1280"
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
  }
</style>
