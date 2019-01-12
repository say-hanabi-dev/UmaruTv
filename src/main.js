import Vue from 'vue'
import App from './App.vue'
import './fontawesome'
import './css/base.css'
import './css/global.main.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
