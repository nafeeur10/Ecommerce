<template>
    <div>
        <!-- Main Navbar-->
      <header class="header">
        <Navbar />
        <Sidebar />
      </header>
      <div id="page-content" class="category-sidebar-width">
        <div class="container">
            <router-view></router-view>
        </div>
      </div>
    </div>
</template>
<script>
import $ from 'jquery'
import Sidebar from './Layout/Sidebar'
import Navbar from './Layout/Navbar'
export default {
    methods: {
        sidebar() {

            if($("#CategorySidebarID").hasClass('show')) {
                $("#page-content").removeClass("category-sidebar-width");
                $("#CategorySidebarID").removeClass('show');
                $("#CategorySidebarID").addClass('hide');
            }
            else {
                $("#page-content").addClass("category-sidebar-width");
                $("#CategorySidebarID").addClass('show');
                $("#CategorySidebarID").removeClass('hide');
            }
            
        }
    },
    components: {
        Navbar,
        Sidebar
    }
}
</script>