<script lang="ts">
</script>

<button type="button"><slot /></button>

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
    background-color: rgb(255 0 0 / 20%);
  }
</style>
