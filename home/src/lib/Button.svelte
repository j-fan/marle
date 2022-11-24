<script lang="ts">
  export let href: string;
  export let imgSrc: string;
  export let alt: string;
</script>

<button type="button">
  <a {href}>
    <img src={imgSrc} {alt} />
  </a>
</button>

<style>
  button {
    border: 2px solid red;
    border-radius: 1rem;
    padding: 1rem;
    background: white;
    cursor: pointer;
    color: red;
  }

  button:hover {
    background-color: rgb(255, 198, 198);
  }

  img {
    width: 40px;
    height: 40px;
  }
</style>
