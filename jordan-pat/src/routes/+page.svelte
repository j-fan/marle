<script lang="ts">
  const segments = [
    [0, 1.3],
    [5.2, 6.4],
    [10.4, 11.6],
    [15.6, 16.8],
    [20.8, 22],
  ];
  const buttonC =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full";
</script>

{#each segments as _, i}
  <a class={buttonC} href="/video#c{i}">{i}</a>
  <a class={buttonC} href="/video#t{i}">T{i}</a>
{/each}
