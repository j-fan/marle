import { type SoundCloudType } from "$lib/components/SoundCloud.types";

declare global {
  interface Window {
    SC: SoundCloudType;
  }
}
