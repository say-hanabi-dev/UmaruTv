<template>
  <div id="app">
    <umaru-nav @call-auth="callAuth" class="nav-global"></umaru-nav>
    <div class="main">
      <router-view></router-view>
    </div>
    <umaru-footer></umaru-footer>
    <umaru-drawer @close-drawer="closeDrawer" :is-show="isAuthShow">
      <template v-slot:drawerinner>
        <div @click="closeDrawer" class="authboard-mask"></div>
        <div class="authboard">
          <div @click="closeDrawer" class="authboard-close-btn">
            <font-awesome-icon icon="times" size="lg" />
          </div>
          <div class="auth-title">{{authTitle}}</div>
          <input v-if="auth.type === 'reg'" type="text" v-model="auth.name" placeholder="用户名" />
          <input type="text" v-model="auth.mail" placeholder="邮箱" />
          <input type="password" v-model="auth.passwd" placeholder="密码" />
          <input
            type="password"
            v-if="auth.type === 'reg'"
            v-model="auth.passwdconfirm"
            placeholder="确认密码"
          />
          <div class="auth-row">
            <a href v-if="auth.type === 'login'">忘记密码？</a>
          </div>
          <div class="message-error" v-show="auth.message">{{auth.message}}</div>
          <button @click="authSubmit" class="auth-submit">确认</button>
        </div>
      </template>
    </umaru-drawer>
    <div class="message-box">
      <umaru-message
        v-for="message in components.message"
        :key="message.content"
        :content="message.content"
      ></umaru-message>
    </div>
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
import Message from "./components/Message";
import axios from "axios";

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
        name: "",
        passwdconfirm: "",
        message: ""
      }
    };
  },
  components: {
    "umaru-nav": Nav,
    "umaru-footer": Footer,
    "umaru-message": Message,
    "umaru-drawer": Drawer
  },
  watch: {
    "auth.type": function() {
      this.auth.passwd = "";
      this.auth.mail = "";
      this.auth.name = "";
      this.auth.passwdconfirm = "";
    }
  },
  methods: {
    callAuth(id) {
      window.console.log(id);
      window.setTimeout(() => {
        this.isAuthShow = true;
      }, 50);
      this.auth.type = id;
    },
    closeDrawer() {
      this.isAuthShow = false;
      this.auth.message = "";
    },
    authSubmit() {
      switch (this.auth.type) {
        case "login": {
          let data = {
            email: this.auth.mail,
            password: this.auth.passwd
          };
          let formData = new FormData();
          formData.append("email", data.email);
          formData.append("password", data.password);
          axios
            .post(`${this.baseUrl}/login`, formData)
            .then(r => {
              let userData = {
                email: data.email
              };
              this.setUser(userData);
              this.callMessage({ content: "登录成功" });
            })
            .catch(error => {
              window.console.log(error.response);
              if (error.response.status === 422) {
                this.callMessage({ content: "登录失败" });
                this.getErrContent(error.response.data.errors);
              }
            });
          return;
        }
        case "reg": {
          let data = {
            name: this.auth.name,
            email: this.auth.mail,
            password: this.auth.passwd,
            password_confirmation: this.auth.passwdconfirm
          };
          let formData = new FormData();
          formData.append("name", data.name);
          formData.append("email", data.email);
          formData.append("password", data.password);
          formData.append("password_confirmation", data.password_confirmation);
          axios
            .post(`${this.baseUrl}/register`, formData)
            .then(r => {
              let userData = {
                email: data.email
              };
              this.setUser(userData);
              this.callMessage({ content: "注册成功" });
            })
            .catch(error => {
              window.console.log(error.response);
              if (error.response.status === 422) {
                this.callMessage({ content: "注册失败" });
                this.getErrContent(error.response.data.errors);
              }
            });
          return;
        }
      }
    },
    showAuthMessage(val) {
      this.auth.message = val;
    },
    getErrContent(arr) {
      let errContents = "";
      for (let key in arr) {
        errContents = errContents + arr[key] + " ";
      }
      this.showAuthMessage(errContents);
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
  position: relative;
  z-index: 2;
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

.authboard-mask {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
}

.authboard-close-btn {
  position: absolute;
  right: 1rem;
  top: 1rem;
  padding: 0.6rem;
  cursor: pointer;
}
</style>
