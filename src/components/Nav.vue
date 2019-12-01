<template>
  <div class="nav">
    <div class="container pure-g">
      <div class="links-guide pure-u-1-2">
        <a
          v-for="guidelinks in guideMsg"
          href="javascript:void(0)"
          @click="routerPush(guidelinks.outside, guidelinks.href)"
          :key="guidelinks.id"
          >{{ guidelinks.content }}</a
        >
      </div>
      <div class="links-user pure-u-1-2">
        <div
          class="searchbar"
          :class="{ 'searchbar-active': isSarchbarActive }"
        >
          <div class="search">
            <div>
              <input
                id="search"
                v-model="keywords"
                @keyup.enter="search"
                type="search"
                placeholder="搜索"
              />
            </div>
            <div>
              <i class="mdui-icon material-icons search-icon" @click="search"
                >search</i
              >
            </div>
          </div>
        </div>

        <div
          @click="closeSearchbar"
          v-show="isMaskShow"
          class="globalmask"
        ></div>

        <div class="search-trigger" @click="showSearchbar">
          <i class="mdui-icon material-icons search-icon">search</i>
        </div>

        <div v-if="user.email === ''" class="auth">
          <a
            v-for="authlinks in authMenu"
            :href="authlinks.href"
            :key="authlinks.id"
            @click="callAuth(authlinks.id)"
            >{{ authlinks.content }}</a
          >
        </div>
        <div v-if="user.email !== ''" class="auth">
          <a
            v-for="userlinks in userMenu"
            :href="userlinks.href"
            :key="userlinks.id"
            @click="userlinks.method"
            >{{ userlinks.content }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import routerEvent from "../mixins/routerEvent.js";
import map from "../mixins/map.js";
import axios from "axios";
export default {
  mixins: [map, routerEvent],
  created() {
    this.userMenu[0].content = this.user.name;
  },
  data: function() {
    return {
      guideMsg: [
        {
          id: "NAV_G0",
          href: "/",
          content: "首页",
          outside: false
        },
        {
          id: "NAV_G1",
          href: "#",
          content: "论坛",
          outside: true
        },
        {
          id: "NAV_G2",
          href: "/catgory",
          content: "分类",
          outside: false
        }
      ],
      authMenu: [
        {
          id: "login",
          href: "javascript:void(0)",
          content: "登录"
        },
        {
          id: "reg",
          href: "javascript:void(0)",
          content: "注册"
        }
      ],
      userMenu: [
        {
          id: "username",
          href: "javascript:void(0)",
          content: "",
          method: function() {
            window.console.log("待定");
          }
        },
        {
          id: "reg",
          href: "javascript:void(0)",
          content: "登出",
          method: this.logout
        }
      ],
      keywords: null,
      isSarchbarActive: false,
      isMaskShow: false
    };
  },
  watch: {
    "user.name": function(val) {
      this.userMenu[0].content = val;
    }
  },
  methods: {
    callAuth(id) {
      this.$emit("call-auth", id);
    },
    search() {
      if (this.keywords != null) {
        this.$router.push("/search/" + this.keywords);
        this.closeSearchbar();
        this.keywords = null;
      }
    },
    showSearchbar() {
      this.isSarchbarActive = true;
      this.isMaskShow = true;
    },
    closeSearchbar() {
      this.isSarchbarActive = false;
      this.isMaskShow = false;
    },
    logout() {
      this.reqCount();
      axios({
        method: "post",
        url: `${this.baseUrl}/logout`,
        withCredentials: true
      }).then(r => {
        window.console.log(r);
        this.setUser({ email: "" });
        this.callMessage({ content: "登出成功" });
      });
    }
  }
};
</script>

<style scoped>
.nav {
  background-color: #111;
}

.links-user {
  text-align: right;
}

.nav a {
  display: inline-block;
  padding: 1rem;
  color: #dbdbdb;
}

.search {
  height: 1.8rem;
  line-height: 1.8rem;
  display: inline-flex;
  padding: 0 0.5rem 0 1rem;
  border: 0;
  background: white;
  font-size: 0.876rem;
  border-radius: 4px;
  width: 100%;
}

.searchbar {
  display: none;
  background-color: grey;
  width: 100%;
  padding: 1rem;
  position: fixed;
  left: 0;
  z-index: 31;
}

.searchbar.searchbar-active {
  display: inline-flex;
}

.search-trigger {
  display: inline-block;
  background-color: black;
  color: white;
  border-radius: 3px;
  padding: 0.1rem;
}

.search div:first-of-type {
  width: 100%;
  text-align: left;
}

#search {
  border: 0;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
}
.search-icon:hover {
  cursor: pointer;
}

.auth {
  display: inline-block;
}

@media screen and (min-width: 35.5em) {
  .search {
    position: relative;
  }
  .searchbar {
    display: inline-flex;
    position: relative;
    padding: 0;
    background-color: transparent;
    width: auto;
  }
  .search-trigger {
    display: none;
  }
}
</style>
