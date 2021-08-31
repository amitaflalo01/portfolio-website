<template>
  <div class="fields">
    <div class="first">
      <ul>
        <li>
          <span>+972 52 578 54 64</span>
        </li>
        <li>
          <a :href="emailLink"> {{ emailAddress }} </a>
        </li>
        <li>
          <div v-for="(social, i) in socialList" :key="i">
            <a :href="social.link" target="_blank">
                    <span class="first"
                    ><img class="svg" :src="social.icon" alt="social icon"
                    /></span>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
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
      emailAddress: websites.EMAIL_ADDRESS,
      emailLink: websites.EMAIL_LINK,
      linkedinLink: websites.LINKEDIN,
    };
  },
};
</script>

<style lang="scss">
.inpur-error {
  color: red;
  font-size: 14px;
  padding-top: 5px;
}
</style>
