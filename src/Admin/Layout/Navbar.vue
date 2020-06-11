<template>
    <nav class="navbar"> 
        <div class="container-fluid">
        <div class="navbar-holder d-flex align-items-center justify-content-between">
            <!-- Navbar Header-->
            <div class="navbar-header">
            <!-- Navbar Brand -->
            <a href="index.html" class="navbar-brand d-none d-sm-inline-block"> 
                S H O P I L E
            </a>
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
            <li class="nav-item"><a href="login.html" class="nav-link logout"> 
                <span class="d-none d-sm-inline">Logout</span><i class="fas fa-sign-out-alt"></i></a></li>
            </ul>
        </div>
        </div>
    </nav>
</template>