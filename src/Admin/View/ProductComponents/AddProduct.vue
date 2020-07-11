<template>
  <div class="container mt-5">
    <form class="card">
        <div class="card-header bg-info text-white">
            Add Product
        </div>

        <div class="card-body">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="product_name" class="text-left w-100">Product Name</label>
                        <input type="text" class="form-control" v-model="formData.product_name" placeholder="Enter Product Name">
                    </div>

                    <div class="form-group">
                        <label for="product_price"  class="text-left w-100">Product Price</label>
                        <input type="text" class="form-control" v-model="formData.product_price" placeholder="Enter Product Price">
                    </div>

                    <div class="form-group">
                        <label for="product_tag"  class="text-left w-100">Product Tags</label>
                        <input type="text" class="form-control" v-model="formData.product_tag" placeholder="Enter Product Tags">
                    </div>

                    <div class="form-group">
                        <label for="product_image"  class="text-left w-100">Product Image</label>
                        <input type="file" class="form-control" placeholder="Enter Product Image Here">
                    </div>

                </div>

                <div class="col-md-6">
                    <div class="form-group">
                        <label for="product_description" class="text-left w-100">Product Description</label>
                        <textarea class="form-control" v-model="formData.product_description" placeholder="Enter Product Description" cols="30" rows="10"></textarea>
                    </div>
                </div>
            </div>
        
            <button type="button" class="btn btn-primary" @click="StoreData">Add Product</button>
        </div>
        
    </form>
  </div>
</template>
<script>
import { db } from '../../../firebase'
export default {
    data() {
        return {
            activeItem: null,
            editForm: false,
            products: [],
            editProduct: {},
            formData: {
                product_name: null,
                product_description: null,
                product_price: null,
                product_image: null,
                product_tag: null
            }
        }
    },

    firestore () {
        return {
            products: db.collection('products')
        }
    },

    methods: {

        StoreData() {
            this.$firestore.products.add(this.formData)
            .then((data) => {
                this.$router.push('/admin/products');
                console.log(data);
            })
            .catch((err) => {
                console.log("Something is wrong");
                console.log(err);
            })
        }

    },

    created() {
        this.formData = this.$route.params.product;
        console.log(this.formData)
    }
}
</script>
