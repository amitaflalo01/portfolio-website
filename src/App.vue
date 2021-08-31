<template>
  <div id="app" class="waxon_tm_all_wrap">
    <div class="waxon_tm_preloader">
      <div class="spinner_wrap">
        <div class="spinner"></div>
      </div>
    </div>
    <!-- End Preloader -->
    <router-view></router-view>
    <back-top color="#fff" :size="1.2" bottom="5%" :slow="0"> </back-top>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("load", () => {
      document.body.classList.add("loaded");
    });
  },
  destroyed() {
    window.addEventListener("load", () => {
      document.body.classList.add("loaded");
    });
  },
};
</script>

<style lang="scss">
.back-top {
  z-index: 99;
  bottom: 4% !important;
  right: 2% !important;
}
.back-top__icon {
  color: #000 !important;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.15) !important;
  border-radius: 4px !important;
  font-size: 20px !important;
}
</style>
