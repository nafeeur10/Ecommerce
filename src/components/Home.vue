<template>
  <div class="mai">
    <div class="container">
      <Introduction />
      <Products />
      <Contact-Us />
    </div>
    <Footer />
  </div>
</template>

<script>
import Introduction from '../sections/Introduction'
import Products from '../sections/Products'
import ContactUs from '../sections/ContactUs'
import Footer from '../sections/Footer'
export default {
  name: 'Home',
  components: {
    Introduction,
    Products,
    ContactUs,
    Footer
  }
}
</script>

<style scoped>

</style>
