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
                        <input type="text" class="form-control" v-on:keyup.enter="onEnterTag" v-model="tag" placeholder="Enter Product Tags">
                    </div>

                    <div class="form-group">
                        <label for="product_image"  class="text-left w-100">Product Image</label>
                        <input type="file" class="form-control" placeholder="Enter Product Image Here">
                    </div>

                </div>

                <div class="col-md-6">
                    <div class="form-group">
                        <label for="product_description" class="text-left w-100">Product Description</label>
                        <vue-editor v-model="formData.product_description"></vue-editor>
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
import Swal from 'sweetalert2'
import { VueEditor } from "vue2-editor";
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
                product_tag: []
            },
            tag: null
        }
    },

    components: {
        VueEditor
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
                Swal.fire(
                    'Good job!',
                    'Product Added Successfully!',
                    'success'
                )
                this.$router.push('/admin/products');
                console.log(data);
            })
            .catch((err) => {
                console.log("Something is wrong");
                console.log(err);
            })
        },

        onEnterTag() {
            this.formData.product_tag.push(this.tag);
            this.tag = null
            console.log(this.formData.product_tag)
        }
    },

    created() {
        if(this.$route.params.product) {
            this.formData = this.$route.params.product;
        }
        console.log(this.formData)
    }
}
</script>
