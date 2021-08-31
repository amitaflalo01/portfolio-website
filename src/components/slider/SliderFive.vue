<template>
  <div class="AppSlider">
    <div class="waxon_tm_hero" id="home">
      <div class="background">
        <div class="leftpart"></div>
        <div class="rightpart">
          <div class="inner">
            <transition-group
              v-touch:swipe.right="next"
              v-touch:swipe.left="prev"
              :duration="1000"
              :style="{ paddingBottom: `${aspectRatio}%` }"
              tag="div"
              enter-active-class="AppSlider__enterActive"
              enter-class="AppSlider__enter"
              leave-active-class="AppSlider__leaveActive"
              leave-to-class="AppSlider__leaveTo"
              class="AppSlider__slides"
              @mouseenter="paused = true"
              @mouseleave="paused = false"
            >
              <div
                class="image AppSlider__image"
                v-for="(image, i) in images"
                v-show="activeIndex === i"
                :key="i"
                :style="{ backgroundImage: 'url(' + image.src + ')' }"
              ></div>
            </transition-group>

            <div class="overlay_image"></div>
            <div class="myOverlay"></div>
          </div>
        </div>
        <!-- End kenburn image -->
      </div>
      <div class="content">
        <div class="container">
          <div class="content_inner">
            <div class="name">
              <!-- If you can't see clearly your texts with hero image, please open style.css and search this word " .waxon_tm_hero .background .overlay_image " with CTRL+F and enable comment -->
              <h3 class="stroke" v-scroll-reveal="{ delay: 1000 }">
                Bernard
              </h3>
              <h3 v-scroll-reveal="{ delay: 1050 }">Sydney</h3>
              <span v-scroll-reveal="{ delay: 1100 }"
                >Creative Web &amp; App Developer</span
              >
            </div>
          </div>
          <div class="waxon_tm_down" data-skin="dark" data-position="">
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
  </div>
</template>

<script>
export default {
  name: `AppSlider`,
  props: {
    height: {
      default: 950,
      type: Number,
    },
    interval: {
      default: 10000,
      type: Number,
    },
    width: {
      default: 1280,
      type: Number,
    },
  },
  data() {
    return {
      activeIndex: 0,
      paused: false,
      time: this.interval,
      images: [
        {
          src: require("../../assets/img/slider/3.jpg"),
        },
        {
          src: require("../../assets/img/slider/1.jpg"),
        },
        {
          src: require("../../assets/img/slider/4.jpg"),
        },
      ],
    };
  },
  computed: {
    aspectRatio() {
      return (this.height / this.width) * 100;
    },
  },
  created() {
    this.startInterval();
  },
  methods: {
    goToIndex(index) {
      this.activeIndex = index;
      this.time = this.interval;
    },
    next() {
      let nextIndex = this.activeIndex + 1;
      // Go to the first image if the active
      // image ist the last one.
      if (!this.images[nextIndex]) {
        nextIndex = 0;
      }
      this.goToIndex(nextIndex);
    },
    prev() {
      let nextIndex = this.activeIndex - 1;
      // Go to the last image if the active
      // image is the first one.
      if (!this.images[nextIndex]) {
        nextIndex = this.images.length - 1;
      }
      this.goToIndex(nextIndex);
    },
    startInterval() {
      const precision = 100;
      const clock = setInterval(() => {
        if (!this.paused) this.time -= precision;
        if (this.time <= 0) this.next();
      }, precision);
      // Clear the interval if the component
      // is destroyed to prevent memory leaks.
      this.$once(`hook:destroyed`, () => clearInterval(clock));
    },
  },
};
</script>

<style lang="scss">
.AppSlider {
  &__slides {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  &__image {
    position: absolute;
    width: 100%;
    // Enable the effect only
    // on large screen devices.
    @media (min-width: 42em) {
      animation: kenburns 8s;
      animation-fill-mode: forwards;
    }
  }
  &__enterActive,
  &__leaveActive {
    transition: opacity 1s;
  }
  &__enter,
  &__leaveTo {
    opacity: 0;
  }
  &__controls {
    display: flex;
    justify-content: space-between;
  }
  // 1. Reset native button styles.
  &__control {
    padding: 0; // 1
    border: none; // 1
    background-color: transparent; // 1
    font-size: 1.25em;
  }
  @keyframes kenburns {
    100% {
      transform: scale3d(1.25, 1.25, 1.25) translate3d(-10%, -5%, 0);
    }
  }
  .waxon_tm_hero .background .rightpart .image {
    background-position: center left;
    @media screen and (max-width: 1399px) {
      background-position: center;
    }
  }
}
</style>
