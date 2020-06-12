import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB7NzKg_DGZWagUnYQqkdW8JJfDNNaPEEg",
    authDomain: "vue-shop-c66a5.firebaseapp.com",
    databaseURL: "https://vue-shop-c66a5.firebaseio.com",
    projectId: "vue-shop-c66a5",
    storageBucket: "vue-shop-c66a5.appspot.com",
    messagingSenderId: "338279138071",
    appId: "1:338279138071:web:5c120a0791d5e57d21ad52",
    measurementId: "G-4PXHCVV5HD"
  };

export const fb = firebase.initializeApp(firebaseConfig);