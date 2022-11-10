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

  onMount(async () => {
    await initCamera();
    let frame: number;

    const loop = async () => {
      frame = requestAnimationFrame(loop);
      if (isDetectionReady) {
        await runDetections({ height: 400, width: 600, showDebug: true });
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

<h2>Your face</h2>
<div class="container">
  <video
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
    width: 600px;
    height: 400px;
  }

  canvas {
    position: absolute;
    inset: 0;
  }
</style>
