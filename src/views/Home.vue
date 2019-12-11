<template>
  <div class="home">
    <div
      class="nav-local"
      :class="{ 'nav-paddingtop': systemConfig.showSlide }"
    >
      <div class="container">
        <div class="scroll-screen">
          <umr-slider
            v-if="systemConfig.showSlide"
            screenType="slide"
            class="flex justify-center align-end"
            :sliderItems="sliderItems"
          ></umr-slider>
        </div>
        <div
          v-if="systemConfig.showRecommand"
          class="plates flex justify-center"
        >
          <a
            :href="link.href"
            v-for="link in plateLinks"
            class
            :key="link.id"
            >{{ link.content }}</a
          >
        </div>
      </div>
    </div>
    <div class="main">
      <div v-if="systemConfig.showRecommand" class="recommend">
        <div class="container space-between pure-g">
          <umr-card
            v-for="card in cardRec"
            class="pure-u-11-24 umr-card-lg"
            :key="card.id"
            :href="card.href"
          >
            <div class="umr-card-main" slot="umr-card-main">
              <img :src="card.src" alt />
            </div>
            <div class="umr-card-bottom" slot="umr-card-bottom">
              <h2>{{ card.title }}</h2>
            </div>
          </umr-card>
        </div>
      </div>
      <div class="cardgroups">
        <div class="container">
          <div class="pure-g">
            <div class="pure-u-1 pure-u-sm-18-24">
              <div class="cats">
                <a
                  v-for="btn in catgoryButtons"
                  @click="catTypeSwitch(btn.id)"
                  :class="{ isActive: catgory.currentType === btn.id }"
                  class="btn-ellipse"
                  href="javascript:void(0)"
                  :key="btn.id"
                  >{{ btn.content }}</a
                >
              </div>

              <div class="cards pure-g">
                <div class="pure-u-1">
                  <div class="cats" v-if="catgory.currentType === 'timeline'">
                    <a
                      v-for="(value, key) in catgory.timeline.day"
                      @click="daySwitch(key)"
                      class="btn-ellipse"
                      :class="{ isActive: catgory.timeline.whichDay === key }"
                      href="javascript:void(0)"
                      :key="key"
                      >{{ value.date }}</a
                    >
                  </div>
                  <div class="pure-g flex space-between">
                    <umr-card
                      v-for="item in cardItems"
                      class="umr-card-sm pure-u-11-24 pure-u-sm-5-24"
                      href="javascript:void(0)"
                      @click.native="
                        routerPush(false, `/video/${item.id}/ep/1`)
                      "
                      :key="item.id"
                    >
                      <div class="umr-card-main" slot="umr-card-main">
                        <div
                          class="card-cover"
                          :style="{
                            backgroundImage: 'url(' + item.cover + ')'
                          }"
                        ></div>
                      </div>
                      <div class="umr-card-bottom" slot="umr-card-bottom">
                        <div class="umr-card-sm-title">{{ item.name }}</div>
                        <div class="umr-card-sm-states">
                          <span>
                            <font-awesome-icon class="card-ico" icon="heart" />
                            {{ item.collection }}
                          </span>
                          <span>
                            <font-awesome-icon
                              class="card-ico"
                              icon="comment"
                            />
                            {{ item.danmaku }}
                          </span>
                          <span>
                            <font-awesome-icon class="card-ico" icon="video" />
                            {{ item.watch }}
                          </span>
                        </div>
                      </div>
                    </umr-card>
                    <div class="flex-fix-3"></div>
                    <div class="flex-fix-4"></div>
                  </div>
                  <umr-pagination
                    v-if="catgory.currentType !== 'timeline'"
                    @set-currentpage="setCurrentpage"
                    :current-page="videoGroup.currentPage"
                    :last-page="videoGroup.lastPage"
                  ></umr-pagination>
                </div>
              </div>
            </div>
            <div class="pure-u-1 pure-u-sm-6-24 toolbar-container">
              <div class="toolbar">最近更新</div>
              <div class="pure-u-1">
                <umr-card
                  class="toolbar-items"
                  v-for="(item, index) in toollbarItems"
                  href="javascript:void(0)"
                  @click.native="
                    routerPush(false, `/video/${item.id}/ep/${item.episodes}`)
                  "
                  :key="item.name + item.id"
                >
                  <div class="pure-g" slot="umr-card-bottom">
                    <span class="tag tag-black pure-u-2-24">{{
                      index + 1
                    }}</span>
                    <span class="pure-u-22-24 toolbar-title">
                      {{ item.name }}
                      <span class="toolbar-sub"
                        >更新至{{ item.episodes }}集</span
                      >
                    </span>
                  </div>
                </umr-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from "@/components/Slider";
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import map from "../mixins/map.js";
import routerEvent from "../mixins/routerEvent.js";

import axios from "axios";

