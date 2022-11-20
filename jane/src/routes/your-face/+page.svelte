<script type="ts">
  import PixiWaterAsync from "$lib/components/PixiWaterAsync.svelte";
  import { yourFaceDialog } from "$lib/dialog/your-face-dialog";
  import ChatBot from "$lib/components/ChatBot.svelte";
  import {
    FACE_CANVAS_ID,
    WEBCAM_VIDEO_ID
  } from "$lib/face-detection/faceDetect";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import {
    detectionReady,
    startDetection,
    stopDetection,
    fps
  } from "$lib/stores/your-face/store";

  let webcamRef: HTMLVideoElement | null;

  onMount(() => {
    return stopDetection;
  });
</script>

<svelte:head>
  <title>Your Face - Jane Fan</title>
</svelte:head>
<div class="container">
  <video
    bind:this={webcamRef}
    id={WEBCAM_VIDEO_ID}
    autoplay
    muted
    playsinline
    on:play={startDetection}
  />
  <canvas id={FACE_CANVAS_ID} />
  {#if $detectionReady}
    <h3 class="fps-label" transition:fade={{ duration: 400 }}>FPS: {$fps}</h3>
  {:else}
    <h3 class="loading-label" transition:fade={{ duration: 400 }}>
      Loading...
    </h3>
  {/if}
  {#if webcamRef && !$detectionReady}
    <div transition:fade={{ duration: 1500 }}>
      <PixiWaterAsync
        imageSrc={webcamRef}
        canvasId="prelude"
        displacePower={500}
        isGrayscale
      />
    </div>
  {/if}
  <ChatBot dialogData={yourFaceDialog} />
</div>

<style>
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: black;
  }

  h3 {
    font-family: "Courier New", Courier, monospace;
    color: #00ff00;
    text-shadow: 0px 0px 6px black;
  }

  .loading-label {
    position: absolute;
    align-self: center;
    width: 100%;
    text-align: center;
  }

  .fps-label {
    position: absolute;
    top: 0;
    left: 0;
  }
  canvas,
  video {
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    object-position: center top;
  }

  canvas {
    position: absolute;
    inset: 0;
  }

  video {
    filter: grayscale();
  }
</style>
