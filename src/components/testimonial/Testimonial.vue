<template>
  <div class="waxon_tm_testimonials" id="testimonial">
    <div class="container">
      <div class="waxon_tm_main_title">
        <div class="title" v-scroll-reveal="{ delay: 20, distance: '20px' }">
          <h3>What Clients Say<span class="bg">Testimonial</span></h3>
        </div>
      </div>
      <!-- waxon_tm-main_title -->

      <div class="testi_inner">
        <div class="left" v-scroll-reveal="{ delay: 40 }">
          <div class="quote_list">
            <ul>
              <li v-if="activetab === 1" class="tabcontent active">
                <img
                  class="svg"
                  src="../../assets/img/svg/quote-1.svg"
                  alt=""
                />
                <p class="text">
                  Good overall template. I am getting back into coding and had a
                  simple question for the author. They responded within 30
                  minutes and answered my question. Highly recommend.
                </p>
                <div class="details">
                  <div class="image">
                    <div
                      class="main"
                      :style="{ backgroundImage: 'url(' + imgOne + ')' }"
                    ></div>
                  </div>
                  <div class="short">
                    <h3 class="author"><span>Nelly Furtado</span></h3>
                    <h3 class="job"><span>App Developer</span></h3>
                  </div>
                </div>
              </li>
              <!-- End li -->

              <li v-if="activetab === 2" class="tabcontent active">
                <img
                  class="svg"
                  src="../../assets/img/svg/quote-1.svg"
                  alt=""
                />
                <p class="text">
                  I can't believe I got support and my problem resolved in just
                  minutes from posting my question. Simply amazing team and
                  amazing theme! Thank you very much guys for excellent support!
                </p>
                <div class="details">
                  <div class="image">
                    <div
                      class="main"
                      :style="{ backgroundImage: 'url(' + imgTwo + ')' }"
                    ></div>
                  </div>
                  <div class="short">
                    <h3 class="author"><span>Brian Ederson</span></h3>
                    <h3 class="job"><span>Web Designer</span></h3>
                  </div>
                </div>
              </li>
              <!-- End li -->

              <li v-if="activetab === 3" class="tabcontent active">
                <img
                  class="svg"
                  src="../../assets/img/svg/quote-1.svg"
                  alt=""
                />
                <p class="text">
                  Awesome template, well written code and looks great on any
                  platform. The customer support is very helpful and as huge
                  asset to this template. Overall a good design, that I am quite
                  happy with.
                </p>
                <div class="details">
                  <div class="image">
                    <div
                      class="main"
                      :style="{ backgroundImage: 'url(' + imgThree + ')' }"
                    ></div>
                  </div>
                  <div class="short">
                    <h3 class="author"><span>Steve Collins</span></h3>
                    <h3 class="job"><span>Artel Corp.</span></h3>
                  </div>
                </div>
              </li>
              <!-- End li -->
            </ul>
          </div>
        </div>
        <!-- End left -->

        <div class="right" v-scroll-reveal="{ delay: 80 }">
          <div class="image_list">
            <ul class="masonry">
              <li
                class="masonry_item"
                v-on:click="activetab = 1"
                :class="[activetab === 1 ? 'active' : '']"
              >
                <div class="image">
                  <img src="../../assets/img/thumbs/3-4.jpg" alt="thumb" />
                  <div
                    class="main"
                    :style="{ backgroundImage: 'url(' + imgOne + ')' }"
                  ></div>
                </div>
              </li>
              <!-- End image One -->
              <li
                class="masonry_item"
                v-on:click="activetab = 2"
                :class="[activetab === 2 ? 'active' : '']"
              >
                <div class="image">
                  <img src="../../assets/img/thumbs/4-3.jpg" alt="thumb" />
                  <div
                    class="main"
                    :style="{ backgroundImage: 'url(' + imgTwo + ')' }"
                  ></div>
                </div>
              </li>
              <!-- End image Two -->
              <li
                class="masonry_item"
                v-on:click="activetab = 3"
                :class="[activetab === 3 ? 'active' : '']"
              >
                <div class="image">
                  <img src="../../assets/img/thumbs/1-1.jpg" alt="thumb" />
                  <div
                    class="main"
                    :style="{ backgroundImage: 'url(' + imgThree + ')' }"
                  ></div>
                </div>
              </li>
              <!-- End image Three -->
            </ul>
          </div>
        </div>
        <!-- End right -->
      </div>
      <!-- End testi_inner -->
    </div>
  </div>
  <!-- End Testimonials -->
</template>

<script>
export default {
  data() {
    return {
      activetab: 1,
      imgOne: require("../../assets/img/about/1.jpg"),
      imgTwo: require("../../assets/img/about/2.jpg"),
      imgThree: require("../../assets/img/about/3.jpg"),
    };
  },
};
</script>

<style lang="scss" scoped></style>
