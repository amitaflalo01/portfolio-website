<template>
  <div class="waxon_tm_hero" id="home">
    <div class="background">
      <div class="leftpart"></div>
      <div class="rightpart">
        <div class="inner">
          <div
            class="image"
            :style="{ backgroundImage: 'url(' + sliderHero + ')' }"
          ></div>
          <div class="overlay_image"></div>
          <div class="myOverlay"></div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="container">
        <div class="content_inner">
          <div class="name">
            <h3 class="stroke" v-scroll-reveal="{ delay: 1000 }">
              Amit
            </h3>
            <h3 v-scroll-reveal="{ delay: 1050 }">Aflalo</h3>
            <span v-scroll-reveal="{ delay: 1100 }"
              >Full Stack Developer</span
            >
          </div>
        </div>
        <div class="waxon_tm_down" data-skin="dark">
          <!-- Skin: "", dark -->
          <!-- Position: left, center, right -->
          <div class="line_wrapper">
            <div class="line"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End hero -->
</template>

<script>
export default {
  data() {
    return {
      sliderHero: require("../../assets/img/slider/atbv9-1ckr7.svg"),
    };
  },
};
</script>

<style lang="scss" scoped></style>
