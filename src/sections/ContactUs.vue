<template>
    <div class="container">
        <div class="row my-5">

            <div class="col-md-6">
                <img :src="image" alt="Intoduction Image" class="img-fluid">
            </div>

            <div class="col-md-6 mt-5">
                <div class="container d-flex h-100">
                    <div class="row justify-content-center align-self-center">
                        <h1 class="text-left text-primary d-block w-100 border border-right-0 border-left-0 border-primary py-3">ABOUT ASPILE SHOP</h1>
                        <p class="text-left my-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Asperiores, assumenda. Officia.
                        </p>
                        <div class="row d-block w-100">
                            <button class="btn btn-outline-success float-left mr-3 btn-lg">Read More</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            image: 'images/svg/introduction.jpg'
        }
    }
}
</script>