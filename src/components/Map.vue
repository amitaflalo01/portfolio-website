<template>
  <div class="map_wrap">
    <iframe
      id="gmap_canvas"
      :src="mapSource"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
    ></iframe>
  </div>
  <!-- End Google Map -->
</template>

<script>
import {websites} from "@/costants/websites";

export default {
  data() {
    return {
      mapSource: websites.GOOGLE_MAPS,
    };
  },
};
</script>

<style lang="scss" scoped></style>
