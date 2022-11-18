import { writable, get } from "svelte/store";
import { runDetections, startFaceDetect } from "$lib/face-detection/faceDetect";

export const detectionInitialised = writable(false);

export const frame = writable(0);
export const fps = writable(0);
let modelsLoaded = writable(false);
export const detectionReady = writable(false);

export const startDetection = async () => {
  await startFaceDetect();
  modelsLoaded.set(true);
};

export const stopDetection = async () => {
  cancelAnimationFrame(get(frame));
  detectionReady.set(false);
};

export const runDetectionLoop = async (webcamRef: HTMLVideoElement | null) => {
  const t0 = performance.now();

  frame.set(
    requestAnimationFrame(() => {
      runDetectionLoop(webcamRef);
    })
  );
  if (modelsLoaded && webcamRef) {
    const result = await runDetections({
      ...getCanvasDimensions(webcamRef),
      showDebug: true
    });

    if (result) {
      detectionReady.set(true);
    }
  }

  fps.set(1000 / (performance.now() - t0));
};

const getCanvasDimensions = (webcamRef: HTMLVideoElement | null) => {
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
