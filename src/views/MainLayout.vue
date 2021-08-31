<template>
  <div>
    <Header />
    <!-- End Header -->

    <Slider />
    <!-- End Slider -->

    <About />
    <!-- End About -->

    <div class="waxon_tm_portoflio" id="projects">
      <Projects />
    </div>
    <!-- End Portfolio -->

    <div class="waxon_tm_contact" id="contact">
      <div class="bg_image"></div>
      <div class="container">
        <div class="contact_inner">
          <div class="waxon_tm_main_title">
            <div
              class="title"
              v-scroll-reveal="{ delay: 20, distance: '20px' }"
            >
              <h3>Get in Touch<span class="bg">Contact</span></h3>
            </div>
          </div>
          <div class="desc" v-scroll-reveal="{ delay: 30, distance: '20px' }">
            <p>
              Please contact me in any of the below. Or
              call between 9:00 a.m. and 8:00 p.m. ET, Sunday through Thursday
            </p>
          </div>
          <div class="wrapper">
            <div class="left" v-scroll-reveal="{ delay: 40 }">
              <Contact />
            </div>
            <div class="right" v-scroll-reveal="{ delay: 60 }">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End contact -->

    <Footer />

    <!-- End End Footer -->
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Slider from "../components/slider/Slider.vue";
import About from "../components/about/About.vue";
import Projects from "../components/portfolio/Projects.vue";
import Contact from "../components/Contact.vue";
import Map from "../components/Map.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Header,
    Slider,
    About,
    Projects,
    Contact,
    Map,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
