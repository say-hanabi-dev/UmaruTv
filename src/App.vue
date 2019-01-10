<template>
  <div id="app">
    <div class="nav">导航栏</div>
    <div class="main">
      主体
      <router-view></router-view>
    </div>
    <div class="footer">页脚</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import routerCon from './router.js'
import store from './store.js'
import Nav from './components/Nav'
import Footer from './components/Footer'

export default {
  name: 'app',
  router: routerCon,
  store,
  computed: mapState({
    testContent: 'testContent',
  })
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
