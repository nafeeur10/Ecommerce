import firebase from 'firebase'
require("firebase/firestore");

const firebaseConfig = {
   
  };

const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { fb, db }