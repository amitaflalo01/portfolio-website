<template>
  <div class="error-page-wrapper">
    <div class="hero" :style="{ backgroundImage: 'url(' + imgSrc + ')' }">
      <div class="content">
        <h1>404!</h1>
        <p>The page you are looking for could not be found.</p>

        <router-link class="ib-button" to="/">
          BACK TO HOME
        </router-link>
        <!--  End purchase_button -->
      </div>
    </div>
    <!-- End .hero -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: require("../assets/img/patterns/1.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
.error-page-wrapper {
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  background: transparent;
  .hero {
    width: 100%;
    height: 100vh;
    float: left;
    position: relative;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    .content {
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      h1,
      h2 {
        font-weight: 900;
        font-size: 125px;
        font-family: Montserrat;
        line-height: 1;
        letter-spacing: 5px;
        @media screen and (max-width: 768px) {
          font-size: 80px;
        }
      }
      p {
        font-family: Poppins;
        font-weight: 500;
        color: #333;
        font-size: 20px;
        padding-top: 30px;
        padding-bottom: 45px;
        @media screen and (max-width: 768px) {
          padding-bottom: 30px;
          font-size: 18px;
          padding-top: 20px;
        }
      }
      .ib-button {
        padding: 16px 50px;
        background: transparent;
        color: #000;
        font-weight: 600;
        @media screen and (max-width: 768px) {
          padding: 12px 35px;
        }
        &:hover {
          background: #000;
          color: #fff;
        }
      }
    }
  }
}
</style>
