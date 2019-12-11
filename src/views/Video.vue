<template>
  <div class="video">
    <div class="container pure-g">
      <div class="pure-u-1 pure-u-md-18-24">
        <div class="player" ref="player"></div>
        <div class="danmaku">
          <input type="text" v-model="curDanmaku" @keyup.enter="createDanmaku" placeholder="输入弹幕" />
        </div>
        <div class="video-plugin-sm">
          <div class="video-epgroup">
            <div class="group-title">分集列表</div>
            <div class="btn-group">
              <button
                v-for="(item,index) in epBtnGroup"
                :key="item.id"
                :class="{ 'active':item.isActive === true }"
                @click="selectEp(index+1)"
              >{{index+1}}</button>
              <span class="fix"></span>
              <span class="fix"></span>
              <span class="fix"></span>
              <span class="fix"></span>
              <span class="fix"></span>
              <span class="fix"></span>
              <span class="fix"></span>
              <span class="fix"></span>
              <span class="fix"></span>
              <span class="fix"></span>
            </div>
          </div>
        </div>
        <div class="video-source">
          <umr-card>
            <div slot="umr-card-lr" class="umr-card-lr">
              <div :style="{ backgroundImage: coverUrl }" class="umr-card-lr-cover"></div>
              <div class="umr-card-lr-main">
                <div class="title">{{resource.name}}</div>

                <div class="key">
                  <span class="tag tag-black">播出时间:</span>
                  {{resource.release_time}}
                </div>
                <div class="key">
                  <span class="tag tag-black">简介:</span>
                  {{resource.introduction}}
                </div>
              </div>
            </div>
          </umr-card>
        </div>
      </div>
      <div class="pure-u-1 pure-u-md-6-24">
        <div class="video-plugin">
          <div class="video-epgroup">
            <div class="group-title">分集列表</div>
            <div class="btn-group">
              <button
                v-for="(item,index) in epBtnGroup"
                :key="item.id"
                :class="{ 'active':item.isActive === true }"
                @click="selectEp(index+1)"
              >{{index+1}}</button>
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
import Hls from "hls.js";
import DPlayer from "dplayer";
import Card from "@/components/Card";
import map from "../mixins/map.js";

import axios from "axios";

window.Hls = Hls;

export default {
  mixins: [map],
  props: {
    msg: String
  },
  components: {
    "umr-card": Card
  },
  computed: {
    coverUrl: function() {
      return `url(${this.resource.cover})`;
    }
  },
  data: function() {
    return {
      resource: {},
      epBtnGroup: [],
      currentEp: 0,
      videoResourceIndex: 0,
      videoPlayer: {},
      curDanmaku: ""
    };
  },
  methods: {
    selectEp(num) {
      this.$router.push(`/episode/${this.$route.params.id}/ep/${num}`);
      this.activeBtn(num);
      axios
        .get(
          `${this.baseUrl}/animes/episode/${this.resource.episode[num - 1].id}/resource`
        )
        .then(r => {
          console.log(r.data);
          this.videoPlayer = new DPlayer({
            container: this.$refs.player,
            screenshot: true,
            video: {
              url: r.data[this.videoResourceIndex].resource
            }
          });
        });
    },
    activeBtn(id) {
      if (this.currentEp !== 0) {
        this.epBtnGroup[this.currentEp - 1].isActive = false;
      }
      this.epBtnGroup[id - 1].isActive = true;
      this.currentEp = id;
    },
    setBtnGroup(data) {
      let btnGroup = [];
      for (let i = 0; i < data.episodes; i++) {
        let item = {
          id: data.episode[i].id,
          isActive: false
        };
        btnGroup.push(item);
      }
      this.epBtnGroup = btnGroup;
      console.log(data);
    },
    createDanmaku() {
      this.videoPlayer.danmaku.send(
        {
          text: this.curDanmaku,
          color: "#fff",
          type: "right"
        },
        function() {
          console.log("ok");
        },
        { withCredentials: true }
      );
      this.curDanmaku = "";
    }
  },
  created() {
    let animeID = this.$route.params.id;
    let animeEpisode = this.$route.params.episode;
    axios.get(`${this.baseUrl}/animes/${animeID}/info?withEpisode`).then(r => {
      this.resource = r.data;
      console.log(r.data);
      this.setBtnGroup(r.data);
      this.activeBtn(animeEpisode);
      axios
        .get(
          `${this.baseUrl}/animes/episode/${r.data.episode[animeEpisode - 1].id}/resource`
        )
        .then(r => {
          console.log(r.data);
          let animeEpisode = this.$route.params.episode;
          this.videoPlayer = new DPlayer({
            container: this.$refs.player,
            screenshot: true,
            video: {
              url: r.data[this.videoResourceIndex].resource,
              type: "hls"
            },
            danmaku: {
              id: animeID,
              api: `${this.baseUrl}/animes/episode/danmaku/`
            }
          });
        });
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
  display: none;
}
.video-epgroup {
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
.video-epgroup button {
  outline: none;
}
.video-epgroup button.active {
  background-color: black;
  color: white;
}
.video-source {
  margin-top: 2.5rem;
}
.video-source .umr-card {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0;
}
.video-source .title {
  font-size: 20px;
  text-align: center;
  margin-bottom: 1rem;
}
.video-source .key {
  margin-bottom: 0.6rem;
}
.video-source .tag {
  padding: 0.1rem 0.4rem;
  width: unset;
  height: unset;
}
.danmaku {
  padding: 1rem;
  background-color: white;
}
.danmaku input {
  outline: none;
  width: 100%;
  padding: 0.5rem;
  background-color: rgb(245, 246, 248);
  border: 1px solid;
}
.video-plugin-sm {
  margin-top: 2.5rem;
}
@media screen and (min-width: 48em) {
  .video-plugin-sm {
    display: none;
  }
  .video-plugin {
    display: block;
  }
}
</style>
