<template>
    <div class="products w-100 mt-5">
        <div class="container mt-5 w-100">
            <div class="row w-100">
                <h3 class="text-center w-100 border-bottom pb-3">User Profile</h3>

                <div class="row w-100 p-5">
                    <!-- Nav pills -->
                    <ul class="nav nav-pills w-100">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="pill" href="#home">General Information</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="pill" href="#menu1">Shipping Address</a>
                        </li>
                        <li class="nav-item float-right ml-auto">
                            <button class="nav-link btn btn-success" @click="resetPassword">Reset Password</button>
                        </li>
                    </ul>

                    <!-- Tab panes -->
                    <div class="row w-100 py-5">
                        <div class="tab-content w-100">
                            <div class="tab-pane container active" id="home">
                                <div class="border p-5">
                                    <div class="form-row">
                                        <div class="col">
                                            <label for="fullname" class="text-left float-left">Full Name</label>
                                            <input type="text" class="form-control" id="fullname" placeholder="Enter Full Name" name="name" v-model="profile.name">
                                        </div>
                                        <div class="col">
                                            <label for="postcode" class="text-left float-left">Post Code</label>
                                            <input type="text" class="form-control" placeholder="Enter Post Code" name="postcode" v-model="profile.postcode">
                                        </div>
                                    </div>
                                    <div class="form-row mt-3">
                                        <div class="col">
                                            <label for="mobile" class="text-left float-left">Mobile</label>
                                            <input type="text" class="form-control" id="mobile" placeholder="Enter Phone Number" name="mobile" v-model="profile.mobile">
                                        </div>
                                        <div class="col">
                                            <label for="submit" class="text-white">.</label>
                                            <button @click="updateProfile" class="btn btn-primary w-100">Save Changes</button>
                                        </div>
                                    </div>
                                </div>
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
                                        <div class="col">
                                            <label for="submit" class="text-white">.</label>
                                            <input type="submit" class="form-control btn btn-primary" name="submit" value="Submit">
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
import { db, fb } from '../../../firebase'
import Swal from 'sweetalert2'
export default {
    data() {
        return {
            activeItem: null,
            activeKey: null,
            editForm: false,
            products: [],
            profile: {
                name: null,
                mobile: null,
                postcode: null
            }
        }
    },
    firestore () {
        const user = fb.auth().currentUser
        //console.log("User: " , user.uid);
        return {
            profile: db.collection('profiles').doc(user.uid)
        }
    },
    methods: {
        updateProfile() {
            const user = fb.auth().currentUser
            console.log("UserID: " + user);
            db.collection("profiles").doc(user.uid).update({
                name: this.profile.name,
                mobile: this.profile.mobile,
                postcode: this.profile.postcode
            }).then(() => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    onOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: 'Profile Changed in successfully'
                })
            });
        },
        resetPassword() {
            var auth = fb.auth();
            var emailAddress = fb.auth().currentUser.email;

            auth.sendPasswordResetEmail(emailAddress).then(function() {
                console.log('Email Sent');

                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    onOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: 'A link has sent to your Email. Please check!'
                })
            }).catch(function(error) {
                console.log(error);
              // An error happened.
            });
        }
    }
}
</script>