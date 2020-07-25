import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let cart = window.localStorage.getItem('cart');

export default new Vuex.Store({
    state: {
        cart: cart ? JSON.parse(cart): [],
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

            this.commit('savetoLocalStorage');
        },
        sidebartoggle(state, item) {
            state.sidebartoggle = item
        },

        savetoLocalStorage(state) {
            window.localStorage.setItem('cart', JSON.stringify(state.cart));
        },

        removeItem(state, item) {
            let index = state.cart.indexOf(item);
            state.cart.splice(index, 1);
            this.commit('savetoLocalStorage');
        }
    }
})