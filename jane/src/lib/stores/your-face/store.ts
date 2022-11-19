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
      ...getCanvasDimensionsFromVideo(webcamRef),
      showDebug: true
    });

    if (result) {
      detectionReady.set(true);
    }
  }

  fps.set(1000 / (performance.now() - t0));
};

const getCanvasDimensionsFromVideo = (webcamRef: HTMLVideoElement | null) => {
  if (!webcamRef) {
    return { height: 0, width: 0 };
  }

  let { width, height } = getFilledDimensions(
    webcamRef.videoWidth,
    webcamRef.videoHeight,
    webcamRef.clientWidth,
    webcamRef.clientHeight
  );

  if (webcamRef.clientWidth < 700) {
    width *= 2;
    height *= 2;
  }

  return { height, width };
};

export const getFilledDimensions = (
  originalWidth: number,
  originalHeight: number,
  targetWidth: number,
  targetHeight: number
) => {
  let height = 0;
  let width = 0;

  if (targetWidth > targetHeight) {
    width = targetWidth;
    height = (targetWidth / originalWidth) * originalHeight;
  } else {
    height = targetHeight;
    width = (targetHeight / originalHeight) * originalWidth;
  }

  return { height, width };
};
