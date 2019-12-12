<template>
  <div class="video">
    <div class="container pure-g">
      <div class="pure-u-1 pure-u-md-18-24">
        <div class="player" ref="player"></div>
        <div class="danmaku">
          <input
            type="text"
            v-model="curDanmaku"
            @keyup.enter="createDanmaku"
            placeholder="输入弹幕"
          />
        </div>
        <div class="video-plugin-sm">
          <div class="video-epgroup">
            <div class="group-title space-between">
              <div>分集列表</div>
              <div v-if="epBtnGroupPage.all > 1" class="btn-group flex">
                <button
                  @click="setBtnGroup(resource, epBtnGroupPage.current - 1)"
                  class="side"
                >
                  <font-awesome-icon class="card-ico" icon="angle-left" />
                </button>
                <button
                  @click="setBtnGroup(resource, epBtnGroupPage.current + 1)"
                  class="side"
                >
                  <font-awesome-icon class="card-ico" icon="angle-right" />
                </button>
              </div>
            </div>
            <div class="btn-group">
              <button
                v-for="(item, index) in epBtnGroup"
                :key="item.id"
                :class="{ active: item.isActive === true }"
                @click="selectEp(index + 1 + (epBtnGroupPage.current - 1) * 50)"
              >
                {{ index + 1 + (epBtnGroupPage.current - 1) * 50 }}
              </button>
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
            <div class="epCut">
              <div class="btn-group">
                <button class="btn-input">
                  <input
                    @keyup.enter="selectEp(toEp)"
                    v-model="toEp"
                    type="number"
                  /><span>集</span>
                </button>
                <button @click="selectEp(toEp)">跳转</button>
              </div>
            </div>
          </div>
        </div>
        <div class="video-source">
          <umr-card>
            <div slot="umr-card-lr" class="umr-card-lr">
              <div
                :style="{ backgroundImage: coverUrl }"
                class="umr-card-lr-cover"
              ></div>
              <div class="umr-card-lr-main">
                <div class="title">{{ resource.name }}</div>

                <div class="key">
                  <span class="tag tag-black">播出时间:</span>
                  {{ resource.release_time }}
                </div>
                <div class="key">
                  <span class="tag tag-black">简介:</span>
                  {{ resource.introduction }}
                </div>
              </div>
            </div>
          </umr-card>
        </div>
      </div>
      <div class="pure-u-1 pure-u-md-6-24">
        <div class="video-plugin">
          <div class="video-epgroup">
            <div class="group-title space-between side">
              <div>分集列表</div>
              <div v-if="epBtnGroupPage.all > 1" class="btn-group flex">
                <button
                  @click="setBtnGroup(resource, epBtnGroupPage.current - 1)"
                  class="side"
                >
                  <font-awesome-icon class="card-ico" icon="angle-left" />
                </button>
                <button
                  @click="setBtnGroup(resource, epBtnGroupPage.current + 1)"
                  class="side"
                >
                  <font-awesome-icon class="card-ico" icon="angle-right" />
                </button>
              </div>
            </div>
            <div class="btn-group">
              <button
                v-for="(item, index) in epBtnGroup"
                :key="item.id"
                :class="{ active: item.isActive === true }"
                @click="selectEp(index + 1 + (epBtnGroupPage.current - 1) * 50)"
              >
                {{ index + 1 + (epBtnGroupPage.current - 1) * 50 }}
              </button>
              <span class="fix"></span>
              <span class="fix"></span>
            </div>
            <div class="epCut">
              <div class="btn-group">
                <button class="btn-input">
                  <input
                    @keyup.enter="selectEp(toEp)"
                    v-model="toEp"
                    type="number"
                  /><span>集</span>
                </button>
                <button @click="selectEp(toEp)">跳转</button>
              </div>
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
import routerEvent from "../mixins/routerEvent.js";

import axios from "axios";

window.Hls = Hls;

export default {
  mixins: [map, routerEvent],
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
      epBtnGroupPage: {
        all: 1,
        current: 1
      },
      currentEp: 0,
      toEp: 1,
      videoResourceIndex: 0,
      videoPlayer: {},
      curDanmaku: ""
    };
  },
  methods: {
    initVideo(animeID, animeEpisode) {
      axios
        .get(
          `${this.baseUrl}/animes/episode/${
            this.resource.episode[animeEpisode - 1].id
          }/resource`
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
    },
    selectEp(num) {
      if (num < 1 || num > this.resource.episodes) {
        this.callMessage({ content: "本集不存在" });
        return
      }
      let animeID = this.$route.params.id;
      this.$router.push(`/video/${animeID}/ep/${num}`);
      this.activeBtn(num - (this.epBtnGroupPage.current - 1) * 50);
      this.initVideo(animeID, num);
    },
    activeBtn(id) {
      if (this.currentEp !== 0) {
        this.epBtnGroup[this.currentEp - 1].isActive = false;
      }
      this.epBtnGroup[id - 1].isActive = true;
      this.currentEp = id;
    },
    setBtnGroup(data, nextPage) {
      let btnGroup = [];
      let lastNum;

      if (nextPage < 1 || nextPage > this.epBtnGroupPage.all) {
        return;
      }

      this.epBtnGroupPage.current = nextPage;

      if (this.epBtnGroupPage.all == 1) {
        lastNum = data.episodes;
      } else if (
        this.epBtnGroupPage.all !== 1 &&
        nextPage * 50 < data.episodes
      ) {
        lastNum = nextPage * 50;
      } else {
        lastNum = data.episodes;
      }

      for (let i = 0 + (nextPage - 1) * 50; i < lastNum; i++) {
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
      this.epBtnGroupPage.all = Math.ceil(r.data.episodes / 50);
      let nextBtnPage = Math.ceil(animeEpisode / 50);
      this.setBtnGroup(r.data, nextBtnPage);
      this.activeBtn(animeEpisode - (this.epBtnGroupPage.current - 1) * 50);
      this.initVideo(animeID, animeEpisode);
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
.group-title .btn-group {
  justify-content: space-between;
  flex-wrap: nowrap;
}
.group-title {
  display: flex;
}
.group-title.side {
  display: block;
}
.group-title .btn-group button {
  height: 23px;
}
.group-title .btn-group button {
  margin: 0 0 0 0.3rem;
}
.group-title .btn-group button svg {
  color: rgb(92, 92, 92);
}
.epCut {
  width: 100%;
}
.epCut .btn-group {
  justify-content: flex-end;
  width: 100%;
}
.btn-input {
  width: 100px;
  display: flex;
  align-items: center;
  cursor: unset;
  margin-right: 0.3rem;
}
.btn-input input {
  width: 88%;
  margin-right: 0.3rem;
  border: 0;
  outline: 0;
}
@media screen and (min-width: 48em) {
  .video-plugin-sm {
    display: none;
  }
  .video-plugin {
    display: block;
  }
  .btn-group button.side {
    margin: 0.5rem 0 0 0;
  }
}
@media screen and (min-width: 80em) {
  .group-title.side {
    display: flex;
  }
  .btn-group button.side {
    margin: 0 0 0 0.3rem;
  }
}
</style>
