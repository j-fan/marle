<script lang="ts">
  import { sample } from "lodash-es";

  import Disclaimer from "./disclaimer.svelte";
  import Experiment from "./experiment.svelte";

  let accepted = false;
  let agentId = `${sample([
    "Alpha",
    "Beta",
    "Gamma",
    "Delta",
    "Epsilon",
    "Omega",
    "Theta",
    "Sigma",
    "Lambda",
    "Zeta",
  ])}-${Math.ceil(Math.random() * 10)}${Math.ceil(
    Math.random() * 10,
  )}${Math.ceil(Math.random() * 10)}`;
</script>

<svelte:head>
  <title>Origin:Marle - Weave My Reality - Callum Howard</title>
</svelte:head>

<div class="fixed terminal-background w-full h-full -z-30" />
<div class="fixed noise-overlay w-full h-full -z-10" />
{#if !accepted}
  <Disclaimer
    {agentId}
    onAccept={() => {
      accepted = true;
    }}
  />
{:else}
  <Experiment {agentId} />
{/if}
<div class="fixed vignette z-10 pointer-events-none" />

<style>
  .terminal-background {
    background: rgb(255, 255, 255);
    background: radial-gradient(
      circle,
      rgb(255, 255, 255) 0%,
      rgb(209, 211, 213) 98%,
      rgb(61, 61, 63) 99%
    );
  }

  .vignette {
    background: transparent;
    border-radius: 4rem;
    border: 2rem solid black;
    filter: blur(5px);
    inset: -1.5rem;
  }

  .noise-overlay {
    background-image: url("https://github.com/j-fan/marle-images/raw/main/noise.png");
  }
</style>
