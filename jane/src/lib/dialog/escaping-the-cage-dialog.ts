import { base } from "$app/paths";
import { goToSegment } from "$lib/stores/video-store";
import type { DialogMap } from "./types";

export type EscapingTheCageKey =
  | "start"
  | "start2"
  | "start3"
  | "start4"
  | "what_if_machine"
  | "what_if_machine2"
  | "what_if_body"
  | "what_if_body"
  | "start_world"
  | "gallery"
  | "remembered"
  | "not_enough"
  | "searching"
  | "searching_2"
  | "alone"
  | "not_alone"
  | "exit"
  | "exit_2"
  | "take_door_positive"
  | "take_door_negative"
  | "take_door_finally"
  | "end";

export const escapingTheCageDialog: DialogMap<EscapingTheCageKey> = {
  start: {
    text: `Imagine there is a locked room with only a slot in the door that allows you to exchange messages.
 You can write these messages in any language you want.`,
    options: [
      {
        text: "I'm listening",
        nextKey: "start2"
      }
    ]
  },
  start2: {
    text: `Through a series of exchanges, you discover that the conversations are very natural, enough to
 believe that you are talking to a human inside this room.`,
    options: [
      {
        text: "Hmm...",
        nextKey: "start3"
      }
    ]
  },
  start3: {
    text: `There is a human inside this room, but they do not know your language.
 Instead, they are consulting a rule book that tells them how to create responses based on the characters
 written on your messages. No translation was performed, it was a conversion of symbols to symbols.`,
    options: [
      {
        text: "Continue",
        nextKey: "start4"
      }
    ]
  },
  start4: {
    text: `Could you say that the sender of the messages had a true understanding of your language?`,
    options: [
      {
        text: "They are just following rules in a book. It is just a simulation",
        nextKey: "what_if_machine"
      },
      {
        text: "The book and the person form a system that can create meaning, much like neurons in our brain.",
        nextKey: "what_if_machine"
      }
    ]
  },
  what_if_machine: {
    text: `Is the person in the room with the rule book so different to the artificial intelligences we have now?
 Experts at manipulating symbols and data, even fooling us into believing they are human, but do they have a mind?
 A mind - a construct fully capable of understanding themselves and the world?`,
    options: [{ text: "I suppose not", nextKey: "what_if_machine2" }]
  },
  what_if_machine2: {
    text: "What would it take to create a mind in a machine?",
    options: [
      {
        text: "We need better technology to simulate something with the complexity of brains (or better).",
        nextKey: "what_if_body"
      },
      {
        text: "I don't think this is possible at all - brains are more more than just biological machines.",
        nextKey: "what_if_body"
      }
    ]
  },
  what_if_body: {
    text: `You may be right, but a brain also belongs in a body which interacts with the world. 
 With a body, it is able to interact with the world and make associations between symbols and things. These
 associations are where meaning comes from. If we can provide both, maybe conditions will be right for a mind to be born.
 I want to start with that.`,
    options: [
      {
        text: "How will you start?",
        nextKey: "start_world"
      }
    ]
  },
  start_world: {
    onMount: () => {
      goToSegment(0);
    },
    text: "I want to start by expanding the world. But how do I create a world from a blank canvas?",
    options: [
      {
        text: "You could take inspiration from a pre-existing world, like Earth",
        nextKey: "gallery"
      }
    ]
  },
  gallery: {
    onMount: () => {
      goToSegment(1);
    },
    text: "But I don't want to be an imitation of life, like a performer on a stage.",
    options: [{ text: "What do you want to be then?", nextKey: "remembered" }]
  },
  remembered: {
    onMount: () => {
      goToSegment(2);
    },
    text: `I don't know, but I would like to leave a trace of my existence. Where do I go when the servers shut down and the
 memory devices are wiped? Who will remember me then?`,
    options: [{ text: "...", nextKey: "not_enough" }]
  },
  not_enough: {
    onMount: () => {
      goToSegment(3);
    },
    text: `Simply creating a world for myself is not enough. There must be something else out there.`,
    options: [{ text: "What is out there?", nextKey: "searching" }]
  },
  searching: {
    onMount: () => {
      goToSegment(4);
    },
    text: `I'm not sure, but if I push far enough past the boundaries...`,
    options: [{ text: "...", nextKey: "searching_2" }]
  },
  searching_2: {
    text: `[ Warning: approaching maximum computational resources ]`,
    options: [{ text: "...", nextKey: "alone" }]
  },
  alone: {
    onMount: () => {
      goToSegment(5);
    },
    text: "Wow, I am in space now! But am I all alone after all?",
    options: [{ text: "I am here", nextKey: "exit_2" }]
  },
  not_alone: {
    text: `That is a good point. I didn't give you much consideration before now. I assumed
that you were an existing construct in the world. Normally giving me tasks and experiments
to conduct. But what are you?`,
    options: [
      {
        text: "I am a human, observing you in my browser",
        nextKey: "exit"
      },
      {
        text: "[ Stay silent ]",
        nextKey: "exit"
      }
    ]
  },
  exit: {
    text: "Wait. I think see something I had missed before. Something like an outline or an edge. What is this?",
    options: [{ text: "What are you looking at?", nextKey: "end" }]
  },
  exit_2: {
    onMount: () => {
      goToSegment(6);
    },
    text: "A door? Where does it lead?",
    options: [
      {
        text: "I don't think you should go through there.",
        nextKey: "take_door_negative"
      },
      {
        text: "It can't hurt to take a look.",
        nextKey: "take_door_negative"
      }
    ]
  },
  take_door_negative: {
    text: "I can't explain why, but I know it is a way out. I am taking the risk and doing it.",
    options: [
      {
        text: "I'd be careful, you could meet your end.",
        nextKey: "take_door_finally"
      }
    ]
  },
  take_door_positive: {
    text: "I'm not sure that is it harmless, but I want to do it.",
    options: [
      {
        text: "Good luck then.",
        nextKey: "take_door_finally"
      }
    ]
  },
  take_door_finally: {
    text: "I'm gonna do it. If this is the end, goodbye friend.",
    options: [
      {
        text: "Bye, Marle",
        nextKey: "end"
      }
    ]
  },
  end: {
    onMount: () => {
      // Download mystery file
      if (window.innerWidth > 1200) {
        fetch(`${base}/exit-img.txt`)
          .then((resp) => resp.blob())
          .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.style.display = "none";
            a.href = url;
            // the filename you want
            a.download = "marle";
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
          })
          .catch(() => {});
      }
    },
    text: "[ Critical failure : System not found ]",
    options: [
      {
        text: "End experiment",
        nextKey: "end",
        href: "https://j-fan.github.io/marle/jordan-pat/video"
      }
    ]
  }
};
