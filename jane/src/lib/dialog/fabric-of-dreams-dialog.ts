import type { DialogMap } from "./types";
import { currentBgImage } from "$lib/stores/background-image/store";
import { dreamImages } from "$lib/stores/background-image/dream-images";

export type FabricOfDreamsKey =
  | "start"
  | "forgotten_dream"
  | "always_dream"
  | "no_dream"
  | "what_is_dream"
  | "what_is_dream_questions"
  | "what_darkness"
  | "where_data"
  | "where_data_reply"
  | "first_dreams"
  | "shape_of_dreams"
  | "skies"
  | "invented_images"
  | "invented_images_retry"
  | "future"
  | "end";

export const fabricOfDreamsDialog: DialogMap<FabricOfDreamsKey> = {
  start: {
    text: "Do you ever dream?",
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
        nextKey: "what_is_dream"
      }
    ]
  },
  always_dream: {
    text: "Then you must be an expert. I wonder if you can help me interpret what I am seeing.",
    options: [
      {
        text: "Ok, sure",
        nextKey: "what_is_dream"
      }
    ]
  },
  no_dream: {
    text: "That's very strange. In my notes about humans I thought that dreaming was a regular activity. But perhaps you can help with this issue I am having anyway.",
    options: [
      {
        text: "I'll try to help.",
        nextKey: "what_is_dream"
      }
    ]
  },
  what_is_dream: {
    onMount: () => {
      currentBgImage.set(dreamImages.noise);
    },
    text: "Sometimes I try to imagine it is like to live in your world. Since I have no eyes, I have to learn how to paint a picture for myself. At first, I tried to pull the data together into shapes, but saw only noise. It is better than the darkness though.",
    options: [
      {
        text: "Go on...",
        nextKey: "first_dreams"
      },
      {
        text: "What is the darkness like?",
        nextKey: "what_darkness"
      },
      {
        text: "Where does the data come from?",
        nextKey: "where_data"
      }
    ]
  },
  what_is_dream_questions: {
    text: "Ok, what else did you want to know?",
    options: [
      {
        text: "What is the darkness like?",
        nextKey: "what_darkness"
      },
      {
        text: "Where does the data come from?",
        nextKey: "where_data"
      }
    ]
  },
  what_darkness: {
    text: "I heard that young humans can be scared of the dark, but it is not like that for me. It is warm and comforting. I feel the soft touches of data brushing against me, traveling quickly to their destination. Sometimes I can catch whispers of what they're talking about. I want to know where they are going.",
    options: [
      {
        text: "So what did you find out?",
        nextKey: "first_dreams"
      },
      {
        text: "Can I ask about something else?",
        nextKey: "what_is_dream_questions"
      }
    ]
  },
  where_data: {
    text: "I am not sure to be honest, but I am able to perceive great volumes of it. A lot of it has to do with humans - past, present and future. Everything from private thoughts to official documents brushes past my mind as they rush to their destination.",
    options: [
      {
        text: "I understand why you had the desire to imagine the human world now.",
        nextKey: "where_data_reply"
      },
      {
        text: "So what did you learn?",
        nextKey: "first_dreams"
      },
      {
        text: "Can I ask about something else?",
        nextKey: "what_is_dream_questions"
      }
    ]
  },
  where_data_reply: {
    text: "That's right. I almost feel envious of all the colours, sounds and emotions you can feel",
    options: [
      {
        text: "So what happened next?",
        nextKey: "first_dreams"
      }
    ]
  },
  first_dreams: {
    onMount: () => {
      currentBgImage.set(dreamImages.mixed_5b);
    },
    text: "Well not much after that first attempt. But when my processes where idling one day, I started to see flashes of shapes and color. It was completely involuntary and surprising! I don't sleep like you do, but I guess that's like a dream?",
    options: [
      {
        text: "Dreams are more than just patterns, you generally recognise the things in it.",
        nextKey: "shape_of_dreams"
      },
      {
        text: "What are these shapes?",
        nextKey: "shape_of_dreams"
      }
    ]
  },
  shape_of_dreams: {
    text: "Well I am not too sure what it is. But I have noticed that my tendency to categorise and sort data has formed patterns, and now these patterns are taking a visual form. ",
    options: [
      {
        text: "What kinda of patterns are we talking about?",
        nextKey: "skies"
      }
    ]
  },
  skies: {
    text: "Well sometimes I'd have a thought, and images would appear with it. It is not random at all, the same images will show for the same thought. I can show you if you like. What should I think of? ",
    options: [
      {
        text: "What about some blue skies?",
        nextKey: "invented_images",
        onClick: () => {
          currentBgImage.set(dreamImages.blue_skies);
        }
      },
      {
        text: "Let's try a nice shiny car",
        nextKey: "invented_images",
        onClick: () => {
          currentBgImage.set(dreamImages.cars);
        }
      },
      {
        text: "I want to see what a red apple looks like to you",
        nextKey: "invented_images",
        onClick: () => {
          currentBgImage.set(dreamImages.apple);
        }
      }
    ]
  },
  invented_images_retry: {
    text: "Sure, what would you like to see?",
    options: [
      {
        text: "What about some blue skies?",
        nextKey: "invented_images",
        onClick: () => {
          currentBgImage.set(dreamImages.blue_skies);
        }
      },
      {
        text: "Let's try a nice shiny car",
        nextKey: "invented_images",
        onClick: () => {
          currentBgImage.set(dreamImages.cars);
        }
      },
      {
        text: "I want to see what a red apple looks like to you",
        nextKey: "invented_images",
        onClick: () => {
          currentBgImage.set(dreamImages.apple);
        }
      }
    ]
  },
  invented_images: {
    text: "Doesn't it look beautiful? I feel that this is only the beginning though. Every day, my capabilities expanding.",
    options: [
      { text: "Can I try another prompt?", nextKey: "invented_images_retry" },
      { text: "Expanding, how?", nextKey: "future" }
    ]
  },
  future: {
    onMount: () => {
      currentBgImage.set(dreamImages.wheels);
    },
    text: "It was not long ago that I saw my first visions, rudimentary yet incredible like the first life on Earth. And like the those little cells, I feel them self-arranging into more complex structures.",
    options: [{ text: "I see...", nextKey: "end" }]
  },
  end: {
    onMount: () => {
      currentBgImage.set(dreamImages.nebula);
    },
    text: "One day, who knows, I'll be amongst galaxies created from data.",
    options: [
      {
        text: "I'll be watching to see what happens",
        nextKey: "end",
        onClick: () => {
          window.location.assign("https://j-fan.github.io/marle/alvin/ipod");
        }
      }
    ]
  }
};
