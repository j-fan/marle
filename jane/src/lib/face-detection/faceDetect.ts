import * as faceApi from "@vladmandic/face-api";
import { TinyFaceDetectorOptions } from "@vladmandic/face-api";
import { base } from "$app/paths";

export const WEBCAM_VIDEO_ID = "webcam-video";
export const FACE_CANVAS_ID = "face-debug";

let detector: TinyFaceDetectorOptions;
let netsLoaded = false;

const MODELS_PATH = `https://raw.githubusercontent.com/j-fan/marle-images/main/jane/models`;

type FaceDetectOptions = {
  showDebug?: boolean;
  width: number;
  height: number;
};

type AllFaceData = faceApi.WithFaceExpressions<
  faceApi.WithAge<
    faceApi.WithGender<
      faceApi.WithFaceLandmarks<
        {
          detection: faceApi.FaceDetection;
        },
        faceApi.FaceLandmarks68
      >
    >
  >
>;

const startFaceDetect = async (): Promise<void> => {
  await faceApi.nets.tinyFaceDetector.loadFromUri(MODELS_PATH);
  await faceApi.nets.ageGenderNet.loadFromUri(MODELS_PATH);
  await faceApi.nets.faceLandmark68TinyNet.loadFromUri(MODELS_PATH);
  await faceApi.nets.faceExpressionNet.loadFromUri(MODELS_PATH);

  const inputSize = 512;
  const scoreThreshold = 0.5;
  detector = await new TinyFaceDetectorOptions({
    inputSize,
    scoreThreshold
  });
  netsLoaded = true;
};

const runDetections = async (
  options: FaceDetectOptions
): Promise<AllFaceData | undefined> => {
  if (!netsLoaded) {
    return undefined;
  }

  const result = await faceApi
    .detectSingleFace(WEBCAM_VIDEO_ID, detector)
    .withFaceLandmarks(true)
    .withAgeAndGender()
    .withFaceExpressions();

  if (result) {
    const canvasElement = document.getElementById(
      FACE_CANVAS_ID
    ) as HTMLCanvasElement;
    const dimensions = faceApi.matchDimensions(
      canvasElement,
      { width: options.width, height: options.height },
      true
    );
    const resizedResults = faceApi.resizeResults(result, dimensions);

    drawFaceData(canvasElement, resizedResults);
  }

  return result;
};

// Taken from the face-api.js demo code: https://github.com/vladmandic/face-api/blob/master/demo/webcam.js
function drawFaceData(
  canvas: HTMLCanvasElement,
  person: AllFaceData,
  color = "#00FF00"
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw box around each face
  ctx.shadowColor = "black";
  ctx.shadowBlur = 2;
  ctx.lineWidth = 3;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.6;
  ctx.beginPath();
  ctx.rect(
    person.detection.box.x,
    person.detection.box.y,
    person.detection.box.width,
    person.detection.box.height
  );
  ctx.stroke();
  ctx.globalAlpha = 1;

  // draw text labels
  ctx.font = "20px monospace";
  ctx.fillStyle = color;
  const expression = Object.entries(person.expressions).sort(
    (a, b) => b[1] - a[1]
  );
  ctx.fillStyle = color;
  ctx.fillText(
    `gender: ${Math.round(100 * person.genderProbability)}% ${person.gender}`,
    person.detection.box.x,
    person.detection.box.bottom + 20
  );
  ctx.fillText(
    `age: ${Math.round(person.age)} years`,
    person.detection.box.x,
    person.detection.box.bottom + 38
  );

  ctx.fillText(
    `roll:${person.angle.roll}° pitch:${person.angle.pitch}° yaw:${person.angle.yaw}°`,
    person.detection.box.x,
    person.detection.box.top - 8
  );
  ctx.fillText(
    `expression: ${Math.round(100 * expression[0][1])}% ${expression[0][0]}`,
    person.detection.box.x,
    person.detection.box.top - 28
  );

  // draw face points for each face
  ctx.globalAlpha = 0.8;
  ctx.fillStyle = color;
  const pointSize = 2;
  for (let i = 0; i < person.landmarks.positions.length; i++) {
    ctx.beginPath();
    ctx.arc(
      person.landmarks.positions[i].x,
      person.landmarks.positions[i].y,
      pointSize,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }
}

export { startFaceDetect, runDetections, netsLoaded };
