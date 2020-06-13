import Vue from 'vue'
import App from './App.vue'

import jQuery from 'jquery'
import 'bootstrap'
import 'popper.js'

window.$ = window.jQuery = jQuery

import './assets/app.scss'
import router from './router'

Vue.config.productionTip = false

import { fb } from './firebase'
let app = '';
fb.auth().onAuthStateChanged(function(user) {
  console.log(user);
  if (!app) {
    new Vue({
      router,
      render: h => h(App),
    }).$mount('#app')
  }
});
