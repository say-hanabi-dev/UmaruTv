import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Video from './views/Video.vue'
import Catgory from './views/Catgory.vue'
import Search from "./views/Search";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/video/:id/ep/:episode',
      name: 'video',
      component: Video
    },
    {
      path: '/catgory/',
      name:'category',
      component: Catgory
    },
    {
      path: '/search/:name',
      name:'search',
      component: Search
    },
    {
      path: '/search',
      name:'search',
      component: Search
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
