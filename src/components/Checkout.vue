<template>
  <div>
    <Navbar />
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-4 order-md-2 mb-4 px-2">
                <ul class="list-group mb-3">
                    <li class="list-group-item d-flex justify-content-between bg-success text-white">
                        <span><strong>Order Summary</strong></span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                        <h6 class="my-0">Sub Total</h6>
                        </div>
                        <span class="text-muted">$12</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                        <h6 class="my-0">Delivery Charge</h6>
                        </div>
                        <span class="text-muted">$8</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                        <h6 class="my-0">Total Amount</h6>
                        </div>
                        <span class="text-muted">$20</span>
                    </li>
                    
                    <li class="list-group-item d-flex justify-content-between bg-success text-white">
                        <span><strong>Due (Tk)</strong></span>
                        <strong>$20</strong>
                    </li>
                </ul>

            </div>

            <div class="col-md-8 order-md-1">

                <div class="card p-4">
                    <h1 class="text-left">Order Details</h1>

                    <ul class="list-group">
                        <li v-for="(item, index) in this.$store.state.cart" :key="index" class="text-left list-group-item">
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
                                <div>
                                    <i class="fas fa-trash" @click="$store.commit('removeItem')"></i>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>


            <!-- <div class="col-md-8 order-md-1">

                <div class="card p-4">
                <h1 class="mb-3 text-center"><b class="text-success">S</b>hipping <b class="text-warning">A</b>ddress</h1>
                <hr class="mb-3">
                <form class="needs-validation" novalidate>


                    <div class="row mt-4 mb-4">

                        <div class="wrap col-6">
                            <div>
                            <label for="fname" class="text-left w-100">First Name</label>
                            <input id="fname" type="text" class="form-control"/>
                            </div>
                        </div>

                        <div class="wrap col-6">
                            <div>
                            <label for="lname" class="text-left w-100">Last name</label>
                            <input id="lname" type="text" class="form-control"/>
                            </div>
                        </div>

                    </div>


                    <div class="row mt-3 mb-4">

                        <div class="wrap col-6">
                            <div>
                            <label for="phone" class="text-left w-100">Phone</label>
                            <input id="phone" type="text" class="form-control"/>
                            </div>
                        </div>

                        <div class="wrap col-6">
                            <div>
                            <label for="email" class="text-left w-100">Email (Optinal)</label>
                            <input id="email" type="email" class="form-control"/>
                            </div>
                        </div>

                    </div>


                    <div class="row mt-3 mb-3">

                        <div class="wrap col-12">
                            <div>
                            <label for="address" class="text-left w-100">Address</label>
                            <textarea type="text" class="form-control" rows="4" cols="50" id="address" required></textarea>
                            </div>
                        </div>

                    </div>


                    <hr class="mb-3">
                
                    <hr class="mb-4">
                    <a href="javascript:void(0)" class="btn btn-success btn-lg btn-block">Continue to checkout</a>
                </form>
                </div>
            </div> -->
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../sections/Navbar'
export default {
  name: 'Checkout',
  components: {
    Navbar
  }
}
</script>

<style scoped>
.img-width {
  width: 80px;
}
</style>
