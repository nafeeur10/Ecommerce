import Vue from 'vue'
import App from './App.vue'

import jQuery from 'jquery'
import 'bootstrap'
import 'popper.js'

window.$ = window.jQuery = jQuery

import './assets/app.scss'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
