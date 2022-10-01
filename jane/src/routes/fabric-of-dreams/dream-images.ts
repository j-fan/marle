import { base } from "$app/paths";

export type DreamImageKey = "start" | "bluebird" | "spots";

export const dreamImages: Record<DreamImageKey, string> = {
  start: `${base}/img/white.jpg`,
  bluebird: `${base}/img/bluebird.jpg`,
  spots: `${base}/img/spots.jpg`
};
