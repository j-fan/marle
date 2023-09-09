import type { DialogMap } from "./types";

export type YourFaceKey = "start" | "end";

export const yourFaceDialogQR: DialogMap<YourFaceKey> = {
  start: {
    text: "I would like to talk to you on your device. Is that okay?",
    options: [
      {
        text: "Okay I will scan the QR code",
        nextKey: "end"
      },
      {
        text: "No I don't want to do that",
        nextKey: "end"
      },
      {
        text: "I'm already on my own phone/computer",
        nextKey: "end",
        href: "https://j-fan.github.io/marle/jane/your-face"
      }
    ]
  },
  end: {
    text: "Okay, I understand. Let me know when you are done here...",
    options: [
      {
        text: "I'm done",
        nextKey: "end",
        href: "https://j-fan.github.io/marle/alvin/umbrella"
      }
    ]
  }
};
