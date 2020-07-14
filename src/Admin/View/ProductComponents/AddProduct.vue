<template>
  <div class="container mt-5">
    <form class="card">
        <div class="card-header bg-info text-white" v-if="formData.product_name">
            Edit Product
        </div>
        <div class="card-header bg-info text-white" v-else>
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
                        <div class="d-flex">
                            <span class="badge badge-secondary p-1 mt-2 mr-1" v-for="(tag, index) in formData.product_tag" :key="index">
                                {{ tag }}
                            </span>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="product_image"  class="text-left w-100">Product Image</label>
                        <input type="file" class="form-control" @change="uploadImage" placeholder="Enter Product Image Here">
                        <div class="d-flex mt-3">
                            <div v-for="(product, index) in formData.product_images" :key="index">
                                <img :src="product" alt="" width="100px" class="p-1 img-position">
                                <span>
                                    <sup>
                                        <img @click="deleteImage(product, index)" class="img-cross" src="https://img.icons8.com/flat_round/20/000000/delete-sign.png"/>
                                    </sup>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="col-md-6">
                    <div class="form-group">
                        <label for="product_description" class="text-left w-100">Product Description</label>
                        <vue-editor v-model="formData.product_description"></vue-editor>
                    </div>
                </div>
            </div>
        
            <button type="button" class="btn btn-primary" @click="StoreData" v-if="formData.product_name">Update Product</button>
            <button type="button" class="btn btn-primary" @click="StoreData" v-else>Add Product</button>
        </div>
        
    </form>
  </div>
</template>
<script>
import { fb, db } from '../../../firebase'
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
                product_images: [],
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
        },

        uploadImage(e) {

            if(e.target.files[0]) {

                let file = e.target.files[0];
                var storageRef = fb.storage().ref('products/' + file);

                let uploadTask = storageRef.put(file);

                uploadTask.on('state_changed', (snapshot) => {
                    console.log(snapshot);
                    }, (error) => {
                        console.log(error);
                    }, () => {
                    
                    uploadTask.snapshot.ref.getDownloadURL().then( (downloadURL) => {
                        this.formData.product_images.push(downloadURL);
                    });
                });
            }
            
        },

        deleteImage(product, index) {

            let image = fb.storage().refFromURL(product);

            this.formData.product_images.splice(index, 1);

            image.delete().then(()=> {
                Swal.fire(
                    'Good job!',
                    'Product Deleted Successfully!',
                    'success'
                )
            }).catch((error)=> {
                Swal.fire(
                    'Ops!',
                    'Something Missing!',
                    'warning'
                )
                console.log(error);
            })
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
<style scoped>
.img-position {
    position: relative;
    border: 1px solid #000;
    margin-right: 10px;
    box-shadow: 0 1px 6px rgba(57,73,76,.35);
}

.img-cross {
    position: absolute;
    top: -30px;
    right: -5px;
}
</style>
