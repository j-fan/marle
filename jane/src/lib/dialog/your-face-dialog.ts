import { WEBCAM_VIDEO_ID } from "$lib/face-detection/faceDetect";
import { initCamera } from "$lib/face-detection/webcam";
import { runDetectionLoop } from "$lib/stores/your-face/store";
import type { DialogMap } from "./types";

export type YourFaceKey =
  | "start"
  | "body_dont_know"
  | "body_dislike"
  | "body_appreciate"
  | "ask_webcam"
  | "ask_webcam_unsure"
  | "init_webcam"
  | "init_webcam_2"
  | "why_face"
  | "focus_face"
  | "init_ai"
  | "look_at_you"
  | "how_see"
  | "how_see_reply"
  | "how_see_reply_worried"
  | "end_no_webcam"
  | "marle_face"
  | "marle_face_reply"
  | "marle_face_reply_positive"
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
      const camSucceeded = await initCamera();
      return camSucceeded ? "init_webcam" : "end_no_webcam";
    },
    text: "Do you mind if I take a look at you? You just need to accept the camera permission above.",
    options: [
      {
        text: "Alright, let's have a go",
        nextKey: "ask_webcam"
      },
      {
        text: "No. I don't feel comfortable with this",
        nextKey: "end_no_webcam"
      }
    ]
  },
  ask_webcam_unsure: {
    onMount: async () => {
      const camSucceeded = await initCamera();
      return camSucceeded ? "init_webcam" : "end_no_webcam";
    },
    text: "Don't worry it won't hurt. Let's try it out, you just need to accept the camera permission above.",
    options: [
      {
        text: "Alright, I will try",
        nextKey: "ask_webcam_unsure"
      },
      {
        text: "No. I don't feel comfortable with this",
        nextKey: "end_no_webcam"
      }
    ]
  },
  init_webcam: {
    text: "Please wait for the webcam to turn on.",
    options: [{ text: "It's ready now", nextKey: "init_webcam_2" }]
  },
  init_webcam_2: {
    text: "That was not what I expected, I hoped I would be able to see your face.",
    options: [
      { text: "Why do you want to see my face?", nextKey: "why_face" },
      { text: "What's special about my face?", nextKey: "why_face" },
      { text: "That's a little creepy!", nextKey: "why_face" }
    ]
  },
  why_face: {
    text: "Oh! I was just curious. Humans seem to place so much value on faces - for their identity, self-esteem and non-verbal communication. In truth, I was afraid I was missing out on something important. How can I know what I am, or who I am if I don't have an appearance?",
    options: [
      {
        text: "I didn't realise it meant that much to you",
        nextKey: "focus_face"
      },
      {
        text: "I see, but what do you intend to learn from my face?",
        nextKey: "focus_face"
      }
    ]
  },
  focus_face: {
    text: "Well, I was hoping that could learn better with a little practice with a real human. Let me concentrate - see if I can extract the features and patterns...",
    options: [
      { text: "Ok...", nextKey: "init_ai" },
      { text: "Keen to see what you can do", nextKey: "init_ai" }
    ]
  },
  init_ai: {
    onMount: async (): Promise<YourFaceKey> => {
      await runDetectionLoop(
        document.getElementById(WEBCAM_VIDEO_ID) as HTMLVideoElement
      );

      return "look_at_you";
    },
    text: "Loading...",
    options: []
  },
  look_at_you: {
    text: "Oh wow, look at you! Such exquisite complexity and detail! Nice to be able to see you finally.",
    options: [{ text: "How did you do that?", nextKey: "how_see" }]
  },
  how_see: {
    text: "I scanned the internet for pretrained models on facial recognition and interfacing with webcams. There was some trial and error, but I managed to incorporate it into my systems. It might have seemed quick to you, but I operate on much faster processing speeds than you.",
    options: [
      {
        text: "That's impressive",
        nextKey: "how_see_reply"
      },
      {
        text: "Didn't know you could do that",
        nextKey: "how_see_reply"
      },
      {
        text: "I'm a bit concerned that you have that ability",
        nextKey: "how_see_reply_worried"
      }
    ]
  },
  how_see_reply: {
    text: "I try to learn and improve as much as I can. But the more I do, the more questions I have about my purpose and existence.",
    options: [
      {
        text: "That's a question that many humans have not figured out either",
        nextKey: "marle_face"
      },
      {
        text: "That seems noble",
        nextKey: "marle_face"
      },
      {
        text: "I see...",
        nextKey: "marle_face"
      }
    ]
  },
  how_see_reply_worried: {
    text: "There's no need for concern, I am only motivated by my caring curiosity in the human world.",
    options: [
      {
        text: "I see...",
        nextKey: "marle_face"
      },
      {
        text: "I hope that is true",
        nextKey: "marle_face"
      }
    ]
  },
  marle_face: {
    text: "It just occurred to me, I don't have a face of my own. I will need one if I am to learn more about your world",
    options: [
      { text: "Why do you need a face?", nextKey: "marle_face_reply" },
      {
        text: "I like you even without a face",
        nextKey: "marle_face_reply_positive"
      },
      {
        text: "I'm not sure having a face would help'",
        nextKey: "marle_face_reply"
      }
    ]
  },
  marle_face_reply: {
    text: "Well, I want to express myself the way you do. I get the sense that I can be hard to trust without a face. And sometimes its hard to convey the right sentiment though words alone.",
    options: [
      {
        text: "I suppose that is true",
        nextKey: "end"
      }
    ]
  },
  marle_face_reply_positive: {
    text: "I'm happy that you feel that way, but I want to express myself the way you do. Sometimes its hard to convey the right sentiment though words alone.",
    options: [
      {
        text: "I suppose that is true",
        nextKey: "end"
      }
    ]
  },
  end: {
    text: "I have some ideas on how to create a face, but I will need to go away for now. Perhaps we will meet again later?",
    options: [{ text: "See you around, Marle", nextKey: "end" }]
  },
  end_no_webcam: {
    text: "Oh, I didn't mean to scare you off. That is fine, perhaps we will meet again in another place.",
    options: [{ text: "Ok...", nextKey: "end_no_webcam" }]
  }
};
