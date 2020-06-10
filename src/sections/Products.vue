<template>
    <div class="container">
        <div class="row my-5">
            <h1 class="text-center text-primary d-block w-100 border border-right-0 border-left-0 border-primary py-3 mb-5">Our Products</h1>
            

            <div class="col-md-4" v-for="product in products" :key="product.id">
                <div class="card">
                    <img :src="product.img" class="img-fluid mx-auto" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.name }}</h5>
                        <a href="#" class="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            </div> 



        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            products: [
                { id: 1, name: 'Digital Watch', img: 'images/products/watch.jpg', des: 'Some quick example text to build on the card title and make up the bulk of the cards content.'},
                { id: 2, name: 'Digital Watch', img: 'images/products/watch.jpg', des: 'Some quick example text to build on the card title and make up the bulk of the cards content.'},
                { id: 3, name: 'Digital Watch', img: 'images/products/watch.jpg', des: 'Some quick example text to build on the card title and make up the bulk of the cards content.'},
            ]
        }
    }
}
</script>
<style scoped>

</style>