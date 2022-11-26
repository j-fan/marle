<script lang="ts">
  export let src: string;
  export let alt: string;
</script>

<div>
  <img {src} {alt} />
</div>

<style>
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  img {
    width: 50vh;
    max-width: 100%;
    object-fit: contain;
  }
</style>
