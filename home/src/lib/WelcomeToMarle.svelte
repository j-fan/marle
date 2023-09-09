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
  <p class="command">Choose an option to begin:</p>
  <div class="button-wrapper">
    <Button
      href="https://j-fan.github.io/marle/jane/your-face-qr"
      imgSrc="https://github.com/j-fan/marle-images/raw/main/home/glyph-1-red.png"
      alt="option 1"
    />
    <Button
      href="https://j-fan.github.io/marle/callum/weave-my-reality"
      imgSrc="https://github.com/j-fan/marle-images/raw/main/home/glyph-2-red.png"
      alt="option 2"
    />
    <Button
      href="https://j-fan.github.io/marle/jane/fabric-of-dreams"
      imgSrc="https://github.com/j-fan/marle-images/raw/main/home/glyph-3-red.png"
      alt="option 3"
    />
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
  }

  a {
    color: red;
  }

  a:hover {
    color: black;
  }

  p.command {
    font-weight: bold;
    font-size: 1rem;
    margin-top: 4rem;
    margin-bottom: 1rem;
    text-align: center;
    max-width: 80%;
  }

  @media (max-width: 600px) {
    img {
      width: 100%;
    }
    span {
      font-size: 1rem;
    }
  }
</style>
