<template>
    <div class="products w-100">
        <div class="container mt-5 w-100">
            <div class="row">
                <div class="col-md-12">
                    <table class="table">
                        <thead class="bg-warning">
                            <tr>
                                <th scope="col">Serial</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product Price</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(product, key, index) in products" :key="index">
                                <th scope="row">{{ key+1 }}</th>
                                <td>{{ product.product_name }}</td>
                                <td>${{ product.product_price }}</td>
                                <td>
                                    <button class="btn btn-success btn-sm" @click="UpdateProduct(product)">Edit</button>
                                    <button class="btn btn-danger btn-sm" @click="DeleteProduct(product)">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import { db } from '../../../firebase'
import Swal from 'sweetalert2'
export default {
    data() {
        return {
            activeItem: null,
            editForm: false,
            products: [],
            formData: {
                product_name: null,
                product_price: null
            }
        }
    },

    firestore () {
        return {
            // Collection
            products: db.collection('products')
        }
    },

    methods: {
        DeleteProduct(product) {

            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.value) {
                    this.$firestore.products.doc(product['.key']).delete();
                    Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                }
            })

        },

        UpdateProduct(product) {
            console.log(product);
            this.$router.push(
            {
                name: 'AddProduct',
                params: { product: product }
            });
        }
    }
}
</script>