<script lang="ts">
  import Disclaimer from "./disclaimer.svelte";
  import Experiment from "./experiment.svelte";

  let accepted = false;
</script>

{#if !accepted}
  <Disclaimer
    onAccept={() => {
      accepted = true;
    }}
  />
{:else}
  <Experiment />
{/if}
