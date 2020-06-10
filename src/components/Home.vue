<template>
  <div class="container">
    <Introduction />
    <Products />
  </div>
</template>

<script>
import Introduction from '../sections/Introduction'
import Products from '../sections/Products'
export default {
  name: 'Home',
  components: {
    Introduction,
    Products
  }
}
</script>

<style scoped>

</style>
