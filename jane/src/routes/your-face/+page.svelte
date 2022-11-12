<script type="ts">
  import {
    FACE_CANVAS_ID,
    runDetections,
    startFaceDetect,
    WEBCAM_VIDEO_ID
  } from "$lib/face-detection/faceDetect";
  import { initCamera } from "$lib/face-detection/webcam";
  import { onMount } from "svelte";

  let isDetectionReady = false;
  let webcamRef: HTMLVideoElement | null;

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
      frame = requestAnimationFrame(loop);
      if (isDetectionReady && webcamRef) {
        await runDetections({
          ...getCanvasDimensions(),
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
  <canvas id={FACE_CANVAS_ID} />
</div>

<style>
  .container {
    position: relative;
    width: 100%;
    height: 100%;
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
