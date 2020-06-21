<template>
  <div>
    <video ref="videoPlayer" class="video-js vjs-big-play-centered"></video>
  </div>
</template>

<script>
import videojs from "video.js";
import "video.js/dist/video-js.css";
export default {
  name: "videojs",

  data() {
    return {
      player: null,
      options: {
        autoplay: false,
        controls: true,
        width:600,
        height:500,
        sources: [
          {
            src: '//vjs.zencdn.net/v/oceans.mp4',
            type: "video/mp4"
          }
        ]
      }
    };
  },
  mounted() {
    this.player = videojs(
      this.$refs.videoPlayer,
      this.options,
      function onPlayerReady() {
       
      }
    );
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
};
</script>

<style lang="less" scoped>
</style>