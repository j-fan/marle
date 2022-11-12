<script type="ts">
  import {
    FACE_CANVAS_ID,
    runDetections,
    startFaceDetect,
    WEBCAM_VIDEO_ID
  } from "$lib/face-detection/faceDetect";
  import { initCamera } from "$lib/face-detection/webcam";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let modelsLoaded = false;
  let detectionReady = false;
  let webcamRef: HTMLVideoElement | null;
  let fps = 0;

  const getCanvasDimensions = () => {
    let height = 0;
    let width = 0;

    if (!webcamRef) {
      return { height, width };
    }

    if (webcamRef.videoWidth > webcamRef.videoHeight) {
      width = webcamRef.clientWidth;
      height =
        (webcamRef.clientWidth / webcamRef.videoWidth) * webcamRef.videoHeight;
    } else {
      height = webcamRef.height;
      width =
        (webcamRef.clientHeight / webcamRef.videoHeight) * webcamRef.videoWidth;
    }

    if (webcamRef.clientWidth < 700) {
      width *= 2;
      height *= 2;
    }

    return { height, width };
  };

  onMount(async () => {
    await initCamera();
    let frame: number;

    const loop = async () => {
      const t0 = performance.now();

      frame = requestAnimationFrame(loop);
      if (modelsLoaded && webcamRef) {
        const result = await runDetections({
          ...getCanvasDimensions(),
          showDebug: true
        });

        if (result && !detectionReady) {
          detectionReady = true;
        }
      }

      fps = 1000 / (performance.now() - t0);
    };

    loop();

    return () => {
      cancelAnimationFrame(frame);
    };
  });

  const startDetection = async () => {
    await startFaceDetect();
    modelsLoaded = true;
  };
</script>

<div class="container">
  {#if !detectionReady}
    <h3 class="loading-label" transition:fade={{ duration: 400 }}>
      Loading face detection...
    </h3>
  {:else}
    <h3 class="fps-label" transition:fade={{ duration: 400 }}>FPS: {fps}</h3>
  {/if}
  <video
    bind:this={webcamRef}
    id={WEBCAM_VIDEO_ID}
    autoplay
    muted
    playsinline
    on:play={startDetection}
  />
  <canvas id={FACE_CANVAS_ID} />
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
</style>