export default {
  name: "home",
  mixins: [map, routerEvent],
  components: {
    "umr-slider": Slider,
    "umr-card": Card,
    "umr-pagination": Pagination
  },
  computed: {
    cardItems() {
      switch (this.catgory.currentType) {
        case "allanime":
          return this.catgory.allAnime;
        case "timeline":
          return this.catgory.timeline.data[this.catgory.timeline.whichDay];
      }
    }
  },
  data: function() {
    return {
      videoGroup: {
        currentPage: 1,
        lastPage: 1
      },
      cardRec: [
        {
          id: "CARD_REC01",
          src: require("../assets/C1.jpg"),
          href: "",
          title: "关于我转生变成史莱姆的这档事14"
        },
        {
          id: "CARD_REC02",
          src: require("../assets/C1.jpg"),
          href: "",
          title: "关于我转生变成史莱姆的这档事14"
        },
        {
          id: "CARD_REC03",
          src: require("../assets/C1.jpg"),
          href: "",
          title: "关于我转生变成史莱姆的这档事14"
        },
        {
          id: "CARD_REC04",
          src: require("../assets/C1.jpg"),
          href: "",
          title: "关于我转生变成史莱姆的这档事14"
        }
      ],
      plateLinks: [
        {
          id: "BTN_PLATE01",
          href: "",
          content: "热门"
        },
        {
          id: "BTN_PLATE02",
          href: "",
          content: "最新"
        },
        {
          id: "BTN_PLATE03",
          href: "",
          content: "连载"
        },
        {
          id: "BTN_PLATE04",
          href: "",
          content: "完结"
        }
      ],
      catgoryButtons: [
        {
          id: "allanime",
          content: "番剧索引"
        },
        {
          id: "timeline",
          content: "新番时间表"
        }
      ],
      catgory: {
        currentType: "allanime",
        allAnime: [],
        timeline: {
          whichDay: "1",
          day: {
            "7": {
              date: "周日"
            },
            "1": {
              date: "周一"
            },
            "2": {
              date: "周二"
            },
            "3": {
              date: "周三"
            },
            "4": {
              date: "周四"
            },
            "5": {
              date: "周五"
            },
            "6": {
              date: "周六"
            }
          },
          data: []
        }
      },
      toollbarItems: [],
      sliderItems: []
    };
  },
  methods: {
    setCurrentpage(num) {
      let lastPage = this.videoGroup.lastPage;
      if (num > this.videoGroup.lastPage) {
        num = lastPage;
      } else if (num < 1) {
        num = 1;
      }
      this.videoGroup.currentPage = num;
      axios.get(`${this.baseUrl}/animes?page=${num}&paginate=16`).then(r => {
        console.log(r.data);
        this.videoGroup.lastPage = r.data.last_page;
        this.catgory.allAnime = r.data.data;
      });
    },
    catTypeSwitch(to) {
      this.catgory.currentType = to;
    },
    daySwitch(num) {
      this.catgory.timeline.whichDay = num;
    }
  },
  mounted() {
    axios.get(`${this.baseUrl}/animes?page=1&paginate=16`).then(r => {
      console.log(r.data);
      this.videoGroup.currentPage = r.data.current_page;
      this.videoGroup.lastPage = r.data.last_page;
      this.catgory.allAnime = r.data.data;
    });
    axios.get(`${this.baseUrl}/animes/recently-updated`).then(r => {
      console.log(r.data);
      this.toollbarItems = r.data;
    });
    axios.get(`${this.baseUrl}/animes/timeline`).then(r => {
      console.log(r.data);
      this.catgory.timeline.data = r.data;
    });
    axios.get(`${this.baseUrl}/carousel/index`).then(r => {
      this.sliderItems = r.data;
    });
  }
};
</script>

<style>
.nav-local,
.scroll-screen {
  width: 100%;
}
.nav-local {
  background: white;
}
.nav-paddingtop {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.plates a {
  padding: 1.5rem 1.5rem;
  color: #515a6e;
  border-bottom: 2px solid white;
}
.plates a,
.btn-ellipse {
  transition: all 0.3s;
}
.plates a:hover {
  border-bottom-color: black;
}
.plates a.active {
  border-bottom-color: black;
}
.recommend,
.cardgroups {
  padding-top: 2rem;
}
.btn-ellipse,
.toolbar {
  background: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  text-align: center;
  font-size: 14px;
  color: #515a6e;
  margin-right: 0.7rem;
}
.toolbar {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 1.5rem;
}

.toolbar-title {
  padding: 0.5rem 0;
  display: inline-block;
}
.toolbar-items {
  margin-bottom: 0.5rem;
  color: #353b47;
}
.toolbar-items > div {
  width: 100%;
  align-items: baseline;
  padding-left: 0.3rem;
  flex-wrap: nowrap;
}
.toolbar-sub {
  font-size: 13px;
  color: #9aa2b4;
  margin-left: 0.3rem;
}
.btn-ellipse:hover {
  box-shadow: 0 0 8px 2px rgb(206, 206, 206);
  background: black;
  color: white;
}
.btn-ellipse:active,
.btn-ellipse.isActive {
  background: black;
  color: white;
}
.cats {
  margin-bottom: 1.5rem;
}
.cardgroups {
  margin-bottom: 2rem;
}
@media screen and (min-width: 35.5em) {
  .toolbar-container {
    padding-left: 1rem;
  }
}

@media screen and (min-width: 48em) {
}

@media screen and (min-width: 64em) {
  .flex-fix-3,
  .flex-fix-4 {
    flex-basis: 23%;
  }
}

@media screen and (min-width: 80em) {
}
</style>
