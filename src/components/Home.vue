<template>
  <div class="main">
    <Login />
    <Navbar />
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

export default {
  name: 'Home',
  components: {
    Navbar,
    Introduction,
    Products,
    ContactUs,
    Footer,
    Login
  }
}
</script>

<style scoped>

</style>
