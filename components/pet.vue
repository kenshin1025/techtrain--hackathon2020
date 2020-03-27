<template>
  <v-img
    class="img_box"
    :max-width="this.$store.state.size.size"
    :width="this.$store.state.size.size"
    :max-height="this.$store.state.size.size"
    :height="this.$store.state.size.size"
    src="https://1.bp.blogspot.com/-_sOiSFioqpM/VvXe_QQm6sI/AAAAAAAA5LI/Jb3FwUQ41aQRSeKUXvbDPT8eyBtAIZoAQ/s400/nettaigyo_harisenbon2.png"
  ></v-img>
</template>

<script>
export default {
  name: "pet"
};
</script>

<style scoped>
.img_box {
  animation: img_box_9955 2s linear infinite;
  transform-origin: 50% 50%;
  margin: 1rem 0 !important;
}

@keyframes img_box_9955 {
  0% {
    transform: translateY(0);
  }
  33.33333% {
    transform: translateY(-10px);
  }
  66.66667% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
