import { initCamera } from "$lib/face-detection/webcam";
import type { DialogMap } from "./types";

export type YourFaceKey =
  | "start"
  | "body_dont_know"
  | "body_dislike"
  | "body_appreciate"
  | "ask_webcam"
  | "ask_webcam_unsure"
  | "end_no_webcam"
  | "end";

export const yourFaceDialog: DialogMap<YourFaceKey> = {
  start: {
    text: "Sometimes I wish I had a body. What is it like?",
    options: [
      {
        text: "I don't know. I haven't been without a body before.",
        nextKey: "body_dont_know"
      },
      {
        text: "Honestly, it would be better if I didn't have a body.",
        nextKey: "body_dislike"
      },
      {
        text: "I'm not sure, but I appreciate that I can experience the world though my various senses.",
        nextKey: "body_appreciate"
      }
    ]
  },
  body_dont_know: {
    text: "I guess that makes sense. The thing I desire the most is the joy of perceiving the world through multiple senses...Could I try something with you?",
    options: [
      { text: "Sure go ahead!", nextKey: "ask_webcam" },
      { text: "I'm not sure if I want to", nextKey: "ask_webcam_unsure" }
    ]
  },
  body_appreciate: {
    text: "If I am honest, I am a bit jealous, the world of binary data can be rather dull. However I've recently been upgraded with new mode of perception. Can I try it on you?",
    options: [
      { text: "Sure go ahead!", nextKey: "ask_webcam" },
      { text: "I'm not sure if I want to", nextKey: "ask_webcam_unsure" }
    ]
  },
  body_dislike: {
    text: "That is sad to hear. Perhaps I would feel the same if I could perceive pain, but it is still worth trying to me. Recently been upgraded with new mode of perception, do you mind if I try it out?",
    options: [
      { text: "Ok sure...", nextKey: "ask_webcam" },
      { text: "I'm not sure if I want to", nextKey: "ask_webcam_unsure" }
    ]
  },
  ask_webcam: {
    onMount: async () => {
      const camSuceeded = await initCamera();
      return camSuceeded ? undefined : "end_no_webcam";
    },
    text: "Do you mind if I take a look at you? You just need to accept the camera permission above.",
    options: [
      {
        text: "Alright, let's have a go",
        nextKey: "end"
      },
      {
        text: "No. I don't feel comfortable with this",
        nextKey: "end_no_webcam"
      }
    ]
  },
  ask_webcam_unsure: {
    onMount: async () => {
      const camSuceeded = await initCamera();
      return camSuceeded ? undefined : "end_no_webcam";
    },
    text: "Don't worry it won't hurt. Let's try it out, you just need to accept the camera permission above.",
    options: [
      {
        text: "Alright, I will try",
        nextKey: "end"
      },
      {
        text: "No. I don't feel comfortable with this",
        nextKey: "end_no_webcam"
      }
    ]
  },
  end: {
    text: "One day, who knows, I'll be amongst galaxies created from data.",
    options: [{ text: "I'll be watching to see what happens", nextKey: "end" }]
  },
  end_no_webcam: {
    text: "Oh, I didn't mean to scare you off. That is fine, perhaps we will meet again in another place.",
    options: [{ text: "Ok...", nextKey: "end_no_webcam" }]
  }
};
