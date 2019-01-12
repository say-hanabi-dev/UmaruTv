<template>
  <div class="home">
    <div class="nav-local">
      <div class="container">
        <div class="scroll-screen">
          <umr-slider screenType="fade" class="flex justify-center align-end"></umr-slider>
        </div>
        <div class="plates flex justify-center">
          <a :href="link.href" v-for="link in plateLinks" class :key="link.id">{{link.content}}</a>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="recommend">
        <div class="container space-between pure-g">
          <umr-card v-for="card in cardRec" class="pure-u-11-24 umr-card-lg" :key="card.id" :href="card.href">
            <div class="umr-card-main" slot="umr-card-main">
              <img :src="card.src" alt>
            </div>
            <div class="umr-card-bottom" slot="umr-card-bottom">
              <h2>{{card.title}}</h2>
            </div>
          </umr-card>
        </div>
      </div>
      <div class="cardgroups">
        <div class="container">
          <div class="cats pure-g">
            <div class="pure-u-18-24">
              <a
                v-for="btn in catgoryButtons"
                :href="btn.href"
                class="btn-ellipse"
                :key="btn.id"
              >{{btn.content}}</a>
            </div>
            <div class="pure-u-6-24"></div>
          </div>
          <div class="cards pure-g">
            <div class="pure-u-18-24 pure-g flex space-between">
              <umr-card v-for="item in cardItems" class="umr-card-sm pure-u-5-24" :href="item.href" :key="item.id">
                <div class="umr-card-main" slot="umr-card-bottom" >
                  <img :src="item.src" alt="">
                </div>
                <div class="umr-card-bottom" slot="umr-card-bottom">
                  <div class="umr-card-sm-title">
                    {{item.title}}
                  </div>
                  <div class="umr-card-sm-states">
                    <span><font-awesome-icon class="card-ico" icon="heart"/> {{item.collectcount}} </span>
                    <span><font-awesome-icon class="card-ico" icon="comment"/> {{item.comment}} </span>
                    <span><font-awesome-icon class="card-ico" icon="video"/> {{item.playcount}} </span>
                  </div>
                </div>
              </umr-card>
              <div class="flex-fix-3"></div>
              <div class="flex-fix-4"></div>
            </div>
            <div class="pure-u-6-24"></div>
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
          id: "BTN_CAT01",
          href: "#",
          content: "番剧索引"
        },
        {
          id: "BTN_CAT02",
          href: "#",
          content: "新番时间表"
        },
        {
          id: "BTN_CAT03",
          href: "#",
          content: "新番咨询"
        },
        {
          id: "BTN_CAT04",
          href: "#",
          content: "其他"
        },
      ],
      cardItems: [
        {
          id: "CARD_ITEM01",
          src: require('../assets/C2.jpg'),
          href: '#',
          title: '少女编号01',
          playcount: '300',
          comment: '25',
          collectcount: '40',
        },
        {
          id: "CARD_ITEM02",
          src: require('../assets/C2.jpg'),
          href: '#',
          title: '少女编号01',
          playcount: '300',
          comment: '25',
          collectcount: '40',
        },
        {
          id: "CARD_ITEM03",
          src: require('../assets/C2.jpg'),
          href: '#',
          title: '少女编号01',
          playcount: '300',
          comment: '25',
          collectcount: '40',
        },
        {
          id: "CARD_ITEM04",
          src: require('../assets/C2.jpg'),
          href: '#',
          title: '少女编号01',
          playcount: '300',
          comment: '25',
          collectcount: '40',
        },
        {
          id: "CARD_ITEM05",
          src: require('../assets/C2.jpg'),
          href: '#',
          title: '少女编号01',
          playcount: '300',
          comment: '25',
          collectcount: '40',
        },
        {
          id: "CARD_ITEM06",
          src: require('../assets/C2.jpg'),
          href: '#',
          title: '少女编号01',
          playcount: '300',
          comment: '25',
          collectcount: '40',
        },
        {
          id: "CARD_ITEM07",
          src: require('../assets/C2.jpg'),
          href: '#',
          title: '少女编号01',
          playcount: '300',
          comment: '25',
          collectcount: '40',
        },
        {
          id: "CARD_ITEM08",
          src: require('../assets/C2.jpg'),
          href: '#',
          title: '少女编号01',
          playcount: '300',
          comment: '25',
          collectcount: '40',
        },
        {
          id: "CARD_ITEM09",
          src: require('../assets/C2.jpg'),
          href: '#',
          title: '少女编号01',
          playcount: '300',
          comment: '25',
          collectcount: '40',
        },
        {
          id: "CARD_ITEM010",
          src: require('../assets/C2.jpg'),
          href: '#',
          title: '少女编号01',
          playcount: '300',
          comment: '25',
          collectcount: '40',
        },
        {
          id: "CARD_ITEM11",
          src: require('../assets/C2.jpg'),
          href: '#',
          title: '少女编号01',
          playcount: '300',
          comment: '25',
          collectcount: '40',
        },
        {
          id: "CARD_ITEM012",
          src: require('../assets/C2.jpg'),
          href: '#',
          title: '少女编号01',
          playcount: '300',
          comment: '25',
          collectcount: '40',
        },
        {
          id: "CARD_ITEM13",
          src: require('../assets/C2.jpg'),
          href: '#',
          title: '少女编号01',
          playcount: '300',
          comment: '25',
          collectcount: '40',
        },
        {
          id: "CARD_ITEM14",
          src: require('../assets/C2.jpg'),
          href: '#',
          title: '少女编号01',
          playcount: '300',
          comment: '25',
          collectcount: '40',
        },
        {
          id: "CARD_ITEM15",
          src: require('../assets/C2.jpg'),
          href: '#',
          title: '少女编号01',
          playcount: '300',
          comment: '25',
          collectcount: '40',
        },
        {
          id: "CARD_ITEM16",
          src: require('../assets/C2.jpg'),
          href: '#',
          title: '少女编号01',
          playcount: '300',
          comment: '25',
          collectcount: '40',
        },
      ],
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
.btn-ellipse {
  background: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  text-align: center;
  font-size: 14px;
  color: #515a6e;
  margin-right: 0.7rem;
}
.btn-ellipse:hover {
  box-shadow: 0 0 8px 2px rgb(206, 206, 206);
  background: black;
  color: white;
}
.btn-ellipse:active {
  background: black;
  color: white;
}
.cats {
  margin-bottom: 2rem;
}
@media screen and (min-width: 35.5em) {
}

@media screen and (min-width: 48em) {
}

@media screen and (min-width: 64em) {
  .flex-fix-3,.flex-fix-4 {
    flex-basis: 23%;
  }
}

@media screen and (min-width: 80em) {
}
</style>
