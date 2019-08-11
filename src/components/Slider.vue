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
export default {
  props: ["screenType"],
  data: function() {
    return {
      currentIndex: 0,
      position: 0,
      enableTransition: true,
      interval: "",
      tk: 0,
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
    setTimer(type) {
      this.interval = setTimeout(() => {
        this[type](this.interval);
      }, 2000);
    },
    bootSlider() {
      switch (this.screenType) {
        case "fade": {
          this.setTimer("fade");
          break;
        }
        case "slide": {
          this.setTimer("slide");
          this.listenVisibilityState(this.interval);
          break;
        }
        case "antiSlide": {
          this.setTimer("antiSlide");
          this.listenVisibilityState(this.interval);
          break;
        }
      }
    },
    listenVisibilityState(timedout) {
      let self = this;

      document.addEventListener("visibilitychange", visibilitychange, false);

      function visibilitychange() {
        if (document.visibilityState === "hidden") {
          clearTimeout(timedout);
          this.enableTransition = false;
        }
        if (document.visibilityState === "visible") {
          console.log(timedout);
          clearTimeout(timedout);
          let newslide = new Promise((resolve, reject) => {
            document.removeEventListener(
              "visibilitychange",
              visibilitychange,
              false
            );
            self.position = 0;
            self.currentIndex = 0;
            resolve("eventremoved");
          });
          newslide.then(r => {
            console.log(r);
            self.bootSlider();
          });
        }
      }
    },
    fade(timedout) {
      clearTimeout(timedout);
      this.imgs[this.currentIndex].isFade = true;
      if (this.currentIndex + 1 == this.imgs.length) {
        this.imgs[0].isFade = false;
        this.currentIndex = 0;
      } else {
        this.imgs[this.currentIndex + 1].isFade = false;
        this.currentIndex += 1;
      }
      this.setTimer("fade");
    },
    slide(timedout) {
      clearTimeout(timedout);
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
        this.setTimer("slide");
      }, 1000);
    },
    antiSlide(timedout) {      clearTimeout(timedout);
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
        this.setTimer("antiSlide");
      }, 1000);
    }
  },
  created() {},
  mounted() {
    this.bootSlider();
  }
};
</script>

<style>
.umr-slider {
  width: 100%;
}
.umr-slider-screen {
  transition: all 0.3s;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  box-shadow: 0 0 5px 0 rgb(206, 206, 206);
}
.umr-slider-screen:hover {
  box-shadow: 0 0 8px 2px rgb(206, 206, 206);
}
.umr-slider-pic {
  position: relative;
  height: 100px;
  width: 320px;
}
.umr-slider-pic img {
  width: 100%;
  height: 100%;
}

.umr-slider-pic a {
  width: 100%;
  position: absolute;
  display: block;
  height: 100%;
  opacity: 1;
  transition: all 2s;
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

@media screen and (min-width: 35.5em) {
  .umr-slider-pic,
  .umr-slider-pic img {
    position: relative;
    height: 400px;
    width: 1280px;
  }
}

@media screen and (min-width: 48em) {
}

@media screen and (min-width: 64em) {
}

@media screen and (min-width: 80em) {
}
</style>
