<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light w-100">
        <div class="container">
            <a class="navbar-brand" href="#">Aspile Shop</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" href="#">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link" href="#">About</router-link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>

                <button class="btn btn-outline-primary my-2 my-sm-0 ml-2" data-toggle="modal" data-target="#loginModal">Login</button>
                <i class="fas fa-shopping-cart ml-5 text-danger fa-2x cursor-pointer" @click="changeSidebar"><sup class="p-1 rounded-circle bg-danger text-white h6">10</sup></i>
            </div>
        </div>
    </nav>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed: mapState([
        'sidebartoggle'
    ]),
    methods: {
        changeSidebar() {
            this.$store.commit('sidebartoggle', true)
        }
    }
}
</script>