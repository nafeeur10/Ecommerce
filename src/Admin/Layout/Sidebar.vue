<template>
    <div class="category-sidebar" id="CategorySidebarID">

        <div class="sidebar-sticky mr-3">

        <!-- Name of the Website on Sidebar -->
        <p class="text-center pt-3 pb-3 mt-0 mb-0">
            <i class="fas fa-user user-profile"></i>
            <br>
            <b>{{ userDisplayName }}</b>
        </p>


        <!-- Categories Accortion Start Here -->
        <div id="accordion" class="category-accordion">
            
            <!-- First Category -->
            <div id="CategoryOne">
            <h2 class="mb-0">
                <router-link to="/admin" class="d-flex align-items-center btn btn-link p-3 button">
                    <i class="fas fa-home mr-3"></i>
                    <span>Dashboard</span>
                </router-link>
            </h2>
            </div>

            <!-- Second Category -->
            <div id="CategoryTwo">
            <h2 class="mb-0">
                <router-link to="/admin/products" class="d-flex align-items-center btn btn-link p-3 button">
                    <i class="fas fa-tshirt mr-3"></i>
                    <span>Products</span>
                </router-link>
            </h2>
            </div>


            <!-- Third Category -->
            <div id="CategoryThree">
            <h2 class="mb-0">
                <router-link to="/admin/orders" class="d-flex align-items-center btn btn-link p-3 button">
                    <i class="fas fa-shopping-cart mr-3"></i>
                    <span>Orders</span>
                </router-link>
            </h2>
            </div>

            <!-- Third Category -->
            <div id="CategoryFour">
                <h2 class="mb-0">
                    <router-link to="/admin/profile" class="d-flex align-items-center btn btn-link p-3 button">
                        <i class="fas fa-user mr-3"></i>
                        <span>Profile</span>
                    </router-link>
                </h2>
            </div>
            
        </div>
        <!-- Categories Accortion End Here -->
        
        </div>
    </div>
</template>
<script>
import { fb } from '../../firebase'
export default {
    data() {
        return {
            userDisplayName: null
        }
    },
    created() {
        var user = fb.auth().currentUser;
        this.userDisplayName = user.email
    }
}
</script>
<style scoped>
.user-profile {
    padding: 15px;
    border: 1px solid;
    border-radius: 50%;
    margin-bottom: 10px;
}
</style>