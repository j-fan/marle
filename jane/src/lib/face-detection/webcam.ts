const initCamera = async (): Promise<boolean> => {
  const videoElement = document.getElementById(
    "webcam-video"
  ) as HTMLVideoElement;

  const getWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true
      });
      videoElement.srcObject = stream;
      return true;
    } catch (err) {
      alert(`Could not start webcam. ${err}`);
      return false;
    }
  };

  return getWebcam();
};

export { initCamera };
