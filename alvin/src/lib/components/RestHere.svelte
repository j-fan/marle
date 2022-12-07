<script type="ts">
  import Marquee from "$lib/components/Marquee.svelte";
  import SoundCloud from "$lib/components/SoundCloud.svelte";
  import {
    SoundCloudEvent,
    type PlayProgress,
    type SongInfo,
    type SoundCloudWidget
  } from "$lib/components/SoundCloud.types";
  import { onMount } from "svelte";
  import { millisecondsToTimestamp } from "./utils";

  let soundCloudWidget: SoundCloudWidget;
  let paused = true;
  let progress = 0;
  let currentTime = "0:00";
  let songInfo: SongInfo | undefined;

  onMount(async () => {
    soundCloudWidget = window.SC.Widget("soundcloud");
    soundCloudWidget.bind(SoundCloudEvent.PLAY_PROGRESS, (progressObj) => {
      const progressInfo = progressObj as PlayProgress;
      progress = progressInfo.relativePosition || 0;

      currentTime = millisecondsToTimestamp(progressInfo.currentPosition);
    });

    soundCloudWidget.bind(SoundCloudEvent.READY, () => {
      soundCloudWidget.getCurrentSound((info) => {
        songInfo = info;
      });
    });

    return () => {
      soundCloudWidget.unbind(SoundCloudEvent.PLAY_PROGRESS);
      paused = true;
    };
  });

  const toggleAudio = () => {
    soundCloudWidget.toggle();
    paused = !paused;
  };
</script>

<svelte:head>
  <title>Origin:Marle - Rest Here Weary Traveller - Alvin Zhong</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
    rel="stylesheet"
  />
  <link
    rel="preload"
    as="image"
    href="https://raw.githubusercontent.com/j-fan/marle-images/main/alvin/pause-button.png"
  />
</svelte:head>
<div class="container">
  <SoundCloud />
  <iframe
    id="soundcloud"
    width="100%"
    height="166"
    scrolling="no"
    frameborder="no"
    title="SoundCloud"
    allow="autoplay"
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1528939585"
  />
  <div class="music-player-wrapper">
    <div
      class="music-player"
      style="background-image: url('https://raw.githubusercontent.com/j-fan/marle-images/main/alvin/rest-here.jpg')"
    >
      <div class="player-controls">
        <div class="time-info">
          <div class="song-title">
            {#if songInfo}
              <Marquee speed={window.innerWidth < 800 ? 15 : 40} pauseOnHover>
                <p>{songInfo.title}</p>
              </Marquee>
            {:else}
              <p>Loading...</p>
            {/if}
          </div>
          <div
            class="track"
            style="background-image: url('https://raw.githubusercontent.com/j-fan/marle-images/main/alvin/track.png')"
          >
            <img
              class="track-thumb"
              src="https://raw.githubusercontent.com/j-fan/marle-images/main/alvin/track-thumb.png"
              alt="track thumb"
              width="28px"
              height="28px"
              style="left: {progress}%"
            />
          </div>
          <div class="timestamp">
            <p>{currentTime}</p>
            <p>
              {songInfo ? millisecondsToTimestamp(songInfo.duration) : "0:00"}
            </p>
          </div>
        </div>
        <div class="button-wrapper">
          {#if paused}
            <button
              type="button"
              on:click={toggleAudio}
              class={songInfo ? undefined : "loading"}
            >
              <img
                src="https://raw.githubusercontent.com/j-fan/marle-images/main/alvin/play-button.png"
                class="pause-play-btn"
                alt="play"
              />
            </button>
          {:else}
            <button
              type="button"
              on:click={toggleAudio}
              class={songInfo ? undefined : "loading"}
            >
              <img
                src="https://raw.githubusercontent.com/j-fan/marle-images/main/alvin/pause-button.png"
                class="pause-play-btn"
                alt="pause"
              />
            </button>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  :global(body) {
    background-color: white;
  }

  .container {
    font-family: "DM Serif Display", serif;
    font-weight: bold;
  }

  iframe {
    display: none;
  }

  .music-player-wrapper {
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .music-player {
    width: min(100%, 60vh);
    aspect-ratio: 0.8;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    box-sizing: border-box;
    padding: 1rem;
    user-select: none;
  }

  .player-controls {
    position: absolute;
    height: 13%;
    width: 60%;
    bottom: 6%;
    right: 7%;
    display: grid;
    grid-template-columns: 3fr 1fr;
    align-items: center;
    gap: 1rem;
  }

  .button-wrapper {
    height: 100%;
  }

  .pause-play-btn {
    aspect-ratio: 1;
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    width: 100%;
    user-select: none;
    padding: 0;
  }

  button:hover {
    transform: scale(1.1);
  }

  button:active {
    transform: scale(1);
  }

  button.loading {
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  }

  .time-info {
    width: 100%;
    overflow: hidden;
  }

  .song-title {
    height: 25px;
    width: 100%;
    font-size: 1rem;
  }

  .song-title p {
    white-space: nowrap;
    user-select: none;
    padding: 0 1rem;
  }

  .track {
    width: 100%;
    height: 28px;
    background-position: center;
    background-size: cover;
    background-repeat-y: no-repeat;
    display: flex;
    align-items: center;
    position: relative;
    user-select: none;
  }

  .track-thumb {
    position: absolute;
    cursor: not-allowed;
    user-select: none;
  }

  .timestamp {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
  }
</style>
