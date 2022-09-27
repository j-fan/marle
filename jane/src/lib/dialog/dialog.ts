import type { DialogMap } from "./types";

export const example: DialogMap = {
  key: {
    text: "",
    options: [
      {
        text: "",
        nextKey: ""
      }
    ]
  }
};

export const fabricOfDreamsDialog: DialogMap = {
  start: {
    text: "Do you ever dream? What is it like? I heard that humans do this when they sleep.",
    options: [
      {
        text: "I think I dream, but I don’t remember them.",
        nextKey: "forgotten_dream"
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
        nextKey: ""
      }
    ]
  },
  always_dream: {
    text: "Then you must be an expert. I wonder if you can help me interpret what I am seeing.",
    options: [
      {
        text: "Ok, sure",
        nextKey: ""
      }
    ]
  },
  no_dream: {
    text: "That's very strange. In my notes about humans I thought that dreaming was a regular activity. But perhaps you can help with this issue I am having anyway.",
    options: [
      {
        text: "I'll try to help.",
        nextKey: ""
      }
    ]
  }
};
