<template>
  <div class="home">
    <div class="nav-local">
      <div class="container">
        <div class="scroll-screen">
          <umr-slider screenType="slide" class="flex justify-center align-end"></umr-slider>
        </div>
        <div class="plates flex justify-center">
          <a href="#">热门</a>
          <a href="#">最新</a>
          <a href="#">连载</a>
          <a href="#">完结</a>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="recommend">
        <div class="container space-between pure-g">
          <umr-card v-for="card in cardRec" class="pure-u-11-24" :key="card.id" :href="card.href">
            <div class="umr-card-main umr-card-lg" slot="umr-card-main">
              <img :src="card.src" alt>
            </div>
            <div class="umr-card-bottom" slot="umr-card-bottom">
              <h2>{{card.title}}</h2>
            </div>
          </umr-card>
        </div>
      </div>
      <div class="cardgroups">
        <div class="cats"></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from "@/components/Slider";
import Card from "@/components/Card";

export default {
  name: "home",
  components: {
    "umr-slider": Slider,
    "umr-card": Card
  },
  data: function() {
    return {
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
      ]
    };
  }
};
</script>

<style>
.nav-local,
.scroll-screen {
  width: 100%;
}
.nav-local {
  padding-top: 3rem;
  background: white;
  margin-bottom: 2rem;
}
.plates a {
  padding: 1.5rem 1.5rem;
  color: #515a6e;
  border-bottom: 2px solid white;
  transition: all 0.3s;
}
.plates a:hover {
  border-bottom-color: black;
}
.plates a.active {
  border-bottom-color: black;
}
</style>
