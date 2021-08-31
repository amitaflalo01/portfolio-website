<template>
  <div class="waxon_tm_copyright">
    <div class="container">
      <div class="copyright_inner">
        <ul>
          <li v-scroll-reveal="{ delay: 20, distance: '20px' }">
            <span>AFLALO &copy; {{ new Date().getFullYear() }}</span>
          </li>
          <!-- End li -->

          <li v-scroll-reveal="{ delay: 40, distance: '20px' }">
            <span>Rishon Lezion</span>
            <span>Israel</span>
          </li>
          <!-- End li -->

          <li v-scroll-reveal="{ delay: 60, distance: '20px' }">
            <span><a href="#">amitaflalo01@gmail.com</a></span>
            <span>+972 52 578 54 64</span>
          </li>
          <!-- End li -->

          <li v-scroll-reveal="{ delay: 80, distance: '20px' }">
            <div class="social">
              <ul>
                <li v-for="(social, i) in socialList" :key="i">
                  <a :href="social.link" target="_blank">
                    <span class="first"
                      ><img class="svg" :src="social.icon" alt="social icon"
                    /></span>
                    <span class="second"
                      ><img class="svg" :src="social.icon" alt="social icon"
                    /></span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <!-- End .copyright_inner -->
    </div>
    <!-- End .container -->
  </div>
  <!-- End .waxon_tm_copyright -->
</template>

<script>
import {websites} from "@/costants/websites";

export default {
  data() {
    return {
      socialList: [
        {
          icon: require("../assets/img/svg/social/github.svg"),
          link: websites.GITHUB,
        },
        {
          icon: require("../assets/img/svg/social/linkedin.svg"),
          link: websites.LINKEDIN,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
