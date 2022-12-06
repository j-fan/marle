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
