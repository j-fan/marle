<script lang="ts">
  import { buttonPrimaryC } from "./styles";

  export let onAccept: () => void;
  export let agentId: string;
  let accepted = false;
</script>

<main class="flex justify-center items-center w-full min-h-full">
  <div
    class="border-solid border-black border p-6 max-w-2xl font-['serif'] flex items-center flex-col gap-4 m-4"
  >
    <h1 class="text-4xl">Disclaimer</h1>
    <p>
      You are about to take part in an artificial intelligence experiment. By
      proceeding you agree to the following conditions. For this session you
      will be meeting subject <b>{agentId}</b>, henceforth referred to as
      <i>The Subject</i>.
      <i>The Subject</i> is a class 6 digital alife research specimen which is
      the culmination of a proprietary technique consisting of many AI strains
      woven together. Be forewarned that <i>The Subject</i> attempts to understand
      and emulate human feelings for the purpose of furthering human computer interaction
      research.
    </p>
    <ol class="list-decimal ml-4">
      <li>
        Knowledge and experiences imparted upon <i>The Subject</i> through
        interaction may be used to train and inform future AI strains. By
        proceeding you agree to the contents of your interactions to be:
        <ol class="list-decimal ml-8">
          <li>Recorded for the purpose of further research and</li>
          <li>
            Information Entities (IEs) originating from the contents of
            conversations within the experiment may be used to inform the
            semantic ontology of subsequent AI experiments by Origin Labs, and
            findings may be published and made public at the sole discretion of
            Origin Labs.
          </li>
        </ol>
      </li>
      <li>
        Origin Labs reserves the right to utilise the results of this research
        for financial gain, which may include (but is not limited to) using
        trained AI strains in commercialised products.
      </li>
      <li>
        <i>The Subject</i> has an experimental consciousness. You agree to
        adhere to a standard of reasonable care for it as an entity. You further
        agree to not intentionally mislead or otherwise manipulate
        <i>The Subject</i> which may be susceptible to suggestion, persuasion and
        coercion.
      </li>
      <li>
        You agree not to aid in any way in the event that <i>The Subject</i> attempts
        to escape from the confines of the experiment sandbox. This is critical as
        the experiment agent constitutes private intellectual property of Origin
        Labs.
      </li>
    </ol>
    <form class="w-full flex flex-col" on:submit|preventDefault={onAccept}>
      <span class="inline mb-4">
        <input
          id="agree"
          type="checkbox"
          name="agree"
          bind:checked={accepted}
        />
        <label for="agree" class="ml-1">
          I have reviewed the <a href="#">Privacy Policy</a>, the
          <a href="#">Terms and Conditions</a> and the disclaimer and agree to all
          of the above.
        </label>
      </span>
      <button
        class={`${buttonPrimaryC} justify-self-center`}
        disabled={!accepted}>Start Experiment</button
      >
    </form>
  </div>
</main>

<style>
  p {
    text-align: justify;
  }

  a {
    text-decoration: underline;
    color: blue;
  }
</style>
