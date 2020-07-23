<template>
    <div class="add-to-cart">
        <button class="btn btn-primary w-100" @click="addToCart">Add to Cart</button>
    </div>
</template>
<script>
export default {
    name: 'AddToCart',
    props: {
        name: String,
        price: Number,
        id: Number,
        productImage: String
    },
    data() {
        return {
            item: {
                productName: this.name,
                productPrice: this.price,
                product_id: this.id,
                product_image: this.productImage,
                productQuantity: 1,
            }
        }
    },
    methods: {
        addToCart() {
            this.$store.commit('addToCart', this.item)
        }
    }
}
</script>