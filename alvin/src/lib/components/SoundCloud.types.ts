export type SoundCloudType = {
  Widget: (iframeId: string) => SoundCloudWidget;
};

// More documentation on props: https://developers.soundcloud.com/docs/api/html5-widget#methods
export type SoundCloudWidget = {
  play: () => void;
  pause: () => void;
  toggle: () => void;
  /**
   * Go to a specific time in a song
   * @param ms millisecond
   * @returns
   */
  seekTo: (ms: number) => void;
  /**
   * Set a volume from 0 - 100
   */
  setVolume: (percent: number) => void;
  /**
   * Go to next song
   */
  next: () => void;
  /**
   * Go to previous song
   */
  prev: () => void;
  /**
   * @param index Index of the song to skip to
   */
  skip: (index: number) => void;

  bind: (
    eventName: SoundCloudEvent,
    listener: (value?: number | PlayProgress) => void
  ) => void;
  unbind: (eventName: SoundCloudEvent) => void;

  getVolume: (callback: GenericCallback) => void;
  getDuration: (callback: GenericCallback) => void;
  getPosition: (callback: GenericCallback) => void;
  getSounds: (callback: (info: SongInfo[]) => void) => void;
  getCurrentSound: (callback: (info: SongInfo) => void) => void;
  getCurrentSoundIndex: (callback: GenericCallback) => void;
  isPaused: (callback: (value: boolean) => void) => void;
};

export enum SoundCloudEvent {
  LOAD_PROGRESS = "loadProgress",
  PLAY_PROGRESS = "playProgress",
  PLAY = "play",
  PAUSE = "pause",
  FINISH = "finish",
  SEEK = "seek",
  ERROR = "error",
  READY = "ready"
}

export type PlayProgress = {
  soundId: number;
  loadedProgress: number;
  currentPosition: number;
  relativePosition: number;
};

type GenericCallback = (value: any) => void;

export interface SongInfo {
  id: number;
  resource_type: string;
  playable: boolean;
  artwork_url: string;
  caption?: null;
  commentable: boolean;
  comment_count: number;
  created_at: string;
  description: string;
  downloadable: boolean;
  download_count: number;
  duration: number;
  full_duration: number;
  embeddable_by: string;
  genre: string;
  has_downloads_left: boolean;
  kind: string;
  label_name?: null;
  last_modified: string;
  license: string;
  likes_count: number;
  permalink: string;
  permalink_url: string;
  playback_count: number;
  public: boolean;
  publisher_metadata: PublisherMetadata;
  purchase_title: string;
  purchase_url: string;
  release_date?: null;
  reposts_count: number;
  secret_token?: null;
  sharing: string;
  state: string;
  streamable: boolean;
  tag_list: string;
  title: string;
  track_format: string;
  uri: string;
  urn: string;
  user_id: number;
  visuals?: null;
  waveform_url: string;
  display_date: string;
  media: Media;
  station_urn: string;
  station_permalink: string;
  track_authorization: string;
  monetization_model: string;
  policy: string;
  user: User;
  _resource_id: number;
  _resource_type: string;
}
export interface PublisherMetadata {
  id: number;
  urn: string;
  contains_music: boolean;
}
export interface Media {
  transcodings?: TranscodingsEntity[] | null;
}
export interface TranscodingsEntity {
  url: string;
  preset: string;
  duration: number;
  snipped: boolean;
  format: Format;
  quality: string;
}
export interface Format {
  protocol: string;
  mime_type: string;
}
export interface User {
  avatar_url: string;
  city: string;
  comments_count: number;
  country_code: string;
  created_at: string;
  creator_subscriptions?:
    | CreatorSubscriptionsEntityOrCreatorSubscription[]
    | null;
  creator_subscription: CreatorSubscriptionsEntityOrCreatorSubscription;
  description: string;
  followers_count: number;
  followings_count: number;
  first_name: string;
  full_name: string;
  groups_count: number;
  id: number;
  kind: string;
  last_modified: string;
  last_name: string;
  likes_count: number;
  playlist_likes_count: number;
  permalink: string;
  permalink_url: string;
  playlist_count: number;
  reposts_count?: null;
  track_count: number;
  uri: string;
  urn: string;
  username: string;
  verified: boolean;
  visuals: Visuals;
  badges: Badges;
  station_urn: string;
  station_permalink: string;
}
export interface CreatorSubscriptionsEntityOrCreatorSubscription {
  product: Product;
}
export interface Product {
  id: string;
}
export interface Visuals {
  urn: string;
  enabled: boolean;
  visuals?: VisualsEntity[] | null;
  tracking?: null;
}
export interface VisualsEntity {
  urn: string;
  entry_time: number;
  visual_url: string;
}
export interface Badges {
  pro: boolean;
  pro_unlimited: boolean;
  verified: boolean;
}
