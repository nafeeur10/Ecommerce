import Vue from 'vue'
import App from './App.vue'
import VueFirestore from 'vue-firestore'

import jQuery from 'jquery'
import 'bootstrap'
import 'popper.js'

window.$ = window.jQuery = jQuery

import './assets/app.scss'
import router from './router'

Vue.use(VueFirestore)
Vue.config.productionTip = false


export const eventBus = new Vue();

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
