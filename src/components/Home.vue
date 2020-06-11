<template>
  <div class="main">
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
export default {
  name: 'Home',
  components: {
    Navbar,
    Introduction,
    Products,
    ContactUs,
    Footer
  }
}
</script>

<style scoped>

</style>
