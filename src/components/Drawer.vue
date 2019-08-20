<template>
  <div>
    <transition name="fade" mode="out-in">
      <div @click="closeDrawer" v-show="isMaskShow" class="globalmask"></div>
    </transition>
    <transition name="cutin-right" mode="out-in">
      <div v-show="isDrawerShow" class="umr-drawer">
        <div class="drawerinner">
          <slot name="drawerinner"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["isShow", "clickClose"],
  data: function() {
    return {
      isMaskShow: false,
      isDrawerShow: false
    };
  },
  methods: {
    closeDrawer() {
      this.$emit("close-drawer");
    }
  },
  watch: {
    isShow(val) {
      window.setTimeout(() => {
        this.isDrawerShow = val;
      }, 50);
      this.isMaskShow = val;
    }
  }
};
</script>

<style>
.umr-drawer {
  position: fixed;
  top: 0;
  right: 0;
  max-width: 300px;
  height: 100vh;
  background-color: transparent;
  z-index: 31;
}

.drawerinner {
  height: 100%;
  display: flex;
  align-items: center;
}

</style>
