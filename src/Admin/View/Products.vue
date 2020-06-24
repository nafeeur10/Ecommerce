<template>
    <div class="products">
        <div class="container mt-5">


            <div class="row">
                <div class="col-md-6">
                    <form class="card" v-if="editForm===false">

                        <div class="card-header bg-info text-white">
                            Add New Product
                        </div>

                        <div class="card-body">
                            <div class="form-group">
                                <label for="product_name" class="text-left w-100">Product Name</label>
                                <input type="text" class="form-control" id="product_name" v-model="formData.product_name" placeholder="Enter Product Name">
                            </div>

                            <div class="form-group">
                                <label for="product_price"  class="text-left w-100">Product Price</label>
                                <input type="text" class="form-control" id="product_price" v-model="formData.product_price" placeholder="Enter Product Price">
                            </div>
                        
                            <button type="button" class="btn btn-primary" @click="StoreData">Add Product</button>
                        </div>
                        
                    </form>

                    <form class="card" v-else>

                        <div class="card-header bg-info text-white">
                            Edit Product
                        </div>

                        <div class="card-body">
                            <div class="form-group">
                                <label for="product_name" class="text-left w-100">Product Name</label>
                                <input type="text" class="form-control" v-model="formData.product_name" placeholder="Enter Product Name">
                            </div>

                            <div class="form-group">
                                <label for="product_price"  class="text-left w-100">Product Price</label>
                                <input type="text" class="form-control" v-model="formData.product_price" placeholder="Enter Product Price">
                            </div>
                        
                            <button type="button" class="btn btn-primary" @click="UpdateData">Edit Product</button>
                        </div>
                        
                    </form>
                </div>
                <div class="col-md-6">
                    <table class="table">
                        <thead class="bg-warning">
                            <tr>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product Price</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(product, key, index) in products" :key="index">
                                <!-- <th scope="row">{{ key+1 }}</th> -->
                                <td>{{ product.data().product_name }}</td>
                                <td>${{ product.data().product_price }}</td>
                                <td>
                                    <button class="btn btn-success btn-sm" @click="UpdateProduct(product)">Edit</button>
                                    <button class="btn btn-danger btn-sm" @click="DeleteProduct(product.id)">Delete</button>
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
import { db } from '../../firebase'
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
    methods: {
        UpdateData() {
            db.collection("products").doc(this.activeItem).update(this.formData)
            .then(function() {
                console.log("Document successfully updated!");
            })
            .catch(function(error) {
                console.error("Error updating document: ", error);
            });
        },
        StoreData() {
            db.collection("products").add(this.formData)
            .then( (docRef) => {
                this.products.push(this.formData);
                this.formData = {};
                // this.ReadData();
                console.log(docRef);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
        },
        ReadData() {
            db.collection("products").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.products.push(doc);
                });
            });
        },
        DeleteProduct(el) {
            if(confirm('Are you sure ?'))
            {
                db.collection("products").doc(el).delete().then(function() {
                    console.log("Document successfully deleted!");
                }).catch(function(error) {
                    console.error("Error removing document: ", error);
                });
            }
            else 
            {
                console.log("No need to delete.");
            }
            
        },
        UpdateProduct(product)
        {
            this.editForm = true
            this.formData.product_name = product.data().product_name
            this.formData.product_price = product.data().product_price
            this.activeItem = product.id
        }

    },
    created() {
        this.ReadData();
    }
}
</script>