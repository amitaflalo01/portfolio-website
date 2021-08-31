<template>
  <!-- HERO -->
  <div class="waxon_tm_hero waxon-slider-variant" id="home">
    <div class="background">
      <div class="leftpart"></div>
      <div class="rightpart">
        <div class="inner">
          <hooper :settings="hooperSettings">
            <slide v-for="(sliderImage, i) in sliderImageList" :key="i">
              <div
                class="image"
                :style="{ backgroundImage: 'url(' + sliderImage.img + ')' }"
              ></div>
            </slide>
          </hooper>

          <div class="overlay_image"></div>
          <div class="myOverlay"></div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="container">
        <div class="content_inner">
          <div class="name">
            <!-- If you can't see clearly your texts with hero image, please open style.css and search this word " .waxon_tm_hero .background .overlay_image " with CTRL+F and enable comment -->
            <h3 class="stroke" v-scroll-reveal="{ delay: 1000 }">Amit</h3>
            <h3 v-scroll-reveal="{ delay: 1050 }">Aflalo</h3>
            <span v-scroll-reveal="{ delay: 1100 }"
              >Full Stack Developer</span
            >
          </div>
        </div>
        <div class="waxon_tm_down">
          <!-- Skin: "", dark -->
          <!-- Position: left, center, right -->
          <div class="line_wrapper">
            <div class="line"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /HERO -->
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
export default {
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      sliderImageList: [
        {
          img: require("../../assets/img/slider/4.jpg"),
        },
        {
          img: require("../../assets/img/slider/1.jpg"),
        },
        {
          img: require("../../assets/img/slider/3.jpg"),
        },
      ],
      hooperSettings: {
        infiniteScroll: true,
        wheelControl: false,
        autoPlay: true,
        mouseDrag: false,
        itemsToShow: 1,
        transition: 1500,
        playSpeed: 3000,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.waxon_tm_hero.waxon-slider-variant .background .rightpart .image {
  height: 100vh;
  position: static;
}
</style>
