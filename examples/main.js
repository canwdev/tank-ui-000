import Vue from 'vue'
import App from './App.vue'

import TankUI from '../packages/index'
Vue.use(TankUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
