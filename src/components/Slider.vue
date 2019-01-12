<template>
  <div class="umr-slider">
    <div class="umr-slider-screen">
      <div v-if="screenType === 'fade'" class="umr-slider-pic">
        <a v-for="img in imgs" :href="img.href" :class="{fade:img.isFade}" :key="img.id">
          <img :src="img.src" alt="imgs">
        </a>
      </div>
      <div
        v-else-if="screenType === 'slide'"
        class="umr-slider-pic"
        :style="{transform:'translateX('+position+'%)'}"
        :class="{hasTransition:enableTransition}"
      >
        <a :href="imgs[lastIndex].href" style="transform:translateX(-100%)">
          <img :src="imgs[lastIndex].src" alt>
        </a>
        <a
          v-for="(img,index) in imgs"
          ref="pics"
          :style="{transform:'translateX('+100*index+'%)'}"
          :class="{transform:img.transformX,'transform-leave':img.transformXleave}"
          :href="img.href"
          :key="img.id"
        >
          <img :src="img.src" alt="imgs">
        </a>
        <a :href="imgs[0].href" :style="{transform:'translateX('+100*imgs.length+'%)'}">
          <img :src="imgs[0].src" alt>
        </a>
      </div>
    </div>
    <div class="umr-slider-controllers"></div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  props: ["screenType"],
  data: function() {
    return {
      currentIndex: 0,
      position: 0,
      enableTransition: true,
      imgs: [
        {
          id: "SLIDER_01",
          src: require("../assets/P1.png"),
          href: "www.baidu.com",
          isFade: false,
          transformX: false,
          transformXleave: false
        },
        {
          id: "SLIDER_02",
          src: require("../assets/P2.jpg"),
          href: "www.baidu.com",
          isFade: true,
          transformX: false,
          transformXleave: false
        },
        {
          id: "SLIDER_03",
          src: require("../assets/P3.jpg"),
          href: "www.baidu.com",
          isFade: true,
          transformX: false,
          transformXleave: false
        },
        {
          id: "SLIDER_04",
          src: require("../assets/P4.png"),
          href: "www.baidu.com",
          isFade: true,
          transformX: false,
          transformXleave: false
        },
        {
          id: "SLIDER_05",
          src: require("../assets/P5.jpg"),
          href: "www.baidu.com",
          isFade: true,
          transformX: false,
          transformXleave: false
        }
      ]
    };
  },
  computed: {
    lastIndex: function() {
      return this.imgs.length - 1;
    }
  },
  methods: {
    fade() {
      this.imgs[this.currentIndex].isFade = true;
      if (this.currentIndex + 1 == this.imgs.length) {
        this.imgs[0].isFade = false;
        this.currentIndex = 0;
      } else {
        this.imgs[this.currentIndex + 1].isFade = false;
        this.currentIndex += 1;
      }
    },
    slide() {
      this.currentIndex += 1;
      this.enableTransition = true;
      requestAnimationFrame(() => {
        this.position = -100 * this.currentIndex;
      });
      setTimeout(() => {
        if (this.position == -100 * this.imgs.length) {
          this.currentIndex = 0;
          this.enableTransition = false;
          this.position = 0;
        }
      }, 1000);
    },
    antiSlide() {
      this.currentIndex -= 1;
      this.enableTransition = true;
      requestAnimationFrame(() => {
        this.position = -100 * this.currentIndex;
      });
      setTimeout(() => {
        if (this.position == 100) {
          this.currentIndex = this.imgs.length - 1;
          this.enableTransition = false;
          this.position = -100 * (this.imgs.length - 1);
        }
      }, 1000);
    }
  },
  created() {},
  mounted() {
    switch (this.screenType) {
      case "fade":
        setInterval(() => {
          this.fade();
        }, 2000);
        break;
      case "slide":
        let a = setInterval(() => {
          this.antiSlide();
        }, 3000);
        break;
    }
  }
};
</script>

<style>
.umr-slider {
  width: 100%;
}
.umr-slider-screen {
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  box-shadow: 0 0 5px 0 gray;
}
.umr-slider-pic {
  position: relative;
  height: 400px;
  width: 1280px;
}
.umr-slider-pic a {
  width: 100%;
  position: absolute;
  display: block;
  height: 100%;
  opacity: 1;
}
.umr-slider-pic img,
.umr-slider-pic a,
.umr-slider-screen {
  border-radius: 5px;
}
.umr-slider-pic a.fade {
  opacity: 0;
}
.umr-slider-pic a.transform {
  transform: translateX(100%);
  transition: none;
}
.umr-slider-pic a.transform-leave {
  transform: translateX(-100%);
  transition: all 1s;
}
.hasTransition {
  transition: all 1s;
}
</style>
