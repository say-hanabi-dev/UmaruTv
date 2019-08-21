<template>
  <div class="catgory">
    <div class="container pure-g">
      <div v-for="(value,key) in catList" :key="key" class="catbar pure-u-1">
        <span class="title">{{catbarName(key)}}</span>
        <input v-if="key === 'season'" type="number" name id="year" value="2019" />
        <button
          @click="setCat(catAll(key),key,true)"
          :class="{ active: cat[key].length === catList[key].length }"
        >全部</button>
        <button
          v-for="item in value"
          @click="setCat(item.id,key,true)"
          :key="item.name"
          :class="{ active: cat[key].length !== catList[key].length && cat[key][0] === item.id }"
        >{{item.name}}</button>
      </div>
      <div class="animelist pure-u-1">
        <umr-pagination
          @set-currentpage="setCurrentpage"
          :current-page="currentPage"
          :last-page="lastPage"
        ></umr-pagination>
        <umr-card
          v-for="card in animeList"
          href="javascript:void(0)"
          @click.native="routerPush(false,`/video/${card.id}/ep/1`)"
          :key="card.id"
        >
          <div slot="umr-card-lr" class="umr-card-lr">
            <div :style="{ backgroundImage: 'url('+card.cover+')' }" class="umr-card-lr-cover"></div>
            <div class="umr-card-lr-main">
              <div class="title">{{card.name}}</div>
              <div class="key">
                <span class="tag tag-black">播出时间:</span>
                {{card.release_time}}
              </div>
              <div class="key">
                <span class="tag tag-black">简介:</span>
                {{card.introduction}}
              </div>
            </div>
          </div>
        </umr-card>
        <umr-pagination
          @set-currentpage="setCurrentpage"
          :current-page="currentPage"
          :last-page="lastPage"
        ></umr-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import map from "../mixins/map.js";
import routerEvent from "../mixins/routerEvent.js";

import axios from "axios";

export default {
  mixins: [map, routerEvent],
  components: {
    "umr-card": Card,
    "umr-pagination": Pagination
  },
  computed: {
    allSeason: function() {
      let result = [];
      let season = this.catList.season;
      for (let i = 0; i <= season.length - 1; i++) {
        result.push(season[i].id);
      }
      return result;
    },
    allLocal: function() {
      let result = [];
      let local = this.catList.local;
      for (let i = 0; i <= local.length - 1; i++) {
        result.push(local[i].id);
      }
      return result;
    },
    allStyle: function() {
      let result = [];
      let style = this.catList.style;
      for (let i = 0; i <= style.length - 1; i++) {
        result.push(style[i].id);
      }
      return result;
    },
    allType: function() {
      let result = [];
      let type = this.catList.type;
      for (let i = 0; i <= type.length - 1; i++) {
        result.push(type[i].id);
      }
      return result;
    }
  },
  data: function() {
    return {
      currentPage: 1,
      lastPage: 1,
      cat: {
        season: [],
        local: [],
        style: [],
        type: []
      },
      tagId: "",
      catList: {
        season: [],
        local: [],
        style: [],
        type: []
      },
      animeList: []
    };
  },
  methods: {
    catAll(key) {
      switch (key) {
        case "season":
          return this.allSeason;
        case "local":
          return this.allLocal;
        case "style":
          return this.allStyle;
        case "type":
          return this.allType;
      }
    },
    catbarName(key) {
      switch (key) {
        case "season":
          return "时间";
        case "local":
          return "地区";
        case "style":
          return "风格";
        case "type":
          return "类型";
      }
    },
    setCat(val, type, ifgetlist) {
      this.cat[type] = [];

      if (typeof val === "number") {
        this.cat[type].push(val);
      } else {
        for (let i = 0; i <= val.length - 1; i++) {
          this.cat[type].push(val[i]);
        }
      }

      if (ifgetlist === true) {
        this.getTagId();
        this.getAnimeList();
      }
    },
    getTagId() {
      let tagList = [];

      tagList = tagList
        .concat(this.cat["season"])
        .concat(this.cat["local"])
        .concat(this.cat["style"])
        .concat(this.cat["type"]);
      this.tagId = tagList.join(",");
    },
    getAnimeList(page) {
      let url = `${this.baseUrl}/animes/?paginate=20`;

      if (page) {
        url = url + `&page=${page}`;
      }

      if (this.tagId !== "") {
        url = url + `&tag=${this.tagId}`;
      }

      axios.get(url).then(r => {
        this.animeList = r.data.data;
        this.lastPage = r.data.last_page;
      });
    },
    setCurrentpage(num) {
      if (num > this.lastPage) {
        num = this.lastPage;
      } else if (num < 1) {
        num = 1;
      }

      this.currentPage = num;
      this.getAnimeList(num);
    }
  },
  created() {
    axios.get(`${this.baseUrl}/animes/tags`).then(r => {
      console.log(r);
      this.catList.local = r.data.area;
      // this.catList.style = r.data.style;
      // this.catList.season = r.data.season;
      // this.catList.type = r.data.type;

      // this.setCat(this.allSeason, "season");
      this.setCat(this.allLocal, "local");
      // this.setCat(this.allStyle, "style");
      this.setCat(this.allType, "type", true);
    });
  }
};
</script>

<style scoped>
.catgory {
  padding-top: 2.5rem;
  padding-bottom: 1rem;
}
.catbar {
  background-color: white;
  width: 100%;
  padding: 1rem;
  padding-bottom: 0;
}
.catbar .title {
  font-size: 18px;
  margin-right: 1rem;
  background-color: black;
  padding: 0.4rem 1rem;
  color: white;
}
.catbar button {
  padding: 0.4rem 1rem;
  margin-bottom: 0.5rem;
}
#year,
.catbar button {
  outline: none;
  border: 1px solid #f5f6f8;
  background-color: #f5f6f8;
  transition: 0.3s all;
  margin-right: 1rem;
}
#year {
  padding: 0.4rem;
  width: 80px;
}
#year:focus,
#year:hover,
.catbar button:hover,
.catbar button.active {
  border: 1px solid black;
  color: white;
  background-color: black;
}
.animelist {
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.animelist .umr-card {
  width: 49%;
  padding: 0.5rem;
}
.animelist .title {
  font-size: 20px;
  text-align: center;
  margin-bottom: 1rem;
}
.animelist .key {
  margin-bottom: 0.6rem;
}
.animelist .tag {
  padding: 0.1rem 0.4rem;
  width: unset;
  height: unset;
}
.animelist .umr-pagination {
  margin-block-end: 1rem;
}
</style>
