<script lang="ts">
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
    [20.8, 22]
  ];

  const videoSrc = "./test.mp4";

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

    const [_start, end] = segment;
    if (time >= end - epsilon) {
      videoRef.pause();
    }
  };
</script>

<h1>Video Test</h1>
<p>
  Current timestamp: {time}s
</p>

{#each segments as [start, _end], i}
  <button
    id="segment-{i}"
    on:click={() => {
      time = start;
      videoRef.play();
    }}>{i}</button
  >
{/each}
<video
  id="vid"
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
