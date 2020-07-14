<template>
    <div class="products w-100">
        <div class="container mt-5 w-100">
            <div class="row w-100">
                <h3 class="text-center w-100 border-bottom pb-3">User Profile</h3>

                <div class="row w-100 p-5">
                    <!-- Nav pills -->
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="pill" href="#home">General Information</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="pill" href="#menu1">Shipping Address</a>
                        </li>
                    </ul>

                    <!-- Tab panes -->
                    <div class="row w-100 py-5">
                        <div class="tab-content w-100">
                            <div class="tab-pane container active" id="home">
                                <form class="border p-5">
                                    <div class="form-row">
                                        <div class="col">
                                            <label for="email" class="text-left float-left">Email</label>
                                            <input type="text" class="form-control" id="email" placeholder="Enter Email" name="email">
                                        </div>
                                        <div class="col">
                                            <label for="password" class="text-left float-left">Password</label>
                                            <input type="password" class="form-control" placeholder="Enter Password" name="pswd">
                                        </div>
                                    </div>
                                    <div class="form-row mt-3">
                                        <div class="col">
                                            <label for="mobile" class="text-left float-left">Mobile</label>
                                            <input type="text" class="form-control" id="mobile" placeholder="Enter Phone Number" name="mobile">
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="tab-pane container fade" id="menu1">
                                <form class="border p-5">
                                    <div class="form-row">
                                        <div class="col">
                                            <label for="area" class="text-left float-left">Area</label>
                                            <input type="text" class="form-control" id="area" placeholder="Enter Area (Thana/Upozila)" name="area">
                                        </div>
                                        <div class="col">
                                            <label for="district" class="text-left float-left">District</label>
                                            <input type="text" class="form-control" id="district" placeholder="Enter district" name="district">
                                        </div>
                                    </div>
                                    <div class="form-row mt-3">
                                        <div class="col">
                                            <label for="address" class="text-left float-left">Full Address</label>
                                            <textarea rows="5" class="form-control" id="address" name="address"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
// import { db } from '../../../firebase'
// import Swal from 'sweetalert2'
export default {
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
    }
}
</script>