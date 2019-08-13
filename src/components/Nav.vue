<template>
  <div class="nav">
    <div class="container pure-g">
      <div class="links-guide pure-u-1-2">
        <a
          v-for="guidelinks in guideMsg"
          :href="guidelinks.href"
          :key="guidelinks.id"
        >{{guidelinks.content}}</a>
      </div>
      <div class="links-user pure-u-1-2">
        <div class="searchbar" :class="{ 'searchbar-active':isSarchbarActive }">
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
              <i class="mdui-icon material-icons search-icon" @click="search">search</i>
            </div>
          </div>
        </div>
        <div class="search-trigger" @click="showSearchbar">
          <i class="mdui-icon material-icons search-icon">search</i>
        </div>

        <a
          v-for="userlinks in userMsg"
          :href="userlinks.href"
          :key="userlinks.id"
          @click="callAuth(userlinks.id)"
        >{{userlinks.content}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      guideMsg: [
        {
          id: "NAV_G0",
          href: "#",
          content: "首页"
        },
        {
          id: "NAV_G1",
          href: "#",
          content: "论坛"
        },
        {
          id: "NAV_G2",
          href: "/#/catgory",
          content: "分类"
        }
      ],
      userMsg: [
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
      keywords: null,
      isSarchbarActive: false
    };
  },
  methods: {
    callAuth(id) {
      this.$emit("call-auth", id);
    },
    search() {
      if (this.keywords != null) {
        this.$router.push("/search/" + this.keywords);
      }
    },
    showSearchbar() {
      this.isSarchbarActive = true;
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
  z-index: 1;
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

