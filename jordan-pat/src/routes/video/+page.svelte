<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from 'svelte/transition';

  let time = 0;
  let currSegment = 0;
  let transition = false
  let currSubtitle = 0
  let videoRef: HTMLVideoElement;

	$: innerWidth = 0
  $: innerHeight= 0

  const aspect_w = 16;
  const aspect_h = 9;

  const subs_v_offset = 0.7;

  $: {
    time = time;
    handleTimeUpdate();
  }

  const epsilon = 0.1; // seconds
  const segments = [
    [0, 1.3],
    [5.3, 6.4],
    [10.45, 11.6],
    [15.6, 16.8],
    [20.9, 22],
  ];

  const subtitles = [
    "",
    "Is an original idea yours to own? Which influences brought you here",
    "Technology connects us in ways we don’t expect",
    "For better or for worse, thoughts, prompts and imagery shared between us",
    "Amalgamating into consciousness outside of recognition"
  ]

  const butt_offsets = [
    [0,0],
    [0.6,0.01],
    [-0.8,-0.3],
    [-0.1,-0.2],
    [0.6,0.2],
  ]

  const buttonC =
    "butt bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full";
  // const videoSrc =
  //   "https://firebasestorage.googleapis.com/v0/b/marle-5d8ad.appspot.com/o/Marle_VideoTest.mp4?alt=media&token=fbf1ef92-57c9-4d8d-b9fa-5831c4b010c5";
  const videoSrc =
    "https://github.com/jordaneast1/marle-media/raw/main/Marle_VideoTest.mp4";

  const findSegment = (t: number) => {
    for (const segment of segments) {
      const [start, end] = segment;
      if (start <= t && t < end) {
        currSegment = segments.indexOf(segment)
        transition = false
        return segment;
      } 
    }
  };

  const fastSeek = (target: HTMLVideoElement, to: number) => {
    if (target.fastSeek) {
      target.fastSeek(to);
    } else {
      videoRef.currentTime = to;
      console.log(currSegment, to, "transition", transition)
    }
  };

  const handleTimeUpdate = () => {
    const segment = findSegment(time);
    if (!segment) {
      transition = true
      console.log("transition", transition)
      return;
    }

    const [start, end] = segment;
    if (time >= end - epsilon) {
      fastSeek(videoRef, start);
      videoRef.play();
    }
  };

  onMount(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash.startsWith("c")) {
      const [segmentIndex] = hash.match(/\d+/) || ["0"];
      fastSeek(videoRef, segments[parseInt(segmentIndex)][0]);
      currSubtitle = parseInt(segmentIndex)
    } else if (hash.startsWith("t")) {
      const [segmentIndex] = hash.match(/\d+/) || ["0"];
      fastSeek(videoRef, segments[parseInt(segmentIndex)][1]);
      currSubtitle = (parseInt(segmentIndex)+1)%subtitles.length
    }
  });
</script>

<!-- <h1>Video Test</h1>
<p class="text-3xl font-bold underline">
  Current timestamp: {time}s
</p> -->

<video
  id="vid"
  class="video-js full-size"
  bind:this={videoRef}
  bind:currentTime={time}
  autoplay
  loop
  muted
  playsinline
  defaultmuted
  disablepictureinpicture
  preload="auto"
  width="1280"
  
>
  <track kind="captions" />
  <source src={videoSrc} type="video/mp4" />
</video>

<div id = butt-container class=full-size>
{#each segments as [start, end], i}
  
  <button
    id="c{i}"
    class={buttonC}
    style="display:none"
    on:click={() => {
      time = start;
      window.location.hash = `c${i}`;
      currSubtitle = i;
    }}>{i}</button
  >
  <button
    id="t{i}"
    class={buttonC}
    style = "display:{(currSegment == i) && !transition ? 'block' : 'none'}; 
    transform: translate(
      {innerHeight*aspect_w/aspect_h > innerWidth ? innerWidth/2 *butt_offsets[i][0] : (innerHeight * aspect_w/aspect_h)/2 *butt_offsets[i][0]}px,
    {innerHeight*aspect_w/aspect_h < innerWidth ? innerHeight/2 *butt_offsets[i][1] : (innerWidth * aspect_h/aspect_w)/2 *butt_offsets[i][1]}px
    )"
    on:click={() => {
      time = end;
      window.location.hash = `t${i}`;
      currSubtitle = (i+1)%subtitles.length;
    }}>T{i}({butt_offsets[i][0]}, {butt_offsets[i][1]})</button
  >
{/each}
</div>

<svelte:window bind:innerWidth bind:innerHeight/>

{#key currSubtitle}
<h2 
  class = subtitleC
  style = "transform: translate(0px,{innerHeight*aspect_w/aspect_h < innerWidth ? innerHeight/2 *subs_v_offset : (innerWidth * aspect_h/aspect_w)/2 *subs_v_offset}px)"
  in:fade = "{{duration : 4000}}"
> {subtitles[currSubtitle]}</h2>
{/key}

<style>
  :global(body) {
    background-color: black;
  }

  .full-size {
    position: fixed;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
  }

  .subtitleC {
    font-family: 'Roboto', sans-serif;
    font-size: 2vw;
    position: fixed;
    color: white;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    text-align: center;
    width:100%;
    top: 50%;
    z-index: 2;
  }

  .butt {
    position: fixed;
    left: 50%;
    top: 50%;
    pointer-events: auto;
    z-index: 1;
  }

</style>