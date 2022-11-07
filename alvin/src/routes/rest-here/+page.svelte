<script type="ts">
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
    src="https://w.soundcloud.com/player/?url=https://soundcloud.com/durdenhauer/praise-the-lord-durdenhauer-edit&color=0066CC&show_artwork=true&buying=false&sharing=false&show_playcount=false&download=false"
  />
  {#if songInfo}
    <img
      src={songInfo.artwork_url.replace("-large.jpg", "-t500x500.jpg")}
      alt="song cover art"
    />
  {/if}
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
    width: 500px;
    height: 100px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    padding: 2rem;
  }
</style>
