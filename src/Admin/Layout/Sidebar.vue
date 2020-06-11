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
                <button class="d-flex align-items-center justify-content-between btn btn-link collapsed p-3 button" data-toggle="collapse" data-target="#CategoryCollapseOne" aria-expanded="false" aria-controls="CategoryCollapseOne">
                <i class="fas fa-home mr-2"></i>
                <span>Dashboard</span>
                <span class="ml-auto">
                    <i class="fas fa-plus fa-inverse text-primary"></i>
                </span>
                </button>
            </h2>
            </div>

            <!-- First Category Submenu -->
            <div id="CategoryCollapseOne" class="collapse" aria-labelledby="CategoryOne" data-parent="#accordion">
            <div class="card-body py-3 list-style">
                <ul>
                <li><a href="javascript:void(0)">Bag</a></li>
                <li><a href="javascript:void(0)">School Bag</a></li>
                <li><a href="javascript:void(0)">Men's Shoes</a></li>
                <li><a href="javascript:void(0)">Men's Luggage</a></li>
                </ul>
            </div>
            </div>

            <!-- Second Category -->
            <div id="CategoryTwo">
            <h2 class="mb-0">
                <button class="d-flex align-items-center justify-content-between btn btn-link collapsed p-3 button" data-toggle="collapse" data-target="#CategoryCollapseTwo" aria-expanded="false" aria-controls="CategoryCollapseTwo">
                <i class="fas fa-tshirt mr-2"></i>
                <span>Products</span>
                <span class="ml-auto">
                    <i class="fas fa-plus fa-inverse text-primary"></i>
                </span>
                </button>
            </h2>
            </div>

            <!-- Second Category Submenu -->
            <div id="CategoryCollapseTwo" class="collapse" aria-labelledby="CategoryTwo" data-parent="#accordion">
            <div class="card-body py-3 list-style">
                <ul>
                <li><a href="javascript:void(0)">Chair</a></li>
                <li><a href="javascript:void(0)">Table</a></li>
                <li><a href="javascript:void(0)">File Holder</a></li>
                <li><a href="javascript:void(0)">Meeting Table</a></li>
                </ul>
            </div>
            </div>


            <!-- Third Category -->
            <div id="CategoryThree">
            <h2 class="mb-0">
                <a class="d-flex align-items-center justify-content-between btn btn-link collapsed p-3 button" href="javascript:void(0)">
                <i class="fas fa-feather-alt mr-2"></i>
                <span>Others</span>
                <span class="ml-auto"></span>
                </a>
            </h2>
            </div>
            
        </div>
        <!-- Categories Accortion End Here -->
        
        </div>
    </div>
</template>