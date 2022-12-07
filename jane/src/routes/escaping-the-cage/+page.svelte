<script>
  import ChatBot from "$lib/components/ChatBot.svelte";
  import { escapingTheCageDialog } from "$lib/dialog/escaping-the-cage-dialog";
  import Video from "./Video.svelte";
</script>

<svelte:head>
  <title>Origin:Marle - Escaping the Cage - Jane Fan</title>
</svelte:head>
<Video />
<ChatBot dialogData={escapingTheCageDialog} />
