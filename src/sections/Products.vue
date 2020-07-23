<template>
    <div class="container">
        <div class="row my-5">
            <h1 class="text-center text-primary d-block w-100 border border-right-0 border-left-0 border-primary py-3 mb-5">Our Products</h1>
            
            <carousel 
                :perPageCustom="[[768, 3], [1200, 4]]" 
                :autoplay="true"
                >
                <slide v-for="product in products" :key="product.id"  class="card">
                    <img :src="product.img" class="img-fluid mx-auto" alt="...">
                    <div class="card-body p-0">
                        <div class="d-flex justify-content-between p-3">
                            <h5 class="card-title">{{ product.name }}</h5>
                            <h5 class="card-price">{{ product.price | currency('৳') }}</h5>
                        </div>
                        <add-to-cart
                            :product-image="product.img"
                            :price="product.price"
                            :name="product.name"
                            :id="product.id"
                        ></add-to-cart>
                    </div>
                </slide>
            </carousel> 

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            products: [
                { id: 1, name: 'Digital Watch', img: 'images/products/watch.jpg', des: 'Some quick example text to build on the card title and make up the bulk of the cards content.', price: 522},
                { id: 2, name: 'Digital Watch', img: 'images/products/watch.jpg', des: 'Some quick example text to build on the card title and make up the bulk of the cards content.', price: 250},
                { id: 3, name: 'Digital Watch', img: 'images/products/watch.jpg', des: 'Some quick example text to build on the card title and make up the bulk of the cards content.', price: 541},
                { id: 4, name: 'Digital Watch', img: 'images/products/watch.jpg', des: 'Some quick example text to build on the card title and make up the bulk of the cards content.', price: 354},
            ]
        }
    }
}
</script>
<style scoped>
.card {
    border: 1px solid #eee;
}
</style>
<style>
@media screen and (min-width: 1200px) {
    .VueCarousel-inner {
        flex-basis: 277.5px!important;
    }
}
</style>