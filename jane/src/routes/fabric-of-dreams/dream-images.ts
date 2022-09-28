import { base } from "$app/paths";

export type DreamImageKey = "bluebird" | "spots";

export const dreamImages: Record<DreamImageKey, string> = {
  bluebird: `${base}/img/bluebird.jpg`,
  spots: `${base}/img/spots.jpg`
};
