<template>
    <div class="products">
        <div class="row">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import { db } from '../../firebase'
export default {
    firestore () {
        return {
            // Collection
            products: db.collection('products')
        }
    },
    
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

        watcher() {
            db.collection("products").onSnapshot((querySnapshot) => {
                this.products = [];
                querySnapshot.forEach( (doc) => {
                    this.products.push(doc);
                });
            });
        },
        UpdateData() {
            db.collection("products").doc(this.activeItem).update(this.formData)
            .then(() => {
                this.watcher();
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