import { derived, writable } from "svelte/store";

export let time = writable(0);

export const segments = [
  [0, 1.3],
  [5.2, 6.4],
  [10.4, 11.6],
  [15.6, 16.8],
  [20.8, 22]
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
