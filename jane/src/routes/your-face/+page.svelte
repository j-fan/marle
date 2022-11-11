<script type="ts">
  import {
    FACE_DEBUG_CANVAS_ID,
    runDetections,
    startFaceDetect,
    WEBCAM_CANVAS_ID,
    WEBCAM_VIDEO_ID
  } from "$lib/face-detection/faceDetect";
  import { initCamera } from "$lib/face-detection/webcam";
  import { onMount } from "svelte";

  let isDetectionReady = false;
  let webcamRef: HTMLVideoElement | null;

  onMount(async () => {
    await initCamera();
    let frame: number;

    const loop = async () => {
      frame = requestAnimationFrame(loop);
      if (isDetectionReady && webcamRef) {
        await runDetections({
          height: webcamRef.clientHeight,
          width: webcamRef.clientWidth,
          showDebug: true
        });
      }
    };

    loop();

    return () => {
      cancelAnimationFrame(frame);
    };
  });

  const startDetection = async () => {
    await startFaceDetect();
    isDetectionReady = true;
  };
</script>

<div class="container">
  <video
    bind:this={webcamRef}
    id={WEBCAM_VIDEO_ID}
    autoplay
    muted
    playsinline
    on:play={startDetection}
  />
  <canvas id={FACE_DEBUG_CANVAS_ID} />
</div>

<style>
  .container {
    position: relative;
  }

  canvas,
  video {
    width: 100%;
    height: 100%;
  }

  canvas {
    position: absolute;
    inset: 0;
  }
</style>
