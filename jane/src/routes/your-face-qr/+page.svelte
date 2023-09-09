<script>
  import ChatBot from "$lib/components/ChatBot.svelte";
  import YourFaceSvg from "$lib/components/YourFaceSvg.svelte";
  import { yourFaceDialogQR } from "$lib/dialog/your-face-qr";
</script>

<div class="background">
  <div class="svg-wrapper">
    <YourFaceSvg />
  </div>
  <ChatBot dialogData={yourFaceDialogQR} />
</div>

<style>
  .background {
    background-color: #000;
    width: 100%;
    height: 100%;
  }

  .svg-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    padding-top: 20%;
  }

  @media (max-height: 1000px) {
    .svg-wrapper {
      padding-top: 10%;
    }
  }
</style>
