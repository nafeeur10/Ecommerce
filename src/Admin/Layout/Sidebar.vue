<template>
    <div class="category-sidebar" id="CategorySidebarID">

        <div class="sidebar-sticky mr-3">

        <!-- Name of the Website on Sidebar -->
        <p class="text-center pt-3 pb-3 mt-0 mb-0">
            <b>Admin Panel</b>
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
            
        </div>
        <!-- Categories Accortion End Here -->
        
        </div>
    </div>
</template>