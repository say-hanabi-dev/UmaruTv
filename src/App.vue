<template>
  <div id="app">
    <umaru-nav></umaru-nav>
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
</style>
