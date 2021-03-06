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


import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters)

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

import store from './store'


Vue.component('add-to-cart', require('../src/sections/AddToCart.vue').default)

import { fb } from './firebase'
let app = '';
fb.auth().onAuthStateChanged(function(user) {
  console.log(user);
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app')
  }
});
