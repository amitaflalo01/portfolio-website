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
            <h3 v-scroll-reveal="{ delay: 1000 }" class="stroke">Bernard</h3>
            <h3 v-scroll-reveal="{ delay: 1050 }" class="typed-text loop-text">
              {{ typeValue
              }}<span
                class="cursor cursor-typing"
                :class="{ typing: typeStatus }"
                >&nbsp;</span
              >
            </h3>

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
</template>

<script>
export default {
  data() {
    return {
      sliderHero: require("../../assets/img/slider/3.jpg"),
      typeValue: "",
      typeStatus: false,
      typeArray: ["Canada.", "Germany", "Japan."],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;

        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;

        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>

<style lang="scss" scoped>
.cursor {
  display: inline-block;
  margin-left: 10px;
  width: 4px;
  background-color: #000;
  animation: cursorBlink 1s infinite;
  line-height: 80px;
  position: relative;
  top: 10px;
  @media (max-width: 1040px) {
    line-height: 40px;
  }
}

span.cursor.typing {
  animation: none;
}

@keyframes cursorBlink {
  49% {
    background-color: #000;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  @media screen and (max-width: 767px) {
    display: none;
  }
}
</style>
