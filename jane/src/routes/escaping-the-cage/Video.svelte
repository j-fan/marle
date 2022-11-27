<script lang="ts">
  import { currentSegment, time, goToSegment, segments } from "./video-store";

  let videoRef: HTMLVideoElement;
  $: {
    if ($currentSegment) {
      const [_start, end] = $currentSegment;
      if ($time >= end - epsilon) {
        videoRef?.pause();
      }
    }
  }

  const epsilon = 0.1; // seconds

  const videoSrc = "./test.mp4";
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
  autoplay
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
