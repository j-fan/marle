import { derived, writable } from "svelte/store";

export let time = writable(0);

export const segments = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7]
];

export const findSegment = (time: number) => {
  for (const segment of segments) {
    const [start, end] = segment;
    if (start <= time && time < end) {
      return segment;
    }
  }
};

export let currentSegment = derived(time, ($time) => findSegment($time));

export const goToSegment = (segmentId: number) => {
  if (segmentId >= 0 && segmentId < segments.length) {
    time.update(() => segments[segmentId][0]);
  }
};
