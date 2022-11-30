<script>
  import ChatBot from "$lib/components/ChatBot.svelte";
  import { escapingTheCageDialog } from "$lib/dialog/escaping-the-cage-dialog";
  import Video from "./Video.svelte";
</script>

<Video />
<ChatBot dialogData={escapingTheCageDialog} />
