<template>
    <div>
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light w-100 fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#">Aspile Shop</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link" href="#">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about" class="nav-link" href="#">About</router-link>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>

                    <button class="btn btn-outline-primary my-2 my-sm-0 ml-2" data-toggle="modal" data-target="#loginModal">Login</button>
                    <i class="fas fa-shopping-cart ml-5 text-danger fa-2x cursor-pointer" @click="openMenu"><sup class="p-1 ml-1 rounded bg-danger text-white h6">{{ this.$store.state.cart.length }}</sup></i>
                </div>
            </div>
        </nav>
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
                        <span class="text-left float-left">{{ item.productPrice }}</span>
                        </div>
                        <div>
                        <span>Quantity: {{ item.productQuantity }}</span>
                        </div>
                        <div>
                        <i class="fas fa-trash" @click="$store.commit('removeItem')"></i>
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
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            
        }
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