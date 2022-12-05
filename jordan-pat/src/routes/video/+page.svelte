<script lang="ts">
  import { afterUpdate, beforeUpdate, onMount } from "svelte";
  import { fade } from "svelte/transition";

  let time = 0;
  let currSubtitle = 0;
  let videoRef: HTMLVideoElement;

  $: innerWidth = 0;
  $: innerHeight = 0;

  const aspect_w = 16;
  const aspect_h = 9;

  const subs_v_offset = 0.7;

  beforeUpdate(() => {
    handleTimeUpdate();
  });

  afterUpdate(() => {
    handleTimeUpdate();
  });

  const epsilon = 0.1; // seconds - time threshold for detecting segment boundaries
  const epsilon2 = 0.5; // seconds - extra time buffer around segment boundaries

  // const segments = [
  //   [0, 1.3],
  //   [5.3, 6.4],
  //   [10.45, 11.6],
  //   [15.6, 16.8],
  //   [20.9, 22],
  // ];
  const segments = [
    [0, 6],
    [20, 23.4],
    [34.4, 36.4],
    [52.9, 63],
    [77.2, 87.2],
  ];

  const end_time = 92;

  const subtitles = [
    "",
    "Is an original idea yours to own? Which influences brought you here",
    "Technology connects us in ways we don’t expect",
    "For better or for worse, thoughts, prompts and imagery shared between us",
    "Amalgamating into consciousness outside of recognition",
  ];

  //offsets from -1 - 1
  const butt_offsets = [
    [0, 0],       //intro
    [0.6, -0.4],   //mofo
    [-0.8, -0.75],  //quill
    [0.8, 0.4],     //hedz
    [0, -0.6],     //space
  ];

  const colours = [
    "#ff0000",
    "#ff0000",
    "#00969c",
    "#004f11",
    "#ffffff",
  ]

  const buttonC =
    "butt" // bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full";
  // const videoSrc =
  //   "https://firebasestorage.googleapis.com/v0/b/marle-5d8ad.appspot.com/o/Marle_VideoTest.mp4?alt=media&token=fbf1ef92-57c9-4d8d-b9fa-5831c4b010c5";
  const videoSrc =
    "https://github.com/jordaneast1/marle-media/raw/main/SEQ_Marle_draft.mp4";

  const findSegment = (t: number) => {
    for (const segment of segments) {
      const [start, end] = segment;
      if (start <= t && t < end) {
        return segment;
      }
    }
  };

  const fastSeek = (target: HTMLVideoElement, to: number) => {
    if (target.fastSeek) {
      target.fastSeek(to);
    } else {
      videoRef.currentTime = to;
    }
  };

  const handleTimeUpdate = () => {
    const segment = findSegment(time);

    if (time > end_time){
      console.log("end");
      window.location.href = "https://j-fan.github.io/marle/alvin/rest-here-end";
      videoRef.pause();

    }

    if (!segment) {
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
      currSubtitle = parseInt(segmentIndex);
    } else if (hash.startsWith("t")) {
      const [segmentIndex] = hash.match(/\d+/) || ["0"];
      fastSeek(videoRef, segments[parseInt(segmentIndex)][1]);
      currSubtitle = (parseInt(segmentIndex) + 1) % subtitles.length;
    }
  });
</script>


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



<div id="butt-container" class="full-size">
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
      style=" display:{time >= start - 3 && time <= end + 3 ? 'block' : 'none'}; 
        opacity:{time >= start - epsilon2 && time <= end + epsilon2 ? 1 : 0}; 
        transform: translate(
          {(innerHeight * aspect_w) / aspect_h > innerWidth
            ? (innerWidth / 2) * butt_offsets[i][0]
            : ((innerHeight * aspect_w) / aspect_h / 2) * butt_offsets[i][0]}px,
        {(innerHeight * aspect_w) / aspect_h < innerWidth
            ? (innerHeight / 2) * butt_offsets[i][1]
            : ((innerWidth * aspect_h) / aspect_w / 2) * butt_offsets[i][1]}px
        )"
      on:click={() => {
        time = end + epsilon2;
        window.location.hash = `t${i}`;
        currSubtitle = (i + 1) % subtitles.length;
      }}>

      <img src="https://github.com/jordaneast1/marle-media/raw/main/Glyph{i+1}.png" 
      alt="glyph to click"
      style="--colour: {colours[i]}"
      />
      <!-- T{i}({butt_offsets[i][0]}, {butt_offsets[i][1]}) -->
      </button>
  {/each}
</div>

<svelte:window bind:innerWidth bind:innerHeight />

{#key currSubtitle}
  <h2
    class="subtitleC"
    style="transform: translate(0px,{(innerHeight * aspect_w) / aspect_h <
    innerWidth
      ? (innerHeight / 2) * subs_v_offset
      : ((innerWidth * aspect_h) / aspect_w / 2) * subs_v_offset}px)"
    in:fade={{ duration: 10000 }}
  >
    {subtitles[currSubtitle]}
  </h2>
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
    font-family: "Roboto", sans-serif;
    font-size: 2vw;
    position: fixed;
    color: white;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
    text-align: center;
    width: 100%;
    top: 50%;
    z-index: 2;

   
  }

  @media only screen and (max-width: 600px) {
    .subtitleC {
        font-size: 5vw;
        top: 60%;
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
    }
  }

  .butt {
    position: fixed;
    left: 50%;
    top: 50%;
    pointer-events: auto;
    z-index: 1;
    width: 12vw;
    height: 12vw;
    transition: 3s;
  }

  img {
      width: 100%;
      height: 100%;
      filter: drop-shadow(0 0 5px var(--colour));
      transform: translate(-50%,-50%);
      cursor: pointer;
      animation: float 15s ease-in-out infinite;
      transition: width 0.3s ease, height 0.3s ease;
      z-index:2;
    }
  
    img:hover {
      filter: drop-shadow(0 0 5px var(--colour))
        drop-shadow(0 0 5px var(--colour));

    }
  
    @keyframes float {
      0%,
      100% {
        opacity:95%;
      }
  
      50% {
        opacity:5%;
      }
    }
</style>
