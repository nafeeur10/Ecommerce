<template>
<div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">

    <div class="modal-content">
      <div class="modal-header">
        <ul class="nav nav-pills" id="pills-tab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Sign Up</a>
            </li>
          </ul>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div class="d-flex flex-column text-center">
                    <form>
                        <div class="form-group">
                            <input type="email" class="form-control" id="email1" placeholder="Your email address...">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="password1" placeholder="Your password...">
                        </div>
                        <button type="button" class="btn btn-info btn-block btn-round">Login</button>
                    </form>
                </div>
            </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div class="d-flex flex-column text-center">
                    <form>
                        <div class="form-group">
                            <input type="text" v-model="name" class="form-control" id="name" placeholder="Your Name here...">
                        </div>
                        <div class="form-group">
                            <input type="email" v-model="email" class="form-control" id="email1" placeholder="Your email address...">
                        </div>
                        <div class="form-group">
                            <input type="password" v-model="password" class="form-control" id="password1" placeholder="Your password...">
                        </div>
                        <button type="button" class="btn btn-info btn-block btn-round" @click="register">Register</button>
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
import { fb } from '../firebase'
import $ from 'jquery'
export default {
    data() {
        return {
            name: null,
            email: null,
            password: null
        }
    },
    methods: {
        register() {
            fb.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(()=>{
                $('#loginModal').modal('hide');
                this.$router.replace('admin');
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // 
                alert("Error Code: " + errorCode + " Error Message: " + errorMessage);
            });
        }
    }
}
</script>