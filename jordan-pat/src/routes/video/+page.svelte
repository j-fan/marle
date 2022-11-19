<script lang="ts">
  import { onMount } from "svelte";

  let time = 0;
  let videoRef: HTMLVideoElement;
  $: {
    time = time;
    handleTimeUpdate();
  }

  const epsilon = 0.1; // seconds
  const segments = [
    [0, 1.3],
    [5.2, 6.4],
    [10.4, 11.6],
    [15.6, 16.8],
    [20.8, 22],
  ];
  const buttonC =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full";
  const videoSrc =
    "https://firebasestorage.googleapis.com/v0/b/marle-5d8ad.appspot.com/o/Marle_VideoTest.mp4?alt=media&token=fbf1ef92-57c9-4d8d-b9fa-5831c4b010c5";

  const findSegment = (t: number) => {
    for (const segment of segments) {
      const [start, end] = segment;
      if (start <= t && t < end) {
        return segment;
      }
    }
  };

  const handleTimeUpdate = () => {
    const segment = findSegment(time);
    if (!segment) {
      return;
    }

    const [start, end] = segment;
    if (time >= end - epsilon) {
      videoRef.currentTime = start;
      videoRef.play();
    }
  };

  onMount(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash.startsWith("c")) {
      const [segmentIndex] = hash.match(/\d+/) || ["0"];
      videoRef.currentTime = segments[parseInt(segmentIndex)][0];
    } else if (hash.startsWith("t")) {
      const [segmentIndex] = hash.match(/\d+/) || ["0"];
      videoRef.currentTime = segments[parseInt(segmentIndex)][1];
    }
  });
</script>

<h1>Video Test</h1>
<p class="text-3xl font-bold underline">
  Current timestamp: {time}s
</p>

{#each segments as [start, end], i}
  <button
    id="c{i}"
    class={buttonC}
    on:click={() => {
      time = start;
      window.location.hash = `c${i}`;
    }}>{i}</button
  >
  <button
    id="t{i}"
    class={buttonC}
    on:click={() => {
      time = end;
      window.location.hash = `t${i}`;
    }}>T{i}</button
  >
{/each}
<video
  id="vid"
  class="video-js"
  bind:this={videoRef}
  bind:currentTime={time}
  autoplay
  loop
  width="1280"
>
  <track kind="captions" />
  <source src={videoSrc} type="video/mp4" />
</video>
