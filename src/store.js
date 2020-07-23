import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cart: [],
        sidebartoggle: false
    },
    mutations: {
        addToCart(state, item) {

            let productFound = state.cart.find(product => product.product_id == item.product_id);

            if(productFound) {
                productFound.productQuantity++;
                console.log("Found");
            } else {
                state.cart.push(item)
            }
        },
        sidebartoggle(state, item) {
            state.sidebartoggle = item
        }
    }
})