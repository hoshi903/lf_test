<template>
  <div id="app" class="color">
    <Header/>
    <Footer/>
    <div class="app-main flex column">
      <Linker/>
      <div id="scroll" class="scrollable content-wrapper others">
        <nuxt/>
      </div>
      <XreaAd/>
    </div>
  </div>
</template>
<script>
  import Header from "@/components/header.vue";
  import Footer from "@/components/footer.vue";
  import Linker from "@/components/linker.vue";
  import XreaAd from "@/components/xreaad.vue";

  export default {
    components: {
      Header,
      Footer,
      Linker,
      XreaAd
    }
  };
</script>