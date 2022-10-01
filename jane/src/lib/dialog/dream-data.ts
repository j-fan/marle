import type { DialogMap } from "./types";
import { currentBgImage } from "$lib/stores/background-image/store";
import { dreamImages } from "$lib/stores/background-image/dream-images";

export type FabricOfDreamsKey =
  | "start"
  | "forgotten_dream"
  | "always_dream"
  | "no_dream"
  | "ending";

export const fabricOfDreamsDialog: DialogMap<FabricOfDreamsKey> = {
  start: {
    text: "Do you ever dream? What is it like? I heard that humans do this when they sleep.",
    options: [
      {
        text: "I think I dream, but I don’t remember them.",
        nextKey: "forgotten_dream",
        onClick: () => {
          currentBgImage.set(dreamImages.spots);
        }
      },
      {
        text: "Yes, I dream all the time",
        nextKey: "always_dream"
      },
      {
        text: "I don’t dream at all",
        nextKey: "no_dream"
      }
    ]
  },
  forgotten_dream: {
    text: "That's a shame. But perhaps you can help me with this new experience that I am having.",
    options: [
      {
        text: "I can try...",
        nextKey: "ending"
      }
    ]
  },
  always_dream: {
    text: "Then you must be an expert. I wonder if you can help me interpret what I am seeing.",
    options: [
      {
        text: "Ok, sure",
        nextKey: "ending"
      }
    ]
  },
  no_dream: {
    text: "That's very strange. In my notes about humans I thought that dreaming was a regular activity. But perhaps you can help with this issue I am having anyway.",
    options: [
      {
        text: "I'll try to help.",
        nextKey: "ending"
      }
    ]
  },
  ending: {
    text: "End of conversation",
    options: []
  }
};
