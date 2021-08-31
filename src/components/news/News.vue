<template>
  <div class="news_inner">
    <ul>
      <li>
        <div class="list_inner" v-scroll-reveal="{ delay: 20 }">
          <div class="image">
            <img src="../../assets/img/thumbs/4-3.jpg" alt="thumb" />
            <div
              class="main"
              @click="showModal"
              :style="{ backgroundImage: 'url(' + imgSrc + ')' }"
            ></div>
          </div>
          <!-- End image -->

          <div class="details">
            <div class="extra">
              <p class="date">
                By <a href="#">Alex Watson</a> <span>10 May 2021</span>
              </p>
            </div>
            <h3 class="title" @click="showModal">
              Developers watch out for these real burnout symptoms
            </h3>
          </div>
          <!-- End details -->
        </div>

        <!-- Start Modalbox -->
        <transition name="fade">
          <!-- Modal -->
          <div
            :class="{ 'modal-mask': isActive }"
            id="modal"
            @click="closeModal"
            v-if="isVisible"
          >
            <div class="modal-dialog modal-dialog-centered " @click.stop>
              <div class="modal-content">
                <div class="close" @click="closeModal">
                  <img
                    class="svg"
                    src="../../assets/img/svg/cancel.svg"
                    alt="cancel-img"
                  />
                </div>
                <!-- End .close -->

                <div class="waxon_tm_modalbox_news">
                  <div class="image">
                    <img src="../../assets/img/thumbs/4-3.jpg" alt="thumb" />
                    <div
                      class="main"
                      :style="{ backgroundImage: 'url(' + imgSrc + ')' }"
                    ></div>
                  </div>
                  <!-- End image -->
                  <div class="details">
                    <div class="extra">
                      <p class="date">
                        By <a href="#">Bona Green</a> <span>05 April 2021</span>
                      </p>
                    </div>
                    <h3 class="title">
                      How to be appreciated for your hard work as a developer
                    </h3>
                  </div>
                  <!-- End details -->

                  <div class="descriptions">
                    <p class="bigger">
                      Just because we can't get out and about like we normally
                      would, doesn’t mean we have to stop taking pictures.
                      There’s still plenty you can do, provided you're prepared
                      to use some imagination. Here are a few ideas to keep you
                      shooting until normal life resumes.
                    </p>
                    <p>
                      Most photographers love to shoot the unusual, and you
                      don’t get much more unusual than These Unprecedented
                      Times. Right now everything counts as out of the ordinary.
                      There are a number of remarkable things about these
                      lockdown days that are worth photographing now so we can
                      remember them when it is all over.
                    </p>
                    <p>
                      Streets empty that are usually busy are remarkable and can
                      evoke the sense of historical pictures from before the
                      invention of the motorcar. Other things that are different
                      at the moment will be queues to get into stores and the
                      lines marked out on the floor to show how far apart we
                      should be.
                    </p>
                    <div class="quotebox">
                      <div class="icon">
                        <img
                          class="svg"
                          src="../../assets/img/svg/quote.svg"
                          alt=""
                        />
                      </div>
                      <p>
                        Most photographers find it hard to see interesting
                        pictures in places in which they are most familiar. A
                        trip somewhere new seems always exactly what our
                        photography needed, as shooting away from home
                        consistently inspires us to new artistic heights.
                      </p>
                    </div>
                    <p>
                      Pretend everything is new and that you haven’t seen it
                      before, and then you will be free to notice the leading
                      lines, the places where one edge meets another in
                      delightful geometric harmony, and how the ordinary things
                      in the kitchen are transformed when the light is on or
                      off.
                    </p>
                    <p>
                      The trick here is to look slowly, and then look again.
                      Take the time to look in detail and to look at the same
                      thing from different angles, with different light, long
                      lenses and wide lenses. Then move to the left a bit. You
                      may never feel the need to leave the house again.
                    </p>
                  </div>
                  <!-- End description -->

                  <div class="news_share">
                    <span>Share:</span>
                    <Social />
                  </div>
                  <!-- End news share -->
                </div>
                <!-- waxon_tm_modalbox_news -->
              </div>
            </div>
          </div>
        </transition>
        <!-- End Modalbox -->
      </li>
      <!-- End li (Single News Block) -->

      <li>
        <div class="list_inner" v-scroll-reveal="{ delay: 40 }">
          <div class="image">
            <img src="../../assets/img/thumbs/4-3.jpg" alt="thumb" />
            <div
              class="main"
              @click="showModal2"
              :style="{ backgroundImage: 'url(' + imgSrc2 + ')' }"
            ></div>
          </div>
          <!-- End image -->

          <div class="details">
            <div class="extra">
              <p class="date">
                By <a href="#">Bona Green</a> <span>05 April 2021</span>
              </p>
            </div>
            <h3 class="title" @click="showModal2">
              How to be appreciated for your hard work as a developer
            </h3>
          </div>
          <!-- End details -->
        </div>

        <!-- Start Modalbox -->
        <transition name="fade">
          <!-- Modal -->
          <div
            :class="{ 'modal-mask': isActive2 }"
            id="modal"
            @click="closeModal2"
            v-if="isVisible2"
          >
            <div class="modal-dialog modal-dialog-centered " @click.stop>
              <div class="modal-content">
                <div class="close" @click="closeModal2">
                  <img
                    class="svg"
                    src="../../assets/img/svg/cancel.svg"
                    alt="cancel-img"
                  />
                </div>
                <!-- End .close -->
                <div class="waxon_tm_modalbox_news">
                  <div class="image">
                    <img src="../../assets/img/thumbs/4-3.jpg" alt="thumb" />
                    <div
                      class="main"
                      :style="{ backgroundImage: 'url(' + imgSrc2 + ')' }"
                    ></div>
                  </div>
                  <!-- End image -->
                  <div class="details">
                    <div class="extra">
                      <p class="date">
                        By <a href="#">Bona Green</a> <span>05 April 2021</span>
                      </p>
                    </div>
                    <h3 class="title">
                      How to be appreciated for your hard work as a developer
                    </h3>
                  </div>
                  <!-- End details -->

                  <div class="descriptions">
                    <p class="bigger">
                      Just because we can't get out and about like we normally
                      would, doesn’t mean we have to stop taking pictures.
                      There’s still plenty you can do, provided you're prepared
                      to use some imagination. Here are a few ideas to keep you
                      shooting until normal life resumes.
                    </p>
                    <p>
                      Most photographers love to shoot the unusual, and you
                      don’t get much more unusual than These Unprecedented
                      Times. Right now everything counts as out of the ordinary.
                      There are a number of remarkable things about these
                      lockdown days that are worth photographing now so we can
                      remember them when it is all over.
                    </p>
                    <p>
                      Streets empty that are usually busy are remarkable and can
                      evoke the sense of historical pictures from before the
                      invention of the motorcar. Other things that are different
                      at the moment will be queues to get into stores and the
                      lines marked out on the floor to show how far apart we
                      should be.
                    </p>
                    <div class="quotebox">
                      <div class="icon">
                        <img
                          class="svg"
                          src="../../assets/img/svg/quote.svg"
                          alt=""
                        />
                      </div>
                      <p>
                        Most photographers find it hard to see interesting
                        pictures in places in which they are most familiar. A
                        trip somewhere new seems always exactly what our
                        photography needed, as shooting away from home
                        consistently inspires us to new artistic heights.
                      </p>
                    </div>
                    <p>
                      Pretend everything is new and that you haven’t seen it
                      before, and then you will be free to notice the leading
                      lines, the places where one edge meets another in
                      delightful geometric harmony, and how the ordinary things
                      in the kitchen are transformed when the light is on or
                      off.
                    </p>
                    <p>
                      The trick here is to look slowly, and then look again.
                      Take the time to look in detail and to look at the same
                      thing from different angles, with different light, long
                      lenses and wide lenses. Then move to the left a bit. You
                      may never feel the need to leave the house again.
                    </p>
                  </div>
                  <!-- End description -->

                  <div class="news_share">
                    <span>Share:</span>
                    <Social />
                  </div>
                  <!-- End news share -->
                </div>
                <!-- waxon_tm_modalbox_news -->
              </div>
            </div>
          </div>
        </transition>
        <!-- End Modalbox -->
      </li>
      <!-- End li (Single News Block) -->

      <li>
        <div class="list_inner" v-scroll-reveal="{ delay: 60 }">
          <div class="image">
            <img src="../../assets/img/thumbs/4-3.jpg" alt="thumb" />
            <div
              class="main"
              @click="showModal3"
              :style="{ backgroundImage: 'url(' + imgSrc3 + ')' }"
            ></div>
          </div>
          <!-- End image -->

          <div class="details">
            <div class="extra">
              <p class="date">
                By <a href="#">Bona Green</a> <span>05 April 2021</span>
              </p>
            </div>
            <h3 class="title" @click="showModal3">
              How designers and developers can collaborate better
            </h3>
          </div>
          <!-- End details -->
        </div>

        <!-- Start Modalbox -->
        <transition name="fade">
          <!-- Modal -->
          <div
            :class="{ 'modal-mask': isActive3 }"
            id="modal"
            @click="closeModal3"
            v-if="isVisible3"
          >
            <div class="modal-dialog modal-dialog-centered " @click.stop>
              <div class="modal-content">
                <div class="close" @click="closeModal3">
                  <img
                    class="svg"
                    src="../../assets/img/svg/cancel.svg"
                    alt="cancel-img"
                  />
                </div>
                <!-- End .close -->
                <div class="waxon_tm_modalbox_news">
                  <div class="image">
                    <img src="../../assets/img/thumbs/4-3.jpg" alt="thumb" />
                    <div
                      class="main"
                      :style="{ backgroundImage: 'url(' + imgSrc3 + ')' }"
                    ></div>
                  </div>
                  <!-- End image -->
                  <div class="details">
                    <div class="extra">
                      <p class="date">
                        By <a href="#">By Ave Smith</a>
                        <span>22 March 2021</span>
                      </p>
                    </div>
                    <h3 class="title">
                      How designers and developers can collaborate better
                    </h3>
                  </div>
                  <!-- End details -->

                  <div class="descriptions">
                    <p class="bigger">
                      Just because we can't get out and about like we normally
                      would, doesn’t mean we have to stop taking pictures.
                      There’s still plenty you can do, provided you're prepared
                      to use some imagination. Here are a few ideas to keep you
                      shooting until normal life resumes.
                    </p>
                    <p>
                      Most photographers love to shoot the unusual, and you
                      don’t get much more unusual than These Unprecedented
                      Times. Right now everything counts as out of the ordinary.
                      There are a number of remarkable things about these
                      lockdown days that are worth photographing now so we can
                      remember them when it is all over.
                    </p>
                    <p>
                      Streets empty that are usually busy are remarkable and can
                      evoke the sense of historical pictures from before the
                      invention of the motorcar. Other things that are different
                      at the moment will be queues to get into stores and the
                      lines marked out on the floor to show how far apart we
                      should be.
                    </p>
                    <div class="quotebox">
                      <div class="icon">
                        <img
                          class="svg"
                          src="../../assets/img/svg/quote.svg"
                          alt=""
                        />
                      </div>
                      <p>
                        Most photographers find it hard to see interesting
                        pictures in places in which they are most familiar. A
                        trip somewhere new seems always exactly what our
                        photography needed, as shooting away from home
                        consistently inspires us to new artistic heights.
                      </p>
                    </div>
                    <p>
                      Pretend everything is new and that you haven’t seen it
                      before, and then you will be free to notice the leading
                      lines, the places where one edge meets another in
                      delightful geometric harmony, and how the ordinary things
                      in the kitchen are transformed when the light is on or
                      off.
                    </p>
                    <p>
                      The trick here is to look slowly, and then look again.
                      Take the time to look in detail and to look at the same
                      thing from different angles, with different light, long
                      lenses and wide lenses. Then move to the left a bit. You
                      may never feel the need to leave the house again.
                    </p>
                  </div>
                  <!-- End description -->

                  <div class="news_share">
                    <span>Share:</span>
                    <Social />
                  </div>
                  <!-- End news share -->
                </div>
                <!-- waxon_tm_modalbox_news -->
              </div>
            </div>
          </div>
        </transition>
        <!-- End Modalbox -->
      </li>
      <!-- End li (Single News Block) -->
    </ul>
  </div>
</template>

<script>
import Social from "../Social.vue";
export default {
  components: {
    Social,
  },
  data() {
    return {
      isActive: false,
      isActive2: false,
      isActive3: false,
      isVisible: false,
      isVisible2: false,
      isVisible3: false,
      imgSrc: require("../../assets/img/news/1.jpg"),
      imgSrc2: require("../../assets/img/news/2.jpg"),
      imgSrc3: require("../../assets/img/news/3.jpg"),
    };
  },
  methods: {
    showModal: function() {
      this.isActive = true;
      this.isVisible = true;
    },
    showModal2: function() {
      this.isActive2 = true;
      this.isVisible2 = true;
    },
    showModal3: function() {
      this.isActive3 = true;
      this.isVisible3 = true;
    },
    closeModal: function() {
      this.isActive = false;
      this.isVisible = false;
    },
    closeModal2: function() {
      this.isActive2 = false;
      this.isVisible2 = false;
    },
    closeModal3: function() {
      this.isActive3 = false;
      this.isVisible3 = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
