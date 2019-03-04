<template>
  <div class="video">
    <div class="container pure-g">
      <div class="pure-u-1 pure-u-sm-18-24">
        <div class="player" ref="player"></div>
        <div class="video-source">
          <div class="group-title">视频名称</div>
          <div class="source-intro">
            <img src="" alt="封面">
            <span>描述</span>
          </div>
        </div>
      </div>
      <div class="pure-u-1 pure-u-sm-6-24">
        <div class="video-plugin">
          <div class="video-epgroup">
            <div class="group-title">分集列表</div>
            <div class="btn-group">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <span class="fix"></span>
              <span class="fix"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DPlayer from "dplayer";

export default {
  props: {
    msg: String
  },
  mounted() {
    const dp = new DPlayer({
      container: this.$refs.player,
      screenshot: true,
      video: {
        url: "demo.mp4",
        pic: "demo.jpg",
        thumbnails: "thumbnails.jpg"
      },
      subtitle: {
        url: "webvtt.vtt"
      },
      danmaku: {
        id: "demo",
        api: "https://api.prprpr.me/dplayer/"
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.video {
  padding-top: 2.5rem;
}
.video-plugin {
  padding: 0 1rem;
}
.video-epgroup,
.video-source {
  background: white;
  padding: 1rem;
}
.player,
.video-source {
  margin-bottom: 2.5rem;
}
.source-intro img {
  display: inline-block;
  margin-right: 1rem; 
}
</style>
