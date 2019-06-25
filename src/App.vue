<template>
  <div id="app">
    <umaru-nav @call-auth="callAuth" class="nav-global"></umaru-nav>
    <div class="main">
      <router-view></router-view>
    </div>
    <umaru-footer></umaru-footer>
    <umaru-drawer @close-drawer="closeDrawer" :is-show="isAuthShow">
      <template v-slot:drawerinner>
        <div class="authboard">
          <div class="auth-title">{{authTitle}}</div>
          <input type="text" v-model="auth.mail" placeholder="邮箱">
          <input type="text" v-model="auth.passwd" placeholder="密码">
          <input
            type="text"
            v-if="auth.type === 'reg'"
            v-model="auth.passwdconfirm"
            placeholder="确认密码"
          >
          <div class="auth-row">
            <a href v-if="auth.type === 'login'">忘记密码？</a>
          </div>
          <button class="auth-submit">确认</button>
        </div>
      </template>
    </umaru-drawer>
  </div>
</template>

<script>
import { mapState } from "vuex";
import routerCon from "./router.js";
import store from "./store.js";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Video from "./views/Video.vue";
import Drawer from "./components/Drawer";
import map from "./mixins/map.js";

export default {
  name: "app",
  router: routerCon,
  store,
  mixins: [map],
  computed: mapState({
    testContent: "testContent",
    authTitle: function() {
      switch (this.auth.type) {
        case "login":
          return "登录";
        case "reg":
          return "注册";
      }
    }
  }),
  data: function() {
    return {
      isAuthShow: false,
      auth: {
        type: "login",
        passwd: "",
        mail: "",
        passwdconfirm: ""
      }
    };
  },
  components: {
    "umaru-nav": Nav,
    "umaru-footer": Footer,
    "umaru-drawer": Drawer
  },
  methods: {
    callAuth(id) {
      window.console.log(id);
      this.isAuthShow = true;
      this.auth.type = id;
    },
    closeDrawer() {
      this.isAuthShow = false;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.nav-global {
  box-shadow: 0 0 8px 0 gray;
}

.authboard {
  display: block;
  text-align: center;
  background-color: white;
  border-radius: 0.5rem 0 0 0.5rem;
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  min-height: 300px;
}

.authboard input {
  border: 2px solid #2c3e50;
  outline: none;
  padding: 7px;
  border-radius: 5px;
}

.auth-title {
  text-align: center;
  font-size: 1.75em;
}

.auth-submit {
  outline: none;
  border: none;
  padding: 0.4rem 1rem;
  min-width: 100px;
  border-radius: 5px;
  transition: all 0.3s;
}

.auth-submit:hover {
  color: white;
  background-color: black;
}

.auth-row {
  margin-top: 0.3rem;
  text-align: right;
  padding-right: 1.5rem;
}

.auth-row a {
  color: red;
  transition: 0.3s all;
}

.auth-row a:hover {
  color: rgb(28, 90, 172);
}

.auth-submit,
.authboard input {
  margin-top: 1rem;
}
</style>
