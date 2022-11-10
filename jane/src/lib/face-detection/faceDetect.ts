import * as faceApi from "@vladmandic/face-api";
import {
  FaceDetection,
  FaceLandmarks68,
  Gender,
  TinyFaceDetectorOptions,
  type WithFaceLandmarks
} from "@vladmandic/face-api";

export const WEBCAM_VIDEO_ID = "webcam-video";
export const WEBCAM_CANVAS_ID = "webcam-canvas";
export const FACE_DEBUG_CANVAS_ID = "face-debug";

let detector: TinyFaceDetectorOptions;
let totalGender = 0;
let totalAge = 0;
let estimatedAge = 0;
let estimatedGender = Gender.MALE;
let successfulAgeGenderDetections = 0;
let netsLoaded = false;

const totalAgeGenderDetections = 20;

type FaceDetectOptions = {
  showDebug?: boolean;
  width: number;
  height: number;
};

const startFaceDetect = async (): Promise<void> => {
  await faceApi.nets.tinyFaceDetector.loadFromUri("./models");
  await faceApi.nets.ageGenderNet.loadFromUri("./models");
  await faceApi.nets.faceLandmark68TinyNet.loadFromUri("./models");

  const inputSize = 512;
  const scoreThreshold = 0.5;
  detector = await new TinyFaceDetectorOptions({
    inputSize,
    scoreThreshold
  });
  netsLoaded = true;
};

const runFaceLandmarkDetection = async ({
  showDebug,
  width,
  height
}: FaceDetectOptions) => {
  const result = await faceApi
    .detectSingleFace(WEBCAM_VIDEO_ID, detector)
    .withFaceLandmarks(true);

  const faceLandmarkDebugCanvas = document.getElementById(
    FACE_DEBUG_CANVAS_ID
  ) as HTMLCanvasElement;

  if (showDebug && faceLandmarkDebugCanvas && result) {
    const dimensions = faceApi.matchDimensions(
      faceLandmarkDebugCanvas,
      { width, height },
      true
    );
    const resizedResults = faceApi.resizeResults(result, dimensions);
    faceApi.draw.drawFaceLandmarks(faceLandmarkDebugCanvas, resizedResults);
  }
  return result;
};

const runAgeGenderDetection = async ({ showDebug }: FaceDetectOptions) => {
  const result = await faceApi
    .detectSingleFace(WEBCAM_VIDEO_ID, detector)
    .withAgeAndGender();

  if (result && result.age > 0) {
    successfulAgeGenderDetections++;
    if (result.gender === Gender.FEMALE) {
      totalGender += result.genderProbability;
    } else {
      totalGender -= result.genderProbability;
    }
    totalAge += result.age;
    estimatedAge = totalAge / successfulAgeGenderDetections;
    estimatedGender = totalGender > 0 ? Gender.FEMALE : Gender.MALE;
  }

  if (showDebug) {
    console.log("estimated", estimatedAge, estimatedGender);
    console.log("current detection", result?.age, result?.gender);
  }
};

type DetectionResults = {
  landmarks?: WithFaceLandmarks<{ detection: FaceDetection }, FaceLandmarks68>;
  estimatedAge: number;
  estimatedGender: Gender;
  isFaceGenderReady: boolean;
};

const runDetections = async (
  options: FaceDetectOptions
): Promise<DetectionResults> => {
  let isFaceGenderReady = false;

  if (!netsLoaded) {
    return { estimatedAge, estimatedGender, isFaceGenderReady };
  }

  if (successfulAgeGenderDetections < totalAgeGenderDetections) {
    await runAgeGenderDetection(options);
  } else {
    isFaceGenderReady = true;
  }
  const landmarks = await runFaceLandmarkDetection(options);

  return {
    landmarks,
    estimatedAge,
    estimatedGender,
    isFaceGenderReady
  };
};

export { startFaceDetect, runDetections, estimatedAge, estimatedGender };
