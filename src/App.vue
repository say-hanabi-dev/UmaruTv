<template>
  <div id="app">
    <umaru-nav class="nav-global"></umaru-nav>
    <div class="main">
      <router-view></router-view>
    </div>
    <umaru-footer></umaru-footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import routerCon from './router.js'
import store from './store.js'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Video from './views/Video.vue'

export default {
  name: 'app',
  router: routerCon,
  store,
  computed: mapState({
    testContent: 'testContent',
  }),
  components: {
    'umaru-nav': Nav,
    'umaru-footer': Footer,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.nav-global {
    box-shadow: 0 0 8px 0 gray;
}
</style>
