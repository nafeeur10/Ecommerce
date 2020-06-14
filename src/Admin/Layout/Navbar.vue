<template>
    <nav class="navbar"> 
        <div class="container-fluid">
        <div class="navbar-holder d-flex align-items-center justify-content-between">
            <!-- Navbar Header-->
            <div class="navbar-header">
            <!-- Navbar Brand -->
            <router-link to="/" class="navbar-brand d-none d-sm-inline-block"> 
                <span class="text-danger text-bold"> S </span> 
                <span class="text-success text-bold"> H </span> 
                <span class="text-info text-bold">O</span> 
                <span class="text-danger text-bold"> P </span> 
                <span class="text-dark  text-bold"> I </span>
                <span class="text-danger text-bold"> L </span> 
                <span class="text-dark text-bold"> E </span>
            </router-link>
            <!-- Toggle Button
            <a id="toggle-btn" @click="sidebar" href="javascript:void(0)" class="menu-btn active"><span></span><span></span><span></span></a> -->
            </div>
            <!-- Navbar Menu -->
            <ul class="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
            
            <!-- Notifications -->
            <li class="nav-item dropdown"> 
                <a id="notifications" class="nav-link">
                <i class="fas fa-bell"></i><span class="badge bg-red badge-corner">12</span></a>
            </li>
            <!-- Messages -->
            <li class="nav-item dropdown"> 
                <a id="messages" class="nav-link">
                <i class="fas fa-envelope"></i><span class="badge bg-orange badge-corner">10</span></a>
            </li>
            <!-- Logout -->
            <li class="nav-item">
                <a @click="signout" class="nav-link logout cursor-pointer"> 
                    <span class="d-none d-sm-inline">Logout</span><i class="fas fa-sign-out-alt"></i>
                </a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
</template>
<script>
import { fb } from '../../firebase'
export default {
    methods: {
        signout() {
            fb.auth().signOut().then( () => {
                this.$router.replace('/');
            }).catch( (error) => {
                alert("Error " + error);
            });
        }
    }
}
</script>