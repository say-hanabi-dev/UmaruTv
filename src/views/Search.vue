<template>
  <div class="search">
    <div class="container">
      <div class="pure-g flex space-between">
        <Card
          v-for="item in cardRec"
          class="umr-card-sm pure-u-5-24"
          href="javascript:void(0)"
          @click.native="routerPush(false,`/video/${item.id}/ep/1`)"
          :key="item.id"
        >
          <div class="umr-card-main" slot="umr-card-main">
            <div class="card-cover" :style="{ backgroundImage:'url('+item.cover+')' }"></div>
          </div>
          <div class="umr-card-bottom" slot="umr-card-bottom">
            <div class="umr-card-sm-title">{{item.name}}</div>
            <div class="umr-card-sm-states">
              <span>
                <font-awesome-icon class="card-ico" icon="heart" />
                {{item.collection}}
              </span>
              <span>
                <font-awesome-icon class="card-ico" icon="comment" />
                {{item.danmaku}}
              </span>
              <span>
                <font-awesome-icon class="card-ico" icon="video" />
                {{item.watch}}
              </span>
            </div>
          </div>
        </Card>
        <div class="flex-fix-3"></div>
        <div class="flex-fix-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentArea from "../components/ContentArea";
import Card from "../components/Card";
import routerEvent from "../mixins/routerEvent.js";
import map from "../mixins/map.js";
import axios from "axios";

export default {
  name: "Search",
  mixins: [map,routerEvent],
  components: { ContentArea, Card },
  data: function() {
    return {
      keywords: this.$route.params.name,
      cardRec: []
    };
  },
  methods: {
    queryData(keywords) {
      axios
        .get(`${this.baseUrl}/animes/search?name=${keywords}`)
        .then(result => {
          this.cardRec = result.data;
        });
    }
  },
  watch: {
    "$route.params.name": function() {
      this.queryData(this.$route.params.name);
    }
  },
  mounted: function() {
    this.queryData(this.$route.params.name);
  }
};
</script>

<style scoped>
/* @import "../../node_modules/mdui/dist/css/mdui.min.css"; */
.search {
  margin-top: 40px;
}
.ca-search {
  width: 100%;
  height: 50px;
  margin: 0.125em auto;
  text-align: center;

  padding: 1rem;
  display: flex;
  align-items: center;
  background-color: #fff;
  border: none;
  box-shadow: 0.5rem 0.875rem 2.375rem rgba(39, 44, 49, 0.06),
    0.0625rem 0.1875rem 0.5rem rgba(39, 44, 49, 0.03);
  box-sizing: border-box;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.ca-search:focus {
  outline: none;
  /*background-color: #249ffd;*/
  transform: scale(1.02);
  /*box-shadow: 0 0.5rem 0.625rem rgba(36, 159, 253, .3);*/
  /*box-shadow: 0 0.5rem 0.625rem rgba(0, 0, 0, .1);*/
  box-shadow: 0.5rem 0.875rem 2.375rem rgba(39, 44, 49, 0.09),
    0.0625rem 0.1875rem 0.5rem rgba(39, 44, 49, 0.06);
}

.ca-search-btn {
  letter-spacing: 0.5em;
  font-weight: bold;
  text-align: center;
  margin-top: 1.25rem;
  width: 100%;
  height: 50px;
  color: #ffffff;
  padding: 1rem;
  background-color: #249ffd;
  outline: none;
  border: none;
  box-shadow: 0 0.5rem 0.625rem rgba(36, 159, 253, 0.3);
  box-sizing: border-box;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.ca-search-btn:hover {
  cursor: pointer;
  transform: scale(0.98);
}
</style>