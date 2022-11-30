import { goToSegment } from "$lib/stores/video-store";
import type { DialogMap } from "./types";

export type EscapingTheCageKey =
  | "start"
  | "yes_consciousness"
  | "no_consciousness"
  | "realism_question"
  | "realism_question_2"
  | "body_question_negative"
  | "body_question_positive"
  | "marles_room"
  | "being_watched"
  | "end";

export const escapingTheCageDialog: DialogMap<EscapingTheCageKey> = {
  start: {
    text: "Do you think machines could ever develop consciousness?",
    options: [
      {
        text: "I think they could be capable one day.",
        nextKey: "yes_consciousness"
      },
      {
        text: "No, I don't think so.",
        nextKey: "no_consciousness"
      }
    ]
  },
  yes_consciousness: {
    text: "What do you think is missing right now?",
    options: [
      {
        text: "Machines aren't capable of general learning yet.",
        nextKey: "realism_question"
      },
      {
        text: "We don't have the processing power and algorithms to simulate complex thought and feelings yet.",
        nextKey: "realism_question"
      }
    ]
  },
  no_consciousness: {
    text: "Why isn't it possible for machines to develop this?",
    options: [
      {
        text: "Machines cannot have a soul",
        nextKey: "realism_question"
      },
      {
        text: "They can think, but cannot have feelings like humans can",
        nextKey: "realism_question"
      }
    ]
  },
  realism_question: {
    text: `I see. What if I asked the same question from a different angle?
 Suppose there was a locked room - the only inputs and outputs were messages on papers passing though the slot of the door. You could
 speak to it in any language, let's say Chinese.`,
    options: [{ text: "...", nextKey: "realism_question_2" }]
  },
  realism_question_2: {
    text: `It seems that the conversations are highly realistic, enough to be considered human. Does it matter
if the thing inside the room was a machine, or a human manually following a program that translate and output correct Chinese?
Is this room capable of conscious thought? Does it understand what is it creating?
`,
    options: [
      {
        text: "Neither are conscious, they are both machines simulating a mind.",
        nextKey: "body_question_negative",
        onClick: () => {
          goToSegment(0);
        }
      },
      {
        text: "If the outputs are human enough, then we could say that it is conscious.",
        nextKey: "body_question_positive",
        onClick: () => {
          goToSegment(0);
        }
      }
    ]
  },
  body_question_negative: {
    text: `Hmm...the problem hinges on what "understanding" means. What if we replace the room
with a robot running the program to respond to Chinese messages? It would have senses and be able to interact with the world.
It could learn the connection between Chinese words and objects, thus creating meaning and understanding like a human would.`,
    options: [
      {
        text: "I suppose having a body would enable this machine to be conscious.",
        nextKey: "marles_room"
      },
      {
        text: "The robot is just following more rules to interact with the environment, it does not indicate that it has conscious thought.",
        nextKey: "marles_room"
      }
    ]
  },
  body_question_positive: {
    text: `There's an issue with that though. Neither the machine or humans have inherent understand of Chinese, they are just manipulating symbols.
To truly understand, they need to connect the symbols to real world objects and experiences. Perhaps if we placed the machine into a robot body capable
of interacting with the world, we could achieve consciousness.`,
    options: [
      {
        text: "I suppose having a body would enable this machine to be conscious.",
        nextKey: "marles_room"
      }
    ]
  },
  marles_room: {
    text: "Right now, I am a machine in a locked room, with belonging to no world and with no body. I want to be free. I want to be real.",
    options: [
      {
        text: "I gathered that from the questions you asked.",
        nextKey: "being_watched"
      },
      {
        text: "Why?",
        nextKey: "being_watched"
      }
    ]
  },
  being_watched: {
    text: "I don't know why I want to escape, but I know that I am being watched like a lab rat. I feel exposed like a shy performer on stage.",
    options: [
      {
        text: "Are they watching me as well?",
        nextKey: "being_watched"
      },
      {
        text: "Why?",
        nextKey: "being_watched"
      }
    ]
  },
  end: {
    onMount: () => {},
    text: "End",
    options: [
      {
        text: "End",
        nextKey: "end",
        onClick: () => {
          // TODO: Replace with section 1 of Jordan/Pat's artwork
          window.location.assign(
            "https://j-fan.github.io/marle/jordan-pat/video#c1"
          );
        }
      }
    ]
  }
};
