<template>
  <div class="main">
    <Login />
    <Navbar />
    <div id="wrapper" class="toggled" v-if="sidebartoggle">
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand"> 
                  <span class="float-left text-left text-white" @click="openMenu">Shopping Cart</span> 
                  <span class="float-right mr-3 text-white cursor-pointer" @click="closeMenu">X</span>
                </li>
                <li v-for="(item, index) in this.$store.state.cart" :key="index" class="text-left">
                  <div class="d-flex justify-content-between p-2">
                    <img :src="item.product_image" class="img-fluid img-width">
                    <div>
                      <span class="text-left float-left">{{ item.productName }}</span>
                      <br>
                      <span>{{ item.productPrice }}</span>
                    </div>
                    <div>
                      <span>Quantity: {{ item.productQuantity }}</span>
                    </div>
                  </div>
                </li>
            </ul>
            <div class="d-flex justify-content-between footer-button">
              <button class="btn btn-primary border-0">View Cart</button>
              <button class="btn btn-success border-0">Checkout</button>
            </div>
        </div> 
    </div> 
   <div class="container">
      <Introduction />
      <Products />
      <Contact-Us />
    </div>
    <Footer />
  </div>
</template>

<script>

import Navbar from '../sections/Navbar'
import Introduction from '../sections/Introduction'
import Products from '../sections/Products'
import ContactUs from '../sections/ContactUs'
import Footer from '../sections/Footer'
import Login from './Login'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Navbar,
    Introduction,
    Products,
    ContactUs,
    Footer,
    Login
  },
  computed: mapState([
    'sidebartoggle'
  ]),
  methods: {
    openMenu() {
      this.$store.commit('sidebartoggle', true)
    },
    closeMenu() {
      this.$store.commit('sidebartoggle', false)
    }
  }
}
</script>

<style scoped>
#wrapper {
  padding-left: 0;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled {
  padding-right: 400px;
}

#sidebar-wrapper {
  z-index: 1000;
  position: fixed;
  right: 400px;
  width: 0;
  top: 0;
  height: 100%;
  margin-right: -400px;
  background: white;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled #sidebar-wrapper {
  width: 400px;
}

#page-content-wrapper {
  width: 100%;
  position: absolute;
  padding: 15px;
}

#wrapper.toggled #page-content-wrapper {
  position: absolute;
  margin-right: 0px;
}

.sidebar-brand {
  background-color: #59B210;
}


/* Sidebar Styles */

.sidebar-nav {
  position: absolute;
  top: 0;
  width: 400px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.sidebar-nav li {
  text-indent: 20px;
  line-height: 40px;
}

.sidebar-nav li a {
  display: block;
  text-decoration: none;
  color: #999999;
}

.sidebar-nav li a:hover {
  text-decoration: none;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
}

.sidebar-nav li a:active, .sidebar-nav li a:focus {
  text-decoration: none;
}

.sidebar-nav>.sidebar-brand {
  height: 65px;
  font-size: 18px;
  line-height: 60px;
}

.sidebar-nav>.sidebar-brand a {
  color: #fff;
  text-align: left;
}

.sidebar-nav>.sidebar-brand a:hover {
  color: #fff;
  background: none;
}

@media(min-width:768px) {
  #wrapper {
    padding-left: 0;
  }
  #wrapper.toggled {
    padding-right: 400px;
  }
  #sidebar-wrapper {
    width: 0;
  }
  #wrapper.toggled #sidebar-wrapper {
    width: 400px;
  }
  #page-content-wrapper {
    padding: 20px;
    position: relative;
  }
  #wrapper.toggled #page-content-wrapper {
    position: relative;
    margin-right: 0;
  }
}
.footer-button {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  right: 0;
  left: 0;
  line-height: 60px;
  background-color: #f5f5f5;
}

.footer-button > button {
  width: 100%;
  border-radius: 0;
}

.img-width {
  width: 80px;
}
</style>
