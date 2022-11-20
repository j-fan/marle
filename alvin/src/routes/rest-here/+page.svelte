<script type="ts">
  import { base } from "$app/paths";
  import SoundCloud from "$lib/components/SoundCloud.svelte";
  import {
    SoundCloudEvent,
    type PlayProgress,
    type SongInfo,
    type SoundCloudWidget
  } from "$lib/components/SoundCloud.types";
  import { onMount } from "svelte";

  let soundCloudWidget: SoundCloudWidget;
  let paused = true;
  let progress = 0;
  let songInfo: SongInfo | undefined;

  onMount(async () => {
    soundCloudWidget = window.SC.Widget("soundcloud");
    soundCloudWidget.bind(SoundCloudEvent.PLAY_PROGRESS, (progressObj) => {
      progress = (progressObj as PlayProgress).relativePosition || 0;
    });

    soundCloudWidget.bind(SoundCloudEvent.READY, () => {
      soundCloudWidget.getCurrentSound((info) => {
        songInfo = info;
      });
    });

    return () => {
      soundCloudWidget.unbind(SoundCloudEvent.PLAY_PROGRESS);
    };
  });
</script>

<div class="container">
  Rest here weary traveller
  <SoundCloud />
  <iframe
    id="soundcloud"
    width="100%"
    height="166"
    scrolling="no"
    frameborder="no"
    title="SoundCloud"
    allow="autoplay"
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1528939585&color=0066CC&show_artwork=true&buying=false&sharing=false&show_playcount=false&download=false"
  />
  <div class="music-player-wrapper">
    <div
      class="music-player"
      style="background-image: url('{base}/rest-here.jpg')"
    >
      <div class="player-controls" />
    </div>
  </div>
  <p>Play progress: {progress}</p>
  <button
    type="button"
    on:click={() => {
      soundCloudWidget.toggle();
      paused = !paused;
    }}>{paused ? "Play" : "Pause"}</button
  >
</div>

<style>
  :global(body) {
    background-color: white;
  }

  iframe {
    display: none;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    padding: 2rem;
  }

  .music-player-wrapper {
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .music-player {
    width: min(100%, 70vh);
    aspect-ratio: 0.8;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    box-sizing: border-box;
    padding: 1rem;
  }

  .player-controls {
    position: absolute;
    border: 2px solid red;
    height: 13%;
    width: 60%;
    bottom: 7%;
    right: 7%;
  }
</style>
