<script lang="ts">
  import { fade } from "svelte/transition";
  import Button from "./Button.svelte";
  import WelcomeCanvas from "./WelcomeCanvas.svelte";
</script>

<div in:fade={{ delay: 500 }} class="wrapper">
  <WelcomeCanvas />
  <img
    src="https://raw.githubusercontent.com/j-fan/marle-images/main/home/marle-logo.png"
    alt="Marle logo"
  />
  <span class="description"> Human - Artificial Intelligence experiment </span>
  <span class="credit">
    Created by the <a
      href="https://www.originart.xyz/"
      target="_blank"
      rel="oopener noreferrer">Origin Collective</a
    >
  </span>
  <span> ver 1.0.0 </span>
  <p class="command">Begin your experience by choosing one of these options:</p>
  <div class="button-wrapper">
    <Button>G1</Button>
    <Button>G2</Button>
    <Button>G3</Button>
  </div>
</div>

<style>
  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .button-wrapper {
    display: flex;
    gap: 1rem;
  }

  img {
    width: 70%;
  }

  span.description {
    font-size: 1rem;
    font-weight: bold;
  }

  span.credit {
    font-size: 1rem;
    color: #333;
    font-weight: bold;
  }

  a {
    color: red;
  }

  a:hover {
    color: black;
  }

  p.command {
    font-weight: bold;
    font-size: 1.25rem;
    margin-top: 4rem;
    margin-bottom: 2rem;
    text-align: center;
    max-width: 80%;
  }

  @media (max-width: 600px) {
    img {
      width: 90%;
    }
    span {
      font-size: 1rem;
    }
  }
</style>
